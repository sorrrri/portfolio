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
    url: "./../data/2_common.json",
    dataType: "json",
    async: false
}).responseText;

jsonData = JSON.parse(jsonData)
const dataValue = Object.values(jsonData)

// 5분 단위로 CoxMAP, CoxETCO2 등이 찍히는 시간표
let nullArray_CoxTime = []
for (let i in dataValue[14]) {
    nullArray_CoxTime.push(null)
}

// 1분 단위로 MAP, RSO2 등이 찍히는 시간표
let nullArray_timestamp = []
for (let i in dataValue[5]) {
    nullArray_timestamp.push(null)
}

let minInterval = -1
let maxInterval = 1

dataValue[23] = [...nullArray_CoxTime]
dataValue[24] = [...nullArray_CoxTime]
dataValue[25] = [...nullArray_CoxTime]

dataValue[26] = [...nullArray_timestamp]
dataValue[27] = [...nullArray_timestamp]
dataValue[28] = [...nullArray_timestamp]

const interventionCoxTime = (minInterval, maxInterval) => {
// 2020/3/4  14:59
    dataValue[23][6] = minInterval
    dataValue[24][6] = maxInterval
    dataValue[25][6] = "shivering control"

// 2020/3/4 15:46
    dataValue[23][15] = minInterval
    dataValue[24][15] = maxInterval
    dataValue[25][15] = "increase sedation"

// 2020/3/4 15:57
    dataValue[23][17] = minInterval
    dataValue[24][17] = maxInterval
    dataValue[25][17] = "fluid infusion"

// 2020/3/4 16:00
    dataValue[23][18] = minInterval
    dataValue[24][18] = maxInterval
    dataValue[25][18] = "adjust ventilation"

// 2020/3/4 16:01
    dataValue[23][19] = minInterval
    dataValue[24][19] = maxInterval
    dataValue[25][19] = "increase sedation"

// 2020/3/4 16:30
    dataValue[23][24] = minInterval
    dataValue[24][24] = maxInterval
    dataValue[25][24] = "start NMB"

// 2020/3/4 17:00
    dataValue[23][30] = minInterval
    dataValue[24][30] = maxInterval
    dataValue[25][30] = "TTM Target temperature"

// 2020/3/4 19:00
    dataValue[23][54] = minInterval
    dataValue[24][54] = maxInterval
    dataValue[25][54] = "adjust ventilation"

// 2020/3/5 02:27
    dataValue[23][144] = minInterval
    dataValue[24][144] = maxInterval
    dataValue[25][144] = "vasopressor increase"

// 2020/3/5 04:12
    dataValue[23][164] = minInterval
    dataValue[24][164] = maxInterval
    dataValue[25][164] = "vasopressor increase"

// 2020/3/5 06:00
    dataValue[23][186] = minInterval
    dataValue[24][186] = maxInterval
    dataValue[25][186] = "increase sedation"

// 2020/3/5 07:40
    dataValue[23][206] = minInterval
    dataValue[24][206] = maxInterval
    dataValue[25][206] = "vasopressor increase"

// 2020/3/5 09:00
    dataValue[23][222] = minInterval
    dataValue[24][222] = maxInterval
    dataValue[25][222] = "adjust ventilation"

// 2020/3/5 09:20
    dataValue[23][226] = minInterval
    dataValue[24][226] = maxInterval
    dataValue[25][226] = "vasopressor increase"

// 2020/3/5 09:56 * 3
    dataValue[23][233] = minInterval
    dataValue[24][233] = maxInterval
    dataValue[25][233] = "increase sedation, stop NMB, fluid infusion"

// 2020/3/5 10:22
    dataValue[23][238] = minInterval
    dataValue[24][238] = maxInterval
    dataValue[25][238] = "fluid infusion"

// 2020/3/5 11:01
    dataValue[23][246] = minInterval
    dataValue[24][246] = maxInterval
    dataValue[25][246] = "fluid infusion"

// 2020/3/5 12:02
    dataValue[23][258] = minInterval
    dataValue[24][258] = maxInterval
    dataValue[25][258] = "fluid infusion"

// 2020/3/5 12:27
    dataValue[23][264] = minInterval
    dataValue[24][264] = maxInterval
    dataValue[25][264] = "increase sedation"

// 2020/3/5 13:10
    dataValue[23][272] = minInterval
    dataValue[24][272] = maxInterval
    dataValue[25][272] = "start sedation"

// 2020/3/5 13:14
    dataValue[23][273] = minInterval
    dataValue[24][273] = maxInterval
    dataValue[25][273] = "vasopressor increase"

// 2020/3/5 13:30 * 2
    dataValue[23][276] = minInterval
    dataValue[24][276] = maxInterval
    dataValue[25][276] = "fluid infusion, increase sedation"

// 2020/3/5 13:36
    dataValue[23][277] = minInterval
    dataValue[24][277] = maxInterval
    dataValue[25][277] = "shivering control"

// 2020/3/5 14:00
    dataValue[23][282] = minInterval
    dataValue[24][282] = maxInterval
    dataValue[25][282] = "adjust ventilation"

// 2020/3/5 14:02
    dataValue[23][283] = minInterval
    dataValue[24][283] = maxInterval
    dataValue[25][283] = "fluid infusion"

// 2020/3/5 14:20
    dataValue[23][286] = minInterval
    dataValue[24][286] = maxInterval
    dataValue[25][286] = "shivering control"

// 2020/3/5 14:30
    dataValue[23][288] = minInterval
    dataValue[24][288] = maxInterval
    dataValue[25][288] = "shivering control"

// 2020/3/5 17:00
    dataValue[23][318] = minInterval
    dataValue[24][318] = maxInterval
    dataValue[25][318] = "TTM start rewarming"

// 2020/3/5 20:01
    dataValue[23][354] = minInterval
    dataValue[24][354] = maxInterval
    dataValue[25][354] = "adjust ventilation"

// 2020/3/6 16:00
    dataValue[23][594] = minInterval
    dataValue[24][594] = maxInterval
    dataValue[25][594] = "TTM start normothermia"

// 2020/3/6 18:00
    dataValue[23][618] = minInterval
    dataValue[24][618] = maxInterval
    dataValue[25][618] = "increase sedation"

// 2020/3/6 19:47
    dataValue[23][639] = minInterval
    dataValue[24][639] = maxInterval
    dataValue[25][639] = "increase sedation"

// 2020/3/6 20:11
    dataValue[23][644] = minInterval
    dataValue[24][644] = maxInterval
    dataValue[25][644] = "increase sedation"

// 2020/3/6 21:10
    dataValue[23][656] = minInterval
    dataValue[24][656] = maxInterval
    dataValue[25][656] = "increase sedation"

// 2020/3/6 21:56
    dataValue[23][665] = minInterval
    dataValue[24][665] = maxInterval
    dataValue[25][665] = "increase sedation"

// 2020/3/6 22:25
    dataValue[23][671] = minInterval
    dataValue[24][671] = maxInterval
    dataValue[25][671] = "dextrose infusion"

// 2020/3/6 23:33
    dataValue[23][685] = minInterval
    dataValue[24][685] = maxInterval
    dataValue[25][685] = "shivering control"

// 2020/3/7 02:43
    dataValue[23][723] = minInterval
    dataValue[24][723] = maxInterval
    dataValue[25][723] = "adjust ventilation"

// 2020/3/7 03:50
    dataValue[23][736] = minInterval
    dataValue[24][736] = maxInterval
    dataValue[25][736] = "adjust ventilation"

// 2020/3/7 06:30
    dataValue[23][768] = minInterval
    dataValue[24][768] = maxInterval
    dataValue[25][768] = "TTM stop"
}

