google.charts.load("current", {'packages': ['corechart', 'bar', 'scatter']});
google.charts.setOnLoadCallback(drawCOxMAPChart);
// google.charts.setOnLoadCallback(drawCOxETCO2Chart);
google.charts.setOnLoadCallback(drawRSO2Chart);
google.charts.setOnLoadCallback(drawMAPChart);
// google.charts.setOnLoadCallback(drawETCO2Chart);
google.charts.setOnLoadCallback(drawSJVO2Chart);
// google.charts.setOnLoadCallback(drawAJDLChart);
// google.charts.setOnLoadCallback(drawLOIChart);
google.charts.setOnLoadCallback(drawAJDO2Chart);
google.charts.setOnLoadCallback(drawCEO2Chart);
// google.charts.setOnLoadCallback(drawAJglcChart);
// google.charts.setOnLoadCallback(drawAJCO2Chart);
// google.charts.setOnLoadCallback(drawRQChart);
google.charts.setOnLoadCallback(drawNPIChart);
google.charts.setOnLoadCallback(drawPupilChart);
google.charts.setOnLoadCallback(drawModalMAPLeftChart);
google.charts.setOnLoadCallback(drawModalMAPRightChart);
google.charts.setOnLoadCallback(drawModalMAPMeanChart);
google.charts.setOnLoadCallback(drawMAPRSO2Chart);
google.charts.setOnLoadCallback(drawModalETCO2LeftChart);
google.charts.setOnLoadCallback(drawModalETCO2RightChart);
google.charts.setOnLoadCallback(drawModalETCO2MeanChart);
google.charts.setOnLoadCallback(drawETCO2RSO2Chart);


let jsonData = $.ajax({
    url: "./../data/3_common.json",
    dataType: "json",
    async: false
}).responseText;

jsonData = JSON.parse(jsonData)
const dataValue = Object.values(jsonData)

// 5분 단위로 CoxMAP, CoxETCO2 등이 찍히는 시간표
let nullArray_CoxTime = []
for (let i in dataValue[13]) {
    nullArray_CoxTime.push(null)
}

// 1분 단위로 MAP, RSO2 등이 찍히는 시간표
let nullArray_timestamp = []
for (let i in dataValue[4]) {
    nullArray_timestamp.push(null)
}

let minInterval = -1
let maxInterval = 1

dataValue[22] = [...nullArray_CoxTime]
dataValue[23] = [...nullArray_CoxTime]
dataValue[24] = [...nullArray_CoxTime]

dataValue[25] = [...nullArray_timestamp]
dataValue[26] = [...nullArray_timestamp]
dataValue[27] = [...nullArray_timestamp]

const interventionCoxTime = (minInterval, maxInterval) => {
// 2020/5/5 16:12
    dataValue[22][82] = minInterval
    dataValue[23][82] = maxInterval
    dataValue[24][82] = "vasopressor increase"

// 2020/5/5 21:16
    dataValue[22][143] = minInterval
    dataValue[23][143] = maxInterval
    dataValue[24][143] = "vasopressor increase"

// 2020/5/6 04:00
    dataValue[22][224] = minInterval
    dataValue[23][224] = maxInterval
    dataValue[24][224] = "TTM start normothermia"

// 2020/5/6 09:27
    dataValue[22][289] = minInterval
    dataValue[23][289] = maxInterval
    dataValue[24][289] = "stop NMB"

// 2020/5/6 12:04
    dataValue[22][321] = minInterval
    dataValue[23][321] = maxInterval
    dataValue[24][321] = "vasopressor increase"

// 2020/5/6 16:45
    dataValue[22][377] = minInterval
    dataValue[23][377] = maxInterval
    dataValue[24][377] = "transfusion"

// 2020/5/6 19:02
    dataValue[22][404] = minInterval
    dataValue[23][404] = maxInterval
    dataValue[24][404] = "transfusion"

// 2020/5/7 06:00
    dataValue[22][536] = minInterval
    dataValue[23][536] = maxInterval
    dataValue[24][536] = "stop sedation"

// 2020/5/7 07:00
    dataValue[22][548] = minInterval
    dataValue[23][548] = maxInterval
    dataValue[24][548] = "adjust oxygenation"

// 2020/5/7 07:45
    dataValue[22][557] = minInterval
    dataValue[23][557] = maxInterval
    dataValue[24][557] = "adjust ventilation"

// 2020/5/7 08:42
    dataValue[22][568] = minInterval
    dataValue[23][568] = maxInterval
    dataValue[24][568] = "TTM stop"

// 2020/5/7 09:00
    dataValue[22][572] = minInterval
    dataValue[23][572] = maxInterval
    dataValue[24][572] = "adjust oxygenation"

// 2020/5/7 10:10
    dataValue[22][586] = minInterval
    dataValue[23][586] = maxInterval
    dataValue[24][586] = "increase sedation"

// 2020/5/7 10:31    No Intervention
    dataValue[22][590] = minInterval
    dataValue[23][590] = maxInterval
    dataValue[24][590] = " "
}

const interventionTimestamp = (minInterval, maxInterval) => {
    dataValue[25][410] = minInterval
    dataValue[26][410] = maxInterval
    dataValue[27][410] = "vasopressor increase"

// 2020/5/5 21:16
    dataValue[25][715] = minInterval
    dataValue[26][715] = maxInterval
    dataValue[27][715] = "vasopressor increase"

// 2020/5/6 04:00
    dataValue[25][1120] = minInterval
    dataValue[26][1120] = maxInterval
    dataValue[27][1120] = "TTM start normothermia"

// 2020/5/6 09:27
    dataValue[25][1445] = minInterval
    dataValue[26][1445] = maxInterval
    dataValue[27][1445] = "stop NMB"

// 2020/5/6 12:04
    dataValue[25][1605] = minInterval
    dataValue[26][1605] = maxInterval
    dataValue[27][1605] = "vasopressor increase"

// 2020/5/6 16:45
    dataValue[25][1885] = minInterval
    dataValue[26][1885] = maxInterval
    dataValue[27][1885] = "transfusion"

// 2020/5/6 19:02
    dataValue[25][2020] = minInterval
    dataValue[26][2020] = maxInterval
    dataValue[27][2020] = "transfusion"

// 2020/5/7 06:00
    dataValue[25][2680] = minInterval
    dataValue[26][2680] = maxInterval
    dataValue[27][2680] = "stop sedation"

// 2020/5/7 07:00
    dataValue[25][2740] = minInterval
    dataValue[26][2740] = maxInterval
    dataValue[27][2740] = "adjust oxygenation"

// 2020/5/7 07:45
    dataValue[25][2785] = minInterval
    dataValue[26][2785] = maxInterval
    dataValue[27][2785] = "adjust ventilation"

// 2020/5/7 08:42
    dataValue[25][2840] = minInterval
    dataValue[26][2840] = maxInterval
    dataValue[27][2840] = "TTM stop"

// 2020/5/7 09:00
    dataValue[25][2860] = minInterval
    dataValue[26][2860] = maxInterval
    dataValue[27][2860] = "adjust oxygenation"

// 2020/5/7 10:10
    dataValue[25][2930] = minInterval
    dataValue[26][2930] = maxInterval
    dataValue[27][2930] = "increase sedation"

// 2020/5/7 10:31    No Intervention
    dataValue[25][2950] = minInterval
    dataValue[26][2950] = maxInterval
    dataValue[27][2950] = " "
}


