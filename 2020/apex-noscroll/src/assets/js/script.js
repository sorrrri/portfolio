var chart_data = [
    ["2020-4-20-13", 0.2, 0, 0, 0, 0, 0, 34.0, 38.0, 80, 80, 85, 85, 56.7, 45, 45, 50, 50, 46.7, 60, 0, 0, 4, 30, 0, 30, 0, 3.92, 4.12, 3.92, 4.12, null, null, null],
    ["2020-4-20-14", 0.2, 0, 0, 0, 0, 0, 34.75, 38.25, 80, 80, 85, 85, 55.72, 45, 45, 50, 50, 45.72, 61, 1, 1, 2, 32, 1, 32, 1, 4.21, 4.21, 4.21, 4.21, null, null, null],
    ["2020-4-20-15", 0.3, 0, 0, 0, 0, 0, 35.0, 38.5, 80, 80, 85, 85, 56.03, 45, 45, 50, 50, 46.03, 63, 3, 3, 6, 26, 3, 26, 3, 3.24, 3.57, 3.24, 3.57, null, null, null],
    ["2020-4-20-16", 0.2, 0, 0, 0, 0, 0, 35.0, 38.5, 80, 80, 85, 85, 56.72, 45, 45, 50, 50, 46.72, 67, 7, 7, 4, 28, 7, 28, 7, 3.54, 3.94, 3.54, 3.94, null, null, null],
    ["2020-4-20-17", 0.25, 0, 0, 0, 0, 0, 35.0, 38.0, 80, 80, 85, 85, 57.46, 45, 45, 50, 50, 47.46, 65, 5, 5, 1, 29, 5, 29, 5, 3.21, 3.75, 3.21, 3.75, null, null, null],
    ["2020-4-20-18", 0.36, 0.846, 0.71, 0.778, 0.615, 0.433, 35.0, 38.0, 80, 80, 85, 85, 57.7, 45, 45, 50, 50, 47.7, 70, 0, 0, 5, 33, 0, 33, 0, 3.9, 4.53, 3.9, 4.53, null, null, null],
    ["2020-4-20-19", 0.17, 0.796, 0.717, 0.756, 0.567, 0.581, 35.0, 38.0, 81, 81, 90, 90, 57.91, 45, 45, 50, 50, 47.91, 72, 2, 2, 7, 39, 2, 39, 2, 3.57, 4.18, 3.57, 4.18, null, null, null],
    ["2020-4-20-20", 0.28, 0.868, 0.881, 0.874, 0.636, 0.657, 35.0, 38.0, 81, 81, 90, 90, 58.05, 45, 45, 50, 50, 48.05, 73, 3, 3, 9, 32, 3, 32, 3, 4.5, 4.23, 4.5, 4.23, null, null, null],
    ["2020-4-20-21", 0.29, 0.56, 0.343, 0.452, 0.553, 0.554, 35.0, 38.0, 81, 81, 90, 90, 58.34, 45, 45, 50, 50, 48.34, 71, 1, 1, 4, 31, 1, 31, 1, 4.21, 3.75, 4.21, 3.75, null, null, null],
    ["2020-4-20-22", 0.30, -0.377, -0.637, -0.507, 0.533, 0.334, 35.0, 38.0, 81, 81, 90, 90, 59.95, 45, 45, 50, 50, 49.95, 68, 8, 8, 5, 38, 8, 38, 8, 4.38, 3.95, 4.38, 3.95, null, null, null],
    ["2020-4-20-23", 0.2, -0.385, -0.516, -0.45, 0.375, 0.136, 35.5, 37.75, 81, 81, 90, 90, 86.67, 45, 45, 50, 50, 46.67, 66, 6, 6, 3, 37, 6, 37, 6, 4.18, 3.64, 4.18, 3.64, null, null, null],
    ["2020-4-21-00", 0.2, -0.347, -0.438, -0.392, 0.052, -0.114, 36.0, 38.25, 81, 81, 90, 90, 89.41, 45, 45, 50, 50, 49.41, 65, 5, 5, 6, 35, 5, 35, 5, 3.97, 3.71, 3.97, 3.71, null, null, null],
    ["2020-4-21-01", 0.3, -0.705, -0.677, -0.691, 0.203, 0.137, 36.0, 38.5, 75, 75, 80, 80, 90.2, 38, 38, 43, 43, 50.2, 62, 2, 2, 3, 33, 2, 33, 1, 3.12, 3.41, 3.12, 3.41, null, null, null],
    ["2020-4-21-02", 0.3, -0.829, -0.69, -0.76, 0.426, 0.514, 36.0, 38.5, 75, 75, 80, 80, 90.6, 38, 38, 43, 43, 50.6, 63, 3, 3, 6, 34, 3, 34, 2, 3.37, 3.97, 3.37, 3.97, null, null, null],
    ["2020-4-21-03", 0.25, -0.878, -0.784, -0.831, 0.642, 0.644, 36.0, 38.5, 75, 75, 80, 80, 90.94, 38, 38, 43, 43, 50.94, 67, 7, 7, 2, 32, 7, 32, 7, 3.94, 3.74, 3.94, 3.74, null, null, null],
    ["2020-4-21-04", 0.36, -0.957, -0.955, -0.956, 0.685, 0.636, 36.0, 38.5, 75, 75, 80, 80, 92.27, 38, 38, 43, 43, 52.27, 70, 0, 0, 1, 31, 0, 31, 3, 3.57, 4.31, 3.57, 4.31, null, null, null],
    ["2020-4-21-05", 0.17, -0.901, -0.926, -0.914, 0.663, 0.573, 36.0, 38.5, 75, 75, 80, 80, 93.99, 38, 38, 43, 43, 53.99, 71, 1, 1, 0, 30, 1, 30, 2, 3.74, 4.12, 3.74, 4.12, -1, 1, "Fluid Infusion"],
    ["2020-4-21-06", 0.28, -0.445, -0.621, -0.533, -0.635, -0.511, 36.0, 38.5, 75, 75, 80, 80, 94.72, 38, 38, 43, 43, 54.72, 76, 6, 6, 4, 27, 6, 27, 4, 4.32, 4.64, 4.32, 4.64, null, null, null],
    ["2020-4-21-07", 0.29, -0.338, -0.725, -0.532, -0.617, -0.371, 36.0, 38.5, 75, 75, 80, 80, 95.18, 38, 38, 43, 43, 55.18, 74, 4, 4, 6, 28, 4, 28, 3, 4.12, 4.32, 4.12, 4.32, null, null, null],
    ["2020-4-21-08", 0.30, -0.318, -0.706, -0.512, -0.431, -0.245, 36.0, 38.5, 75, 75, 80, 80, 96.02, 38, 38, 43, 43, 56.02, 73, 7, 7, 3, 31, 7, 31, 5, 4.02, 3.75, 4.02, 3.75, null, null, null],
    ["2020-4-21-09", 0.2, -0.393, -0.238, -0.316, -0.502, -0.172, 37.75, 40.0, 75, 75, 80, 80, 96.86, 38, 38, 43, 43, 56.86, 60, 8, 8, 1, 30, 8, 30, 4, 3.94, 3.74, 3.94, 3.74, null, null, null],
    ["2020-4-21-10", 0.2, -0.477, 0.711, 0.117, -0.246, -0.172, 37.5, 40.0, 78, 78, 83, 83, 97.02, 42, 42, 47, 47, 47.02, 65, 4, 4, 3, 31, 4, 31, 6, 3.94, 3.74, 3.94, 3.74, null, null, null],
    ["2020-4-21-11", 0.3, -0.441, 0.736, 0.148, -0.254, -0.172, 38.0, 40.0, 78, 78, 83, 83, 98.35, 42, 42, 47, 47, 48.35, 62, 6, 6, 5, 34, 6, 34, 8, 3.94, 3.74, 3.94, 3.74, null, null, null],
    ["2020-4-21-12", 0.3, -0.465, 0.882, 0.208, -0.05, 0.279, 38.0, 40.0, 78, 78, 83, 83, 99.17, 42, 42, 47, 47, 49.17, 67, 7, 7, 7, 36, 7, 36, 3, 3.94, 3.74, 3.94, 3.74, null, null, null],
    ["2020-4-21-13", 0.25, -0.041, 0.237, 0.098, 0.057, -0.13, 38.0, 40.0, 78, 78, 83, 83, 99.11, 42, 42, 47, 47, 49.11, 54, 8, 8, 5, 38, 8, 38, 1, 3.94, 3.74, 3.94, 3.74, null, null, null],
    ["2020-4-21-14", 0.36, 0.04, 0.125, 0.082, -0.014, -0.087, 38.0, 40.0, 78, 78, 83, 83, 98.54, 42, 42, 47, 47, 48.54, 51, 7, 7, 8, 37, 7, 37, 5, 3.94, 3.74, 3.94, 3.74, null, null, null],
    ["2020-4-21-15", 0.17, 0.759, 0.631, 0.695, 0.385, -0.087, 38.0, 40.0, 78, 78, 83, 83, 98.38, 42, 42, 47, 47, 48.38, 46, 4, 4, 4, 34, 4, 34, 0, 3.94, 3.74, 3.94, 3.74, null, null, null],
    ["2020-4-21-16", 0.28, 0.9, 0.458, 0.679, 0.453, -0.044, 38.0, 40.0, 78, 78, 83, 83, 99.08, 42, 42, 47, 47, 49.08, 47, 0, 0, 3, 30, 0, 30, 5, 3.94, 3.74, 3.94, 3.74, null, null, null],
    ["2020-4-21-17", 0.29, 0.907, 0.657, 0.782, 0.355, 0.292, 38.0, 40.0, 78, 78, 83, 83, 99.08, 42, 42, 47, 47, 49.08, 57, 5, 5, 5, 35, 5, 35, 3, 3.94, 3.74, 3.94, 3.74, null, null, null],
    ["2020-4-21-18", 0.30, 0.885, 0.885, 0.885, 0.541, 0.429, 38.0, 40.0, 78, 78, 83, 83, 99.11, 42, 42, 47, 47, 49.11, 60, 3, 3, 2, 33, 3, 33, 3, 3.94, 3.74, 3.94, 3.74, null, null, null],
    ["2020-4-21-19", 0.2, 0.83, 0.837, 0.833, 0.353, 0.445, 38.25, 40.75, 78, 78, 83, 83, 102.45, 42, 42, 47, 47, 52.45, 65, 2, 2, 8, 32, 2, 32, 5, 3.94, 3.74, 3.94, 3.74, null, null, null],
    ["2020-4-21-20", 0.2, 0.745, 0.807, 0.776, 0, 0.206, 38.5, 40.5, 78, 78, 83, 83, 102.28, 42, 42, 47, 47, 52.28, 62, 1, 1, 4, 31, 1, 31, 2, 3.94, 3.74, 3.94, 3.74, null, null, null],
    ["2020-4-21-21", 0.3, -0.052, 0.212, 0.08, 0, 0.138, 38.5, 40.75, 78, 78, 83, 83, 101.22, 42, 42, 47, 47, 51.22, 63, 4, 3, 2, 34, 3, 34, 8, 3.94, 3.74, 3.94, 3.74, null, null, null],
    ["2020-4-21-22", 0.3, 0.635, 0.631, 0.633, 0, 0, 38.5, 41.0, 78, 78, 83, 83, 99.86, 42, 42, 47, 47, 49.86, 73, 7, 7, 4, 37, 4, 37, 7, 3.94, 3.74, 3.94, 3.74, null, null, null],
    ["2020-4-21-23", 0.25, 0.891, 0.84, 0.865, 0, 0, 39.0, 41.0, 78, 78, 83, 83, 99.05, 42, 42, 47, 47, 49.05, 75, 4, 4, 2, 34, 7, 34, 3, 3.94, 3.74, 3.94, 3.74, null, null, null],
    ["2020-4-22-00", 0.36, 0.862, 0.941, 0.902, 0, 0, 39.0, 41.0, 78, 78, 83, 83, 99.35, 42, 42, 47, 47, 49.35, 76, 6, 6, 1, 36, 4, 36, 7, 3.94, 3.74, 3.94, 3.74, null, null, null],
    ["2020-4-22-01", 0.17, 0.279, 0.752, 0.516, -0.195, 0, 39.0, 41.0, 80, 80, 85, 85, 99.26, 40, 40, 45, 45, 49.26, 56, 8, 3, 4, 28, 6, 28, 5, 3.94, 3.74, 3.94, 3.74, null, null, null],
    ["2020-4-22-02", 0.28, -0.004, 0.437, 0.216, -0.481, 0, 39.0, 41.0, 80, 80, 85, 85, 98.99, 40, 40, 45, 45, 48.99, 57, 4, 6, 6, 24, 8, 24, 2, 3.94, 3.74, 3.94, 3.74, null, null, null],
    ["2020-4-22-03", 0.29, 0.377, 0.292, 0.334, -0.559, -0.037, 39.0, 41.0, 80, 80, 85, 85, 99.1, 40, 40, 45, 45, 49.1, 56, 1, 2, 8, 31, 4, 31, 7, 3.94, 3.74, 3.94, 3.74, null, null, null],
    ["2020-4-22-04", 0.30, 0.687, 0.084, 0.386, -0.623, -0.081, 39.0, 41.0, 80, 80, 85, 85, 99.5, 40, 40, 45, 45, 49.25, 70, 3, 5, 5, 33, 2, 33, 6, 3.94, 3.74, 3.94, 3.74, null, null, null],
];

