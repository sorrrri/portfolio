google.charts.load('current', {'packages': ['geochart', 'table', 'corechart', 'line']});
google.charts.setOnLoadCallback(drawChart);
google.charts.setOnLoadCallback(drawChart_02);
google.charts.setOnLoadCallback(drawChart_03);
google.charts.setOnLoadCallback(drawChart_04);
google.charts.setOnLoadCallback(drawChart_05);
google.charts.setOnLoadCallback(drawChart_06);
google.charts.setOnLoadCallback(drawChart_07);

function drawChart() {

  var data = new google.visualization.DataTable();
  data.addColumn('date', 'Date');
  data.addColumn('number', '2018년 4월생');
  data.addColumn('number', '2018년 5월생');
  data.addColumn('number', '2018년 6월생');
  data.addColumn('number', '2018년 7월생');
  data.addColumn('number', '2018년 8월생');
  data.addColumn('number', '2018년 9월생');
  data.addColumn('number', '2018년 10월생');
  data.addColumn('number', '2018년 11월생');
  data.addColumn('number', '2018년 12월생');

  data.addRows([
    [new Date(2018, 3), 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [new Date(2018, 3), 80, 0, 0, 0, 0, 0, 0, 0, 0],
    [new Date(2018, 4), 100, 0, 0, 0, 0, 0, 0, 0, 0],
    [new Date(2018, 4), 100, 80, 0, 0, 0, 0, 0, 0, 0],
    [new Date(2018, 5), 100, 100, 0, 0, 0, 0, 0, 0, 0],
    [new Date(2018, 5), 100, 100, 80, 0, 0, 0, 0, 0, 0],
    [new Date(2018, 6), 100, 100, 100, 0, 0, 0, 0, 0, 0],
    [new Date(2018, 6), 100, 100, 100, 80, 0, 0, 0, 0, 0],
    [new Date(2018, 7), 100, 100, 100, 100, 0, 0, 0, 0, 0],
    [new Date(2018, 7), 100, 100, 100, 100, 80, 0, 0, 0, 0],
    [new Date(2018, 8), 100, 100, 100, 100, 100, 0, 0, 0, 0],
    [new Date(2018, 8), 100, 100, 100, 100, 100, 80, 0, 0, 0],
    [new Date(2018, 9), 100, 100, 100, 100, 100, 100, 0, 0, 0],
    [new Date(2018, 9), 100, 100, 100, 100, 100, 100, 80, 0, 0],
    [new Date(2018, 10), 100, 100, 100, 100, 100, 100, 100, 0, 0],
    [new Date(2018, 10), 100, 100, 100, 100, 100, 100, 100, 80, 0],
    [new Date(2018, 11), 100, 100, 100, 100, 100, 100, 100, 100, 0],
    [new Date(2018, 11), 100, 100, 100, 100, 100, 100, 100, 100, 80],
    [new Date(2019, 0), 100, 100, 100, 100, 100, 100, 100, 100, 100],
    [new Date(2019, 0), 100, 100, 100, 100, 100, 100, 100, 100, 100],
  ]);

  var options = {
    title: '생년월 코호트별 접종률',
    subtitle: '어린이 대상 백신',
    width: "100%",
    height: "100%",
    curveType: 'function',
    vAxis: {
      title: '접종률',
      minValue: 0,
      maxValue: 100
    },
    hAxis: {
      title: '조회기간',
      format: 'yyyy.MM',
      gridlines: {
        count: -1,
        units: {
          days: {format: ['MMM dd']},
          hours: {format: ['HH:mm', 'ha']},
        }
      },
      minorGridlines: {
        units: {
          hours: {format: ['hh:mm:ss a', 'ha']},
          minutes: {format: ['HH:mm a Z', ':mm']}
        }
      }
    },
    animation: {
      startup: true,
      duration: 1000,
      easing: 'out',
    },
  };

  var chart = new google.visualization.LineChart(document.getElementById('linechart_material'));

  chart.draw(data, options);
}

function drawChart_02() {

  var data = new google.visualization.DataTable();
  data.addColumn('date', 'Date');
  data.addColumn('number', '0~2개월');
  data.addColumn('number', '2~4개월');
  data.addColumn('number', '4~6개월');
  data.addColumn('number', '6~8개월');

  data.addRows([
    [new Date(2018, 7), 250, 310, 350, 389],
    [new Date(2018, 8), 235, 304, 355, 388],
    [new Date(2018, 9), 245, 301, 354, 381],
    [new Date(2018, 10), 251, 316, 350, 388],
    [new Date(2018, 11), 246, 317, 353, 384],
    [new Date(2019, 0), 234, 312, 359, 380],
    [new Date(2019, 1), 261, 319, 360, 386],
    [new Date(2019, 2), 254, 320, 354, 389],
    [new Date(2019, 3), 269, 311, 352, 387],
    [new Date(2019, 4), 253, 314, 358, 388],
    [new Date(2019, 5), 258, 313, 357, 384],
  ]);

  var options = {
    title: '연령군별 접종률',
    subtitle: '어린이 대상 백신',
    width: "100%",
    height: "100%",
    /*curveType: 'function',*/
    vAxis: {
      title: '접종률',
      minValue: 0,
      maxValue: 100
    },
    hAxis: {
      title: '조회기간',
      format: 'yyyy.MM',
      gridlines: {
        count: -1,
        units: {
          days: {format: ['MMM dd']},
          hours: {format: ['HH:mm', 'ha']},
        }
      },
      minorGridlines: {
        units: {
          hours: {format: ['hh:mm:ss a', 'ha']},
          minutes: {format: ['HH:mm a Z', ':mm']}
        }
      }
    },
    animation: {
      startup: true,
      duration: 1000,
      easing: 'out',
    },
  };

  var chart_02 = new google.visualization.LineChart(document.getElementById('chart_02'));

  chart_02.draw(data, options);
}


// 완전접종룔
function drawChart_03() {

  var data = new google.visualization.DataTable();
  data.addColumn('number', 'number');
  data.addColumn('number', '2014');
  data.addColumn('number', '2015');
  data.addColumn('number', '2016');
  data.addColumn('number', '2017');
  data.addColumn('number', '2018');
  data.addColumn('number', '2019');
  data.addColumn('number', '2020');

  data.addRows([
    [1, 300, 564, 816, 878, 547, 523, 645],
    [2, 234, 354, 658, 324, 684, 543, 847],
    [3, 645, 654, 124, 842, 697, 324, 565],
    [4, 456, 324, 561, 367, 165, 567, 658],
    [5, 684, 321, 678, 143, 354, 894, 135],
    [6, 357, 684, 327, 874, 234, 651, 387],
    [7, 843, 357, 165, 753, 486, 571, 694],
    [8, 234, 354, 658, 324, 684, 543, 847],
    [9, 645, 654, 124, 842, 697, 324, 565],
    [10, 456, 324, 561, 367, 165, 567, 658],
    [11, 684, 321, 678, 143, 354, 894, 135],
    [12, 357, 684, 327, 874, 234, 651, 387],
  ]);

  var options = {
    title: '월별 백신 접종 받은 사람 수',
    subtitle: '어린이 대상 백신',
    width: "100%",
    height: "100%",
    /*curveType: 'function',*/
    vAxis: {
      title: '접종 받은 사람 수',
      minValue: 0,
      maxValue: 100
    },
    hAxis: {
      title: '조회기간',
      width: '100%'
    },
    animation: {
      startup: true,
      duration: 1000,
      easing: 'out',
    },
  };

  var chart_03 = new google.visualization.ColumnChart(document.getElementById('chart_03'));

  chart_03.draw(data, options);
}

// 지역별 접종률
function drawChart_04() {
  var data = new google.visualization.DataTable();

  data.addColumn('string', '지역');
  data.addColumn('number', 'Percentage');
  data.addColumn({type: 'string', role: 'tooltip'}, 'Detail');

  data.addRows([[
    {v: 'KR-11', f: '서울'},
    89, '89']]);

  data.addRows([[{v: 'KR-26', f: '부산광역시'}, 90, '90']]);

  data.addRows([[{v: 'KR-27', f: '대구광역시'}, 95, '95']]);

  data.addRows([[{v: 'KR-30', f: '대전광역시'}, 92, '92']]);

  data.addRows([[{v: 'KR-29', f: '광주광역시'}, 97, '97']]);

  data.addRows([[{v: 'KR-28', f: '인천광역시'}, 80, '80']]);

  data.addRows([[{v: 'KR-31', f: '울산광역시'}, 86, '86']]);

  data.addRows([[{v: 'KR-43', f: '충청북도'}, 90, '90']]);

  data.addRows([[{v: 'KR-44', f: '충청남도'}, 88, '88']]);

  data.addRows([[{v: 'KR-42', f: '강원도'}, 89, '89']]);

  data.addRows([[
    {v: 'KR-41', f: '경기도'},
    90,
    `고양시: 90%, 과천시: 80%, 
광명시: 86%, 광주시: 90%, 
구리시: 93%, 군포시: 95%, 
김포시: 97%, 남양주시: 90%, 
동두천시: 91%, 부천시: 92%, 
성남시: 87%, 수원시: 87%, 
시흥시: 88%, 안산시: 83%, 
안성시: 90%, 안양시: 89%, 
양주시: 88%, 오산시: 86%, 
용인시: 88%, 의왕시: 83%, 
의정부시: 98%, 이천시: 93%, 
파주시: 92%, 평택시: 91%, 
포천시: 97%, 하남시: 93%, 
화성시: 95%`]]);

  data.addRows([[{v: 'KR-47', f: '경상북도'}, 91, '91']]);

  data.addRows([[{v: 'KR-48', f: '경상남도'}, 99, '99']]);

  data.addRows([[{v: 'KR-45', f: '전라북도'}, 89, '89']]);

  data.addRows([[{v: 'KR-46', f: '전라남도'}, 80, '80']]);

  data.addRows([[{v: 'KR-49', f: '제주도'}, 93, '93']]);

  data.addRows([[{v: 'KR-50', f: '세종특별시'}, 93, '93']]);


  var options = {
    title: '월별 백신 접종 받은 사람 수',
    subtitle: '어린이 대상 백신',
    backgroundColor: {fill: '#FFFFFF', stroke: '#FFFFFF', strokeWidth: 0},
    colorAxis: {colors: ['#A3E0BD', '#278A7B']},
    datalessRegionColor: '#f5f5f5',
    displayMode: 'regions',
    enableRegionInteractivity: 'true',
    resolution: 'provinces',
    region: 'KR', //country code
    tooltip: {textStyle: {color: '#444444'}, trigger: 'focus'}
  };

  var chart_04 = new google.visualization.GeoChart(document.getElementById('chart_04'));

  var table_04 = new google.visualization.Table(document.getElementById('table_04'));
  table_04.draw(data, null);

  google.visualization.events.addListener(table_04, 'select', function () {
    chart_04.setSelection(table_04.getSelection());
  })

  chart_04.draw(data, options);
}


function drawChart_05() {
  var data = new google.visualization.DataTable();

  data.addColumn('string', '지역');
  data.addColumn('number', 'Percentage');
  data.addColumn({type: 'string', role: 'tooltip'});

  data.addRows([[
    {v: 'KR-11', f: '서울'},
    89, '89%']]);

  data.addRows([[{v: 'KR-26', f: '부산광역시'}, 90, '90%']]);

  data.addRows([[{v: 'KR-27', f: '대구광역시'}, 95, '95%']]);

  data.addRows([[{v: 'KR-30', f: '대전광역시'}, 92, '92%']]);

  data.addRows([[{v: 'KR-29', f: '광주광역시'}, 97, '97%']]);

  data.addRows([[{v: 'KR-28', f: '인천광역시'}, 80, '80%']]);

  data.addRows([[{v: 'KR-31', f: '울산광역시'}, 86, '86%']]);

  data.addRows([[{v: 'KR-43', f: '충청북도'}, 90, '90%']]);

  data.addRows([[{v: 'KR-44', f: '충청남도'}, 88, '88%']]);

  data.addRows([[{v: 'KR-42', f: '강원도'}, 89, '89%']]);

  data.addRows([[
    {v: 'KR-41', f: '경기도'},
    90,
    `고양시: 90%, 과천시: 80%, 
광명시: 86%, 광주시: 90%, 
구리시: 93%, 군포시: 95%, 
김포시: 97%, 남양주시: 90%, 
동두천시: 91%, 부천시: 92%, 
성남시: 87%, 수원시: 87%, 
시흥시: 88%, 안산시: 83%, 
안성시: 90%, 안양시: 89%, 
양주시: 88%, 오산시: 86%, 
용인시: 88%, 의왕시: 83%, 
의정부시: 98%, 이천시: 93%, 
파주시: 92%, 평택시: 91%, 
포천시: 97%, 하남시: 93%, 
화성시: 95%`]]);

  data.addRows([[{v: 'KR-47', f: '경상북도'}, 91, '91%']]);

  data.addRows([[{v: 'KR-48', f: '경상남도'}, 99, '99%']]);

  data.addRows([[{v: 'KR-45', f: '전라북도'}, 89, '89%']]);

  data.addRows([[{v: 'KR-46', f: '전라남도'}, 80, '80%']]);

  data.addRows([[{v: 'KR-49', f: '제주도'}, 93, '93%']]);

  data.addRows([[{v: 'KR-50', f: '세종특별시'}, 93, '93%']]);


  var options = {
    title: '월별 백신 접종 받은 사람 수',
    subtitle: '어린이 대상 백신',
    backgroundColor: {fill: '#FFFFFF', stroke: '#FFFFFF', strokeWidth: 0},
    colorAxis: {colors: ['#A3E0BD', '#278A7B']},
    datalessRegionColor: '#f5f5f5',
    displayMode: 'regions',
    enableRegionInteractivity: 'true',
    resolution: 'provinces',
    region: 'KR', //country code
    tooltip: {textStyle: {color: '#444444'}, trigger: 'focus'}
  };

  var chart_05 = new google.visualization.GeoChart(document.getElementById('chart_05'));

  var table_05 = new google.visualization.Table(document.getElementById('table_05'));
  table_05.draw(data, null);

  google.visualization.events.addListener(table_05, 'select', function () {
    chart_05.setSelection(table_05.getSelection());
  })
  chart_05.draw(data, options);
}


function drawChart_06() {
  var data = new google.visualization.DataTable();

  data.addColumn('string', '지역');
  data.addColumn('number', 'Percentage');
  data.addColumn({type: 'string', role: 'tooltip'});

  data.addRows([[
    {v: 'KR-11', f: '서울'},
    89, '89']]);

  data.addRows([[{v: 'KR-26', f: '부산광역시'}, 90, '90']]);

  data.addRows([[{v: 'KR-27', f: '대구광역시'}, 95, '95']]);

  data.addRows([[{v: 'KR-30', f: '대전광역시'}, 92, '92']]);

  data.addRows([[{v: 'KR-29', f: '광주광역시'}, 97, '97']]);

  data.addRows([[{v: 'KR-28', f: '인천광역시'}, 80, '80']]);

  data.addRows([[{v: 'KR-31', f: '울산광역시'}, 86, '86']]);

  data.addRows([[{v: 'KR-43', f: '충청북도'}, 90, '90']]);

  data.addRows([[{v: 'KR-44', f: '충청남도'}, 88, '88']]);

  data.addRows([[{v: 'KR-42', f: '강원도'}, 89, '89']]);

  data.addRows([[
    {v: 'KR-41', f: '경기도'},
    90,
    `고양시: 90%, 과천시: 80%, 
광명시: 86%, 광주시: 90%, 
구리시: 93%, 군포시: 95%, 
김포시: 97%, 남양주시: 90%, 
동두천시: 91%, 부천시: 92%, 
성남시: 87%, 수원시: 87%, 
시흥시: 88%, 안산시: 83%, 
안성시: 90%, 안양시: 89%, 
양주시: 88%, 오산시: 86%, 
용인시: 88%, 의왕시: 83%, 
의정부시: 98%, 이천시: 93%, 
파주시: 92%, 평택시: 91%, 
포천시: 97%, 하남시: 93%, 
화성시: 95%`]]);

  data.addRows([[{v: 'KR-47', f: '경상북도'}, 91, '91']]);

  data.addRows([[{v: 'KR-48', f: '경상남도'}, 99, '99']]);

  data.addRows([[{v: 'KR-45', f: '전라북도'}, 89, '89']]);

  data.addRows([[{v: 'KR-46', f: '전라남도'}, 80, '80']]);

  data.addRows([[{v: 'KR-49', f: '제주도'}, 93, '93']]);

  data.addRows([[{v: 'KR-50', f: '세종특별시'}, 93, '93']]);


  var options = {
    title: '월별 백신 접종 받은 사람 수',
    subtitle: '어린이 대상 백신',
    backgroundColor: {fill: '#FFFFFF', stroke: '#FFFFFF', strokeWidth: 0},
    colorAxis: {colors: ['#A3E0BD', '#278A7B']},
    datalessRegionColor: '#f5f5f5',
    displayMode: 'regions',
    enableRegionInteractivity: 'true',
    resolution: 'provinces',
    region: 'KR', //country code
    tooltip: {textStyle: {color: '#444444'}, trigger: 'focus', isHtml: 'true'}
  };

  var chart_06 = new google.visualization.GeoChart(document.getElementById('chart_06'));

  var table_06 = new google.visualization.Table(document.getElementById('table_06'));
  table_06.draw(data, null);

  google.visualization.events.addListener(table_06, 'select', function () {
    chart_06.setSelection(table_06.getSelection());
  })
  chart_06.draw(data, options);
}

// 안전성 분석현황
function drawChart_07() {

  var data = new google.visualization.DataTable();
  data.addColumn('number', 'Weeks');
  data.addColumn('number', 'Incidence');
  data.addColumn({id: 'i0', type: 'number', role: 'interval'});
  data.addColumn({id: 'i1', type: 'number', role: 'interval'});
  data.addColumn('number', 'Incidence');
  data.addColumn({id: 'i2', type: 'number', role: 'interval'});
  data.addColumn({id: 'i3', type: 'number', role: 'interval'});

  data.addRows([
    [-60, 3, 1, 5, null, null, null],
    [-50, 4.5, 3.5, 5.5, null, null, null],
    [-40, 6, 5, 7, null, null, null],
    [-30, 4, 3, 5, null, null, null],
    [-20, 2, 1, 3, null, null, null],
    [-10, 3.5, 2.5, 4.5, null, null, null],
    [0, 5, 4, 6, 40, 40, 0],
    [10, 5.5, 4.5, 6.5, 25, 40, 0],
    [20, 6, 5, 7, 28, 35, 5],
    [30, 5.5, 4.5, 6.5, 20, 30, 5],
    [40, 5, 4, 6, 15, 25, 7],
    [50, 4.5, 3.5, 5.5, 18, 24, 11],
    [60, 4, 3, 5, 15, 22, 10],
    [70, 4.5, 3.5, 5.5, 17, 21, 13],
    [80, 5, 4, 6, 16, 19, 13],
    [90, 5.5, 4.5, 6.5, 16, 19, 12],
    [100, 6, 5, 7, 16, 19, 13],
    [110, 5, 4, 6, 15, 18, 12],
    [120, 4, 3, 5, 18, 20, 15],
  ]);

  var options = {
    title: '백신 접종 후 위험구간 내 이상반응 발생률',
    width: "100%",
    height: "100%",
    intervals: {'style': 'area'},
    legend: 'none',
    vAxis: {
      title: 'Incidence(/10,000 person years)',
      ticks: [0, 10, 20, 30, 40],
    },
    hAxis: {
      title: 'Weeks',
      ticks: [-60, -40, -20, 0, 20, 40, 60, 80, 100, 120],
    },
  };

  var chart_07 = new google.visualization.LineChart(document.getElementById('chart_07'));

  chart_07.draw(data, options);
}
