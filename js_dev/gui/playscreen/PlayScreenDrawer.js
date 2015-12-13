/**
  author Olin Gallet (olindgallet@olingallet.com)
  date   12/12/2015
 */
 /**
  * The PlayScreenDrawer draws various sprites and text for the
  * play screen.
 */
var PlayScreenDrawer = (function() {
	var _bgSheet      = new SpriteSheet(GraphicsConstants.spritesheets.bg.URL, GraphicsConstants.spritesheets.bg.WIDTH, GraphicsConstants.spritesheets.bg.HEIGHT);
	var _playerSheet = new SpriteSheet(GraphicsConstants.spritesheets.player.URL, GraphicsConstants.spritesheets.player.WIDTH, GraphicsConstants.spritesheets.player.HEIGHT);
	var _playerAnimation = new Animation("player", 0, 1);
	var _hazardSheet = new SpriteSheet(GraphicsConstants.spritesheets.hazards.URL, GraphicsConstants.spritesheets.hazards.WIDTH, GraphicsConstants.spritesheets.hazards.HEIGHT);
	
	return {		
		/**
		 * Draws the attract text.
		 * @param layerNumber {int} the layer number to draw on
		 */
		drawAttractText: function(layerNumber){
			var text = TextUtilities.makeText(210, 140, 'Hyper Hall', 20, '#fff');
			Canvas.addComponent(layerNumber, text);
			var text = TextUtilities.makeText(150, 240, 'Press Start/Space', 20, '#fff');
			 Canvas.addComponent(layerNumber, text);
			 
		},
		
		/**
		 * Draws the continue text.
		 * @param layerNumber {int} the layer number to draw on
		 */
		drawContinueText: function(layerNumber){
			var text = TextUtilities.makeText(50, 100, 'You Crashed At:' + GameState.getScore() + ' km', 20, '#fff');
			Canvas.addComponent(layerNumber, text);
			text = TextUtilities.makeText(50, 180, 'Press Start/Space to Retry', 20, '#fff');
			Canvas.addComponent(layerNumber, text);
		},
		
		/**
		 * Draws the hazards.
		 * @param layerNumber {int} the layer number to draw on
		 */
		drawHazards:function(layerNumber){
			var i = 0;
			var hazards = GameState.getHazards();
			var tile;
			while (i < hazards.length){
				tile    = _hazardSheet.getFrame(0);
				tile.x = hazards[i].x;
				tile.y = hazards[i].y;
				Canvas.addComponent(layerNumber, tile);
				i = i + 1;
			}
		},
		
		/**
		 * Draws the player.
		 * @param layerNumber {int} the layer number to draw on
		 */
		drawPlayer: function(layerNumber){
			var player = _playerSheet.getFrame(_playerAnimation.getCurrentFrame());
			_playerAnimation.advanceFrame();
			var lane    = GameState.getCurrentLane();
			if (lane === 0){
				player.x = 0;
				player.y = GraphicsConstants.elements.lanes._1;
			} else if (lane === 1){
				player.x = 0;
				player.y = GraphicsConstants.elements.lanes._2;
			} else if (lane === 2){
				player.x = 0;
				player.y = GraphicsConstants.elements.lanes._3;
			} else if (lane === 3){
				player.x = 0;
				player.y = GraphicsConstants.elements.lanes._4;
			}
			Canvas.addComponent(layerNumber, player);
		},
		
		/**
		 * Draws the road.
		 * @param layerNumber {int} the layer number to draw on
		 */
		drawRoad: function(layerNumber){
			var x = GraphicsConstants.elements.road.X;
			var y = GraphicsConstants.elements.road.Y;
			var tile;
			
			while (y < GraphicsConstants.dimensions.HEIGHT){
				while (x < GraphicsConstants.dimensions.WIDTH){
					tile = _bgSheet.getFrame(0);
				 	tile.x = x;
				    tile.y = y;
				 
					Canvas.addComponent(layerNumber, tile);
					x = x + GraphicsConstants.spritesheets.bg.WIDTH;
				}
				y = y + GraphicsConstants.spritesheets.bg.HEIGHT;
				x = GraphicsConstants.elements.road.X;
			}
		},
		
		/**
		 * Draws the score.
		 * @param layerNumber {int} the layer number to draw on
		 */
		drawScore: function(layerNumber){
			 var text = TextUtilities.makeText(310, 30, "Distance:" + GameState.getScore() + ' km', 20, '#fff');
			 Canvas.addComponent(layerNumber, text);
		}
		
	}
})();