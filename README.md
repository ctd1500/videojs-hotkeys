videojs-hotkeys
========================

A plugin for Video.js that enables keyboard hotkeys when the player has focus.
* Space bar toggles play/pause.
* Right and Left Arrow keys seek the video forwards and back.
* Up and Down Arrow keys increase and decrease the volume.
* M key toggles mute/unmute.
* F key toggles fullscreen off and on.

## Usage
Include the plugin:

### CDN version
You can either load the current release:
```
<script src="//cdn.sc.gl/videojs-hotkeys/0.2/videojs.hotkeys.min.js"></script>
```
Or always load the latest version:
```
<script src="//cdn.sc.gl/videojs-hotkeys/latest/videojs.hotkeys.min.js"></script>
```

### Self hosted
```
<script src="/path/to/videojs.hotkeys.js"></script>
```

Add hotkeys to your Videojs ready function.

    videojs('vidId').ready(function() {
      this.hotkeys({
        volumeStep: 0.1,
        seekStep: 5,
        enableMute: true,
        enableFullscreen: true
      });
    });

## Options

- `volumeStep` (decimal): The percentage to increase/decrease the volume level when using the Up and Down Arrow keys (default: `0.1`)
- `seekStep` (integer): The number of seconds to seek forward and backwards when using the Right and Left Arrow keys (default: `5`)
- `enableMute` (boolean): Enables the volume mute to be toggle by pressing the **M** key (default: `true`)
- `enableFullscreen` (boolean): Enables toggling the video fullscreen by pressing the **F** key (default: `true`)