var chartDateSlider

function drawDashboard() {
    var data = new google.visualization.DataTable();
    data.addColumn('date', 'Date');
    data.addColumn('number', 'COx');
    data.addColumn('number', 'COxMAP Left');
    data.addColumn('number', 'COxMAP Right');
    data.addColumn('number', 'COxMAP average');
    data.addColumn('number', 'COxETCO2 Left');
    data.addColumn('number', 'COxETCO2 Right');
    data.addColumn('number', 'RSO2 Left');
    data.addColumn('number', 'RSO2 Right');
    data.addColumn('number', 'MAP OP_BP_min1');
    data.addColumn('number', 'MAP OP_BP_min2');
    data.addColumn('number', 'MAP OP_BP_max1');
    data.addColumn('number', 'MAP OP_BP_max2');
    data.addColumn('number', 'MAP');
    data.addColumn('number', 'OP_ETCO2_min1');
    data.addColumn('number', 'OP_ETCO2_min2');
    data.addColumn('number', 'OP_ETCO2_max1');
    data.addColumn('number', 'OP_ETCO2_max2');
    data.addColumn('number', 'ETCO2');
    data.addColumn('number', 'SJVO2');
    data.addColumn('number', 'ADJL');
    data.addColumn('number', 'LOI');
    data.addColumn('number', 'AVDO2');
    data.addColumn('number', 'CEO2');
    data.addColumn('number', 'AJglc');
    data.addColumn('number', 'AJCO2');
    data.addColumn('number', 'RQ');
    data.addColumn('number', 'NPI Left');
    data.addColumn('number', 'NPI Right');
    data.addColumn('number', 'Pupil Left');
    data.addColumn('number', 'Pupil Right');
    data.addColumn({'type': 'number', 'role': 'interval'});
    data.addColumn({'type': 'number', 'role': 'interval'});
    data.addColumn({'type': 'string', 'role': 'annotation'});

    for (var i = 0; i < chart_data.length; i++) {
        var tmpArray = chart_data[i][0].split("-");
        var date = new Date(parseInt(tmpArray[0]), parseInt(tmpArray[1]), parseInt(tmpArray[2]), parseInt(tmpArray[3]));

        data.addRow([
            date,
            parseFloat(chart_data[i][1]),
            parseFloat(chart_data[i][2]),
            parseFloat(chart_data[i][3]),
            parseFloat(chart_data[i][4]),
            parseFloat(chart_data[i][5]),
            parseFloat(chart_data[i][6]),
            parseFloat(chart_data[i][7]),
            parseFloat(chart_data[i][8]),
            parseFloat(chart_data[i][9]),
            parseFloat(chart_data[i][10]),
            parseFloat(chart_data[i][11]),
            parseFloat(chart_data[i][12]),
            parseFloat(chart_data[i][13]),
            parseFloat(chart_data[i][14]),
            parseFloat(chart_data[i][15]),
            parseFloat(chart_data[i][16]),
            parseFloat(chart_data[i][17]),
            parseFloat(chart_data[i][18]),
            parseFloat(chart_data[i][19]),
            parseFloat(chart_data[i][20]),
            parseFloat(chart_data[i][21]),
            parseFloat(chart_data[i][22]),
            parseFloat(chart_data[i][23]),
            parseFloat(chart_data[i][24]),
            parseFloat(chart_data[i][25]),
            parseFloat(chart_data[i][26]),
            parseFloat(chart_data[i][27]),
            parseFloat(chart_data[i][28]),
            parseFloat(chart_data[i][29]),
            parseFloat(chart_data[i][30]),
            parseFloat(chart_data[i][31]),
            parseFloat(chart_data[i][32]),
            chart_data[i][33],
        ]);
    }

    var chartDashboard = new google.visualization.Dashboard(document.getElementById('dashboard_div'));
    var chartDateRanger = new google.visualization.ControlWrapper({
        'controlType': 'DateRangeFilter',
        'containerId': 'chartDateRanger',
        'options': {
            // Filter by the date axis.
            'filterColumnLabel': 'Date',
            'ui': {
                'chartOptions': {
                    'height': 40
                },
            }
        },
        'state': {
            'range': {
                'start': new Date(2020, 4, 20),
                'end': new Date(2020, 4, 22)
            }
        }
    });


    var COxChart = new google.visualization.ChartWrapper({
        chartType: 'LineChart',
        containerId: 'COxChart',
        options: {
            colors: ["#47CACC"],
            tooltip: {isHtml: true},
            backgroundColor: 'transparent',
            height: "100%",
            legend: "none",
            fontSize: 15,
            pointSize: 5,
            curveType: 'function',
            intervals: {
                color: "yellow"
            },
            hAxis: {
                gridlines: {
                    color: '#777',
                    units: {
                        days: {format: ['MM/dd']},
                        hours: {format: ['HH:mm', 'ha']},
                    }
                },
                minorGridlines: {
                    color: '#333',
                    units: {
                        hours: {format: ['hh:mm:ss a', 'ha']},
                        minutes: {format: ['HH:mm a Z', ':mm']}
                    }
                }
            },
            vAxis: {
                lineWidth: 10,
                ticks: [0, .3, .5],
                baselineColor: '#777',
                gridlineColor: '#777',
                minorGridlines: {
                    color: '#333',
                }
            },
            chartArea: {
                left: '70',
                right: '10',
                width: '100%',
                height: '73%'
            },
        },
        view: {
            columns: [0, 1]
        }

    })

    var COxMAPChart = new google.visualization.ChartWrapper({
        chartType: 'LineChart',
        containerId: 'COxMAPChart',
        options: {
            colors: ['#FAA7B8', '#6096FD', 'darkseagreen'],
            tooltip: {isHtml: true},
            backgroundColor: 'transparent',
            height: "100%",
            legend: "none",
            fontSize: 15,
            pointSize: 5,
            lineWidth: 1.5,
            series: {2: {lineWidth: 3}},
            curveType: 'function',
            intervals: {
                color: 'yellow',
            },
            hAxis: {
                gridlines: {
                    color: '#777',
                    units: {
                        days: {format: ['MM/dd']},
                        hours: {format: ['HH:mm', 'ha']},
                    }
                },
                minorGridlines: {
                    color: '#333',
                    units: {
                        hours: {format: ['hh:mm:ss a', 'ha']},
                        minutes: {format: ['HH:mm a Z', ':mm']}
                    }
                }
            },
            vAxis: {
                ticks: [-1, 0, 1],
                baselineColor: '#777',
                gridlineColor: '#777',
                minorGridlines: {
                    color: '#333',
                }
            },
            chartArea: {
                left: '70',
                right: '10',
                height: '73%'
            }
        },
        view: {
            columns: [0, 2, 3, 4, 31, 32, 33]
        }
    })


    var COxETCO2Chart = new google.visualization.ChartWrapper({
        chartType: 'LineChart',
        containerId: 'COxETCO2Chart',
        options: {
            colors: ['#FAA7B8', '#6096FD'],
            tooltip: {isHtml: true},
            backgroundColor: 'transparent',
            height: "100%",
            legend: "none",
            fontSize: 15,
            pointSize: 5,
            curveType: 'function',
            intervals: {
                color: "yellow"
            },
            hAxis: {
                gridlines: {
                    color: '#777',
                    units: {
                        days: {format: ['MM/dd']},
                        hours: {format: ['HH:mm', 'ha']},
                    }
                },
                minorGridlines: {
                    color: '#333',
                    units: {
                        hours: {format: ['hh:mm:ss a', 'ha']},
                        minutes: {format: ['HH:mm a Z', ':mm']}
                    }
                }
            },
            vAxis: {
                ticks: [-1, 0, 1],
                baselineColor: '#777',
                gridlineColor: '#777',
                minorGridlines: {
                    color: '#333',
                }
            },
            chartArea: {
                left: '70',
                right: '10',
                height: '73%'
            }
        },
        view: {
            columns: [0, 5, 6]
        }
    })

    var RSO2Chart = new google.visualization.ChartWrapper({
        chartType: 'LineChart',
        containerId: 'RSO2Chart',
        options: {
            colors: ['#FAA7B8', '#6096FD'],
            tooltip: {isHtml: true},
            backgroundColor: 'transparent',
            height: "100%",
            legend: "none",
            fontSize: 15,
            pointSize: 5,
            curveType: 'function',
            intervals: {
                color: "yellow"
            },
            hAxis: {
                gridlines: {
                    color: '#777',
                    units: {
                        days: {format: ['MM/dd']},
                        hours: {format: ['HH:mm', 'ha']},
                    }
                },
                minorGridlines: {
                    color: '#333',
                    units: {
                        hours: {format: ['hh:mm:ss a', 'ha']},
                        minutes: {format: ['HH:mm a Z', ':mm']}
                    }
                }
            },
            vAxis: {
                baselineColor: '#777',
                gridlineColor: '#777',
                ticks: [20, 30, 40, 50, 60],
                minorGridlines: {
                    color: '#333',
                }
            },
            chartArea: {
                left: '70',
                right: '10',
                width: '100%',
                height: '73%'
            }
        },
        view: {
            columns: [0, 7, 8]
        }
    })


    var MAPChart = new google.visualization.ChartWrapper({
        chartType: 'ComboChart',
        containerId: 'MAPChart',
        options: {
            colors: ['#FAA7B8', '#6096FD'],
            tooltip: {isHtml: true},
            backgroundColor: 'transparent',
            height: "100%",
            legend: "none",
            fontSize: 15,
            pointSize: 5,
            curveType: 'function',
            intervals: {
                color: "yellow"
            },
            hAxis: {
                gridlines: {
                    color: '#777',
                    units: {
                        days: {format: ['MM/dd']},
                        hours: {format: ['HH:mm', 'ha']},
                    }
                },
                minorGridlines: {
                    color: '#333',
                    units: {
                        hours: {format: ['hh:mm:ss a', 'ha']},
                        minutes: {format: ['HH:mm a Z', ':mm']}
                    }
                }
            },
            vAxis: {
                ticks: [0, 50, 100, 150],
                baselineColor: '#777',
                gridlineColor: '#777',
                minorGridlines: {
                    color: '#333',
                }
            },
            chartArea: {
                left: '70',
                right: '10',
                width: '100%',
                height: '73%'
            },
            seriesType: 'candlesticks',
            series: {
                1: {
                    type: 'line',
                    color: 'darkseagreen'
                },
            },
            bar: {groupWidth: '20%'},
            candlestick: {
                fallingColor: {strokeWidth: 0, fill: '#FAA7B8'},
                risingColor: {strokeWidth: 0, fill: '#FAA7B8'}
            }
        },
        view: {
            columns: [0, 9, 10, 11, 12, 13]
        }
    })


    var ETCO2Chart = new google.visualization.ChartWrapper({
        chartType: 'ComboChart',
        containerId: 'ETCO2Chart',
        options: {
            colors: ['#FAA7B8', '#6096FD'],
            tooltip: {isHtml: true},
            backgroundColor: 'transparent',
            height: "100%",
            legend: "none",
            fontSize: 15,
            pointSize: 5,
            curveType: 'function',
            intervals: {
                color: "yellow"
            },
            hAxis: {
                gridlines: {
                    color: '#777',
                    units: {
                        days: {format: ['MM/dd']},
                        hours: {format: ['HH:mm', 'ha']},
                    }
                },
                minorGridlines: {
                    color: '#333',
                    units: {
                        hours: {format: ['hh:mm:ss a', 'ha']},
                        minutes: {format: ['HH:mm a Z', ':mm']}
                    }
                }
            },
            vAxis: {
                ticks: [0, 10, 20, 30, 40, 50, 60],
                baselineColor: '#777',
                gridlineColor: '#777',
                minorGridlines: {
                    color: '#333',
                }
            },
            chartArea: {
                left: '70',
                right: '10',
                width: '100%',
                height: '73%'
            },
            seriesType: 'candlesticks',
            series: {
                1: {
                    type: 'line',
                    color: 'darkseagreen'
                },
            },
            bar: {groupWidth: '20%'},
            candlestick: {
                fallingColor: {strokeWidth: 0, fill: '#FAA7B8'},
                risingColor: {strokeWidth: 0, fill: '#FAA7B8'}
            }
        },
        view: {
            columns: [0, 14, 15, 16, 17, 18]
        }
    })


    var SJVO2Chart = new google.visualization.ChartWrapper({
        chartType: 'ScatterChart',
        containerId: 'SJVO2Chart',
        options: {
            colors: ["#47CACC"],
            tooltip: {isHtml: true},
            backgroundColor: 'transparent',
            height: "100%",
            width: "100%",
            legend: "none",
            fontSize: 15,
            pointSize: 5,
            intervals: {
                color: "yellow"
            },
            hAxis: {
                gridlines: {
                    color: '#777',
                    units: {
                        days: {format: ['MM/dd']},
                        hours: {format: ['HH:mm', 'ha']},
                    }
                },
                minorGridlines: {
                    color: '#333',
                    units: {
                        hours: {format: ['hh:mm:ss a', 'ha']},
                        minutes: {format: ['HH:mm a Z', ':mm']}
                    }
                }
            },
            vAxis: {
                ticks: [20, 40, 60, 80, 100],
                baselineColor: '#777',
                gridlineColor: '#777',
                minorGridlines: {
                    color: '#333',
                }
            },
            chartArea: {
                left: '70',
                right: '10',
                width: '100%',
                height: '73%'
            }
        },
        view: {
            columns: [0, 19]
        }
    })


    var ADJLChart = new google.visualization.ChartWrapper({
        chartType: 'ScatterChart',
        containerId: 'ADJLChart',
        options: {
            colors: ["#47CACC"],
            tooltip: {isHtml: true},
            backgroundColor: 'transparent',
            height: "100%",
            legend: "none",
            fontSize: 15,
            pointSize: 5,
            intervals: {
                color: 'yellow'
            },
            hAxis: {
                gridlines: {
                    color: '#777',
                    units: {
                        days: {format: ['MM/dd']},
                        hours: {format: ['HH:mm', 'ha']},
                    }
                },
                minorGridlines: {
                    color: '#333',
                    units: {
                        hours: {format: ['hh:mm:ss a', 'ha']},
                        minutes: {format: ['HH:mm a Z', ':mm']}
                    }
                }
            },
            vAxis: {
                baselineColor: '#777',
                gridlineColor: '#777',
                minorGridlines: {
                    color: '#333',
                }
            },
            chartArea: {
                left: '70',
                right: '10',
                width: '100%',
                height: '73%'
            }
        },
        view: {
            columns: [0, 20]
        }
    })


    var LOIChart = new google.visualization.ChartWrapper({
        chartType: 'ScatterChart',
        containerId: 'LOIChart',
        options: {
            colors: ["#47CACC"],
            tooltip: {isHtml: true},
            backgroundColor: 'transparent',
            height: "100%",
            legend: "none",
            fontSize: 15,
            pointSize: 5,
            intervals: {
                color: 'yellow'
            },
            hAxis: {
                gridlines: {
                    color: '#777',
                    units: {
                        days: {format: ['MM/dd']},
                        hours: {format: ['HH:mm', 'ha']},
                    }
                },
                minorGridlines: {
                    color: '#333',
                    units: {
                        hours: {format: ['hh:mm:ss a', 'ha']},
                        minutes: {format: ['HH:mm a Z', ':mm']}
                    }
                }
            },
            vAxis: {
                baselineColor: '#777',
                gridlineColor: '#777',
                minorGridlines: {
                    color: '#333',
                }
            },
            chartArea: {
                left: '70',
                right: '10',
                width: '100%',
                height: '73%'
            }
        },
        view: {
            columns: [0, 21]
        }
    })


    var AVDO2Chart = new google.visualization.ChartWrapper({
        chartType: 'ScatterChart',
        containerId: 'AVDO2Chart',
        options: {
            colors: ["#47CACC"],
            tooltip: {isHtml: true},
            backgroundColor: 'transparent',
            height: "100%",
            legend: "none",
            fontSize: 15,
            pointSize: 5,
            intervals: {
                color: 'yellow'
            },
            hAxis: {
                gridlines: {
                    color: '#777',
                    units: {
                        days: {format: ['MM/dd']},
                        hours: {format: ['HH:mm', 'ha']},
                    }
                },
                minorGridlines: {
                    color: '#333',
                    units: {
                        hours: {format: ['hh:mm:ss a', 'ha']},
                        minutes: {format: ['HH:mm a Z', ':mm']}
                    }
                }
            },
            vAxis: {
                baselineColor: '#777',
                gridlineColor: '#777',
                minorGridlines: {
                    color: '#333',
                }
            },
            chartArea: {
                left: '70',
                right: '10',
                width: '100%',
                height: '73%'
            }
        },
        view: {
            columns: [0, 22]
        }
    })


    var CEO2Chart = new google.visualization.ChartWrapper({
        chartType: 'AreaChart',
        containerId: 'CEO2Chart',
        options: {
            colors: ["#47CACC"],
            tooltip: {isHtml: true},
            backgroundColor: 'transparent',
            height: "100%",
            legend: "none",
            fontSize: 15,
            pointSize: 5,
            curveType: 'function',
            intervals: {
                color: 'yellow'
            },
            hAxis: {
                gridlines: {
                    color: '#777',
                    units: {
                        days: {format: ['MM/dd']},
                        hours: {format: ['HH:mm', 'ha']},
                    }
                },
                minorGridlines: {
                    color: '#333',
                    units: {
                        hours: {format: ['hh:mm:ss a', 'ha']},
                        minutes: {format: ['HH:mm a Z', ':mm']}
                    }
                }
            },
            vAxis: {
                ticks: [0, 1, 2, 3, 0, 10, 20, 30, 40, 50, 60],
                baselineColor: '#777',
                gridlineColor: '#777',
                minorGridlines: {
                    color: '#333',
                }
            },
            chartArea: {
                left: '70',
                right: '10',
                width: '100%',
                height: '73%'
            }
        },
        view: {
            columns: [0, 23]
        }
    })


    var AJglcChart = new google.visualization.ChartWrapper({
        chartType: 'ScatterChart',
        containerId: 'AJglcChart',
        options: {
            colors: ["#47CACC"],
            tooltip: {isHtml: true},
            backgroundColor: 'transparent',
            height: "100%",
            legend: "none",
            fontSize: 15,
            pointSize: 5,
            intervals: {
                color: 'yellow'
            },
            hAxis: {
                gridlines: {
                    color: '#777',
                    units: {
                        days: {format: ['MM/dd']},
                        hours: {format: ['HH:mm', 'ha']},
                    }
                },
                minorGridlines: {
                    color: '#333',
                    units: {
                        hours: {format: ['hh:mm:ss a', 'ha']},
                        minutes: {format: ['HH:mm a Z', ':mm']}
                    }
                }
            },
            vAxis: {
                baselineColor: '#777',
                gridlineColor: '#777',
                minorGridlines: {
                    color: '#333',
                }
            },
            chartArea: {
                left: '70',
                right: '10',
                width: '100%',
                height: '73%'
            }
        },
        view: {
            columns: [0, 24]
        }
    })


    var AJCO2Chart = new google.visualization.ChartWrapper({
        chartType: 'AreaChart',
        containerId: 'AJCO2Chart',
        options: {
            colors: ["#47CACC"],
            tooltip: {isHtml: true},
            backgroundColor: 'transparent',
            height: "100%",
            legend: "none",
            fontSize: 15,
            pointSize: 5,
            curveType: 'function',
            intervals: {
                color: 'yellow'
            },
            hAxis: {
                gridlines: {
                    color: '#777',
                    units: {
                        days: {format: ['MM/dd']},
                        hours: {format: ['HH:mm', 'ha']},
                    }
                },
                minorGridlines: {
                    color: '#333',
                    units: {
                        hours: {format: ['hh:mm:ss a', 'ha']},
                        minutes: {format: ['HH:mm a Z', ':mm']}
                    }
                }
            },
            vAxis: {
                ticks: [0, 10, 20, 30, 40, 50, 60],
                baselineColor: '#777',
                gridlineColor: '#777',
                minorGridlines: {
                    color: '#333',
                }
            },
            chartArea: {
                left: '70',
                right: '10',
                width: '100%',
                height: '73%'
            }
        },
        view: {
            columns: [0, 25]
        }
    })


    var RQChart = new google.visualization.ChartWrapper({
        chartType: 'ScatterChart',
        containerId: 'RQChart',
        options: {
            colors: ["#47CACC"],
            tooltip: {isHtml: true},
            backgroundColor: 'transparent',
            height: "100%",
            legend: "none",
            fontSize: 15,
            pointSize: 5,
            intervals: {
                color: 'yellow'
            },
            hAxis: {
                gridlines: {
                    color: '#777',
                    units: {
                        days: {format: ['MM/dd']},
                        hours: {format: ['HH:mm', 'ha']},
                    }
                },
                minorGridlines: {
                    color: '#333',
                    units: {
                        hours: {format: ['hh:mm:ss a', 'ha']},
                        minutes: {format: ['HH:mm a Z', ':mm']}
                    }
                }
            },
            vAxis: {
                baselineColor: '#777',
                gridlineColor: '#777',
                minorGridlines: {
                    color: '#333',
                }
            },
            chartArea: {
                left: '70',
                right: '10',
                width: '100%',
                height: '73%'
            }
        },
        view: {
            columns: [0, 26]
        }
    })


    var NPIChart = new google.visualization.ChartWrapper({
        chartType: 'LineChart',
        containerId: 'NPIChart',
        options: {
            colors: ['#FAA7B8', '#6096FD'],
            tooltip: {isHtml: true},
            backgroundColor: 'transparent',
            height: "100%",
            legend: "none",
            fontSize: 15,
            pointSize: 5,
            curveType: 'function',
            intervals: {
                color: 'yellow'
            },
            hAxis: {
                gridlines: {
                    color: '#777',
                    units: {
                        days: {format: ['MM/dd']},
                        hours: {format: ['HH:mm', 'ha']},
                    }
                },
                minorGridlines: {
                    color: '#333',
                    units: {
                        hours: {format: ['hh:mm:ss a', 'ha']},
                        minutes: {format: ['HH:mm a Z', ':mm']}
                    }
                }
            },
            vAxis: {
                ticks: [0, 1, 2, 3, 4, 5],
                baselineColor: '#777',
                gridlineColor: '#777',
                minorGridlines: {
                    color: '#333',
                }
            },
            chartArea: {
                left: '70',
                right: '10',
                width: '100%',
                height: '73%'
            }
        },
        view: {
            columns: [0, 27, 28]
        }
    })


    var PupilChart = new google.visualization.ChartWrapper({
        chartType: 'LineChart',
        containerId: 'PupilChart',
        options: {
            colors: ['#FAA7B8', '#6096FD'],
            tooltip: {isHtml: true},
            backgroundColor: 'transparent',
            height: "100%",
            legend: "none",
            fontSize: 15,
            pointSize: 5,
            intervals: {
                color: 'yellow'
            },
            hAxis: {
                gridlines: {
                    color: '#777',
                    units: {
                        days: {format: ['MM/dd']},
                        hours: {format: ['HH:mm', 'ha']},
                    }
                },
                minorGridlines: {
                    color: '#333',
                    units: {
                        hours: {format: ['hh:mm:ss a', 'ha']},
                        minutes: {format: ['HH:mm a Z', ':mm']}
                    }
                }
            },
            vAxis: {
                ticks: [0, 1, 2, 3, 0, 1, 2, 3, 4, 5],
                baselineColor: '#777',
                gridlineColor: '#777',
                minorGridlines: {
                    color: '#333',
                }
            },
            chartArea: {
                left: '70',
                right: '10',
                width: '100%',
                height: '73%'
            }
        },
        view: {
            columns: [0, 29, 30]
        }
    })


    var modalCOxMAPChart = new google.visualization.ChartWrapper({
        chartType: 'ColumnChart',
        containerId: 'modalCOxMAPChart',
        options: {
            colors: ["#47CACC"],
            tooltip: {isHtml: true},
            backgroundColor: 'transparent',
            height: "100%",
            fontSize: 15,
            title: "Time under MAPopt : --hr--min",
            legend: "none",
            curveType: 'function',
            hAxis: {
                title: "MAP",
                gridlines: {
                    color: '#777',
                },
                minorGridlines: {
                    color: '#333',
                }
            },
            vAxis: {
                title: "COx",
                ticks: [-1, -0.5, 0, 0.5, 1],
                baselineColor: '#777',
                gridlineColor: '#777',
                minorGridlines: {
                    color: '#333',
                }
            },
            chartArea: {
                width: '80%',
                height: '80%'
            }
        }
    })


    var modalRSO2MAPChart = new google.visualization.ChartWrapper({
        chartType: 'ScatterChart',
        containerId: 'modalRSO2MAPChart',
        options: {
            colors: ["#47CACC"],
            tooltip: {isHtml: true},
            backgroundColor: 'transparent',
            height: "100%",
            legend: "none",
            pointSize: 7,
            fontSize: 15,
            curveType: 'function',
            hAxis: {
                title: "MAP",
                gridlines: {
                    color: '#777',
                },
                minorGridlines: {
                    color: '#333',
                }
            },
            vAxis: {
                title: "RSO2",
                ticks: [-1, -0.5, 0, 0.5, 1],
                baselineColor: '#777',
                gridlineColor: '#777',
                minorGridlines: {
                    color: '#333',
                }
            },
            chartArea: {
                width: '80%',
                height: '80%'
            }
        }
    })


    var modalCO2xETCO2Chart = new google.visualization.ChartWrapper({
        chartType: 'ColumnChart',
        containerId: 'modalCO2xETCO2Chart',
        options: {
            colors: ["#47CACC"],
            tooltip: {isHtml: true},
            backgroundColor: 'transparent',
            height: "100%",
            title: "Time under ETCO2opt : --hr--min",
            legend: "none",
            fontSize: 15,
            curveType: 'function',
            hAxis: {
                title: "ETCO2",
                gridlineColor: '#777',
                minorGridlines: {
                    color: '#333',
                }
            },
            vAxis: {
                title: "CO2x",
                ticks: [-1, -0.5, 0, 0.5, 1],
                baselineColor: '#777',
                gridlineColor: '#777',
                minorGridlines: {
                    color: '#333',
                }
            },
            chartArea: {
                width: '80%',
                height: '80%'
            }
        }
    })


    var modalRSO2ETCO2Chart = new google.visualization.ChartWrapper({
        chartType: 'ScatterChart',
        containerId: 'modalRSO2ETCO2Chart',
        options: {
            colors: ["#47CACC"],
            tooltip: {isHtml: true},
            backgroundColor: 'transparent',
            height: "100%",
            legend: "none",
            pointSize: 7,
            fontSize: 15,
            curveType: 'function',
            hAxis: {
                title: "ETCO2",
                gridlines: {
                    color: '#777',
                },
                minorGridlines: {
                    color: '#333',
                }
            },
            vAxis: {
                title: "RSO2",
                ticks: [-1, -0.5, 0, 0.5, 1],
                baselineColor: '#777',
                gridlineColor: '#777',
                minorGridlines: {
                    color: '#333',
                }
            },
            chartArea: {
                width: '80%',
                height: '80%'
            }
        }
    })

    chartDashboard.bind(chartDateRanger, [COxMAPChart, COxETCO2Chart, RSO2Chart, MAPChart, ETCO2Chart, SJVO2Chart, ADJLChart, LOIChart, AVDO2Chart, CEO2Chart, AJglcChart, AJCO2Chart, RQChart, NPIChart, PupilChart]).draw(data);

}

