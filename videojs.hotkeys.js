/*
 * Video.js Hotkeys
 * https://github.com/ctd1500/videojs-hotkeys
 *
 * Copyright (c) 2014 Chris Dougherty
 * Licensed under the Apache-2.0 license.
 */

(function(window, videojs) {
  'use strict';

  var hotkeys = function() {
    var player = this;
    // Set default player tabindex to handle keydown events
    if (!player.el().hasAttribute('tabIndex')) {
      player.el().setAttribute('tabIndex', '-1');
    }

    player.on('keydown', keyPressListener);
    return this;
  };

  var keyPressListener = function(event) {
    var player = this;
    // When controls are disabled, hotkeys will be disabled as well
    if (player.controls()) {

      // Don't catch keys if any control buttons are focused
      if (document.activeElement == player.el() ||
          document.activeElement == player.el().querySelector('.vjs-tech')) {

        // Spacebar toggles play/pause
        if (event.which === 32) {
          event.preventDefault();
          if (player.paused()) {
            player.play();
          } else {
            player.pause();
          }
        }

        // Seeking with the left/right arrow keys
        else if (event.which == 37) { // Left Arrow
          event.preventDefault();
          player.currentTime(player.currentTime() - 5);
        } else if (event.which == 39) { // Right Arrow
          event.preventDefault();
          player.currentTime(player.currentTime() + 5);
        }

        // Volume control with the up/down arrow keys
        else if (event.which == 40) { // Down Arrow
          player.volume(player.volume() - 0.1);
        } else if (event.which == 38) { // Up Arrow
          player.volume(player.volume() + 0.1);
        }
      }
    }
  };

  videojs.plugin('hotkeys', hotkeys);

})(window, window.videojs);
