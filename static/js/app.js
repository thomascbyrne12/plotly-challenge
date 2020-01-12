d3.json("data/samples.json").then( d => {
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

    Document.write('sample-metadata', d.metadata[0]);
});