function drawModalCOxLeftMAPChart() {
    var data = new google.visualization.DataTable();
    data.addColumn('number', 'MAP');
    data.addColumn('number', 'COx Left');
    data.addRows([
        [60, 1],
        [70, 0.47],
        [80, 0.8],
        [90, 0.67],
        [100, 0.3],
        [110, -0.3],
        [120, -0.4],
        [130, -0.16],
        [140, 0.12],
        [150, 0.4],
        [160, 0.34],
        [170, 0.67],
        [180, 0.3],
        [190, -0.3],
        [200, -0.3],
    ]);

    var options = {
        colors: ["#47CACC"],
        tooltip: {isHtml: true},
        backgroundColor: 'transparent',
        height: "100%",
        fontSize: 15,
        title: "Time under MAPopt : --hr--min",
        legend: "none",
        curveType: 'function',
        hAxis: {
            title: "MAP",
            gridlines: {
                color: '#777',
            },
            minorGridlines: {
                color: '#333',
            }
        },
        vAxis: {
            title: "COx Left",
            ticks: [-1, -0.5, 0, 0.5, 1],
            baselineColor: '#777',
            gridlineColor: '#777',
            minorGridlines: {
                color: '#333',
            }
        },
        chartArea: {
            width: '90%',
            height: '70%'
        }
    };

    var modalCOxLeftMAPChart = new google.visualization.ColumnChart(document.getElementById("modalCOxLeftMAPChart"));
    modalCOxLeftMAPChart.draw(data, options);
}

