/**
  author Olin Gallet (olindgallet@olingallet.com)
  date   12/6/2015
 */

 /**
  * The AudioPlayer loads up audio files and readies their id for use.
  */
var AudioPlayer = (function() {
	var throttleSound;
	
	return {	
		/**
		 * Initializes the audio player.
		 */
		init: function(){
			createjs.Sound.registerSound(AudioConstants.sfxfiles.START, AudioConstants.sfxids.START);
			createjs.Sound.registerSound(AudioConstants.sfxfiles.EXPLODE, AudioConstants.sfxids.EXPLODE);
		}
	}
})();