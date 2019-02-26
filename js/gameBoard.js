//need a player ship class, meteor class, and collision detection class, possible a animation class?
//with this setup gameboard would need to be keeping trakc of the meteors as they spawn
function GameBoard(gameBoardID,playerShip,meteors){
	this.gameBoard = document.getElementById(gameBoardID);
	this.playerShip = playerShip;
	this.meteors = meteors;
	this.meteorTimer;
	this.initBoardListener();
	this.playerShip.setPosition(this.gameBoard.scrollWidth / 2, this.gameBoard.scrollHeight / 2);
	this.meteorID = 0;
	this.setMeteorSpawnTimer();
	console.log(this.gameBoard.scrollHeight,this.gameBoard.scrollWidth);
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
	let adjustedX = event.clientX - leftMargin - this.playerShip.playerShip.scrollWidth / 2;
	let adjustedY = event.clientY - 20 - this.playerShip.playerShip.scrollHeight / 2;
	console.log(adjustedX,adjustedY);
	console.log("ship height width",this.playerShip.playerShip.scrollHeight,this.playerShip.playerShip.scrollWidth);
	this.playerShip.setPosition(adjustedX,adjustedY);
	
}

GameBoard.prototype.spawnMeteor = function(){
	console.log("spawn meteor ",this.meteorID);
	if(this.meteorID <= 10){

		let meteorPositions = this.meteors.spawnMeteor(this.gameBoard.clientHeight,this.gameBoard.clientWidth);
		const meteorHtml = `<img id="meteor${this.meteorID}" class="meteor" src="images/meteorBrown_med3.png" style="position:absolute;left:${meteorPositions[0]}px; top:${meteorPositions[1]}px;">`;
		
		
		this.gameBoard.insertAdjacentHTML('beforeend',meteorHtml);
		let currentMeteor = document.getElementById("meteor" + this.meteorID);
		
		
		this.meteorID += 1;
		this.meteors.adjustMeteor(this.gameBoard.clientHeight,this.gameBoard.clientWidth,currentMeteor);
	}
	else{
		clearInterval(this.meteorTimer);
	}
	
}

GameBoard.prototype.setMeteorSpawnTimer = function(){
	this.meteorTimer = setInterval(this.spawnMeteor.bind(this),5000);
}

function initGameBoard(){
	let playerShip = new PlayerShip("playerShip");
	let meteors = new Meteor(playerShip);
	let gameBoard = new GameBoard("gameBoard",playerShip,meteors);
}

window.onload = initGameBoard;