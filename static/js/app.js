const metadata_url = "http://localhost:8000/metadata/940";
d3.json(metadata_url).then(function(data) {
   console.log(data);
})

var sample_metadata = d3.select("#sample-metadata");

d3.select("#sample-metadata").html("");
sample_metadata.html("");

function buildCharts(sample) {

    d3.json(`/samples/${sample}`).then(d => {
        var trace1 = {
            ticks: d.otu_ids,
            bars: d.sample_values,
            text: d.otu_labels,
            type: 'bar'
        };

        data1 = [trace1];

        layout1 = {
            bar: {
                horizontal: true,
            },
            title: 'Horizontal Bar Chart'
        };

        Plotly.newPlot('bar', data1, layout1);

        var trace2 = {
            x: d.out_ids,
            y: d.samples_values,
            marker: {
                size: d.samples_values,
                color: d.samples_values,
                text: d.otu_labels
            },
            type: bubble
        };

        data2 = [trace2];

        layout2 = {
            title: 'Bubble Plot'
        };

        Plotly.newPlot('bubble', data2, layout2)
    });
    
}

function buildMetadata(metadata) {

    d3.json(`/samples/${metadata}`).then( d => {
        var sample_metadata = d3.select("#sample-metadata");
        sample_metadata.html("");

        Object.entries(d).forEach(function ([key, value]) {
            var paragraph = sample_metadata.append("p");
            paragraph.text(`${key}: ${value}`);
        });
    });

}
