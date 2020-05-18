google.charts.load("current", {'packages': ['corechart', 'scatter']});
google.charts.setOnLoadCallback(drawCOxChart);
google.charts.setOnLoadCallback(drawMAPChart);
google.charts.setOnLoadCallback(drawETCO2Chart);
google.charts.setOnLoadCallback(drawRSO2Chart);
google.charts.setOnLoadCallback(drawPupilChart);
google.charts.setOnLoadCallback(drawNPIChart);
google.charts.setOnLoadCallback(drawSJVO2Chart);
google.charts.setOnLoadCallback(drawAJDLChart);
google.charts.setOnLoadCallback(drawCEO2Chart);
google.charts.setOnLoadCallback(drawAJDO2Chart);
google.charts.setOnLoadCallback(drawCOxMAPChart);
google.charts.setOnLoadCallback(drawRSO2MAPChart);
google.charts.setOnLoadCallback(drawCO2xETCO2Chart);
google.charts.setOnLoadCallback(drawRSO2ETCO2Chart);

function drawCOxChart() {
    var data_COx = google.visualization.arrayToDataTable([
        ["Time", "COx"],
        ["01", 0.27],
        ["02", 0.27],
        ["03", 0.197],
        ["04", 0.243],
        ["05", 0.2],
        ["06", 0.27],
        ["07", 0.197],
        ["08", 0.243],
        ["09", 0.2],
        ["10", 0.175],
        ["11", 0.27],
        ["12", 0.197],
        ["13", 0.27],
        ["14", 0.197],
        ["15", 0.243],
        ["16", 0.2],
        ["17", 0.175],
        ["18", 0.27],
        ["19", 0.197],
        ["20", 0.243],
        ["21", 0.2],
        ["22", 0.27],
        ["23", 0.27],
        ["24", 0.197],
        ["01", 0.243],
        ["02", 0.2],
        ["03", 0.27],
        ["04", 0.197],
        ["05", 0.243],
        ["06", 0.2],
        ["07", 0.175],
        ["08", 0.27],
        ["09", 0.197],
        ["10", 0.243],
        ["11", 0.2],
        ["12", 0.27],
        ["13", 0.197],
        ["14", 0.243],
        ["15", 0.2],
        ["16", 0.175],
    ]);

    var view_COx = new google.visualization.DataView(data_COx);
    view_COx.setColumns([0, 1,
        {
            calc: "stringify",
            sourceColumn: 1,
            type: "string",
            role: "annotation"
        }]);

    var options_COx = {
        explorer: {axis: 'horizontal', keepInBounds: true},
        tooltip: {isHtml: true},
        backgroundColor: 'transparent',
        // title: "% under COx 0.3",
        width: "100%",
        height: "100%",
        bar: {groupWidth: "70%"},
        legend: {position: 'bottom'},
        vAxis: {
            minValue: 0,
            ticks: [0, .2, .4],
            baselineColor: '#ccc',
            gridlineColor: '#ccc',
        },
    };

    var chart_COx = new google.visualization.ColumnChart(document.getElementById("chart_COx"));
    chart_COx.draw(view_COx, options_COx);
}


function drawMAPChart() {
    var data_MAP = google.visualization.arrayToDataTable([
        ["Time", "MAP"],
        ["0", 0.27],
        ["10", 0.27],
        ["20", 0.197],
        ["30", 0.243],
        ["40", 0.2]
    ]);

    var view_MAP = new google.visualization.DataView(data_MAP);
    view_MAP.setColumns([0, 1,
        {
            calc: "stringify",
            sourceColumn: 1,
            type: "string",
            role: "annotation"
        }]);

    var options_MAP = {
        tooltip: {isHtml: true},
        backgroundColor: 'transparent',
        // title: "% under MAP opt",
        width: "100%",
        height: "100%",
        curveType: 'function',
        legend: {position: 'bottom'},
        vAxis: {
            minValue: 0,
            ticks: [0, .2, .4],
            baselineColor: '#ccc',
            gridlineColor: '#ccc',
        },
    };

    var chart_MAP = new google.visualization.LineChart(document.getElementById("chart_MAP"));
    chart_MAP.draw(view_MAP, options_MAP);
}


