var Baloons = function(top, left, radius, color){
  this.top = top;
  this.left = left;
  this.radius = radius;
  this.color = color || 'url(#image)';
  this.class = 'baloons';
}

Baloons.prototype.create = function (){
  d3.select('svg').append('circle').attr({cx: this.top, cy: this.left, r: this.radius, class: this.class, fill: this.color})
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
    })
    //.attr();
}