const interventionTimestamp = (minInterval, maxInterval) => {

// 2020/3/4  14:59
    dataValue[26][30] = minInterval
    dataValue[27][30] = maxInterval
    dataValue[28][30] = "shivering control"

// 2020/3/4 15:46
    dataValue[26][75] = minInterval
    dataValue[27][75] = maxInterval
    dataValue[28][75] = "increase sedation"

// 2020/3/4 15:57
    dataValue[26][85] = minInterval
    dataValue[27][85] = maxInterval
    dataValue[28][85] = "fluid infusion"

// 2020/3/4 16:00
    dataValue[26][90] = minInterval
    dataValue[27][90] = maxInterval
    dataValue[28][90] = "adjust ventilation"

// 2020/3/4 16:01
    dataValue[26][95] = minInterval
    dataValue[27][95] = maxInterval
    dataValue[28][95] = "increase sedation"

// 2020/3/4 16:30
    dataValue[26][120] = minInterval
    dataValue[27][120] = maxInterval
    dataValue[28][120] = "start NMB"

// 2020/3/4 17:00
    dataValue[26][150] = minInterval
    dataValue[27][150] = maxInterval
    dataValue[28][150] = "TTM Target temperature"

// 2020/3/4 19:00
    dataValue[26][270] = minInterval
    dataValue[27][270] = maxInterval
    dataValue[28][270] = "adjust ventilation"

// 2020/3/5 02:27
    dataValue[26][720] = minInterval
    dataValue[27][720] = maxInterval
    dataValue[28][720] = "vasopressor increase"

// 2020/3/5 04:12
    dataValue[26][820] = minInterval
    dataValue[27][820] = maxInterval
    dataValue[28][820] = "vasopressor increase"

// 2020/3/5 06:00
    dataValue[26][930] = minInterval
    dataValue[27][930] = maxInterval
    dataValue[28][930] = "increase sedation"

// 2020/3/5 07:40
    dataValue[26][1030] = minInterval
    dataValue[27][1030] = maxInterval
    dataValue[28][1030] = "vasopressor increase"

// 2020/3/5 09:00
    dataValue[26][1110] = minInterval
    dataValue[27][1110] = maxInterval
    dataValue[28][1110] = "adjust ventilation"

// 2020/3/5 09:20
    dataValue[26][1130] = minInterval
    dataValue[27][1130] = maxInterval
    dataValue[28][1130] = "vasopressor increase"

// 2020/3/5 09:56 * 3
    dataValue[26][1170] = minInterval
    dataValue[27][1170] = maxInterval
    dataValue[28][1170] = "increase sedation, stop NMB, fluid infusion"

// 2020/3/5 10:22
    dataValue[26][1190] = minInterval
    dataValue[27][1190] = maxInterval
    dataValue[28][1190] = "fluid infusion"

// 2020/3/5 11:01
    dataValue[26][1230] = minInterval
    dataValue[27][1230] = maxInterval
    dataValue[28][1230] = "fluid infusion"

// 2020/3/5 12:02
    dataValue[26][1290] = minInterval
    dataValue[27][1290] = maxInterval
    dataValue[28][1290] = "fluid infusion"

// 2020/3/5 12:27
    dataValue[26][1320] = minInterval
    dataValue[27][1320] = maxInterval
    dataValue[28][1320] = "increase sedation"

// 2020/3/5 13:10
    dataValue[26][1360] = minInterval
    dataValue[27][1360] = maxInterval
    dataValue[28][1360] = "start sedation"

// 2020/3/5 13:14
    dataValue[26][1365] = minInterval
    dataValue[27][1365] = maxInterval
    dataValue[28][1365] = "vasopressor increase"

// 2020/3/5 13:30 * 2
    dataValue[26][1380] = minInterval
    dataValue[27][1380] = maxInterval
    dataValue[28][1380] = "fluid infusion, increase sedation"

// 2020/3/5 13:36
    dataValue[26][1385] = minInterval
    dataValue[27][1385] = maxInterval
    dataValue[28][1385] = "shivering control"

// 2020/3/5 14:00
    dataValue[26][1410] = minInterval
    dataValue[27][1410] = maxInterval
    dataValue[28][1410] = "adjust ventilation"

// 2020/3/5 14:02
    dataValue[26][1415] = minInterval
    dataValue[27][1415] = maxInterval
    dataValue[28][1415] = "fluid infusion"

// 2020/3/5 14:20
    dataValue[26][1430] = minInterval
    dataValue[27][1430] = maxInterval
    dataValue[28][1430] = "shivering control"

// 2020/3/5 14:30
    dataValue[26][1440] = minInterval
    dataValue[27][1440] = maxInterval
    dataValue[28][1440] = "shivering control"

// 2020/3/5 17:00
    dataValue[26][1590] = minInterval
    dataValue[27][1590] = maxInterval
    dataValue[28][1590] = "TTM start rewarming"

// 2020/3/5 20:01
    dataValue[26][1770] = minInterval
    dataValue[27][1770] = maxInterval
    dataValue[28][1770] = "adjust ventilation"

// 2020/3/6 16:00
    dataValue[26][2970] = minInterval
    dataValue[27][2970] = maxInterval
    dataValue[28][2970] = "TTM start normothermia"

// 2020/3/6 18:00
    dataValue[26][3090] = minInterval
    dataValue[27][3090] = maxInterval
    dataValue[28][3090] = "increase sedation"

// 2020/3/6 19:47
    dataValue[26][3200] = minInterval
    dataValue[27][3200] = maxInterval
    dataValue[28][3200] = "increase sedation"

// 2020/3/6 20:11
    dataValue[26][3220] = minInterval
    dataValue[27][3220] = maxInterval
    dataValue[28][3220] = "increase sedation"

// 2020/3/6 21:10
    dataValue[26][3280] = minInterval
    dataValue[27][3280] = maxInterval
    dataValue[28][3280] = "increase sedation"

// 2020/3/6 21:56
    dataValue[26][3325] = minInterval
    dataValue[27][3325] = maxInterval
    dataValue[28][3325] = "increase sedation"

// 2020/3/6 22:25
    dataValue[26][3355] = minInterval
    dataValue[27][3355] = maxInterval
    dataValue[28][3355] = "dextrose infusion"

// 2020/3/6 23:33
    dataValue[26][3425] = minInterval
    dataValue[27][3425] = maxInterval
    dataValue[28][3425] = "shivering control"

// 2020/3/7 02:43
    dataValue[26][3615] = minInterval
    dataValue[27][3615] = maxInterval
    dataValue[28][3615] = "adjust ventilation"

// 2020/3/7 03:50
    dataValue[26][3680] = minInterval
    dataValue[27][3680] = maxInterval
    dataValue[28][3680] = "adjust ventilation"

// 2020/3/7 06:30
    dataValue[26][3840] = minInterval
    dataValue[27][3840] = maxInterval
    dataValue[28][3840] = "TTM stop"
}