function drawETCO2Chart() {
    var data_ETCO2 = google.visualization.arrayToDataTable([
        ["Time", "ETCO2"],
        ["0", 0.27],
        ["10", 0.27],
        ["20", 0.197],
        ["30", 0.243],
        ["40", 0.2]
    ]);

    var view_ETCO2 = new google.visualization.DataView(data_ETCO2);
    view_ETCO2.setColumns([0, 1,
        {
            calc: "stringify",
            sourceColumn: 1,
            type: "string",
            role: "annotation"
        }]);

    var options_ETCO2 = {
        tooltip: {isHtml: true},
        backgroundColor: 'transparent',
        // title: "% under ETCO2 opt",
        width: "100%",
        height: "100%",
        curveType: 'function',
        legend: {position: "bottom"},
        vAxis: {
            minValue: 0,
            ticks: [0, .2, .4],
            baselineColor: '#ccc',
            gridlineColor: '#ccc',
        },
    };

    var chart_ETCO2 = new google.visualization.LineChart(document.getElementById("chart_ETCO2"));
    chart_ETCO2.draw(view_ETCO2, options_ETCO2);
}


function drawRSO2Chart() {
    var data_RSO2 = google.visualization.arrayToDataTable([
        ["Time", "RSO2"],
        ["0", 0.27],
        ["10", 0.27],
        ["20", 0.197],
        ["30", 0.243],
        ["40", 0.2]
    ]);

    var view_RSO2 = new google.visualization.DataView(data_RSO2);
    view_RSO2.setColumns([0, 1,
        {
            calc: "stringify",
            sourceColumn: 1,
            type: "string",
            role: "annotation"
        }]);

    var options_RSO2 = {
        tooltip: {isHtml: true},
        backgroundColor: 'transparent',
        // title: "RSO2",
        width: "100%",
        height: "100%",
        curveType: 'function',
        legend: {position: "bottom"},
        vAxis: {
            minValue: 0,
            ticks: [0, .2, .4],
            baselineColor: '#ccc',
            gridlineColor: '#ccc',
        },
    };

    var chart_RSO2 = new google.visualization.LineChart(document.getElementById("chart_RSO2"));
    chart_RSO2.draw(view_RSO2, options_RSO2);
}


function drawPupilChart() {
    var data_pupil = new google.visualization.DataTable();
    data_pupil.addColumn('number', 'Time(hours)');
    data_pupil.addColumn('number', 'Left');
    data_pupil.addColumn('number', 'Right');

    data_pupil.addRows([
        [0, 65, 67], [1, 80, 88], [2, 72, 77],
        [3, 90, 93], [4, 89, 85], [5, 95, 91],
        [6, 75, 71], [7, 71, 78], [8, 98, 93],
    ]);

    var materialOptions = {
        tooltip: {isHtml: true},
        animation: {
            duration: 1000,
            easing: 'out',
        },
        backgroundColor: 'transparent',
        legend: 'top',
        chart: {
            title: 'Pupil Size',
        },
    };

    var chart_pupil = new google.charts.Scatter(document.getElementById('chart_pupil'));
    chart_pupil.draw(data_pupil, google.charts.Scatter.convertOptions(materialOptions));
}


function drawNPIChart() {
    var data_NPI = new google.visualization.DataTable();
    data_NPI.addColumn('number', 'Time(hours)');
    data_NPI.addColumn('number', 'Left');
    data_NPI.addColumn('number', 'Right');

    data_NPI.addRows([
        [0, 65, 67], [1, 80, 88], [2, 72, 77],
        [3, 90, 93], [4, 89, 85], [5, 95, 91],
        [6, 75, 71], [7, 71, 78], [8, 98, 93],
    ]);

    var materialOptions_NPI = {
        tooltip: {isHtml: true},
        backgroundColor: 'transparent',
        chart: {
            title: 'NPI',
        },
        legend: {position: 'bottom'}
    };

    var chart_NPI = new google.charts.Scatter(document.getElementById('chart_NPI'));
    chart_NPI.draw(data_NPI, google.charts.Scatter.convertOptions(materialOptions_NPI));
}


