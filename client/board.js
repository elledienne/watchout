var Board = function(width, height, parent){
  this.width = width;
  this.height = height;
  this.parent = parent;
}

Board.prototype.create = function(){
  d3.select(this.parent).append('svg:svg')
    .style({width: this.width, height: this.height})
    .append('rect')
    .attr({width: '100%', height: '100%', fill: 'transparent'});

  d3.select('svg')
    .append('defs')
    .append('pattern')
    .attr({
      id: 'image',
      x: '0%',
      y:'0%',
      height: '100%',
      width: '100%',
      viewBox: '0 0 20 20'
    })
    .append('image')
    .attr({
        x: '0%',
        y: '0%',
        width: '20',
        height: '20',
        'xlink:href': '../img/shuriken.png'
      });

   d3.select('svg')
    .append('defs')
    .append('pattern')
    .attr({
      id: 'imagePlayer',
      x: '0%',
      y:'0%',
      height: '100%',
      width: '100%',
      viewBox: '0 0 20 20'
    })
    .append('image')
    .attr({
      x: '0%',
      y: '0%',
      width: '20',
      height: '20',
      'xlink:href': '../img/player.png'
    })
   
}