function drawCOxMAPChart() {
    const data = new google.visualization.DataTable(jsonData);
    interventionCoxTime(-1, 1)

    data.addColumn('date', 'Time of Day');
    data.addColumn('number', 'normal range');
    data.addColumn('number', 'left');
    data.addColumn('number', 'right');
    data.addColumn('number', 'average');
    data.addColumn('number', 'intervention');
    data.addColumn('number', 'intervention');
    data.addColumn('number', 'intervention');
    data.addColumn('number', 'intervention');
    data.addColumn({'type': 'string', 'role': 'tooltip'});

    for (let i in dataValue[14]) {
        let timestamp = String(dataValue[14][i]);

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
            parseFloat(dataValue[15][i]),
            parseFloat(dataValue[16][i]),
            parseFloat(dataValue[17][i]),
            parseInt(dataValue[23][i]),
            parseInt(dataValue[23][i]),
            parseInt(dataValue[24][i]),
            parseInt(dataValue[24][i]),
            dataValue[25][i],
        ]);
    }

    const options = {
        colors: ['darkslategray', '#FAA7B8', '#6096FD', 'darkseagreen', '#a29380'],
        tooltip: {isHtml: true},
        backgroundColor: 'transparent',
        height: "100%",
        legend: 'none',
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
            baseline: -1,
            gridlineColor: '#777',
        },
        chartArea: {
            width: '97%',
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

    for (let i in dataValue[14]) {
        let timestamp = String(dataValue[14][i]);

        let year = timestamp.substring(0, 4);
        let month = timestamp.substring(4, 6) - 1;
        let day = timestamp.substring(6, 8);
        let hours = timestamp.substring(8, 10);
        let minutes = timestamp.substring(10, 12);
        let seconds = timestamp.substring(12, 14);

        timestamp = new Date(parseInt(year), parseInt(month), parseInt(day), parseInt(hours), parseInt(minutes), parseInt(seconds))

        data.addRow([
            timestamp,
            parseFloat(dataValue[18][i]),
            parseFloat(dataValue[19][i]),
            parseFloat(dataValue[20][i]),
        ]);
    }

    const options = {
        colors: ['#FAA7B8', '#6096FD', 'darkseagreen'],
        tooltip: {isHtml: true},
        backgroundColor: 'transparent',
        height: "100%",
        legend: 'none',
        fontSize: 15,
        pointSize: 1.5,
        lineWidth: 1.5,
        intervals: {
            color: "#a29380"
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
            width: '97%',
            height: '73%'
        }
    };

    var chart_COxETCO2 = new google.visualization.LineChart(document.getElementById('chart_COxETCO2'));
    chart_COxETCO2.draw(data, options);
}