function drawModalCOxRightMAPChart() {
    var data = new google.visualization.DataTable();
    data.addColumn('number', 'MAP');
    data.addColumn('number', 'COx Right');
    data.addRows([
        [60, 1],
        [70, 0.47],
        [80, 0.8],
        [90, 0.67],
        [100, 0.3],
        [110, -0.3],
        [120, -0.4],
        [130, -0.16],
        [140, 0.12],
        [150, 0.4],
        [160, 0.34],
        [170, 0.67],
        [180, 0.3],
        [190, -0.3],
        [200, -0.3],
    ]);

    var options = {
        colors: ["#47CACC"],
        tooltip: {isHtml: true},
        backgroundColor: 'transparent',
        height: "100%",
        fontSize: 15,
        title: "Time under MAPopt : --hr--min",
        legend: "none",
        curveType: 'function',
        hAxis: {
            title: "MAP",
            gridlines: {
                color: '#777',
            },
            minorGridlines: {
                color: '#333',
            }
        },
        vAxis: {
            title: "COx Right",
            ticks: [-1, -0.5, 0, 0.5, 1],
            baselineColor: '#777',
            gridlineColor: '#777',
            minorGridlines: {
                color: '#333',
            }
        },
        chartArea: {
            width: '90%',
            height: '70%'
        }
    };

    var modalCOxRightMAPChart = new google.visualization.ColumnChart(document.getElementById("modalCOxRightMAPChart"));
    modalCOxRightMAPChart.draw(data, options);
}

