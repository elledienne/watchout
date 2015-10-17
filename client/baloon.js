var Baloons = function(top, left, radius){
  this.top = top;
  this.left = left;
  this.radius = radius;
  this.color = 'blue';
  this.class = 'baloons';
}

Baloons.prototype.create = function (){
  d3.select('svg').append('circle').attr({cx: this.top, cy: this.left, r: this.radius, fill: this.color, class: this.class/*, stroke: 'gray', 'stroke-width': '2'*/})
}

Baloons.prototype.move = function(x, y) {
  var coordinateArray = baloonContainer.map(function(){
    return generateRandomCoordinates();
  });

  d3.select('svg').selectAll('circle')
    .data(coordinateArray)
    .transition().duration(timing)
    .attr({
      "cx": function(d) { return d.x}, 
      "cy": function(d) { return d.y}
  });
}