function drawRSO2Chart() {
    const data = new google.visualization.DataTable(jsonData);
    interventionTimestamp(0, 100)

    data.addColumn('date', 'Time of Day');
    data.addColumn('number', 'normal range')
    data.addColumn('number', 'left');
    data.addColumn('number', 'right');
    data.addColumn('number', 'average');
    data.addColumn('number', 'intervention');
    data.addColumn('number', 'intervention');
    data.addColumn('number', 'intervention');
    data.addColumn('number', 'intervention');
    data.addColumn({'type': 'string', 'role': 'tooltip'});

    for (let i in dataValue[5]) {
        let timestamp = String(dataValue[5][i]);

        let year = timestamp.substring(0, 4);
        let month = timestamp.substring(4, 6) - 1;
        let day = timestamp.substring(6, 8);
        let hours = timestamp.substring(8, 10);
        let minutes = timestamp.substring(10, 12);
        let seconds = timestamp.substring(12, 14);

        timestamp = new Date(parseInt(year), parseInt(month), parseInt(day), parseInt(hours), parseInt(minutes), parseInt(seconds))

        data.addRow([
            timestamp,
            14.75,
            parseFloat(dataValue[1][i]),
            parseFloat(dataValue[2][i]),
            parseFloat(dataValue[3][i]),
            parseInt(dataValue[26][i]),
            parseInt(dataValue[26][i]),
            parseInt(dataValue[27][i]),
            parseInt(dataValue[27][i]),
            dataValue[28][i],
        ]);
    }

    const options = {
        colors: ['darkslategray', '#FAA7B8', '#6096FD', 'darkseagreen', '#a29380', '#FAA7B8', '#6096FD'],
        tooltip: {isHtml: true},
        backgroundColor: 'transparent',
        height: '100%',
        legend: 'none',
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
            }
        },
        vAxis: {
            title: "RSO2",
            baseline: '0',
            baselineColor: '#777',
            gridlineColor: '#777',
            ticks: [0, 50, 100],
        },
        chartArea: {
            width: '97%',
            height: '73%'
        }
    };

    var chart_RSO2 = new google.visualization.ComboChart(document.getElementById('chart_RSO2'));
    chart_RSO2.draw(data, options);
}

