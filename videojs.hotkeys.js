/*
 * Video.js Hotkeys
 * https://github.com/ctd1500/videojs-hotkeys
 *
 * Copyright (c) 2015 Chris Dougherty
 * Licensed under the Apache-2.0 license.
 */

(function(window, videojs) {
  'use strict';

  window['videojs_hotkeys'] = { version: "0.2.3" };
  var hotkeys = function(options) {
    var player = this;
    var def_options = {
      volumeStep: 0.1,
      seekStep: 5,
      enableMute: true,
      enableFullscreen: true,
      enableNumbers: true
    };
    options = options || {};

    // Set default player tabindex to handle keydown and doubleclick events
    if (!player.el().hasAttribute('tabIndex')) {
      player.el().setAttribute('tabIndex', '-1');
    }

    player.on('play', function() {
      // Fix allowing the YouTube plugin to have hotkey support.
      var ifblocker = player.el().querySelector('.iframeblocker');
      if (ifblocker &&
          ifblocker.style.display == "") {
        ifblocker.style.display = "block";
        ifblocker.style.bottom = "39px";
      }
    });

    var keyDown = function keyDown(event) {
      var volumeStep = options.volumeStep || def_options.volumeStep;
      var seekStep = options.seekStep || def_options.seekStep;
      var enableMute = options.enableMute || def_options.enableMute;
      var enableFull = options.enableFullscreen || def_options.enableFullscreen;
      var enableNumbers = options.enableNumbers || def_options.enableNumbers;

      // When controls are disabled, hotkeys will be disabled as well
      if (player.controls()) {

        // Don't catch keys if any control buttons are focused
        var activeEl = document.activeElement;
        if (activeEl == player.el() ||
            activeEl == player.el().querySelector('.vjs-tech') ||
            activeEl == player.el().querySelector('.vjs-control-bar') ||
            activeEl == player.el().querySelector('.iframeblocker')) {

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
          else if (event.which === 37) { // Left Arrow
            event.preventDefault();
            var curTime = player.currentTime() - seekStep;

            // The flash player tech will allow you to seek into negative
            // numbers and break the seekbar, so try to prevent that.
            if (player.currentTime() <= seekStep) {
              curTime = 0;
            }
            player.currentTime(curTime);
          } else if (event.which === 39) { // Right Arrow
            event.preventDefault();
            player.currentTime(player.currentTime() + seekStep);
          }

          // Volume control with the up/down arrow keys
          else if (event.which === 40) { // Down Arrow
            event.preventDefault();
            player.volume(player.volume() - volumeStep);
          } else if (event.which === 38) { // Up Arrow
            event.preventDefault();
            player.volume(player.volume() + volumeStep);
          }

          // Toggle Mute with the M key
          else if (event.which === 77) {
            if (enableMute) {
              if (player.muted()) {
                player.muted(false);
              } else {
                player.muted(true);
              }
            }
          }

          // Toggle Fullscreen with the F key
          else if (event.which === 70) {
            if (enableFull) {
              if (player.isFullscreen()) {
                player.exitFullscreen();
              } else {
                player.requestFullscreen();
              }
            }
          }

          // Number keys from 0-9 skip to a percentage of the video. 0 is 0% and 9 is 90%
          else if ([48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58,
                    96, 97, 98, 99, 100, 101, 102, 103, 104, 105].indexOf(event.which) > -1) {
            if (enableNumbers) {
              var sub = 48;
              if (event.which >= 96) {
                sub = 96;
              }
              var number = event.which - sub;
              event.preventDefault();
              player.currentTime(player.duration() * number * 0.1);
            }
          }

        }
      }
    };

    var doubleClick = function doubleClick(event) {
      var enableFull = options.enableFullscreen || def_options.enableFullscreen;

      // When controls are disabled, hotkeys will be disabled as well
      if (player.controls()) {

        // Don't catch clicks if any control buttons are focused
        var activeEl = event.relatedTarget || event.toElement || document.activeElement;
        if (activeEl == player.el() ||
            activeEl == player.el().querySelector('.vjs-tech') ||
            activeEl == player.el().querySelector('.iframeblocker')) {

          if (enableFull) {
            if (player.isFullscreen()) {
              player.exitFullscreen();
            } else {
              player.requestFullscreen();
            }
          }
        }
      }
    };

    player.on('keydown', keyDown);
    player.on('dblclick', doubleClick);

    return this;
  };

  videojs.plugin('hotkeys', hotkeys);

})(window, window.videojs);
