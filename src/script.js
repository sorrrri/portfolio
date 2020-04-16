google.charts.load("current", {packages: ['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
    var data1 = google.visualization.arrayToDataTable([
        ["Time", "COx"],
        ["40", 0.27],
        ["50", 0.197],
        ["60", 0.243],
        ["70", 0.2],
        ["80", 0.27],
        ["90", 0.197],
        ["100", 0.243],
        ["110", 0.2],
        ["120", 0.175],
    ]);

    var view1 = new google.visualization.DataView(data1);
    view1.setColumns([0, 1,
        {
            calc: "stringify",
            sourceColumn: 1,
            type: "string",
            role: "annotation"
        }]);

    var options1 = {
        title: "% under COx 0.3",
        width: "100%",
        height: "100%",
        bar: {groupWidth: "70%"},
        legend: {position: 'bottom'},
        vAxis: {
            minValue: 0,
            ticks: [0, .2, .4]
        },
    };

    var chart1 = new google.visualization.ColumnChart(document.getElementById("columnchart_values"));
    chart1.draw(view1, options1);


    var data2 = google.visualization.arrayToDataTable([
        ["Time", "MAP"],
        ["0", 0.27],
        ["10", 0.27],
        ["20", 0.197],
        ["30", 0.243],
        ["40", 0.2]
    ]);

    var view2 = new google.visualization.DataView(data2);
    view2.setColumns([0, 1,
        {
            calc: "stringify",
            sourceColumn: 1,
            type: "string",
            role: "annotation"
        }]);

    var options2 = {
        title: "% under MAP opt",
        width: "100%",
        height: "100%",
        curveType: 'function',
        legend: {position: 'bottom'},
        vAxis: {
            minValue: 0,
            ticks: [0, .2, .4]
        },
    };

    var chart2 = new google.visualization.LineChart(document.getElementById("columnchart_values2"));
    chart2.draw(view2, options2);


    var data3 = google.visualization.arrayToDataTable([
        ["Time", "ETCO2"],
        ["0", 0.27],
        ["10", 0.27],
        ["20", 0.197],
        ["30", 0.243],
        ["40", 0.2]
    ]);

    var view3 = new google.visualization.DataView(data3);
    view3.setColumns([0, 1,
        {
            calc: "stringify",
            sourceColumn: 1,
            type: "string",
            role: "annotation"
        }]);

    var options3 = {
        title: "% under ETCO2 opt",
        width: "100%",
        height: "100%",
        curveType: 'function',
        legend: {position: "bottom"},
        vAxis: {
            minValue: 0,
            ticks: [0, .2, .4]
        },
    };

    var chart3 = new google.visualization.LineChart(document.getElementById("columnchart_values3"));
    chart3.draw(view3, options3);


    var data4 = google.visualization.arrayToDataTable([
        ["Time", "RSO2"],
        ["0", 0.27],
        ["10", 0.27],
        ["20", 0.197],
        ["30", 0.243],
        ["40", 0.2]
    ]);

    var view4 = new google.visualization.DataView(data4);
    view4.setColumns([0, 1,
        {
            calc: "stringify",
            sourceColumn: 1,
            type: "string",
            role: "annotation"
        }]);

    var options4 = {
        title: "RSO2",
        width: "100%",
        height: "100%",
        curveType: 'function',
        legend: {position: "bottom"},
        vAxis: {
            minValue: 0,
            ticks: [0, .2, .4]
        },
    };

    var chart4 = new google.visualization.LineChart(document.getElementById("columnchart_values4"));
    chart4.draw(view4, options4);


}