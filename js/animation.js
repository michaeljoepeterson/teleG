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
	let computedStyle = getComputedStyle(this.meteor);
	return [parseInt(computedStyle.left.replace("px","")),parseInt(computedStyle.top.replace("px",""))];
};

//Animator.prototype.checkCo
//use this function to set the new position of the meteor and css will handle animation
Animator.prototype.setMeteorPosition = function() {
	// body...
};
Animator.prototype.collision = function(){

}
