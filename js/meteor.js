//this will also have to spawn the meteor
//will need custom event listeners for collisions and animation
function Meteor(playerShip){
	//this.boardHeight = boardHeight;
	//this.boardWidth = boardWidth;
	this.playerShip = playerShip;
	this.meteorSize = this.getMeteorSize()
	//this.gameBoard = gameBoard;
	//this.initBoardListener();
	//console.log(this.gameBoard);
	//this.setPosition();

}

Meteor.prototype.getMeteorSize = function(){
	const meteor = document.getElementById("hiddenMeteor");
	let sizeArray = [meteor.scrollWidth,meteor.scrollHeight];
	return sizeArray;
}

Meteor.prototype.adjustMeteor = function(boardHeight,boardWidth,meteor){
	//need to take diff of height/width board/position then compare that diff with the height/width of the image then if it is less than the height/width need to subtract that diff from the position
	let spawnX = parseInt(meteor.style.left.replace("px",""));
	let spawnY = parseInt(meteor.style.top.replace("px",""));
	//get the top left point to the edge of the box
	let boardSpawndiffX = boardWidth - spawnX;
	let boardSpawndiffY = boardHeight - spawnY;
	let metoerHeight = this.meteorSize[1];
	let metoerWidth = this.meteorSize[0];
	//console.log(meteor);
	//console.log("x diff",boardSpawndiffX,boardWidth);
	if(boardSpawndiffX < metoerWidth){
		//get the image within the box
		let widthDiff = metoerWidth - boardSpawndiffX;
		spawnX -= widthDiff;
		meteor.style.left = spawnX + "px";
		//console.log("adjusted X",widthDiff);
	}
	if(boardSpawndiffY < metoerHeight){

		let heightDiff = metoerHeight - boardSpawndiffY;
		spawnY -= heightDiff;
		meteor.style.top = spawnY + "px";
		//console.log("adjusted Y",heightDiff);
	}
	//console.log("meteor height and width ",metoerHeight,metoerWidth)
	
	setTimeout(function(){
		meteor.style.transition = "all 3s";
	},500);
}

Meteor.prototype.spawnMeteor = function(boardHeight,boardWidth) {
	let playerX = parseInt(this.playerShip.playerShip.style.left.replace(/px/g,""));
	let playerY = parseInt(this.playerShip.playerShip.style.top.replace(/px/g,""));
	const playerHeight = this.playerShip.playerShip.scrollHeight;
	const playerWidth = this.playerShip.playerShip.scrollWidth;
	//buffer around player ship that things can't spawn
	const buffer = 5;
	console.log("meteor player position",playerX,playerY,playerHeight,playerWidth);
	const playerAdjustedX = playerX + playerWidth + buffer;
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
//hitbox rectangle around meteor
Meteor.prototype.getHitBox = function(){
	return this.meteorSize[0] * this.meteorSize[1];
}