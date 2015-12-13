/**
 * Makes a new InputObserver.
 */
function InputObserver(){
	this.isAcceptingInput = true;
}

InputObserver.prototype.isStartPressed = function(){
	return gamepadStatus.controlButtons.start;
};

InputObserver.prototype.isUpPressed = function(){
	return gamepadStatus.directionalPad.up || gamepadStatus.joystick.leftStick.up;
}

InputObserver.prototype.isDownPressed = function(){
	return gamepadStatus.directionalPad.down || gamepadStatus.joystick.leftStick.down;
}

InputObserver.prototype.resetState = function(){
	gamepadStatus.controlButtons.start      = false;
	gamepadStatus.directionalPad.down     = false;
	gamepadStatus.joystick.leftStick.up         = false;
	gamepadStatus.joystick.leftStick.down  = false;
}

/**
 * Handles the keyboard.
 */
var listener = new window.keypress.Listener();

listener.register_combo({
	"keys"	             : "up",
	"prevent_default"   : true,
	"on_keydown"  : function(){ gamepadStatus.directionalPad.up   = true; },
	"on_keyup"       : function(){ gamepadStatus.directionalPad.up = false;}
});
listener.register_combo({
	"keys"	             : "down",
	"prevent_default"   : true,
	"on_keydown"  : function(){ gamepadStatus.directionalPad.down   = true; },
	"on_keyup"       : function(){ gamepadStatus.directionalPad.down = false;}
});
listener.register_combo({
	"keys"              : "space",
	"prevent_default"   : true,
	"on_keydown" : function(){ gamepadStatus.controlButtons.start = true; },
	"on_keyup"      : function(){ gamepadStatus.controlButtons.start = false; }
});