function drawSJVO2Chart() {
    var data_SJVO2 = google.visualization.arrayToDataTable([
        ['Time', 'SJVO2'],
        [8, 12],
        [4, 5.5],
        [11, 14],
        [4, 5],
        [3, 3.5],
        [6.5, 7]
    ]);

    var options_SJVO2 = {
        tooltip: {isHtml: true},
        backgroundColor: 'transparent',
        title: 'SJVO2',
        hAxis: {title: 'Time(72hour)', minValue: 0, maxValue: 15},
        vAxis: {title: 'SJVO2', minValue: 0, maxValue: 15},
        legend: 'none',
        vAxis: {
            baselineColor: '#ccc',
            gridlineColor: '#ccc',
        },
    };

    var chart_SJVO2 = new google.visualization.ScatterChart(document.getElementById('chart_SJVO2'));

    chart_SJVO2.draw(data_SJVO2, options_SJVO2);
}


function drawAJDLChart() {
    var data_AJDL = google.visualization.arrayToDataTable([
        ['Time', 'AJDL'],
        [8, 12],
        [4, 5.5],
        [11, 14],
        [4, 5],
        [3, 3.5],
        [6.5, 7]
    ]);

    var options_AJDL = {
        tooltip: {isHtml: true},
        backgroundColor: 'transparent',
        title: 'AJDL',
        hAxis: {title: 'Time(72hour)', minValue: 0, maxValue: 15},
        vAxis: {title: 'AJDL', minValue: 0, maxValue: 15},
        legend: 'none',
        vAxis: {
            baselineColor: '#ccc',
            gridlineColor: '#ccc',
        },
    };

    var chart_AJDL = new google.visualization.ScatterChart(document.getElementById('chart_AJDL'));

    chart_AJDL.draw(data_AJDL, options_AJDL);
}


function drawCEO2Chart() {
    var data_CEO2 = google.visualization.arrayToDataTable([
        ['Time', 'CEO2'],
        [8, 12],
        [4, 5.5],
        [11, 14],
        [4, 5],
        [3, 3.5],
        [6.5, 7]
    ]);

    var options_CEO2 = {
        tooltip: {isHtml: true},
        backgroundColor: 'transparent',
        title: 'CEO2',
        hAxis: {title: 'Time(72hour)', minValue: 0, maxValue: 15},
        vAxis: {title: 'CEO2', minValue: 0, maxValue: 15},
        legend: 'none',
        vAxis: {
            baselineColor: '#ccc',
            gridlineColor: '#ccc',
        },
    };

    var chart_CEO2 = new google.visualization.ScatterChart(document.getElementById('chart_CEO2'));

    chart_CEO2.draw(data_CEO2, options_CEO2);
}


function drawAJDO2Chart() {
    var data_AJDO2 = google.visualization.arrayToDataTable([
        ['Time', 'AJDO2'],
        [8, 12],
        [4, 5.5],
        [11, 14],
        [4, 5],
        [3, 3.5],
        [6.5, 7]
    ]);

    var options_AJDO2 = {
        tooltip: {isHtml: true},
        backgroundColor: 'transparent',
        title: 'AJDO2',
        hAxis: {title: 'Time(72hour)', minValue: 0, maxValue: 15},
        vAxis: {title: 'AJDO2', minValue: 0, maxValue: 15},
        legend: 'none',
        vAxis: {
            baselineColor: '#ccc',
            gridlineColor: '#ccc',
        },
    };

    var chart_AJDO2 = new google.visualization.ScatterChart(document.getElementById('chart_AJDO2'));

    chart_AJDO2.draw(data_AJDO2, options_AJDO2);
}


