//have a animator for each meteor
function Animator(meteor,boardHeight,boardWidth){
	this.meteor = meteor;
	this.boardHeight = boardHeight;
	this.boardWidth = boardWidth;
	this.meteorHeight = meteor.scrollHeight;
	this.meteorWidth = meteor.scrollWidth;
}
//use this function to get the meteor position in relation to wall or meteors
Animator.prototype.getMeteorPosition = function() {
	// body...
};
//use this function to set the new position of the meteor and css will handle animation
Animator.prototype.setMeteorPosition = function() {
	// body...
};
Animator.prototype.collision = function(){

}
