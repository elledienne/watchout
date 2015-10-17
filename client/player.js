var Player = function(top, left, radius, color){
  this.top = top;
  this.left = left;
  this.radius = radius;
  this.color = color;
  this.class = 'player';
  
}

Player.prototype = Object.create(Baloons.prototype);
Player.prototype.constructor = Player;
Player.prototype.move = function(x, y) {

  d3.select('svg').selectAll('.player')
    .data([{x: x, y: y}])
    .attr({
      "cx": function(d) { return d.x}, 
      "cy": function(d) { return d.y}
    });
}