function drawModalCOxAverageMAPChart() {
    var data = new google.visualization.DataTable();
    data.addColumn('number', 'MAP');
    data.addColumn('number', 'COx Average');
    data.addRows([
        [60, 1],
        [70, 0.47],
        [80, 0.8],
        [90, 0.67],
        [100, 0.3],
        [110, -0.3],
        [120, -0.4],
        [130, -0.16],
        [140, 0.12],
        [150, 0.4],
        [160, 0.34],
        [170, 0.67],
        [180, 0.3],
        [190, -0.3],
        [200, -0.3],
    ]);

    var options = {
        colors: ["#47CACC"],
        tooltip: {isHtml: true},
        backgroundColor: 'transparent',
        height: "100%",
        fontSize: 15,
        title: "Time under MAPopt : --hr--min",
        legend: "none",
        curveType: 'function',
        hAxis: {
            title: "MAP",
            gridlines: {
                color: '#777',
            },
            minorGridlines: {
                color: '#333',
            }
        },
        vAxis: {
            title: "COx Average",
            ticks: [-1, -0.5, 0, 0.5, 1],
            baselineColor: '#777',
            gridlineColor: '#777',
            minorGridlines: {
                color: '#333',
            }
        },
        chartArea: {
            width: '90%',
            height: '70%'
        }
    };

    var modalCOxAverageMAPChart = new google.visualization.ColumnChart(document.getElementById("modalCOxAverageMAPChart"));
    modalCOxAverageMAPChart.draw(data, options);
}