function drawCOxMAPChart() {
    var data_COxMAP = google.visualization.arrayToDataTable([
        ["MAP", "COx"],
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

    var view_COxMAP = new google.visualization.DataView(data_COxMAP);
    view_COxMAP.setColumns([0, 1,
        {
            calc: "stringify",
            sourceColumn: 1,
            type: "string",
            role: "annotation"
        }]);

    var options_COxMAP = {
        tooltip: {isHtml: true},
        backgroundColor: 'transparent',
        title: "MAP opt: 80-90 (every 6hr)",
        width: "400px",
        height: "50vh",
        bar: {groupWidth: "70%"},
        legend: {position: 'bottom'},
        vAxis: {
            minValue: 0,
            ticks: [0, .2, .4],
            baselineColor: '#ccc',
            gridlineColor: '#ccc',
        }
    };

    var chart_COxMAP = new google.visualization.ColumnChart(document.getElementById("chart_COxMAP"));
    chart_COxMAP.draw(view_COxMAP, options_COxMAP);
}


function drawRSO2MAPChart() {
    var data_RSO2MAP = google.visualization.arrayToDataTable([
        ['MAP', 'RSO2'],
        [8, 12],
        [4, 5.5],
        [11, 14],
        [4, 5],
        [3, 3.5],
        [6.5, 7]
    ]);

    var options_RSO2MAP = {
        tooltip: {isHtml: true},
        backgroundColor: 'transparent',
        title: 'COx: 0.3 (every 5min)',
        hAxis: {title: 'MAP', minValue: 0, maxValue: 15},
        vAxis: {
            title: 'RSO2',
            minValue: 0,
            maxValue: 15,
            baselineColor: '#ccc',
            gridlineColor: '#ccc',
        },
        legend: 'none'
    };

    var chart_RSO2MAP = new google.visualization.ScatterChart(document.getElementById('chart_RSO2MAP'));

    chart_RSO2MAP.draw(data_RSO2MAP, options_RSO2MAP);
}


function drawCO2xETCO2Chart() {
    var data_CO2xETCO2 = google.visualization.arrayToDataTable([
        ["ETCO2", "CO2x"],
        ["10", 0.27],
        ["15", 0.197],
        ["20", 0.243],
        ["25", 0.2],
        ["30", 0.27],
        ["35", 0.197],
        ["40", 0.243],
        ["45", 0.2],
        ["50", 0.175],
    ]);

    var view_CO2xETCO2 = new google.visualization.DataView(data_CO2xETCO2);
    view_CO2xETCO2.setColumns([0, 1,
        {
            calc: "stringify",
            sourceColumn: 1,
            type: "string",
            role: "annotation"
        }]);

    var options_CO2xETCO2 = {
        tooltip: {isHtml: true},
        backgroundColor: 'transparent',
        title: "ETCO2 opt: 30-35 (every 6hr)",
        width: "600px",
        bar: {groupWidth: "70%"},
        legend: {position: 'bottom'},
        vAxis: {
            minValue: 0,
            ticks: [0, .2, .4],
            baselineColor: '#ccc',
            gridlineColor: '#ccc',
        },
    };

    var chart_CO2xETCO2 = new google.visualization.ColumnChart(document.getElementById("chart_CO2xETCO2"));
    chart_CO2xETCO2.draw(view_CO2xETCO2, options_CO2xETCO2);
}

function drawRSO2ETCO2Chart() {
    var data_RSO2ETCO2 = google.visualization.arrayToDataTable([
        ['ETCO2', 'RSO2'],
        [8, 12],
        [4, 5.5],
        [11, 14],
        [4, 5],
        [3, 3.5],
        [6.5, 7]
    ]);

    var options_RSO2ETCO2 = {
        tooltip: {isHtml: true},
        backgroundColor: 'transparent',
        title: 'CO2x: 0.2 (every 5min)',
        hAxis: {title: 'etCO2', minValue: 0, maxValue: 15},
        vAxis: {title: 'RSO2', minValue: 0, maxValue: 15},
        legend: 'none'
    };

    var chart_RSO2ETCO2 = new google.visualization.ScatterChart(document.getElementById('chart_RSO2ETCO2'));

    chart_RSO2ETCO2.draw(data_RSO2ETCO2, options_RSO2ETCO2);
}
