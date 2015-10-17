var baloonContainer = [];
var timing = 1100;
var numberOfBaloons = 30;
var playerScore = -1;
var highScore = 0;
var collisions = 0;

var generateRandomCoordinates = function() {
  var coordinates = {};
  coordinates.x = Math.floor((Math.random() * 790));
  coordinates.y = Math.floor((Math.random() * 790));

  var coordinates = modifyBoundaries(coordinates.x, coordinates.y)
  return coordinates;
}

var createBaloons = function(n){
  for(var i = 0; i < n; i++){
    var res_arr = generateRandomCoordinates();  
    baloonContainer[i] = new Baloons(res_arr.x, res_arr.y, 10, 'url(#image)');
    baloonContainer[i].create();
  }
}

var isOverlap = function(circle, player) {
  var d = Math.sqrt((player.cx - circle.cx) * (player.cx - circle.cx) + 
                    (player.cy - circle.cy) * (player.cy - circle.cy));

  if(d <= 20) {
    return true;
  } else {
    return false;
  }
}

var checkCordinates = function() {
  var arrCircles = d3.select('svg').selectAll('circle');
  var arrPlayer = d3.select('svg').selectAll('.player');

  var playerObject = {};
  var circleObject = {};
  playerObject.cx = arrPlayer[0][0].cx.baseVal.value;
  playerObject.cy = arrPlayer[0][0].cy.baseVal.value;

  for(var i = 0; i < 30; i++) {
    circleObject.cx = arrCircles[0][i].cx.baseVal.value;
    circleObject.cy = arrCircles[0][i].cy.baseVal.value;
    
    if(isOverlap(circleObject, playerObject)) {
      if(highScore < playerScore) {
        highScore = playerScore;
        d3.select('body').selectAll('.high-score')
          .text(highScore);
      }

      playerScore = 0;
      collisions++;
      d3.select('body').selectAll('.collisions-score')
          .text(collisions);
    }
  }
}

var modifyBoundaries = function(x, y){
  x = x > 790 ? 790 : x;
  x = x < 10 ? 10 : x;
  y = y > 790 ? 790 : y;
  y = y < 10 ? 10 : y;

  return {x: x, y: y}; 
}

var newBoard = new Board(800, 800, '.board');
newBoard.create();
createBaloons(numberOfBaloons);
var player = new Player(10, 10, 10, 'url(#imagePlayer)');
player.create();

var dragger = d3.behavior.drag()
.on('drag', function(d){
  var coordinates = modifyBoundaries(d3.event.x, d3.event.y);
  var x = coordinates.x
  var y = coordinates.y;
  
  d3.select(this).attr('cx', x).attr('cy', y)
});

d3.select('svg').selectAll('.player')
.on("click", null).call(dragger);

setInterval(function(){
  Baloons.prototype.move()
}, timing);

setInterval(checkCordinates, 10);

setInterval(function(){
  playerScore++;
  d3.select('body').selectAll('.current-score')
    .text(playerScore);
}, 50);