function drawCOxMAPChart() {
    const data = new google.visualization.DataTable(jsonData);
    interventionCoxTime(-1, 1)

    data.addColumn('date', 'Time of Day');
    data.addColumn('number', 'abnormal');
    data.addColumn('number', 'left');
    data.addColumn('number', 'right');
    data.addColumn('number', 'average');
    data.addColumn('number', 'intervention');
    data.addColumn('number', 'intervention');
    data.addColumn('number', 'intervention');
    data.addColumn('number', 'intervention');
    data.addColumn({'type': 'string', 'role': 'tooltip'});

    for (let i in dataValue[13]) {
        let timestamp = String(dataValue[13][i]);

        let year = timestamp.substring(0, 4);
        let month = timestamp.substring(4, 6) - 1;
        let day = timestamp.substring(6, 8);
        let hours = timestamp.substring(8, 10);
        let minutes = timestamp.substring(10, 12);
        let seconds = timestamp.substring(12, 14);

        timestamp = new Date(parseInt(year), parseInt(month), parseInt(day), parseInt(hours), parseInt(minutes), parseInt(seconds))

        data.addRow([
            timestamp,
            0.3,
            parseFloat(dataValue[14][i]),
            parseFloat(dataValue[15][i]),
            parseFloat(dataValue[16][i]),
            parseInt(dataValue[22][i]),
            parseInt(dataValue[22][i]),
            parseInt(dataValue[23][i]),
            parseInt(dataValue[23][i]),
            dataValue[24][i],
        ]);
    }

    const options = {
        colors: ['orangered', '#FAA7B8', '#6096FD', 'darkseagreen', 'bisque'],
        tooltip: {isHtml: true},
        backgroundColor: 'transparent',
        height: "100%",
        legend: {position: 'top'},
        fontSize: 15,
        pointSize: 0,
        lineWidth: 1.5,
        seriesType: 'line',
        series: {
            0: {
                type: 'area',
            },
            4: {
                type: 'candlesticks',
            },
        },
        candlestick: {
            fallingColor: {strokeWidth: 0, fill: 'transparent'},
            risingColor: {strokeWidth: 0, fill: 'transparent'},
        },
        hAxis: {
            gridlines: {
                color: '#777',
                units: {
                    days: {format: ['MM/dd']},
                },
            },
            minorGridlines: {
                color: '#333',
                units: {
                    hours: {format: ['ha']},
                },
            },
        },
        vAxis: {
            title: "COx MAP",
            ticks: [-1, 0, 0.3, 1],
            baseline: 1,
            gridlineColor: '#777',
        },
        chartArea: {
            width: '96%',
            height: '73%'
        }
    };

    var chart_COxMAP = new google.visualization.ComboChart(document.getElementById('chart_COxMAP'));
    chart_COxMAP.draw(data, options);
}

function drawCOxETCO2Chart() {
    const data = new google.visualization.DataTable(jsonData);
    interventionCoxTime(-1, 1)

    data.addColumn('date', 'Time of Day');
    data.addColumn('number', 'Left');
    data.addColumn('number', 'Right');
    data.addColumn('number', 'Average');

    for (let i in dataValue[13]) {
        let timestamp = String(dataValue[13][i]);

        let year = timestamp.substring(0, 4);
        let month = timestamp.substring(4, 6) - 1;
        let day = timestamp.substring(6, 8);
        let hours = timestamp.substring(8, 10);
        let minutes = timestamp.substring(10, 12);
        let seconds = timestamp.substring(12, 14);

        timestamp = new Date(parseInt(year), parseInt(month), parseInt(day), parseInt(hours), parseInt(minutes), parseInt(seconds))

        data.addRow([
            timestamp,
            parseFloat(dataValue[17][i]),
            parseFloat(dataValue[18][i]),
            parseFloat(dataValue[19][i]),
        ]);
    }

    const options = {
        colors: ['#FAA7B8', '#6096FD', 'darkseagreen'],
        tooltip: {isHtml: true},
        backgroundColor: 'transparent',
        height: "100%",
        legend: {position: 'top'},
        fontSize: 15,
        pointSize: 1.5,
        lineWidth: 1.5,
        intervals: {
            color: "bisque"
        },
        hAxis: {
            gridlines: {
                color: '#777',
                units: {
                    days: {format: ['MM/dd']},
                }
            },
            minorGridlines: {
                color: '#333',
                units: {
                    hours: {format: ['ha']},
                },
            }
        },
        vAxis: {
            title: "COx ETCO2",
            ticks: [-1, 0, 1],
            baselineColor: '#777',
            gridlineColor: '#777',
            minorGridlines: {
                color: '#333',
            }
        },
        chartArea: {
            width: '96%',
            height: '73%'
        }
    };

    var chart_COxETCO2 = new google.visualization.LineChart(document.getElementById('chart_COxETCO2'));
    chart_COxETCO2.draw(data, options);
}

function drawRSO2Chart() {
    const data = new google.visualization.DataTable(jsonData);
    interventionTimestamp(-50, 100)

    data.addColumn('date', 'Time of Day');
    data.addColumn('number', 'Left');
    data.addColumn('number', 'Right');
    data.addColumn('number', 'intervention');
    data.addColumn('number', 'intervention');
    data.addColumn('number', 'intervention');
    data.addColumn('number', 'intervention');
    data.addColumn({'type': 'string', 'role': 'tooltip'});

    for (let i in dataValue[4]) {
        let timestamp = String(dataValue[4][i]);

        let year = timestamp.substring(0, 4);
        let month = timestamp.substring(4, 6) - 1;
        let day = timestamp.substring(6, 8);
        let hours = timestamp.substring(8, 10);
        let minutes = timestamp.substring(10, 12);
        let seconds = timestamp.substring(12, 14);

        timestamp = new Date(parseInt(year), parseInt(month), parseInt(day), parseInt(hours), parseInt(minutes), parseInt(seconds))

        data.addRow([
            timestamp,
            parseFloat(dataValue[1][i]),
            parseFloat(dataValue[2][i]),
            parseInt(dataValue[25][i]),
            parseInt(dataValue[25][i]),
            parseInt(dataValue[26][i]),
            parseInt(dataValue[26][i]),
            dataValue[27][i],
        ]);
    }

    const options = {
        colors: ['#FAA7B8', '#6096FD', 'bisque'],
        tooltip: {isHtml: true},
        backgroundColor: 'transparent',
        height: "100%",
        legend: {position: 'top'},
        fontSize: 15,
        pointSize: 0,
        lineWidth: 1.5,
        seriesType: 'line',
        series: {
            2: {
                type: 'candlesticks',
            },
        },
        candlestick: {
            fallingColor: {strokeWidth: 0, fill: 'transparent'},
            risingColor: {strokeWidth: 0, fill: 'transparent'},
        },
        hAxis: {
            gridlines: {
                color: '#777',
                units: {
                    days: {format: ['MM/dd']},
                },
            },
            minorGridlines: {
                color: '#333',
                units: {
                    hours: {format: ['ha']},
                },
            }
        },
        vAxis: {
            title: "RSO2",
            baselineColor: '#777',
            gridlineColor: '#777',
            //ticks: [20, 30, 40, 50, 60],
        },
        chartArea: {
            width: '96%',
            height: '73%'
        }
    };

    var chart_RSO2 = new google.visualization.ComboChart(document.getElementById('chart_RSO2'));
    chart_RSO2.draw(data, options);
}

function drawMAPChart() {
    var data = new google.visualization.DataTable();
    interventionTimestamp(0, 150)

    data.addColumn('date', 'Time of Day');
    data.addColumn('number', 'OP_BP_min1');
    data.addColumn('number', 'OP_BP_min2');
    data.addColumn('number', 'OP_BP_max1');
    data.addColumn('number', 'OP_BP_max2');
    data.addColumn('number', 'MAP');
    data.addColumn('number', 'intervention');
    data.addColumn('number', 'intervention');
    data.addColumn('number', 'intervention');
    data.addColumn('number', 'intervention');
    data.addColumn({'type': 'string', 'role': 'tooltip'});

    for (let i in dataValue[4]) {
        let timestamp = String(dataValue[4][i]);

        let year = timestamp.substring(0, 4);
        let month = timestamp.substring(4, 6) - 1;
        let day = timestamp.substring(6, 8);
        let hours = timestamp.substring(8, 10);
        let minutes = timestamp.substring(10, 12);
        let seconds = timestamp.substring(12, 14);

        timestamp = new Date(parseInt(year), parseInt(month), parseInt(day), parseInt(hours), parseInt(minutes), parseInt(seconds))

        data.addRow([
            timestamp,
            parseInt(dataValue[20].min[i]),
            parseInt(dataValue[20].max[i]),
            parseInt(dataValue[20].min[i]),
            parseInt(dataValue[20].max[i]),
            parseFloat(dataValue[0][i]),
            parseInt(dataValue[25][i]),
            parseInt(dataValue[25][i]),
            parseInt(dataValue[26][i]),
            parseInt(dataValue[26][i]),
            dataValue[27][i],
        ]);
    }

    var options = {
        colors: ['#FAA7B8', 'darkseagreen', 'bisque'],
        tooltip: {isHtml: true},
        backgroundColor: 'transparent',
        height: "100%",
        legend: "none",
        fontSize: 15,
        pointSize: 0,
        lineWidth: 1.5,
        seriesType: 'candlesticks',
        series: {
            1: {
                type: 'line',
            },
        },
        candlestick: {
            fallingColor: {strokeWidth: 0, fill: 'transparent'},
            risingColor: {strokeWidth: 0, fill: 'transparent'}
        },
        hAxis: {
            gridlines: {
                color: '#777',
                units: {
                    days: {format: ['MM/dd']},
                }
            },
            minorGridlines: {
                color: '#333',
                units: {
                    hours: {format: ['ha']},
                },
            }
        },
        vAxis: {
            title: "MAP",
            ticks: [0, 50, 100, 150],
            baselineColor: '#777',
            gridlineColor: '#777',
        },
        chartArea: {
            width: '96%',
            height: '73%'
        },
    };

    var chart_MAP = new google.visualization.ComboChart(document.getElementById('chart_MAP'));
    chart_MAP.draw(data, options);
}