function drawModalRSO2MAPChart() {
    var data = new google.visualization.DataTable();
    data.addColumn('number', 'MAP');
    data.addColumn('number', 'RSO2');
    data.addRows([
        [60, 1],
        [70, 0.47],
        [80, 0.8],
        [90, 0.67],
        [100, 0.3],
        [110, -0.3],
        [120, -0.4],
        [130, -0.16],
        [140, 0.12],
        [150, 0.4],
        [160, 0.34],
        [170, 0.67],
        [180, 0.3],
        [190, -0.3],
        [200, -0.3],
    ]);

    var options = {
        colors: ["#47CACC"],
        tooltip: {isHtml: true},
        backgroundColor: 'transparent',
        height: "100%",
        legend: "none",
        pointSize: 7,
        fontSize: 15,
        curveType: 'function',
        hAxis: {
            title: "MAP",
            gridlines: {
                color: '#777',
            },
            minorGridlines: {
                color: '#333',
            }
        },
        vAxis: {
            title: "RSO2",
            ticks: [-1, -0.5, 0, 0.5, 1],
            baselineColor: '#777',
            gridlineColor: '#777',
            minorGridlines: {
                color: '#333',
            }
        },
        chartArea: {
            width: '90%',
            height: '70%'
        }
    };

    var modalRSO2MAPChart = new google.visualization.ScatterChart(document.getElementById('modalRSO2MAPChart'));

    modalRSO2MAPChart.draw(data, options);
}


