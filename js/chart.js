function wrap(width, padding) { 
    // Adding ellipsis to the Title  
    return function() { 
      var self = d3.select(this),
              textLength = self.node().getComputedTextLength(),
              text = self.text();
          while (textLength > (width - 2 * padding) && text.length > 0) {
              text = text.slice(0, -1);
              self.text(text + '...');
              textLength = self.node().getComputedTextLength();
          }
    } 
  }

var div = d3.select("body").append("div")	
    .attr("class", "tooltip")				
    .style("opacity", 0);

  var marginp = { top: 10, right: 10, bottom: 10, left: 10 };
  var margin = { top: 20, right: 20, bottom: 20, left: 20 };
  var labelWidth = 60, countWidth = 60;
  var width = 305 - margin.left - margin.right,
      height = 250 - margin.top - margin.bottom;

  data = [
    {id: 1, name: 'vacation', percent: 25, color: "#003EB1"}
  ];
  // we need to calculate min and max if chart is not showing in %
  // For % always needs to fall in value 100
  var min = 0,
      max = d3.max(data, function(d) { return d.percent; });
  // we have to set the max  output range based on the px of values title 
  // this is only for bars 
  var xBarScale = d3.scale.linear()
                  .domain([0, 100])
                  .range([0, width - labelWidth - countWidth]); 
                  //.domain([min, max])
                  //.range([0, width - labelWidth]);
                    

  var yBarScale = d3.scale.linear()
  .domain([d3.max(data, function (d) { return d.id; }) + 1, 0])
  .range([height, 0]);

  //             var xAxis = d3.svg.axis()
  //                 .scale(xBarScale)
  //                 .orient("middle");

  //             var yAxis = d3.svg.axis()
  //                 .scale(yBarScale)
  //                 .orient("right");

  //place the left graph
  var svg = d3.select(".chart")
  .append("svg")
  .attr("width", width)
  .attr("height", height)
  .append("g")
  //.attr("transform", "translate(" + margin.left + "," + margin.top + ")");                



  //load the status'
  // X value depends on width of the title (30px for title width ) + margin
  // width value depends on width of the count (70px for count width) + margin
  svg.selectAll(".background")
    .data(data)
    .enter()
    .append("rect")
    .attr("class", "background")
    .attr("x", labelWidth)
    .attr("y", function (d) { return yBarScale(d.id)-5; })
    .attr("width", width - labelWidth - countWidth)
    .attr("height", 15);

  var theStatus = svg.selectAll(".bar")
  .data(data)
  .enter()
  .append("rect")
  .attr("x", labelWidth)
  //.attr("class", function (d) { return (d.status); })
  .attr("width", 0)
  .attr("height", 15)
  .attr("fill", function (d) { return (d.color); });

  //animate the status
  var animationDur2 = 2000;
  theStatus.transition()
    .attr("width", function (d) { return xBarScale(d.percent); })
    .attr("y", function (d) { return yBarScale(d.id)-5; })
    .duration(animationDur2);

  //add the text
  svg.selectAll(".barTitle")
    .data(data)
    .enter()
    .append("svg:text")
    .text(function (d) { return (d.percent) + "%"; })                
    .attr("x", width - countWidth + margin.right)
  //.attr("y", 10)
    .attr("y", function (d) { return yBarScale(d.id) + 8; })
    .attr("class", "barTitle");

  svg.selectAll(".label")
    .data(data)
    .enter()
    .append("svg:text")
    .text(function (d) { return (d.name); })
    .each(wrap(labelWidth, 5))
    .attr("x", 0)
    .attr("y", function (d) { return yBarScale(d.id) + 8; })
    .attr("class", "label")
    .on("mouseover", function(d) {		
            div.transition()		
                .duration(200)		
                .style("opacity", .9);		
            div	.html(d.name)	
                .style("left", (d3.event.pageX) + "px")		
                .style("top", (d3.event.pageY - 28) + "px");	
            })					
        .on("mouseout", function(d) {		
            div.transition()		
                .duration(500)		
                .style("opacity", 0);	
        });