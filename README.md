videojs-hotkeys
========================

A plugin for Video.js that enables keyboard hotkeys when the player has focus.
* Space bar toggles play/pause.
* Right and Left Arrow keys seek the video forwards and back.
* Up and Down Arrow keys increase and decrease the volume.

###Usage
Include the plugin:

```
<script src="videojs.hotkeys.js"></script>
```

Add hotkeys to plugins object.

    plugins: {
      hotkeys: {
        volumeStep: 0.1,
        seekStep: 5
      }
    }

## Options

- `volumeStep` (decimal): The percentage to increase/decrease the volume level when using the Up and Down Arrow keys (default: `0.1`)
- `seekStep` (integer): The number of seconds to seek forward and backwards when using the Right and Left Arrow keys (default: `5`)