function drawETCO2Chart() {
    var data = new google.visualization.DataTable();
    interventionTimestamp(0, 60)

    data.addColumn('date', 'Time of Day');
    data.addColumn('number', 'OP_BP_min1');
    data.addColumn('number', 'OP_BP_min2');
    data.addColumn('number', 'OP_BP_max1');
    data.addColumn('number', 'OP_BP_max2');
    data.addColumn('number', 'ETCO2');

    for (let i in dataValue[4]) {
        let timestamp = String(dataValue[4][i]);

        let year = timestamp.substring(0, 4);
        let month = timestamp.substring(4, 6) - 1;
        let day = timestamp.substring(6, 8);
        let hours = timestamp.substring(8, 10);
        let minutes = timestamp.substring(10, 12);
        let seconds = timestamp.substring(12, 14);

        timestamp = new Date(parseInt(year), parseInt(month), parseInt(day), parseInt(hours), parseInt(minutes), parseInt(seconds))

        data.addRow([
            timestamp,
            parseFloat(dataValue[21].min[i]),
            parseFloat(dataValue[21].max[i]),
            parseFloat(dataValue[21].min[i]),
            parseFloat(dataValue[21].max[i]),
            parseFloat(dataValue[3][i]),
        ]);
    }

    var options = {
        colors: ['#FAA7B8', '#6096FD'],
        tooltip: {isHtml: true},
        backgroundColor: 'transparent',
        height: "100%",
        legend: "none",
        fontSize: 15,
        pointSize: 0,
        lineWidth: 1.5,
        intervals: {
            color: "bisque"
        },
        hAxis: {
            gridlines: {
                color: '#777',
                units: {
                    days: {format: ['MM/dd']},
                    hours: {format: ['ha']},
                }
            },
            minorGridlines: {
                color: '#333',
                units: {
                    hours: {format: ['ha']},
                },
            }
        },
        vAxis: {
            title: "ETCO2",
            ticks: [0, 10, 20, 30, 40, 50, 60],
            baselineColor: '#777',
            gridlineColor: '#777',
        },
        chartArea: {
            width: '96%',
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
    };

    var chart_ETCO2 = new google.visualization.ComboChart(document.getElementById('chart_ETCO2'));
    chart_ETCO2.draw(data, options);
}


let jsonData_input = $.ajax({
    url: "./../data/3_input.json",
    dataType: "json",
    async: false
}).responseText;

jsonData_input = JSON.parse(jsonData_input)
const dataValue_input = Object.values(jsonData_input)

// input에 의해 SJVO2, AJDO2 등이 찍히는 시간표
let nullArray_inputChart = []
for (let i in dataValue_input[0]) {
    nullArray_inputChart.push(null)
}

dataValue_input[4] = [...nullArray_inputChart]
dataValue_input[5] = [...nullArray_inputChart]
dataValue_input[6] = [...nullArray_inputChart]

const interventionInput = (minInterval, maxInterval) => {
// 2020/5/5 16:12
    dataValue_input[4][82] = minInterval
    dataValue_input[5][82] = maxInterval
    dataValue_input[6][82] = "vasopressor increase"

// 2020/5/5 21:16
    dataValue_input[4][143] = minInterval
    dataValue_input[5][143] = maxInterval
    dataValue_input[6][143] = "vasopressor increase"

// 2020/5/6 04:00
    dataValue_input[4][224] = minInterval
    dataValue_input[5][224] = maxInterval
    dataValue_input[6][224] = "TTM start normothermia"

// 2020/5/6 09:27
    dataValue_input[4][289] = minInterval
    dataValue_input[5][289] = maxInterval
    dataValue_input[6][289] = "stop NMB"

// 2020/5/6 12:04
    dataValue_input[4][321] = minInterval
    dataValue_input[5][321] = maxInterval
    dataValue_input[6][321] = "vasopressor increase"

// 2020/5/6 16:45
    dataValue_input[4][377] = minInterval
    dataValue_input[5][377] = maxInterval
    dataValue_input[6][377] = "transfusion"

// 2020/5/6 19:02
    dataValue_input[4][404] = minInterval
    dataValue_input[5][404] = maxInterval
    dataValue_input[6][404] = "transfusion"

// 2020/5/7 06:00
    dataValue_input[4][536] = minInterval
    dataValue_input[5][536] = maxInterval
    dataValue_input[6][536] = "stop sedation"

// 2020/5/7 07:00
    dataValue_input[4][548] = minInterval
    dataValue_input[5][548] = maxInterval
    dataValue_input[6][548] = "adjust oxygenation"

// 2020/5/7 07:45
    dataValue_input[4][557] = minInterval
    dataValue_input[5][557] = maxInterval
    dataValue_input[6][557] = "adjust ventilation"

// 2020/5/7 08:42
    dataValue_input[4][568] = minInterval
    dataValue_input[5][568] = maxInterval
    dataValue_input[6][568] = "TTM stop"

// 2020/5/7 09:00
    dataValue_input[4][572] = minInterval
    dataValue_input[5][572] = maxInterval
    dataValue_input[6][572] = "adjust oxygenation"

// 2020/5/7 10:10
    dataValue_input[4][586] = minInterval
    dataValue_input[5][586] = maxInterval
    dataValue_input[6][586] = "increase sedation"

// 2020/5/7 10:31    No Intervention
    dataValue_input[4][590] = minInterval
    dataValue_input[5][590] = maxInterval
    dataValue_input[6][590] = " "
}

function drawSJVO2Chart() {
    var data = new google.visualization.DataTable(jsonData_input);
    interventionInput(0, 100)

    data.addColumn('date', 'Time of Day');
    data.addColumn('number', 'SJVO2');
    data.addColumn('number', 'intervention');
    data.addColumn('number', 'intervention');
    data.addColumn('number', 'intervention');
    data.addColumn('number', 'intervention');
    data.addColumn({'type': 'string', 'role': 'tooltip'});

    for (let i in dataValue_input[0]) {
        let timestamp = String(dataValue_input[0][i]);

        let year = timestamp.substring(0, 4);
        let month = timestamp.substring(4, 6) - 1;
        let day = timestamp.substring(6, 8);
        let hours = timestamp.substring(8, 10);
        let minutes = timestamp.substring(10, 12);
        let seconds = timestamp.substring(12, 14);

        timestamp = new Date(parseInt(year), parseInt(month), parseInt(day), parseInt(hours), parseInt(minutes), parseInt(seconds))

        data.addRow([
            timestamp,
            parseFloat(dataValue_input[1][i]),
            parseInt(dataValue_input[4][i]),
            parseInt(dataValue_input[4][i]),
            parseInt(dataValue_input[5][i]),
            parseInt(dataValue_input[5][i]),
            dataValue_input[6][i],
        ]);
    }

    var options = {
        colors: ['#47CACC', 'bisque'],
        tooltip: {isHtml: true},
        backgroundColor: 'transparent',
        height: "100%",
        legend: "none",
        fontSize: 15,
        pointSize: 5,
        seriesType: 'line',
        series: {
            1: {
                type: 'candlesticks',
            },
        },
        candlestick: {
            fallingColor: {strokeWidth: 0, fill: 'transparent'},
            risingColor: {strokeWidth: 0, fill: 'transparent'},
        },
        hAxis: {
            gridlines: {
                color: '#777',
                units: {
                    days: {format: ['MM/dd']},
                }
            },
            minorGridlines: {
                color: '#333',
                units: {
                    hours: {format: ['ha']},
                },
            }
        },
        vAxis: {
            title: "SJVO2",
            ticks: [0, 20, 40, 60, 80, 100],
            baselineColor: '#777',
            gridlineColor: '#777',
        },
        chartArea: {
            width: '96%',
            height: '73%'
        }
    };

    var chart_SJVO2 = new google.visualization.ComboChart(document.getElementById('chart_SJVO2'));
    chart_SJVO2.draw(data, options);
}

function drawAJDLChart() {
    var data = new google.visualization.DataTable();
    data.addColumn('date', 'Time of Day');
    data.addColumn('number', 'AJDL');

    for (let i in dataValue_input[0]) {
        let timestamp = String(dataValue_input[0][i]);

        let year = timestamp.substring(0, 4);
        let month = timestamp.substring(4, 6) - 1;
        let day = timestamp.substring(6, 8);
        let hours = timestamp.substring(8, 10);
        let minutes = timestamp.substring(10, 12);
        let seconds = timestamp.substring(12, 14);

        timestamp = new Date(parseInt(year), parseInt(month), parseInt(day), parseInt(hours), parseInt(minutes), parseInt(seconds))

        data.addRow([
            timestamp,
            parseFloat(dataValue_input[2][i]),
        ]);
    }

    var options = {
        colors: ["#47CACC"],
        tooltip: {isHtml: true},
        backgroundColor: 'transparent',
        height: "100%",
        legend: "none",
        fontSize: 15,
        pointSize: 5,
        intervals: {
            color: 'bisque'
        },
        hAxis: {
            gridlines: {
                color: '#777',
                units: {
                    days: {format: ['MM/dd']},
                    hours: {format: ['ha']},
                }
            },
            minorGridlines: {
                color: '#333',
                units: {
                    hours: {format: ['ha']},
                },
            }
        },
        vAxis: {
            title: "AJDL",
            baselineColor: '#777',
            gridlineColor: '#777',
            minorGridlines: {
                color: '#333',
            }
        },
        chartArea: {
            width: '96%',
            height: '73%'
        }
    };

    var chart_AJDL = new google.visualization.LineChart(document.getElementById('chart_AJDL'));

    chart_AJDL.draw(data, options);
}

function drawLOIChart() {
    var data_LOI = new google.visualization.DataTable();
    data_LOI.addColumn('date', 'Time of Day');
    data_LOI.addColumn('number', 'LOI');
    data_LOI.addColumn({'type': 'number', 'role': 'interval'});
    data_LOI.addColumn({'type': 'number', 'role': 'interval'});
    data_LOI.addRows([
        [new Date(2020, 4, 20, 13), 0, null, null],
        [new Date(2020, 4, 20, 14), 1, null, null],
        [new Date(2020, 4, 20, 15), 3, null, null],
        [new Date(2020, 4, 20, 16), 7, null, null],
        [new Date(2020, 4, 20, 17), 5, null, null],
        [new Date(2020, 4, 20, 18), 0, null, null],
        [new Date(2020, 4, 20, 19), 2, null, null],
        [new Date(2020, 4, 20, 20), 3, null, null],
        [new Date(2020, 4, 20, 21), 1, null, null],
        [new Date(2020, 4, 20, 22), 8, -5, 10],
        [new Date(2020, 4, 20, 23), 6, null, null],
        [new Date(2020, 4, 20, 24), 5, null, null],
        [new Date(2020, 4, 21, 1), 2, null, null],
        [new Date(2020, 4, 21, 2), 3, null, null],
        [new Date(2020, 4, 21, 3), 7, null, null],
        [new Date(2020, 4, 21, 4), 0, null, null],
        [new Date(2020, 4, 21, 5), 1, null, null],
        [new Date(2020, 4, 21, 6), 6, null, null],
        [new Date(2020, 4, 21, 7), 4, null, null],
        [new Date(2020, 4, 21, 8), 7, null, null],
        [new Date(2020, 4, 21, 9), 8, null, null],
        [new Date(2020, 4, 21, 10), 4, null, null],
        [new Date(2020, 4, 21, 11), 6, null, null],
        [new Date(2020, 4, 21, 12), 7, null, null],
        [new Date(2020, 4, 21, 13), 8, null, null],
        [new Date(2020, 4, 21, 14), 7, null, null],
        [new Date(2020, 4, 21, 15), 4, null, null],
        [new Date(2020, 4, 21, 16), 0, null, null],
        [new Date(2020, 4, 21, 17), 5, null, null],
        [new Date(2020, 4, 21, 18), 3, null, null],
        [new Date(2020, 4, 21, 19), 2, null, null],
        [new Date(2020, 4, 21, 20), 1, null, null],
        [new Date(2020, 4, 21, 21), 4, null, null],
        [new Date(2020, 4, 21, 22), 7, null, null],
        [new Date(2020, 4, 21, 23), 4, null, null],
        [new Date(2020, 4, 21, 24), 6, null, null],
        [new Date(2020, 4, 22, 1), 8, null, null],
        [new Date(2020, 4, 22, 2), 4, null, null],
        [new Date(2020, 4, 22, 3), 1, null, null],
        [new Date(2020, 4, 22, 4), 2, null, null],
    ]);

    var options_LOI = {
        colors: ["#47CACC"],
        tooltip: {isHtml: true},
        backgroundColor: 'transparent',
        height: "100%",
        legend: "none",
        fontSize: 15,
        pointSize: 5,
        intervals: {
            color: 'bisque'
        },
        hAxis: {
            viewWindow: {
                min: new Date(2020, 4, 20, 13),
                max: new Date(2020, 4, 22, 4)
            },
            gridlines: {
                color: '#777',
                units: {
                    days: {format: ['MM/dd']},
                    hours: {format: ['ha']},
                }
            },
            minorGridlines: {
                color: '#333',
                units: {
                    hours: {format: ['ha']},
                },
            }
        },
        vAxis: {
            title: "LOI",
            baselineColor: '#777',
            gridlineColor: '#777',
            minorGridlines: {
                color: '#333',
            }
        },
        chartArea: {
            width: '96%',
            height: '73%'
        }
    };

    var chart_LOI = new google.visualization.ScatterChart(document.getElementById('chart_LOI'));

    chart_LOI.draw(data_LOI, options_LOI);
}

function drawAJDO2Chart() {
    var data = new google.visualization.DataTable(jsonData_input);
    interventionInput(0, 6)

    data.addColumn('date', 'Time of Day');
    data.addColumn('number', 'AJDO2');
    data.addColumn('number', 'intervention');
    data.addColumn('number', 'intervention');
    data.addColumn('number', 'intervention');
    data.addColumn('number', 'intervention');
    data.addColumn({'type': 'string', 'role': 'tooltip'});

    for (let i in dataValue_input[0]) {
        minInterval = 0
        maxInterval = 5
        let timestamp = String(dataValue_input[0][i]);

        let year = timestamp.substring(0, 4);
        let month = timestamp.substring(4, 6) - 1;
        let day = timestamp.substring(6, 8);
        let hours = timestamp.substring(8, 10);
        let minutes = timestamp.substring(10, 12);
        let seconds = timestamp.substring(12, 14);

        timestamp = new Date(parseInt(year), parseInt(month), parseInt(day), parseInt(hours), parseInt(minutes), parseInt(seconds))

        data.addRow([
            timestamp,
            parseFloat(dataValue_input[2][i]),
            parseInt(dataValue_input[4][i]),
            parseInt(dataValue_input[4][i]),
            parseInt(dataValue_input[5][i]),
            parseInt(dataValue_input[5][i]),
            dataValue_input[6][i],
        ]);
    }

    var options = {
        colors: ["#47CACC", 'bisque'],
        tooltip: {isHtml: true},
        backgroundColor: 'transparent',
        height: "100%",
        legend: "none",
        fontSize: 15,
        pointSize: 5,
        seriesType: 'line',
        series: {
            1: {
                type: 'candlesticks',
            },
        },
        candlestick: {
            fallingColor: {strokeWidth: 0, fill: 'transparent'},
            risingColor: {strokeWidth: 0, fill: 'transparent'},
        },
        hAxis: {
            gridlines: {
                color: '#777',
                units: {
                    days: {format: ['MM/dd']},
                }
            },
            minorGridlines: {
                color: '#333',
                units: {
                    hours: {format: ['ha']},
                },
            }
        },
        vAxis: {
            title: "AJDO2",
            baselineColor: '#777',
            gridlineColor: '#777',
            minorGridlines: {
                color: '#333',
            }
        },
        chartArea: {
            width: '96%',
            height: '73%'
        }
    };

    var chart_AJDO2 = new google.visualization.LineChart(document.getElementById('chart_AJDO2'));

    chart_AJDO2.draw(data, options);
}

function drawCEO2Chart() {
    var data = new google.visualization.DataTable(jsonData_input);
    interventionInput(0, 60)

    data.addColumn('date', 'Time of Day');
    data.addColumn('number', 'CEO2');
    data.addColumn('number', 'intervention');
    data.addColumn('number', 'intervention');
    data.addColumn('number', 'intervention');
    data.addColumn('number', 'intervention');
    data.addColumn({'type': 'string', 'role': 'tooltip'});

    for (let i in dataValue_input[0]) {
        let timestamp = String(dataValue_input[0][i]);

        let year = timestamp.substring(0, 4);
        let month = timestamp.substring(4, 6) - 1;
        let day = timestamp.substring(6, 8);
        let hours = timestamp.substring(8, 10);
        let minutes = timestamp.substring(10, 12);
        let seconds = timestamp.substring(12, 14);

        timestamp = new Date(parseInt(year), parseInt(month), parseInt(day), parseInt(hours), parseInt(minutes), parseInt(seconds))

        data.addRow([
            timestamp,
            parseFloat(dataValue_input[3][i]),
            parseInt(dataValue_input[4][i]),
            parseInt(dataValue_input[4][i]),
            parseInt(dataValue_input[5][i]),
            parseInt(dataValue_input[5][i]),
            dataValue_input[6][i],
        ]);
    }

    var options = {
        colors: ["#47CACC", 'bisque'],
        tooltip: {isHtml: true},
        backgroundColor: 'transparent',
        height: "100%",
        legend: "none",
        fontSize: 15,
        pointSize: 5,
        seriesType: 'line',
        series: {
            1: {
                type: 'candlesticks',
            },
        },
        candlestick: {
            fallingColor: {strokeWidth: 0, fill: 'transparent'},
            risingColor: {strokeWidth: 0, fill: 'transparent'},
        },
        hAxis: {
            gridlines: {
                color: '#777',
                units: {
                    days: {format: ['MM/dd']},
                }
            },
            minorGridlines: {
                color: '#333',
                units: {
                    hours: {format: ['ha']},
                },
            }
        },
        vAxis: {
            title: "CEO2",
            ticks: [0, 10, 20, 30, 40, 50, 60],
            baselineColor: '#777',
            gridlineColor: '#777',
        },
        chartArea: {
            width: '96%',
            height: '73%'
        }
    };

    var chart_CEO2 = new google.visualization.LineChart(document.getElementById("chart_CEO2"));
    chart_CEO2.draw(data, options);
}

function drawAJglcChart() {
    var data_AJglc = new google.visualization.DataTable();
    data_AJglc.addColumn('date', 'Time of Day');
    data_AJglc.addColumn('number', 'AJglc');
    data_AJglc.addColumn({'type': 'number', 'role': 'interval'});
    data_AJglc.addColumn({'type': 'number', 'role': 'interval'});
    data_AJglc.addRows([
        [new Date(2020, 4, 20, 13), 0, null, null],
        [new Date(2020, 4, 20, 14), 1, null, null],
        [new Date(2020, 4, 20, 15), 3, null, null],
        [new Date(2020, 4, 20, 16), 7, null, null],
        [new Date(2020, 4, 20, 17), 5, null, null],
        [new Date(2020, 4, 20, 18), 0, null, null],
        [new Date(2020, 4, 20, 19), 2, null, null],
        [new Date(2020, 4, 20, 20), 3, null, null],
        [new Date(2020, 4, 20, 21), 1, null, null],
        [new Date(2020, 4, 20, 22), 8, -5, 10],
        [new Date(2020, 4, 20, 23), 6, null, null],
        [new Date(2020, 4, 20, 24), 5, null, null],
        [new Date(2020, 4, 21, 1), 2, null, null],
        [new Date(2020, 4, 21, 2), 3, null, null],
        [new Date(2020, 4, 21, 3), 7, null, null],
        [new Date(2020, 4, 21, 4), 0, null, null],
        [new Date(2020, 4, 21, 5), 1, null, null],
        [new Date(2020, 4, 21, 6), 6, null, null],
        [new Date(2020, 4, 21, 7), 4, null, null],
        [new Date(2020, 4, 21, 8), 7, null, null],
        [new Date(2020, 4, 21, 9), 8, null, null],
        [new Date(2020, 4, 21, 10), 4, null, null],
        [new Date(2020, 4, 21, 11), 6, null, null],
        [new Date(2020, 4, 21, 12), 7, null, null],
        [new Date(2020, 4, 21, 13), 8, null, null],
        [new Date(2020, 4, 21, 14), 7, null, null],
        [new Date(2020, 4, 21, 15), 4, null, null],
        [new Date(2020, 4, 21, 16), 0, null, null],
        [new Date(2020, 4, 21, 17), 5, null, null],
        [new Date(2020, 4, 21, 18), 3, null, null],
        [new Date(2020, 4, 21, 19), 2, null, null],
        [new Date(2020, 4, 21, 20), 1, null, null],
        [new Date(2020, 4, 21, 21), 4, null, null],
        [new Date(2020, 4, 21, 22), 7, null, null],
        [new Date(2020, 4, 21, 23), 4, null, null],
        [new Date(2020, 4, 21, 24), 6, null, null],
        [new Date(2020, 4, 22, 1), 8, null, null],
        [new Date(2020, 4, 22, 2), 4, null, null],
        [new Date(2020, 4, 22, 3), 1, null, null],
        [new Date(2020, 4, 22, 4), 2, null, null],
    ]);

    var options_AJglc = {
        colors: ["#47CACC"],
        tooltip: {isHtml: true},
        backgroundColor: 'transparent',
        height: "100%",
        legend: "none",
        fontSize: 15,
        pointSize: 5,
        intervals: {
            color: 'bisque'
        },
        hAxis: {
            viewWindow: {
                min: new Date(2020, 4, 20, 13),
                max: new Date(2020, 4, 22, 4)
            },
            gridlines: {
                color: '#777',
                units: {
                    days: {format: ['MM/dd']},
                    hours: {format: ['ha']},
                }
            },
            minorGridlines: {
                color: '#333',
                units: {
                    hours: {format: ['ha']},
                },
            }
        },
        vAxis: {
            title: "AJglc",
            baselineColor: '#777',
            gridlineColor: '#777',
            minorGridlines: {
                color: '#333',
            }
        },
        chartArea: {
            width: '96%',
            height: '73%'
        }
    };

    var chart_AJglc = new google.visualization.ScatterChart(document.getElementById('chart_AJglc'));

    chart_AJglc.draw(data_AJglc, options_AJglc);
}

function drawAJCO2Chart() {
    var data_AJCO2 = new google.visualization.DataTable();
    data_AJCO2.addColumn('date', 'Time of Day');
    data_AJCO2.addColumn('number', 'AJCO2');
    data_AJCO2.addColumn({'type': 'number', 'role': 'interval'});
    data_AJCO2.addColumn({'type': 'number', 'role': 'interval'});
    data_AJCO2.addRows([
        [new Date(2020, 4, 20, 13), 30, null, null],
        [new Date(2020, 4, 20, 14), 32, null, null],
        [new Date(2020, 4, 20, 15), 26, null, null],
        [new Date(2020, 4, 20, 16), 28, null, null],
        [new Date(2020, 4, 20, 17), 29, null, null],
        [new Date(2020, 4, 20, 18), 33, null, null],
        [new Date(2020, 4, 20, 19), 39, null, null],
        [new Date(2020, 4, 20, 20), 32, null, null],
        [new Date(2020, 4, 20, 21), 31, null, null],
        [new Date(2020, 4, 20, 22), 30, 0, 60],
        [new Date(2020, 4, 20, 23), 37, null, null],
        [new Date(2020, 4, 20, 24), 35, null, null],
        [new Date(2020, 4, 21, 1), 33, null, null],
        [new Date(2020, 4, 21, 2), 34, null, null],
        [new Date(2020, 4, 21, 3), 32, null, null],
        [new Date(2020, 4, 21, 4), 31, null, null],
        [new Date(2020, 4, 21, 5), 30, null, null],
        [new Date(2020, 4, 21, 6), 27, null, null],
        [new Date(2020, 4, 21, 7), 28, null, null],
        [new Date(2020, 4, 21, 8), 31, null, null],
        [new Date(2020, 4, 21, 9), 30, null, null],
        [new Date(2020, 4, 21, 10), 31, null, null],
        [new Date(2020, 4, 21, 11), 34, null, null],
        [new Date(2020, 4, 21, 12), 36, null, null],
        [new Date(2020, 4, 21, 13), 38, null, null],
        [new Date(2020, 4, 21, 14), 37, null, null],
        [new Date(2020, 4, 21, 15), 34, null, null],
        [new Date(2020, 4, 21, 16), 30, null, null],
        [new Date(2020, 4, 21, 17), 35, null, null],
        [new Date(2020, 4, 21, 18), 33, null, null],
        [new Date(2020, 4, 21, 19), 32, null, null],
        [new Date(2020, 4, 21, 20), 31, null, null],
        [new Date(2020, 4, 21, 21), 34, null, null],
        [new Date(2020, 4, 21, 22), 37, null, null],
        [new Date(2020, 4, 21, 23), 34, null, null],
        [new Date(2020, 4, 21, 24), 36, null, null],
        [new Date(2020, 4, 22, 1), 28, null, null],
        [new Date(2020, 4, 22, 2), 24, null, null],
        [new Date(2020, 4, 22, 3), 31, null, null],
        [new Date(2020, 4, 22, 4), 32, null, null],
    ]);

    var options_AJCO2 = {
        colors: ["#47CACC"],
        tooltip: {isHtml: true},
        backgroundColor: 'transparent',
        height: "100%",
        legend: "none",
        fontSize: 15,
        pointSize: 5,
        intervals: {
            color: 'bisque'
        },
        hAxis: {
            viewWindow: {
                min: new Date(2020, 4, 20, 13),
                max: new Date(2020, 4, 22, 4)
            },
            gridlines: {
                color: '#777',
                units: {
                    days: {format: ['MM/dd']},
                    hours: {format: ['ha']},
                }
            },
            minorGridlines: {
                color: '#333',
                units: {
                    hours: {format: ['ha']},
                },
            }
        },
        vAxis: {
            title: "AJCO2",
            ticks: [0, 10, 20, 30, 40, 50, 60],
            baselineColor: '#777',
            gridlineColor: '#777',
            minorGridlines: {
                color: '#333',
            }
        },
        chartArea: {
            width: '96%',
            height: '73%'
        }
    };

    var chart_AJCO2 = new google.visualization.AreaChart(document.getElementById("chart_AJCO2"));
    chart_AJCO2.draw(data_AJCO2, options_AJCO2);
}

function drawRQChart() {
    var data_RQ = new google.visualization.DataTable();
    data_RQ.addColumn('date', 'Time of Day');
    data_RQ.addColumn('number', 'RQ');
    data_RQ.addColumn({'type': 'number', 'role': 'interval'});
    data_RQ.addColumn({'type': 'number', 'role': 'interval'});
    data_RQ.addRows([
        [new Date(2020, 4, 20, 13), 0, null, null],
        [new Date(2020, 4, 20, 14), 1, null, null],
        [new Date(2020, 4, 20, 15), 3, null, null],
        [new Date(2020, 4, 20, 16), 7, null, null],
        [new Date(2020, 4, 20, 17), 5, null, null],
        [new Date(2020, 4, 20, 18), 0, null, null],
        [new Date(2020, 4, 20, 19), 2, null, null],
        [new Date(2020, 4, 20, 20), 3, null, null],
        [new Date(2020, 4, 20, 21), 1, null, null],
        [new Date(2020, 4, 20, 22), 8, -5, 10],
        [new Date(2020, 4, 20, 23), 6, null, null],
        [new Date(2020, 4, 20, 24), 5, null, null],
        [new Date(2020, 4, 21, 1), 2, null, null],
        [new Date(2020, 4, 21, 2), 3, null, null],
        [new Date(2020, 4, 21, 3), 7, null, null],
        [new Date(2020, 4, 21, 4), 0, null, null],
        [new Date(2020, 4, 21, 5), 1, null, null],
        [new Date(2020, 4, 21, 6), 6, null, null],
        [new Date(2020, 4, 21, 7), 4, null, null],
        [new Date(2020, 4, 21, 8), 7, null, null],
        [new Date(2020, 4, 21, 9), 8, null, null],
        [new Date(2020, 4, 21, 10), 4, null, null],
        [new Date(2020, 4, 21, 11), 6, null, null],
        [new Date(2020, 4, 21, 12), 7, null, null],
        [new Date(2020, 4, 21, 13), 8, null, null],
        [new Date(2020, 4, 21, 14), 7, null, null],
        [new Date(2020, 4, 21, 15), 4, null, null],
        [new Date(2020, 4, 21, 16), 0, null, null],
        [new Date(2020, 4, 21, 17), 5, null, null],
        [new Date(2020, 4, 21, 18), 3, null, null],
        [new Date(2020, 4, 21, 19), 2, null, null],
        [new Date(2020, 4, 21, 20), 1, null, null],
        [new Date(2020, 4, 21, 21), 4, null, null],
        [new Date(2020, 4, 21, 22), 7, null, null],
        [new Date(2020, 4, 21, 23), 4, null, null],
        [new Date(2020, 4, 21, 24), 6, null, null],
        [new Date(2020, 4, 22, 1), 8, null, null],
        [new Date(2020, 4, 22, 2), 4, null, null],
        [new Date(2020, 4, 22, 3), 1, null, null],
        [new Date(2020, 4, 22, 4), 2, null, null],
    ]);

    var options_RQ = {
        colors: ["#47CACC"],
        tooltip: {isHtml: true},
        backgroundColor: 'transparent',
        height: "100%",
        legend: "none",
        fontSize: 15,
        pointSize: 5,
        intervals: {
            color: 'bisque'
        },
        hAxis: {
            viewWindow: {
                min: new Date(2020, 4, 20, 13),
                max: new Date(2020, 4, 22, 4)
            },
            gridlines: {
                color: '#777',
                units: {
                    days: {format: ['MM/dd']},
                    hours: {format: ['ha']},
                }
            },
            minorGridlines: {
                color: '#333',
                units: {
                    hours: {format: ['ha']},
                },
            }
        },
        vAxis: {
            title: "RQ",
            baselineColor: '#777',
            gridlineColor: '#777',
            minorGridlines: {
                color: '#333',
            }
        },
        chartArea: {
            width: '96%',
            height: '73%'
        }
    };

    var chart_RQ = new google.visualization.ScatterChart(document.getElementById('chart_RQ'));
    chart_RQ.draw(data_RQ, options_RQ);
}

function drawNPIChart() {
    var data_NPI = new google.visualization.DataTable();
    data_NPI.addColumn('datetime', 'Time of Day');
    data_NPI.addColumn('number', 'Left');
    data_NPI.addColumn('number', 'Right');
    data_NPI.addColumn({'type': 'number', 'role': 'interval'});
    data_NPI.addColumn({'type': 'number', 'role': 'interval'});
    data_NPI.addRows([
        [new Date(2020, 4, 20, 13), 3.92, 4.12, null, null],
        [new Date(2020, 4, 20, 14), 4.21, 4.21, null, null],
        [new Date(2020, 4, 20, 15), 3.24, 3.57, null, null],
        [new Date(2020, 4, 20, 16), 3.54, 3.94, null, null],
        [new Date(2020, 4, 20, 17), 3.21, 3.75, null, null],
        [new Date(2020, 4, 20, 18), 3.9, 4.53, null, null],
        [new Date(2020, 4, 20, 19), 3.57, 4.18, null, null],
        [new Date(2020, 4, 20, 20), 4.5, 4.23, null, null],
        [new Date(2020, 4, 20, 21), 4.21, 3.75, null, null],
        [new Date(2020, 4, 20, 22), 4.38, 3.95, 0, 5],
        [new Date(2020, 4, 20, 23), 4.18, 3.64, null, null],
        [new Date(2020, 4, 20, 24), 3.97, 3.71, null, null],
        [new Date(2020, 4, 21, 1), 3.12, 3.41, null, null],
        [new Date(2020, 4, 21, 2), 3.37, 3.97, null, null],
        [new Date(2020, 4, 21, 3), 3.94, 3.74, null, null],
        [new Date(2020, 4, 21, 4), 3.57, 4.31, null, null],
        [new Date(2020, 4, 21, 5), 3.74, 4.12, null, null],
        [new Date(2020, 4, 21, 6), 4.32, 4.64, null, null],
        [new Date(2020, 4, 21, 7), 4.12, 4.32, null, null],
        [new Date(2020, 4, 21, 8), 4.02, 3.75, null, null],
        [new Date(2020, 4, 21, 9), 3.94, 3.74, null, null],
        [new Date(2020, 4, 21, 10), 3.94, 3.74, null, null],
        [new Date(2020, 4, 21, 11), 3.94, 3.74, null, null],
        [new Date(2020, 4, 21, 12), 3.94, 3.74, null, null],
        [new Date(2020, 4, 21, 13), 3.94, 3.74, null, null],
        [new Date(2020, 4, 21, 14), 3.94, 3.74, null, null],
        [new Date(2020, 4, 21, 15), 3.94, 3.74, null, null],
        [new Date(2020, 4, 21, 16), 3.94, 3.74, null, null],
        [new Date(2020, 4, 21, 17), 3.94, 3.74, null, null],
        [new Date(2020, 4, 21, 18), 3.94, 3.74, null, null],
        [new Date(2020, 4, 21, 19), 3.94, 3.74, null, null],
        [new Date(2020, 4, 21, 20), 3.94, 3.74, null, null],
        [new Date(2020, 4, 21, 21), 3.94, 3.74, null, null],
        [new Date(2020, 4, 21, 22), 3.94, 3.74, null, null],
        [new Date(2020, 4, 21, 23), 3.94, 3.74, null, null],
        [new Date(2020, 4, 21, 24), 3.94, 3.74, null, null],
        [new Date(2020, 4, 22, 1), 3.94, 3.74, null, null],
        [new Date(2020, 4, 22, 2), 3.94, 3.74, null, null],
        [new Date(2020, 4, 22, 3), 3.94, 3.74, null, null],
        [new Date(2020, 4, 22, 4), 3.94, 3.74, null, null],
    ]);

    var options_NPI = {
        colors: ['#FAA7B8', '#6096FD'],
        tooltip: {isHtml: true},
        backgroundColor: 'transparent',
        height: "100%",
        legend: "none",
        fontSize: 15,
        pointSize: 5,
        intervals: {
            color: 'bisque'
        },
        hAxis: {
            viewWindow: {
                min: new Date(2020, 4, 20, 13),
                max: new Date(2020, 4, 22, 4)
            },
            gridlines: {
                color: '#777',
                units: {
                    days: {format: ['MM/dd']},
                    hours: {format: ['ha']},
                }
            },
            minorGridlines: {
                color: '#333',
                units: {
                    hours: {format: ['ha']},
                },
            }
        },
        vAxis: {
            title: "NPI",
            ticks: [0, 1, 2, 3, 4, 5],
            baselineColor: '#777',
            gridlineColor: '#777',
            minorGridlines: {
                color: '#333',
            }
        },
        chartArea: {
            width: '96%',
            height: '73%'
        }
    };

    var chart_NPI = new google.visualization.ScatterChart(document.getElementById('chart_NPI'));
    chart_NPI.draw(data_NPI, options_NPI);
}

function drawPupilChart() {
    var data_pupil = new google.visualization.DataTable();
    data_pupil.addColumn('datetime', 'Time of Day');
    data_pupil.addColumn('number', 'Left');
    data_pupil.addColumn('number', 'Right');
    data_pupil.addColumn({'type': 'number', 'role': 'interval'});
    data_pupil.addColumn({'type': 'number', 'role': 'interval'});
    data_pupil.addRows([
        [new Date(2020, 4, 20, 13), 3.92, 4.12, null, null],
        [new Date(2020, 4, 20, 14), 4.21, 4.21, null, null],
        [new Date(2020, 4, 20, 15), 3.24, 3.57, null, null],
        [new Date(2020, 4, 20, 16), 3.54, 3.94, null, null],
        [new Date(2020, 4, 20, 17), 3.21, 3.75, null, null],
        [new Date(2020, 4, 20, 18), 3.9, 4.53, null, null],
        [new Date(2020, 4, 20, 19), 3.57, 4.18, null, null],
        [new Date(2020, 4, 20, 20), 4.5, 4.23, null, null],
        [new Date(2020, 4, 20, 21), 4.21, 3.75, null, null],
        [new Date(2020, 4, 20, 22), 4.38, 3.95, 0, 5],
        [new Date(2020, 4, 20, 23), 4.18, 3.64, null, null],
        [new Date(2020, 4, 20, 24), 3.97, 3.71, null, null],
        [new Date(2020, 4, 21, 1), 3.12, 3.41, null, null],
        [new Date(2020, 4, 21, 2), 3.37, 3.97, null, null],
        [new Date(2020, 4, 21, 3), 3.94, 3.74, null, null],
        [new Date(2020, 4, 21, 4), 3.57, 4.31, null, null],
        [new Date(2020, 4, 21, 5), 3.74, 4.12, null, null],
        [new Date(2020, 4, 21, 6), 4.32, 4.64, null, null],
        [new Date(2020, 4, 21, 7), 4.12, 4.32, null, null],
        [new Date(2020, 4, 21, 8), 4.02, 3.75, null, null],
        [new Date(2020, 4, 21, 9), 3.94, 3.74, null, null],
        [new Date(2020, 4, 21, 10), 3.94, 3.74, null, null],
        [new Date(2020, 4, 21, 11), 3.94, 3.74, null, null],
        [new Date(2020, 4, 21, 12), 3.94, 3.74, null, null],
        [new Date(2020, 4, 21, 13), 3.94, 3.74, null, null],
        [new Date(2020, 4, 21, 14), 3.94, 3.74, null, null],
        [new Date(2020, 4, 21, 15), 3.94, 3.74, null, null],
        [new Date(2020, 4, 21, 16), 3.94, 3.74, null, null],
        [new Date(2020, 4, 21, 17), 3.94, 3.74, null, null],
        [new Date(2020, 4, 21, 18), 3.94, 3.74, null, null],
        [new Date(2020, 4, 21, 19), 3.94, 3.74, null, null],
        [new Date(2020, 4, 21, 20), 3.94, 3.74, null, null],
        [new Date(2020, 4, 21, 21), 3.94, 3.74, null, null],
        [new Date(2020, 4, 21, 22), 3.94, 3.74, null, null],
        [new Date(2020, 4, 21, 23), 3.94, 3.74, null, null],
        [new Date(2020, 4, 21, 24), 3.94, 3.74, null, null],
        [new Date(2020, 4, 22, 1), 3.94, 3.74, null, null],
        [new Date(2020, 4, 22, 2), 3.94, 3.74, null, null],
        [new Date(2020, 4, 22, 3), 3.94, 3.74, null, null],
        [new Date(2020, 4, 22, 4), 3.94, 3.74, null, null],
    ]);

    var options_pupil = {
        colors: ['#FAA7B8', '#6096FD'],
        tooltip: {isHtml: true},
        backgroundColor: 'transparent',
        height: "100%",
        legend: "none",
        fontSize: 15,
        pointSize: 5,
        intervals: {
            color: 'bisque'
        },
        hAxis: {
            viewWindow: {
                min: new Date(2020, 4, 20, 13),
                max: new Date(2020, 4, 22, 4)
            },
            gridlines: {
                color: '#777',
                units: {
                    days: {format: ['MM/dd']},
                    hours: {format: ['ha']},
                }
            },
            minorGridlines: {
                color: '#333',
                units: {
                    hours: {format: ['ha']},
                },
            }
        },
        vAxis: {
            title: "Pupil Size",
            ticks: [0, 1, 2, 3, 4, 5],
            baselineColor: '#777',
            gridlineColor: '#777',
            minorGridlines: {
                color: '#333',
            }
        },
        chartArea: {
            width: '96%',
            height: '73%'
        }
    };

    var chart_pupil = new google.visualization.ScatterChart(document.getElementById('chart_pupil'));
    chart_pupil.draw(data_pupil, options_pupil);
}

function drawModalMAPLeftChart() {
    var data = new google.visualization.DataTable();
    data.addColumn('number', 'MAP');
    data.addColumn('number', 'COx Left');

    for (let i in dataValue[5]) {
        data.addRow([
            parseFloat(dataValue[5][i]),
            parseFloat(dataValue[6][i]),
        ])
    }

    var options = {
        colors: ["#47CACC"],
        tooltip: {isHtml: true},
        backgroundColor: 'transparent',
        height: "100%",
        fontSize: 15,
        title: "Time under MAPopt : --hr--min",
        legend: "none",
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
            title: "Left",
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
    };

    var chart_ModalMAPLeft = new google.visualization.ColumnChart(document.getElementById("chart_ModalMAPLeft"));
    chart_ModalMAPLeft.draw(data, options);
}

function drawModalMAPRightChart() {
    var data = new google.visualization.DataTable();
    data.addColumn('number', 'MAP');
    data.addColumn('number', 'COx Right');

    for (let i in dataValue[5]) {
        data.addRow([
            parseFloat(dataValue[5][i]),
            parseFloat(dataValue[7][i]),
        ])
    }

    var options = {
        colors: ["#47CACC"],
        tooltip: {isHtml: true},
        backgroundColor: 'transparent',
        height: "100%",
        fontSize: 15,
        title: "Time under MAPopt : --hr--min",
        legend: "none",
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
            title: "Right",
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
    };

    var chart_ModalMAPRight = new google.visualization.ColumnChart(document.getElementById("chart_ModalMAPRight"));
    chart_ModalMAPRight.draw(data, options);
}

function drawModalMAPMeanChart() {
    var data = new google.visualization.DataTable();
    data.addColumn('number', 'MAP');
    data.addColumn('number', 'COx Avg');

    for (let i in dataValue[5]) {
        data.addRow([
            parseFloat(dataValue[5][i]),
            parseFloat(dataValue[8][i]),
        ])
    }

    var options = {
        colors: ["#47CACC"],
        tooltip: {isHtml: true},
        backgroundColor: 'transparent',
        height: "100%",
        fontSize: 15,
        title: "Time under MAPopt : --hr--min",
        legend: "none",
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
            title: "COx Avg",
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
    };

    var chart_ModalMAPMean = new google.visualization.ColumnChart(document.getElementById("chart_ModalMAPMean"));
    chart_ModalMAPMean.draw(data, options);
}

function drawMAPRSO2Chart() {
    var data = new google.visualization.DataTable();
    data.addColumn('number', 'MAP');
    data.addColumn('number', 'RSO2 Left');
    data.addColumn('number', 'RSO2 Right');

    for (let i in dataValue[0]) {
        data.addRow([
            parseFloat(dataValue[0][i]),
            parseFloat(dataValue[1][i]),
            parseFloat(dataValue[2][i])
        ])
    }

    var options = {
        colors: ["#47CACC"],
        tooltip: {isHtml: true},
        backgroundColor: 'transparent',
        height: "100%",
        legend: "none",
        pointSize: 1,
        fontSize: 15,
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
            baselineColor: '#777',
            gridlineColor: '#777',
            minorGridlines: {
                color: '#333',
            }
        },
        chartArea: {
            width: '96%',
            height: '73%'
        },
        chartArea: {
            width: '80%',
            height: '80%'
        }
    };

    var chart_MAPRSO2 = new google.visualization.ScatterChart(document.getElementById('chart_MAPRSO2'));

    chart_MAPRSO2.draw(data, options);
}

