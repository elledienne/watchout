var Board = function(width, height, parent){
  this.width = width;
  this.height = height;
  this.parent = parent;
}

Board.prototype.create = function(){
  d3.select(this.parent).append('svg:svg')
  .style({width: this.width, height: this.height})
  .append('rect')
  .attr({width: '100%', height: '100%', fill: 'red'})
}