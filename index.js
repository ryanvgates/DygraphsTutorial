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
        maxNumberWidth: 20,
        axis: {
            y: {
                axisLabelFormatter: function(x) {
                    return '' + x;
                },
                axisValueFormatter: function(x) {
                    return '' + x;
                },
            }
        }
        

	}
  );
