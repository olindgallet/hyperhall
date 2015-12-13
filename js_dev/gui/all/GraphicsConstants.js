/**
  author Olin Gallet (olindgallet@olingallet.com)
  date   12/6/2015
 */
/**
 * GraphicsConstants holds constants used for drawing the game.  
 * It also has some location information for the model.
 */
var GraphicsConstants = (function() {
	return {
		LAYER_COUNT: 6,
		FPS: 60,
		
		dimensions: {
			WIDTH: 640,
			HEIGHT: 480
		},
		
		layers: {
			BG:                                   0,
			PLAYER:                          1,
			HAZARDS:                        2,
			TEXT:                               3
		},

		elements:{
			road:{
				X: 0,
				Y: 300
			},
			
			lanes: {
				_1: 300,
				_2: 340,
				_3: 380,
				_4: 420
			}
		},
		
		spritesheets:{
			bg: {
				URL: "img/playscreen/bg-spritesheet.png",
				WIDTH: 20,
				HEIGHT: 20
			},

			player: {
				URL: "img/playscreen/player-spritesheet.png",
				WIDTH: 80,
				HEIGHT: 40
			},
			
			hazards: {
				URL: "img/playscreen/hazard-spritesheet.png",
				WIDTH: 40,
				HEIGHT: 40
			}
		}
	}
})();