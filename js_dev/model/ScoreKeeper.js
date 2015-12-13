/**
  author Olin Gallet (olindgallet@olingallet.com)
  date   12/12/2014
 */

/**
 * A ScoreKeeper keeps tracks of the player's score.
 */
function ScoreKeeper(){
	this.score = 0;
}

ScoreKeeper.prototype = {
	/**
	 * Increases score.
	 */
	increaseScore: function(){
		this.score = this.score + 1;
	},
	
	/**
	 * Resets the score.
	 */
	resetScore: function(){
		this.score = 0;
	}
};