function drawModalCO2xETCO2LeftChart() {
    var data = new google.visualization.DataTable();
    data.addColumn('number', 'CO2x');
    data.addColumn('number', 'ETCO2 Left');
    data.addRows([
        [10, 1],
        [20, 0.47],
        [30, 0.8],
        [40, 0.67],
    ]);

    var options = {
        colors: ["#47CACC"],
        tooltip: {isHtml: true},
        backgroundColor: 'transparent',
        height: "100%",
        title: "Time under ETCO2opt : --hr--min",
        legend: "none",
        fontSize: 15,
        curveType: 'function',
        hAxis: {
            title: "ETCO2",
            gridlineColor: '#777',
            minorGridlines: {
                color: '#333',
            }
        },
        vAxis: {
            title: "CO2x",
            ticks: [-1, -0.5, 0, 0.5, 1],
            baselineColor: '#777',
            gridlineColor: '#777',
            minorGridlines: {
                color: '#333',
            }
        },
        chartArea: {
            width: '90%',
            height: '80%'
        }
    };

    var modalCO2xETCO2LeftChart = new google.visualization.ColumnChart(document.getElementById("modalCO2xETCO2LeftChart"));
    modalCO2xETCO2LeftChart.draw(data, options);
}


function drawModalCO2xETCO2RightChart() {
    var data = new google.visualization.DataTable();
    data.addColumn('number', 'CO2x');
    data.addColumn('number', 'ETCO2 Right');
    data.addRows([
        [10, 1],
        [20, 0.47],
        [30, 0.8],
        [40, 0.67],
    ]);

    var options = {
        colors: ["#47CACC"],
        tooltip: {isHtml: true},
        backgroundColor: 'transparent',
        height: "100%",
        title: "Time under ETCO2opt : --hr--min",
        legend: "none",
        fontSize: 15,
        curveType: 'function',
        hAxis: {
            title: "ETCO2 Right",
            gridlineColor: '#777',
            minorGridlines: {
                color: '#333',
            }
        },
        vAxis: {
            title: "CO2x",
            ticks: [-1, -0.5, 0, 0.5, 1],
            baselineColor: '#777',
            gridlineColor: '#777',
            minorGridlines: {
                color: '#333',
            }
        },
        chartArea: {
            width: '90%',
            height: '80%'
        }
    };

    var modalCO2xETCO2RightChart = new google.visualization.ColumnChart(document.getElementById("modalCO2xETCO2RightChart"));
    modalCO2xETCO2RightChart.draw(data, options);
}


