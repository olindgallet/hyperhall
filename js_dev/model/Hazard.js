/**
  author Olin Gallet (olindgallet@olingallet.com)
  date   12/12/2014
 */

/**
 * A Hazard represents death for the player; crashing into it means game over.
 * @class Hazard
 * @constructor
 * @param x         {int} the x-coordinate of the hazard
 * @param y         {int} the y-coordinate of the hazard
 * @param width  {int} the width of the hazard
 * @param height {int} the height of the hazard
 */
function Hazard(x, y, width, height){
	this.x = x;
	this.y = y;
	this.width  = width;
	this.height =  height;
}

Hazard.prototype = {
	/**
	 * States if there is a collision with the given object.
	 * @param x         {int} the x-coordinate of the object
	 * @param y         {int} the y-coordinate of the object
	 * @param width  {int} the width of the object
	 * @param height {int} the height of the object
	 */
	hasCollision: function(x, y, width, height){
		return (Math.abs(this.x - x) * 2 < (this.width + width)) &&
         (Math.abs(this.y - y) * 2 < (this.height + height));
	},
	
	/**
	 * Moves the hazard left.
	 */
	moveLeft: function(){
		this.x = this.x - 20;
	}
};