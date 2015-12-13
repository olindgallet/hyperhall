var PlayScreen = (function() {
	return {	
		/**
		 * Load the playscreen.
		 */
		load: function(canvasName){
			Canvas.init(canvasName, GraphicsConstants.dimensions.WIDTH, GraphicsConstants.dimensions.HEIGHT, GraphicsConstants.LAYER_COUNT);
		},
		
		/**
		 * Render the game initially.
		 */
		render: function(){			
			Canvas.update();
		},
		
		/**
		 * Unloads the playscreen
		 */
		unload: function(){
		},
		
		/**
		 * Updates the playscreen.
		 * Can be looped continually.
		 */
		update: function(){
			FrameTimer.advanceFrame();
			if (GameState.isGameStarted() && !GameState.isGameOver()){
				Canvas.clearLayer(GraphicsConstants.layers.TEXT);
				Canvas.clearLayer(GraphicsConstants.layers.PLAYER);
				Canvas.clearLayer(GraphicsConstants.layers.HAZARDS);
				
				if (FrameTimer.getCurrentFrame() === 15){
					GameState.spawnHazards();
				}
			
				if (FrameTimer.getCurrentFrame() % 5 === 0){		
					GameState.moveHazardsLeft();
					GameState.increaseScore();
				
					var controller = GameControls.getPlayer1();
					if (controller.isUpPressed()){
						GameState.movePlayerUp();
					} else if (controller.isDownPressed()){
						GameState.movePlayerDown();
					}
					
					if (GameState.hasCollision()){
						GameState.endGame();
						document.getElementById(Canvas.getName()).className = "message-screen";
						createjs.Sound.play(AudioConstants.sfxids.EXPLODE);
					} else {
						PlayScreenDrawer.drawPlayer(GraphicsConstants.layers.PLAYER);
						PlayScreenDrawer.drawHazards(GraphicsConstants.layers.HAZARDS);
						PlayScreenDrawer.drawScore(GraphicsConstants.layers.TEXT);
					}
					
					Canvas.update();
				}
			} else if (!GameState.isGameOver()){
				Canvas.clearLayer(GraphicsConstants.layers.TEXT);
				var controller = GameControls.getPlayer1();
				if (controller.isStartPressed()){
					PlayScreenDrawer.drawRoad(GraphicsConstants.layers.BG);
					createjs.Sound.play(AudioConstants.sfxids.START);
					document.getElementById(Canvas.getName()).className = "game-screen";
					GameState.startGame();
				} else {
					PlayScreenDrawer.drawAttractText(GraphicsConstants.layers.TEXT);
					Canvas.update();
				}
			} else if (GameState.isGameOver()){
				Canvas.clearLayer(GraphicsConstants.layers.TEXT);
				Canvas.clearLayer(GraphicsConstants.layers.PLAYER);
				Canvas.clearLayer(GraphicsConstants.layers.HAZARDS);
				Canvas.clearLayer(GraphicsConstants.layers.BG);
				
				var controller = GameControls.getPlayer1();
				if (controller.isStartPressed()	){
					createjs.Sound.play(AudioConstants.sfxids.START);
					GameState.reset();
					GameState.startGame();
					document.getElementById(Canvas.getName()).className = "game-screen";
					PlayScreenDrawer.drawRoad(GraphicsConstants.layers.BG);
				} else {
					PlayScreenDrawer.drawContinueText(GraphicsConstants.layers.TEXT);
					Canvas.update();
				}
			}
		}
	}
})();