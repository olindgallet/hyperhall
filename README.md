# Hyper Hall - Ludum Dare 34 (December 2015)
Source code for the Ludum Dare 34 Entry Hyper Hall - Theme is 2 Button Usage

Created by: <a target="_blank" href="http://www.olingallet.com">Olin Gallet</a> | <a target="_blank" href="http://www.twitter.com/olingallet">@olingallet</a>

Play the game at: <a target="_blank" href="http://olingallet.itch.io/hyper-hall">itch.io</a>

I am making my source code for this project available under the MIT license in hopes of helping you out in your programming journey.  Much of the code is documented and I will provide instructions on how to build the project. If there's anything that's unclear feel free to contact me.

---
# How to Get Started
1. Fork a copy of everything.
2. Go to the command line and install node.js.  
3. While still in the command line install the modules needed in `gruntfile.js`.  For Windows it'd be `npm install -g` then the module name.
4. While still in the command line compile the program by typing `grunt compiletest`.  Note that you can also type `grunt compile` to get a minified version, but the test version is easier to debug.
5. Make changes, break some code.  I recommend starting with `js_dev/gui/all/GraphicsConstants.js` and changing some values, compiling, and seeing what happens.

---
# Developer Comments/TODOs
1. Implement screens rather than bunch everything in PlayScreen.
2. Put sound-playing logic in AudioPlayer class rather than calling the play method in PlayScreen (and all future screens).
3. Keep animation in the appropriate Drawer class; don't have any animation setup in the Screen class.
4. GameState acting as the bridge between model and visuals is good.

---
# MIT License
Copyright (c) 2015- Olin Gallet

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

---