function drawModalETCO2LeftChart() {
    var data = new google.visualization.DataTable();
    data.addColumn('number', 'ETCO2');
    data.addColumn('number', 'COx Left');

    for (let i in dataValue[9]) {
        data.addRow([
            parseFloat(dataValue[9][i]),
            parseFloat(dataValue[10][i]),
        ])
    }

    var options = {
        colors: ["#47CACC"],
        tooltip: {isHtml: true},
        backgroundColor: 'transparent',
        height: "100%",
        fontSize: 15,
        title: "Time under MAPopt : --hr--min",
        legend: "none",
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
            title: "Left",
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
    };

    var chart_ModalETCO2Left = new google.visualization.ColumnChart(document.getElementById("chart_ModalETCO2Left"));
    chart_ModalETCO2Left.draw(data, options);
}

function drawModalETCO2RightChart() {
    var data = new google.visualization.DataTable();
    data.addColumn('number', 'ETCO2');
    data.addColumn('number', 'COx Right');

    for (let i in dataValue[9]) {
        data.addRow([
            parseFloat(dataValue[9][i]),
            parseFloat(dataValue[11][i]),
        ])
    }

    var options = {
        colors: ["#47CACC"],
        tooltip: {isHtml: true},
        backgroundColor: 'transparent',
        height: "100%",
        fontSize: 15,
        title: "Time under MAPopt : --hr--min",
        legend: "none",
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
            title: "Right",
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
    };

    var chart_ModalETCO2Right = new google.visualization.ColumnChart(document.getElementById("chart_ModalETCO2Right"));
    chart_ModalETCO2Right.draw(data, options);
}

