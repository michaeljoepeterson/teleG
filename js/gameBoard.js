//need a player ship class, meteor class, and collision detection class, possible a animation class?
function GameBoard(gameBoardID,playerShip){
	this.gameBoard = document.getElementById(gameBoardID);
	this.playerShip = playerShip;
	this.initBoardListener();
	this.playerShip.setPosition(this.gameBoard.scrollHeight / 2,this.gameBoard.offsetWidth / 2);
	console.log(this.gameBoard.scrollHeight,this.gameBoard.offsetWidth);
}

GameBoard.prototype.initBoardListener = function(){
	this.gameBoard.addEventListener("click",function(e){
		this.clickBoard(e);
	}.bind(this),false);
}

GameBoard.prototype.clickBoard = function(event){
	console.log("test click");
	//adjust poition with margins 20px top margin and other margins have to get
	console.log("target margins ",getComputedStyle(event.currentTarget).getPropertyValue("margin-left"));
	let leftMargin = parseInt(getComputedStyle(event.currentTarget).getPropertyValue("margin-left").replace("px",""));
	let adjustedX = event.clientX - leftMargin;
	let adjustedY = event.clientY - 20;
	console.log(adjustedX,adjustedY);
	this.playerShip.setPosition(adjustedX,adjustedY);
}

function initGameBoard(){
	let playerShip = new PlayerShip("playerShip")
	let gameBoard = new GameBoard("gameBoard",playerShip);
}

window.onload = initGameBoard;