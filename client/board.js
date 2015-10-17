var Board = function(width, height, parent){
  this.width = width;
  this.height = height;
  this.parent = parent;
}

//var defs = '<defs><pattern id="image" x="-32" y="-32" patternUnits="userSpaceOnUse" height="64" width="64"><image x="0" y="0" height="64" width="64" xlink:href="shuriken.png"/></pattern></defs>';
Board.prototype.create = function(){
  d3.select(this.parent).append('svg:svg')
    .style({width: this.width, height: this.height})
    //.append('defs')
    .append('rect')
    .attr({width: '100%', height: '100%', fill: 'red'});

  d3.select('svg')
    .append('defs')
    .append('pattern')
    .attr({id: 'image', x: '0%', y:'0%', height: '100%', width: '100%', viewBox: '0 0 20 20'})
    .append('image')
    .attr({x: '0%', y: '0%', width: '20', height: '20', 'xlink:href': 'shuriken.png'})


    /*<defs>
    <pattern id="image" x="0%" y="0%" height="100%" width="100%"
             viewBox="0 0 512 512">
      <image x="0%" y="0%" width="512" height="512" xlink:href="https://cdn3.iconfinder.com/data/icons/people-professions/512/Baby-512.png"></image>
    </pattern>
  </defs>*/
   
}