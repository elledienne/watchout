var baloonContainer = [];
var timing = 1100;
var numberOfBaloons = 30;
var playerScore = -1;

var generateRandomCoordinates = function() {
  var result_arr = {};
  result_arr.x = Math.floor((Math.random() * 790) + 10);
  result_arr.y = Math.floor((Math.random() * 790) + 10);
  return result_arr;
}

var createBaloons = function(n){

  for(var i = 0; i < n; i++){
    var res_arr = generateRandomCoordinates();  
    baloonContainer[i] = new Baloons(res_arr.x, res_arr.y, 10);
    baloonContainer[i].create();
  }
}

var newBoard = new Board(800, 800, '.board');
newBoard.create();
createBaloons(numberOfBaloons);
var player = new Player(10, 10, 10, 'green');
player.create();

setInterval(function(){
  Baloons.prototype.move()
}, timing)

var dragger = d3.behavior.drag()
  .on('drag', function(d){
    var x = d3.event.x;
    var y = d3.event.y;
    d3.select(this).attr('cx', x).attr('cy', y)
  })

d3.select('svg').selectAll('.player')
  .on("click", null).call(dragger);


  var isOverlap = function(player, baloons) {

    for (var i = 0; i < baloons.length; i++) {
      if(baloons[i].x === player.x && baloons[i].y === player.y) {
        playerScore = 0;
      }
    }
    console.log('Player score' + playerScore++);

  }

  setInterval(isOverlap(player, baloonContainer), 50);

                                                                                                                                                                                 