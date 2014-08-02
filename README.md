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

Add hotkeys to plugins object with no options.

    plugins: {
      hotkeys: {}
    }
