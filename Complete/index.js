  g = new Dygraph(

    // containing div
    document.getElementById("graphdiv"),

    // CSV or path to a CSV file.
    "Fort Lauderdale Data Snapshot-Reoriented.csv",
	{
		title: 'Fort Lauderdale Budget Data',
        width: 800,
        height: 480,
        axisLabelWidth: 100,
        labelsDiv: "graphdivlegend",
        //hideOverlayOnMouseOut: false,
        axes: {
            y: {
                axisLabelFormatter: formatLikeCurrency,
                valueFormatter: formatLikeCurrency,
            }
        }
	}
  );

function formatLikeCurrency(x) {
    return numeral(x).format('($ 0.00 a)');
};
