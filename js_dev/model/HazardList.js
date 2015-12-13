/**
  author Olin Gallet (olindgallet@olingallet.com)
  date   12/13/2014
 */

/**
 * A HazardList holds a list of all hazards on the road.
 * @class HazardList
 */
function HazardList(){
	this.hazards = [];
}

HazardList.prototype = {
	/**
	 * States if there is a collision with the given object.
	 * @param x         {int} the x-coordinate of the object
	 * @param y         {int} the y-coordinate of the object
	 * @param width  {int} the width of the object
	 * @param height {int} the height of the object
	 */
	hasCollision: function(x, y, width, height){
		var i = 0;
		var hasCollision = false;
		while (i < this.hazards.length && !hasCollision){
			hasCollision = this.hazards[i].hasCollision(x, y, width, height);
			i = i + 1;
		}
		return hasCollision;
	},
	
	/**
	 * Moves all the hazards left.  If a hazard goes off the screen, remove it.
	 */
	moveHazardsLeft: function(){
		var i = 0;
		while (i < this.hazards.length){
			this.hazards[i].moveLeft();
			if (this.hazards[i].x < 0){
				this.hazards.slice(i, 1);
			}
			i = i + 1;
		}
	},
	
	/**
	 * Spawns a hazard at the given location.
	 * @param x         {int} the x-coordinate of the hazard
	 * @param y         {int} the y-coordinate of the hazard
	 * @param width  {int} the width of the hazard
	 * @param height {int} the height of the hazard
	 */
	 spawnHazard: function(x, y, width, height){
		 this.hazards.push(new Hazard(x, y, width, height));
	 }
};