//this will also have to spawn the meteor
//will need custom event listeners for collisions and animation
function Meteor(playerShip){
	//this.boardHeight = boardHeight;
	//this.boardWidth = boardWidth;
	this.playerShip = playerShip;
	//this.gameBoard = gameBoard;
	//this.initBoardListener();
	//console.log(this.gameBoard);
	//this.setPosition();

}

Meteor.prototype.spawnMeteor = function(boardHeight,boardWidth) {
	let playerX = parseInt(this.playerShip.playerShip.style.left.replace(/px/g,""));
	let playerY = parseInt(this.playerShip.playerShip.style.top.replace(/px/g,""));
	const playerHeight = this.playerShip.playerShip.scrollHeight;
	const playerWidth = this.playerShip.playerShip.scrollWidth;
	//buffer around player ship that things can't spawn
	const buffer = 5;
	console.log("meteor player position",playerX,playerY,playerHeight,playerWidth);
	const playerAdjustedX = playerX + playerHeight + buffer;
	const playerAdjustedY = playerY + playerHeight + buffer;
	let spawnY = this.randomPosition(0,boardHeight);
	let spawnX = this.randomPosition(0,boardWidth);
	let positionDifferenceX = Math.abs(spawnX - playerAdjustedX);
	let positionDifferenceY = Math.abs(spawnY - playerAdjustedY);
	console.log("metoer spawn: ",spawnX,spawnY);
	console.log("metoer position difference: ",positionDifferenceX,positionDifferenceY);

	
	while(positionDifferenceX <= playerWidth + buffer && positionDifferenceY <= playerHeight + buffer){
		spawnY = this.randomPosition(0,boardHeight);
		spawnX = this.randomPosition(0,boardWidth);
		positionDifferenceX = Math.abs(spawnX - playerAdjustedX);
		positionDifferenceY = Math.abs(spawnY - playerAdjustedY);
	}
	
	return [spawnX,spawnY];
};

Meteor.prototype.randomPosition = function(min,max){
	return Math.floor(Math.random() * (max - min + 1) ) + min;
}