/*MVC frameworks help you separate and manage the concerns associated with user input, each category of behavior is grouped in one area */
//-------------------Board----------------------------------------------//
/* variables */
var board = [
  [0,0,0],
  [0,0,0],
  [0,0,0]
]

//player one & player two
var user = {
  0:'one',
  1:'two'
}

var tableElement = document.getElementsByTagName('table')

/**--------------------------------functions---------------------------- */
var setBoard = function(place, player){
console.log('place: ',place,'player:', player)
if(place === 'first')  {board[0][0]= player}
if(place === 'second') {board[0][1]= player}
if(place === 'third')  {board[0][2]= player}
if(place === 'forth')  {board[1][0]= player}
if(place === 'fifth')  {board[1][1]= player}
if(place === 'sisth')  {board[1][2]= player}
if(place === 'seventh'){board[2][0]= player}
if(place === 'eighth') {board[2][1]= player}
if(place === 'ningth') {board[2][2]= player}

}

var findWin= function(){
  var colum1 = [], colum2 = [], colum3 = [], mainDiag = [], subDiag = [];
  for (var i = 0; i < board.length; i++) {
    for (var j = 0; j < board.length; j++) {
      //find one row
      findMatch(board[i])
      //if major diagonal
      if(i===j){
        mainDiag.push(board[i][j])
      }
      //if other diagona
      if(i+j === 2){
        subDiag.push(board[i][j])
      }
    }
    //find column
    colum1.push(board[i][0])
    colum2.push(board[i][1])
    colum3.push(board[i][2])

  }

  //main diagonal chek
  findMatch(mainDiag)
  //sub diagonal chek
  findMatch(subDiag)
  //column ckek
  findMatch(colum1)
  findMatch(colum2)
  findMatch(colum3)
}

//find one row that win
var findMatch= function(row){
    //if player repeted 3 times
    var winerAlert = document.getElementById('player')
    if(row.filter((i)=> i==='one').length === 3){
      //trigger winner 'one'
      console.log('you have winner: player one')
      winerAlert.innerHTML = "player one win this match: "
    }
    if(row.filter((i)=> i==='two').length === 3){
      //trigger winner 'two'
      console.log('you have winner: player two')
      winerAlert.innerHTML = "player two win this match: "
      //winnerAlert(i)
    }
  }


var reset= function(){
  var board = [
    [0,0,0],
    [0,0,0],
    [0,0,0]
  ]

  var elementreset = document.getElementsByTagName('table')
  elementreset.replaceWith(tableElement)
}


/* -------------------------------event listeners---------------------------------------------------------------------- */
//start with player 1 and toggle
var player = document.getElementById('player')
player.innerHTML = 'one'
var count = 0

var handler = (place)=>{
  var element = document.getElementById(place)
  console.log(element, 'inside')
  if(element.innerHTML === '-'){
    //chek wich player turn and toggle to the other
    count++;
    player.innerHTML = user[count%2]
    if(player.innerHTML === 'one'){
      //add to board matrix by another function
      setBoard(element.id,player.innerHTML)
      element.innerHTML = 'X';
      //chek if you have a win board
      findWin()

    }else if(player.innerHTML === 'two'){
      setBoard(element.id,player.innerHTML)
      element.innerHTML = 'O';
      findWin()
    }
  }
  //chek if player got score
  //chek if any pressed and save it in bord
  console.log('------------------------')

}

//event Listener for all
var all = document.getElementById('board')
if(all){
  all.addEventListener('click', function(event){
    handler(event.target.id)
})
}
