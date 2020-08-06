google.charts.load('current', {'packages': ['corechart']});
google.charts.setOnLoadCallback(drawStandardGenderChart);
google.charts.setOnLoadCallback(drawStandardColumnChart);
google.charts.setOnLoadCallback(drawBedsideGenderChart);
google.charts.setOnLoadCallback(drawBedsideColumnChart);
google.charts.setOnLoadCallback(drawStandardPatientChart);
google.charts.setOnLoadCallback(drawBedsidePatientChart);


function drawStandardGenderChart() {
    var data_standard_gender = google.visualization.arrayToDataTable([
        ["gender", "percentage"],
        ["male", 40],
        ["female", 60],
    ]);

    var option_standard_gender = {
        tooltip: {isHtml: true},
        backgroundColor: "transparent",
        colors: ["#8CC1D3", "#F9957F"],
        legend: "bottom",
        pieSliceText: 'label',
        chartArea: {
            width: '90%',
            height: '50%'
        },
        animation: {
            duration: 1000,
            easing: 'out',
            startup: true
        },
    };

    var chart_standard_gender = new google.visualization.PieChart(document.getElementById("standard_gender_chart"));
    chart_standard_gender.draw(data_standard_gender, option_standard_gender);
}

function drawStandardColumnChart() {

    var data_standard_column = google.visualization.arrayToDataTable([
        ["Age", "male", "female"],
        ["20~40", 25, 26],
        ["40~60", 40, 37],
        ["60~80", 20, 25],
        ["80~100", 20, 9],
        ["100+", 10, 5],

    ]);

    var options_standard_column = {
        tooltip: {isHtml: true},
        backgroundColor: 'transparent',
        colors: ["#8CC1D3", "#F9957F"],
        legend: "bottom",
        chartArea: {
            width: '90%',
        },
        hAxis: {
            gridlines: {
                color: '#777',
            },
            minorGridlines: {
                color: '#333',
            }
        },
        animation: {
            duration: 1000,
            easing: 'out',
            startup: true
        },
    };

    var chart_standard_column = new google.visualization.ColumnChart(document.getElementById("standard_column_chart"));
    chart_standard_column.draw(data_standard_column, options_standard_column);
}


function drawBedsideGenderChart() {
    var data_bedside_gender = google.visualization.arrayToDataTable([
        ["gender", "percentage"],
        ["male", 40],
        ["female", 60],
    ]);

    var option_bedside_gender = {
        tooltip: {isHtml: true},
        backgroundColor: "transparent",
        colors: ["#8CC1D3", "#F9957F"],
        legend: "bottom",
        width: "180px",
        pieSliceText: 'label',
        chartArea: {
            width: '90%',
            height: '50%'
        },
        animation: {
            duration: 1000,
            easing: 'out',
            startup: true
        },
    };

    var chart_bedside_gender = new google.visualization.PieChart(document.getElementById("bedside_gender_chart"));
    chart_bedside_gender.draw(data_bedside_gender, option_bedside_gender);
}

function drawBedsideColumnChart() {

    var data_bedside_column = google.visualization.arrayToDataTable([
        ["Age", "male", "female"],
        ["20~40", 25, 26],
        ["40~60", 40, 37],
        ["60~80", 20, 25],
        ["80~100", 20, 9],
        ["100+", 10, 5],

    ]);

    var options_bedside_column = {
        tooltip: {isHtml: true},
        backgroundColor: 'transparent',
        colors: ["#8CC1D3", "#F9957F"],
        legend: "bottom",
        chartArea: {
            width: '90%',
        },
        hAxis: {
            gridlines: {
                color: '#777',
            },
            minorGridlines: {
                color: '#333',
            }
        },
        animation: {
            duration: 1000,
            easing: 'out',
            startup: true
        },
    };

    var chart_bedside_column = new google.visualization.ColumnChart(document.getElementById("bedside_column_chart"));
    chart_bedside_column.draw(data_bedside_column, options_bedside_column);
}

function drawStandardPatientChart() {

    var data_standard_patient = google.visualization.arrayToDataTable([
        ["Year", "ICU", "outpatient", "all"],
        ["2016", 3, 6, 9],
        ["2017", 2, 7, 9],
        ["2018", 3, 6, 9],
        ["2019", 4, 8, 12],

    ]);

    var options_standard_patient = {
        tooltip: {isHtml: true},
        isStacked: true,
        title: "Standard 8주 누적 환자 수",
        backgroundColor: 'transparent',
        colors: ["#E7CC9D", "#ABCFD1", "#ABBEEC"],
        legend: "bottom",
        pointSize: 5,
        chartArea: {
            width: '90%',
        },
        hAxis: {
            gridlines: {
                color: '#777',
            },
            minorGridlines: {
                color: '#333',
            }
        },
        animation: {
            duration: 1000,
            easing: 'out',
            startup: true
        },
    };

    var chart_standard_patient = new google.visualization.AreaChart(document.getElementById("standard_patient_chart"));
    chart_standard_patient.draw(data_standard_patient, options_standard_patient);
}

function drawBedsidePatientChart() {

    var data_bedside_patient = google.visualization.arrayToDataTable([
        ["Year", "ICU", "outpatient", "all"],
        ["2016", 3, 6, 9],
        ["2017", 2, 7, 9],
        ["2018", 3, 6, 9],
        ["2019", 4, 8, 12],

    ]);

    var options_bedside_patient = {
        tooltip: {isHtml: true},
        isStacked: true,
        title: "Bedside 8주 누적 환자 수",
        backgroundColor: 'transparent',
        colors: ["#E7CC9D", "#ABCFD1", "#ABBEEC"],
        legend: "bottom",
        pointSize: 5,
        chartArea: {
            width: '90%',
        },
        hAxis: {
            gridlines: {
                color: '#777',
            },
            minorGridlines: {
                color: '#333',
            }
        },
        animation: {
            duration: 1000,
            easing: 'out',
            startup: true
        },
    };

    var chart_bedside_patient = new google.visualization.AreaChart(document.getElementById("bedside_patient_chart"));
    chart_bedside_patient.draw(data_bedside_patient, options_bedside_patient);
}

