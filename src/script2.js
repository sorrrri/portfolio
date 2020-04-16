google.charts.load("current", {'packages': ['corechart', 'scatter']});
google.charts.setOnLoadCallback(drawChart);

// Chart 2
function drawChart() {

    var data = new google.visualization.DataTable();
    data.addColumn('number', 'Time(hours)');
    data.addColumn('number', 'Left');
    data.addColumn('number', 'Right');

    data.addRows([
        [0, 65, 67], [1, 80, 88], [2, 72, 77],
        [3, 90, 93], [4, 89, 85], [5, 95, 91],
        [6, 75, 71], [7, 71, 78], [8, 98, 93],
    ]);

    var materialOptions = {
        legend: {position: 'top'},
        chart: {
            title: 'Pupil Size',
        },
    };

    var chart = new google.charts.Scatter(document.getElementById('chart_div'));
    chart.draw(data, materialOptions);


    var data2 = new google.visualization.DataTable();
    data2.addColumn('number', 'Time(hours)');
    data2.addColumn('number', 'Left');
    data2.addColumn('number', 'Right');

    data2.addRows([
        [0, 65, 67], [1, 80, 88], [2, 72, 77],
        [3, 90, 93], [4, 89, 85], [5, 95, 91],
        [6, 75, 71], [7, 71, 78], [8, 98, 93],
    ]);

    var materialOptions2 = {
        chart: {
            title: 'NPI',
        },
        legend: {position: 'bottom'}
    };

    var chart2 = new google.charts.Scatter(document.getElementById('chart_div2'));
    chart2.draw(data2, materialOptions2);


    var data3 = google.visualization.arrayToDataTable([
        ['Time', 'Pupil Size'],
        [8, 12],
        [4, 5.5],
        [11, 14],
        [4, 5],
        [3, 3.5],
        [6.5, 7]
    ]);

    var options3 = {
        title: 'SJVO2',
        hAxis: {title: 'Time(72hour)', minValue: 0, maxValue: 15},
        vAxis: {title: 'SJVO2', minValue: 0, maxValue: 15},
        legend: 'none'
    };

    var chart3 = new google.visualization.ScatterChart(document.getElementById('chart_div3'));

    chart3.draw(data3, options3);


    var data4 = google.visualization.arrayToDataTable([
        ['Time', 'Pupil Size'],
        [8, 12],
        [4, 5.5],
        [11, 14],
        [4, 5],
        [3, 3.5],
        [6.5, 7]
    ]);

    var options4 = {
        title: 'AJDL',
        hAxis: {title: 'Time(72hour)', minValue: 0, maxValue: 15},
        vAxis: {title: 'AJDL', minValue: 0, maxValue: 15},
        legend: 'none'
    };

    var chart4 = new google.visualization.ScatterChart(document.getElementById('chart_div4'));

    chart4.draw(data4, options4);


    var data5 = google.visualization.arrayToDataTable([
        ['Time', 'CEO2'],
        [8, 12],
        [4, 5.5],
        [11, 14],
        [4, 5],
        [3, 3.5],
        [6.5, 7]
    ]);

    var options5 = {
        title: 'CEO2',
        hAxis: {title: 'Time(72hour)', minValue: 0, maxValue: 15},
        vAxis: {title: 'CEO2', minValue: 0, maxValue: 15},
        legend: 'none'
    };

    var chart5 = new google.visualization.ScatterChart(document.getElementById('chart_div5'));

    chart5.draw(data5, options5);


    var data6 = google.visualization.arrayToDataTable([
        ['Time', 'AJDO2'],
        [8, 12],
        [4, 5.5],
        [11, 14],
        [4, 5],
        [3, 3.5],
        [6.5, 7]
    ]);

    var options6 = {
        title: 'AJDO2',
        hAxis: {title: 'Time(72hour)', minValue: 0, maxValue: 15},
        vAxis: {title: 'AJDO2', minValue: 0, maxValue: 15},
        legend: 'none'
    };

    var chart6 = new google.visualization.ScatterChart(document.getElementById('chart_div6'));

    chart6.draw(data6, options6);
}