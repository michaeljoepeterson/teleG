function GameBoard(gameBoardID){
	this.gameBoard = document.getElementById(gameBoardID);
	this.initBoardListener();
	//console.log(this.gameBoard);
}

GameBoard.prototype.initBoardListener = function(){
	/*
	this.gameBoard.addEventListener("mouseover",function(e){
		this.mouseoverBoard(e);
	}.bind(this),false);
	*/
	this.gameBoard.addEventListener("click",function(e){
		this.clickBoard(e);
	}.bind(this),false);
}

GameBoard.prototype.clickBoard = function(event){
	console.log("test click");
	//adjust poition with margins 20px top margin and other margins have to get
	console.log("target margins ",getComputedStyle(event.currentTarget).getPropertyValue("margin-left"));
	console.log(event.clientX,event.clientY);
}

GameBoard.prototype.mouseoverBoard = function(event){
	console.log("test");
	console.log(event.clientX,event.clientY);
}

function initGameBoard(){
	let gameBoard = new GameBoard("gameBoard");
}

window.onload = initGameBoard;