function drawModalETCO2MeanChart() {
    var data = new google.visualization.DataTable();
    data.addColumn('number', 'ETCO2');
    data.addColumn('number', 'COx Avg');

    for (let i in dataValue[9]) {
        data.addRow([
            parseFloat(dataValue[9][i]),
            parseFloat(dataValue[12][i]),
        ])
    }

    var options = {
        colors: ["#47CACC"],
        tooltip: {isHtml: true},
        backgroundColor: 'transparent',
        height: "100%",
        fontSize: 15,
        title: "Time under MAPopt : --hr--min",
        legend: "none",
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
            title: "COx Avg",
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
    };

    var chart_ModalETCO2Mean = new google.visualization.ColumnChart(document.getElementById("chart_ModalETCO2Mean"));
    chart_ModalETCO2Mean.draw(data, options);
}

function drawETCO2RSO2Chart() {
    var data = new google.visualization.DataTable();
    data.addColumn('number', 'ETCO2');
    data.addColumn('number', 'RSO2 Left');
    data.addColumn('number', 'RSO2 Right');

    for (let i in dataValue[0]) {
        data.addRow([
            parseFloat(dataValue[3][i]),
            parseFloat(dataValue[1][i]),
            parseFloat(dataValue[2][i])
        ])
    }

    var options = {
        colors: ["#47CACC"],
        tooltip: {isHtml: true},
        backgroundColor: 'transparent',
        height: "100%",
        legend: "none",
        pointSize: 1,
        fontSize: 15,
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
            baselineColor: '#777',
            gridlineColor: '#777',
            minorGridlines: {
                color: '#333',
            }
        },
        chartArea: {
            width: '96%',
            height: '73%'
        },
        chartArea: {
            width: '80%',
            height: '80%'
        }
    };

    var chart_ETCO2RSO2 = new google.visualization.ScatterChart(document.getElementById('chart_ETCO2RSO2'));

    chart_ETCO2RSO2.draw(data, options);
}