function drawMAPChart() {
    var data = new google.visualization.DataTable();
    interventionTimestamp(0, 250)

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

    for (let i in dataValue[5]) {
        let timestamp = String(dataValue[5][i]);

        let year = timestamp.substring(0, 4);
        let month = timestamp.substring(4, 6) - 1;
        let day = timestamp.substring(6, 8);
        let hours = timestamp.substring(8, 10);
        let minutes = timestamp.substring(10, 12);
        let seconds = timestamp.substring(12, 14);

        timestamp = new Date(parseInt(year), parseInt(month), parseInt(day), parseInt(hours), parseInt(minutes), parseInt(seconds))

        data.addRow([
            timestamp,
            parseInt(dataValue[21].min[i]),
            parseInt(dataValue[21].max[i]),
            parseInt(dataValue[21].min[i]),
            parseInt(dataValue[21].max[i]),
            parseFloat(dataValue[0][i]),
            parseInt(dataValue[26][i]),
            parseInt(dataValue[26][i]),
            parseInt(dataValue[27][i]),
            parseInt(dataValue[27][i]),
            dataValue[28][i],
        ]);
    }

    var options = {
        colors: ['#FAA7B8', 'darkseagreen', '#a29380'],
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
            ticks: [0, 50, 100, 150, 200, 250],
            baselineColor: '#777',
            gridlineColor: '#777',
        },
        chartArea: {
            width: '97%',
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

    for (let i in dataValue[5]) {
        let timestamp = String(dataValue[5][i]);

        let year = timestamp.substring(0, 4);
        let month = timestamp.substring(4, 6) - 1;
        let day = timestamp.substring(6, 8);
        let hours = timestamp.substring(8, 10);
        let minutes = timestamp.substring(10, 12);
        let seconds = timestamp.substring(12, 14);

        timestamp = new Date(parseInt(year), parseInt(month), parseInt(day), parseInt(hours), parseInt(minutes), parseInt(seconds))

        data.addRow([
            timestamp,
            parseFloat(dataValue[22].min[i]),
            parseFloat(dataValue[22].max[i]),
            parseFloat(dataValue[22].min[i]),
            parseFloat(dataValue[22].max[i]),
            parseFloat(dataValue[4][i]),
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
            color: "#a29380"
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
            width: '97%',
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
    url: "./../data/2_input.json",
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
// 2020/3/4  14:59
    dataValue_input[4][6] = minInterval
    dataValue_input[5][6] = maxInterval
    dataValue_input[6][6] = "shivering control"

// 2020/3/4 15:46
    dataValue_input[4][15] = minInterval
    dataValue_input[5][15] = maxInterval
    dataValue_input[6][15] = "increase sedation"

// 2020/3/4 15:57
    dataValue_input[4][17] = minInterval
    dataValue_input[5][17] = maxInterval
    dataValue_input[6][17] = "fluid infusion"

// 2020/3/4 16:00
    dataValue_input[4][18] = minInterval
    dataValue_input[5][18] = maxInterval
    dataValue_input[6][18] = "adjust ventilation"

// 2020/3/4 16:01
    dataValue_input[4][19] = minInterval
    dataValue_input[5][19] = maxInterval
    dataValue_input[6][19] = "increase sedation"

// 2020/3/4 16:30
    dataValue_input[4][24] = minInterval
    dataValue_input[5][24] = maxInterval
    dataValue_input[6][24] = "start NMB"

// 2020/3/4 17:00
    dataValue_input[4][30] = minInterval
    dataValue_input[5][30] = maxInterval
    dataValue_input[6][30] = "TTM Target temperature"

// 2020/3/4 19:00
    dataValue_input[4][54] = minInterval
    dataValue_input[5][54] = maxInterval
    dataValue_input[6][54] = "adjust ventilation"

// 2020/3/5 02:27
    dataValue_input[4][144] = minInterval
    dataValue_input[5][144] = maxInterval
    dataValue_input[6][144] = "vasopressor increase"

// 2020/3/5 04:12
    dataValue_input[4][164] = minInterval
    dataValue_input[5][164] = maxInterval
    dataValue_input[6][164] = "vasopressor increase"

// 2020/3/5 06:00
    dataValue_input[4][186] = minInterval
    dataValue_input[5][186] = maxInterval
    dataValue_input[6][186] = "increase sedation"

// 2020/3/5 07:40
    dataValue_input[4][206] = minInterval
    dataValue_input[5][206] = maxInterval
    dataValue_input[6][206] = "vasopressor increase"

// 2020/3/5 09:00
    dataValue_input[4][222] = minInterval
    dataValue_input[5][222] = maxInterval
    dataValue_input[6][222] = "adjust ventilation"

// 2020/3/5 09:20
    dataValue_input[4][226] = minInterval
    dataValue_input[5][226] = maxInterval
    dataValue_input[6][226] = "vasopressor increase"

// 2020/3/5 09:56 * 3
    dataValue_input[4][233] = minInterval
    dataValue_input[5][233] = maxInterval
    dataValue_input[6][233] = "increase sedation, stop NMB, fluid infusion"

// 2020/3/5 10:22
    dataValue_input[4][238] = minInterval
    dataValue_input[5][238] = maxInterval
    dataValue_input[6][238] = "fluid infusion"

// 2020/3/5 11:01
    dataValue_input[4][246] = minInterval
    dataValue_input[5][246] = maxInterval
    dataValue_input[6][246] = "fluid infusion"

// 2020/3/5 12:02
    dataValue_input[4][258] = minInterval
    dataValue_input[5][258] = maxInterval
    dataValue_input[6][258] = "fluid infusion"

// 2020/3/5 12:27
    dataValue_input[4][264] = minInterval
    dataValue_input[5][264] = maxInterval
    dataValue_input[6][264] = "increase sedation"

// 2020/3/5 13:10
    dataValue_input[4][272] = minInterval
    dataValue_input[5][272] = maxInterval
    dataValue_input[6][272] = "start sedation"

// 2020/3/5 13:14
    dataValue_input[4][273] = minInterval
    dataValue_input[5][273] = maxInterval
    dataValue_input[6][273] = "vasopressor increase"

// 2020/3/5 13:30 * 2
    dataValue_input[4][276] = minInterval
    dataValue_input[5][276] = maxInterval
    dataValue_input[6][276] = "fluid infusion, increase sedation"

// 2020/3/5 13:36
    dataValue_input[4][277] = minInterval
    dataValue_input[5][277] = maxInterval
    dataValue_input[6][277] = "shivering control"

// 2020/3/5 14:00
    dataValue_input[4][282] = minInterval
    dataValue_input[5][282] = maxInterval
    dataValue_input[6][282] = "adjust ventilation"

// 2020/3/5 14:02
    dataValue_input[4][283] = minInterval
    dataValue_input[5][283] = maxInterval
    dataValue_input[6][283] = "fluid infusion"

// 2020/3/5 14:20
    dataValue_input[4][286] = minInterval
    dataValue_input[5][286] = maxInterval
    dataValue_input[6][286] = "shivering control"

// 2020/3/5 14:30
    dataValue_input[4][288] = minInterval
    dataValue_input[5][288] = maxInterval
    dataValue_input[6][288] = "shivering control"

// 2020/3/5 17:00
    dataValue_input[4][318] = minInterval
    dataValue_input[5][318] = maxInterval
    dataValue_input[6][318] = "TTM start rewarming"

// 2020/3/5 20:01
    dataValue_input[4][354] = minInterval
    dataValue_input[5][354] = maxInterval
    dataValue_input[6][354] = "adjust ventilation"

// 2020/3/6 16:00
    dataValue_input[4][594] = minInterval
    dataValue_input[5][594] = maxInterval
    dataValue_input[6][594] = "TTM start normothermia"

// 2020/3/6 18:00
    dataValue_input[4][618] = minInterval
    dataValue_input[5][618] = maxInterval
    dataValue_input[6][618] = "increase sedation"

// 2020/3/6 19:47
    dataValue_input[4][639] = minInterval
    dataValue_input[5][639] = maxInterval
    dataValue_input[6][639] = "increase sedation"

// 2020/3/6 20:11
    dataValue_input[4][644] = minInterval
    dataValue_input[5][644] = maxInterval
    dataValue_input[6][644] = "increase sedation"

// 2020/3/6 21:10
    dataValue_input[4][656] = minInterval
    dataValue_input[5][656] = maxInterval
    dataValue_input[6][656] = "increase sedation"

// 2020/3/6 21:56
    dataValue_input[4][665] = minInterval
    dataValue_input[5][665] = maxInterval
    dataValue_input[6][665] = "increase sedation"

// 2020/3/6 22:25
    dataValue_input[4][671] = minInterval
    dataValue_input[5][671] = maxInterval
    dataValue_input[6][671] = "dextrose infusion"

// 2020/3/6 23:33
    dataValue_input[4][685] = minInterval
    dataValue_input[5][685] = maxInterval
    dataValue_input[6][685] = "shivering control"

// 2020/3/7 02:43
    dataValue_input[4][723] = minInterval
    dataValue_input[5][723] = maxInterval
    dataValue_input[6][723] = "adjust ventilation"

// 2020/3/7 03:50
    dataValue_input[4][736] = minInterval
    dataValue_input[5][736] = maxInterval
    dataValue_input[6][736] = "adjust ventilation"

// 2020/3/7 06:30
    dataValue_input[4][768] = minInterval
    dataValue_input[5][768] = maxInterval
    dataValue_input[6][768] = "TTM stop"
}

function drawSJVO2Chart() {
    var data = new google.visualization.DataTable(jsonData_input);
    interventionInput(0, 100)

    data.addColumn('date', 'Time of Day');
    data.addColumn('number', 'normal range')
    data.addColumn('number', 'SJVO2');

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
            80,
            parseFloat(dataValue_input[1][i]),
        ]);
    }

    var options = {
        colors: ['darkslategray', 'bisque', '#a29380'],
        tooltip: {isHtml: true},
        backgroundColor: 'transparent',
        height: '100%',
        legend: 'none',
        fontSize: 15,
        pointSize: 5,
        seriesType: 'line',
        series: {
            0: {
                type: 'area',
                pointSize: 0,
            },
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
            baseline: 50,
            baselineColor: '#777',
            gridlineColor: '#777',
        },
        chartArea: {
            width: '97%',
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
        colors: ["bisque"],
        tooltip: {isHtml: true},
        backgroundColor: 'transparent',
        height: "100%",
        legend: "none",
        fontSize: 15,
        pointSize: 5,
        intervals: {
            color: '#a29380'
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
            width: '97%',
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
        colors: ["bisque"],
        tooltip: {isHtml: true},
        backgroundColor: 'transparent',
        height: "100%",
        legend: "none",
        fontSize: 15,
        pointSize: 5,
        intervals: {
            color: '#a29380'
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
            width: '97%',
            height: '73%'
        }
    };

    var chart_LOI = new google.visualization.ScatterChart(document.getElementById('chart_LOI'));

    chart_LOI.draw(data_LOI, options_LOI);
}

function drawAJDO2Chart() {
    var data = new google.visualization.DataTable(jsonData_input);
    interventionInput(0, 8)

    data.addColumn('date', 'Time of Day');
    data.addColumn('number', 'normal range');
    data.addColumn('number', 'AJDO2');

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
            8,
            parseFloat(dataValue_input[2][i]),
        ]);
    }

    var options = {
        colors: ['darkslategray', 'bisque', '#a29380'],
        tooltip: {isHtml: true},
        backgroundColor: 'transparent',
        height: "100%",
        legend: "none",
        fontSize: 15,
        pointSize: 5,
        seriesType: 'line',
        series: {
            0: {
                type: 'area',
                pointSize: 0,
            },
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
            ticks: [0, 2, 4, 6, 8],
            baseline: 4,
            baselineColor: '#777',
            gridlineColor: '#777',
            minorGridlines: {
                color: '#333',
            }
        },
        chartArea: {
            width: '97%',
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
    data.addColumn('number', 'normal range');
    data.addColumn('number', 'CEO2');

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
            40,
            parseFloat(dataValue_input[3][i]),
        ]);
    }

    var options = {
        colors: ['darkslategray','bisque', '#a29380'],
        tooltip: {isHtml: true},
        backgroundColor: 'transparent',
        height: "100%",
        legend: "none",
        fontSize: 15,
        pointSize: 5,
        seriesType: 'line',
        series: {
            0: {
                type: 'area',
                pointSize: 0,
            },
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
            baseline: 20,
            baselineColor: '#777',
            gridlineColor: '#777',
        },
        chartArea: {
            width: '97%',
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
        colors: ["bisque"],
        tooltip: {isHtml: true},
        backgroundColor: 'transparent',
        height: "100%",
        legend: "none",
        fontSize: 15,
        pointSize: 5,
        intervals: {
            color: '#a29380'
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
            width: '97%',
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
        colors: ["bisque"],
        tooltip: {isHtml: true},
        backgroundColor: 'transparent',
        height: "100%",
        legend: "none",
        fontSize: 15,
        pointSize: 5,
        intervals: {
            color: '#a29380'
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
            width: '97%',
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
        colors: ["bisque"],
        tooltip: {isHtml: true},
        backgroundColor: 'transparent',
        height: "100%",
        legend: "none",
        fontSize: 15,
        pointSize: 5,
        intervals: {
            color: '#a29380'
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
            width: '97%',
            height: '73%'
        }
    };

    var chart_RQ = new google.visualization.ScatterChart(document.getElementById('chart_RQ'));
    chart_RQ.draw(data_RQ, options_RQ);
}

function drawNPIChart() {
    var data = new google.visualization.DataTable();
    data.addColumn('datetime', 'Time of Day');
    data.addColumn('number', 'left');
    data.addColumn('number', 'right');
    data.addColumn({'type': 'number', 'role': 'interval'});
    data.addColumn({'type': 'number', 'role': 'interval'});
    data.addRows([
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

    var options = {
        colors: ['#FAA7B8', '#6096FD'],
        tooltip: {isHtml: true},
        backgroundColor: 'transparent',
        height: "100%",
        legend: "none",
        fontSize: 15,
        pointSize: 5,
        intervals: {
            color: '#a29380'
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
            width: '97%',
            height: '73%'
        }
    };

    var chart_NPI = new google.visualization.ScatterChart(document.getElementById('chart_NPI'));
    chart_NPI.draw(data, options);
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
            color: '#a29380'
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
            width: '97%',
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
        colors: ["bisque"],
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
        colors: ["bisque"],
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
        colors: ["bisque"],
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
        colors: ["bisque"],
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
        colors: ["bisque"],
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
        colors: ["bisque"],
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
        colors: ["bisque"],
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
        colors: ["bisque"],
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
            width: '80%',
            height: '80%'
        }
    };

    var chart_ETCO2RSO2 = new google.visualization.ScatterChart(document.getElementById('chart_ETCO2RSO2'));

    chart_ETCO2RSO2.draw(data, options);
}