function drawModalCO2xETCO2AverageChart() {
    var data = new google.visualization.DataTable();
    data.addColumn('number', 'CO2x');
    data.addColumn('number', 'ETCO2 Average');
    data.addRows([
        [10, 1],
        [20, 0.47],
        [30, 0.8],
        [40, 0.67],
    ]);

    var options = {
        colors: ["#47CACC"],
        tooltip: {isHtml: true},
        backgroundColor: 'transparent',
        height: "100%",
        title: "Time under ETCO2opt : --hr--min",
        legend: "none",
        fontSize: 15,
        curveType: 'function',
        hAxis: {
            title: "ETCO2 Average",
            gridlineColor: '#777',
            minorGridlines: {
                color: '#333',
            }
        },
        vAxis: {
            title: "CO2x",
            ticks: [-1, -0.5, 0, 0.5, 1],
            baselineColor: '#777',
            gridlineColor: '#777',
            minorGridlines: {
                color: '#333',
            }
        },
        chartArea: {
            width: '90%',
            height: '80%'
        }
    };

    var modalCO2xETCO2AverageChart = new google.visualization.ColumnChart(document.getElementById("modalCO2xETCO2AverageChart"));
    modalCO2xETCO2AverageChart.draw(data, options);
}


function drawModalRSO2ETCO2Chart() {
    var data = new google.visualization.DataTable();
    data.addColumn('number', 'RSO2');
    data.addColumn('number', 'ETCO2');
    data.addRows([
        [10, 1],
        [20, 0.47],
        [30, 0.8],
        [40, 0.67],
    ]);

    var options = {
        colors: ["#47CACC"],
        tooltip: {isHtml: true},
        backgroundColor: 'transparent',
        height: "100%",
        legend: "none",
        pointSize: 7,
        fontSize: 15,
        curveType: 'function',
        hAxis: {
            title: "ETCO2",
            gridlines: {
                color: '#777',
            },
            minorGridlines: {
                color: '#333',
            }
        },
        vAxis: {
            title: "RSO2",
            ticks: [-1, -0.5, 0, 0.5, 1],
            baselineColor: '#777',
            gridlineColor: '#777',
            minorGridlines: {
                color: '#333',
            }
        },
        chartArea: {
            width: '90%',
            height: '80%'
        }
    };

    var modalRSO2ETCO2Chart = new google.visualization.ScatterChart(document.getElementById('modalRSO2ETCO2Chart'));

    modalRSO2ETCO2Chart.draw(data, options);
}


google.charts.load("current", {'packages': ['corechart', 'bar', 'scatter', 'controls']});
google.charts.setOnLoadCallback(drawDashboard);
google.charts.setOnLoadCallback(drawModalCOxLeftMAPChart);
google.charts.setOnLoadCallback(drawModalCOxRightMAPChart);
google.charts.setOnLoadCallback(drawModalCOxAverageMAPChart);
google.charts.setOnLoadCallback(drawModalRSO2MAPChart);
google.charts.setOnLoadCallback(drawModalCO2xETCO2LeftChart);
google.charts.setOnLoadCallback(drawModalCO2xETCO2RightChart);
google.charts.setOnLoadCallback(drawModalCO2xETCO2AverageChart);
google.charts.setOnLoadCallback(drawModalRSO2ETCO2Chart);

