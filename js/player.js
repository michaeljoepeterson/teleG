function PlayerShip(plaerShipID){
	this.playerShip = document.getElementById(plaerShipID);
	this.playerX = 0;
	this.playerY = 0;
	//this.initBoardListener();
	//console.log(this.gameBoard);
	//this.setPosition();
}

PlayerShip.prototype.setPosition = function(xPosition,yPosition){
	if(xPosition === undefined){
		xPosition = false;
	}
	if(yPosition === undefined){
		yPosition = false;
	}
	if(!xPosition || !yPosition){
		this.playerShip.style.left = this.playerX + "px";
		this.playerShip.style.top = this.playerY + "px";
	}
	else if(xPosition && yPosition){
		this.playerShip.style.left = xPosition + "px";
		this.playerShip.style.top = yPosition + "px";
	}
	
}
