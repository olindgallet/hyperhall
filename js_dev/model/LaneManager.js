/**
  author Olin Gallet (olindgallet@olingallet.com)
  date   12/10/2014
 */

/**
 * A LaneManager is used to keep track of what lane
 * the player is in.
 */
function LaneManager(){
	this.currentLane = 0;
}

LaneManager.prototype = {
	/**
	 * Moves the player down a lane, if possible.
	 */
	movePlayerDown: function(){
		this.currentLane = this.currentLane + 1;
		if (this.currentLane > 3){
			this.currentLane = 3;
		}
	},
	
	/**
	 * Moves the player up a lane, if possible.
	 */
	movePlayerUp: function(){
		this.currentLane = this.currentLane - 1;
		if (this.currentLane < 0){
			this.currentLane = 0;
		}
	}
};