import VideoJsPlayer from 'video.js/dist/types/player';

declare module 'video.js/dist/types/player' {
    export default interface VideoJsPlayer {
        hotkeys(options?: VideoJsHotkeysOptions): void;
    }
}

export interface VideoJsHotkeysOptions {
    volumeStep?: number;
    seekStep?: number;
    enableMute?: boolean;
    enableVolumeScroll?: boolean;
    enableHoverScroll?: boolean;
    enableFullscreen?: boolean;
    enableNumbers?: boolean;
    enableModifiersForNumbers?: boolean;
    alwaysCaptureHotkeys?: boolean;
    enableInactiveFocus?: boolean;
    skipInitialFocus?: boolean;
    captureDocumentHotkeys?: boolean;
    documentHotkeysFocusElementFilter?: (element: HTMLElement) => boolean;
    enableJogStyle?: boolean;
    playPauseKey?: (event: KeyboardEvent, player: VideoJsPlayer) => boolean;
    rewindKey?: (event: KeyboardEvent, player: VideoJsPlayer) => boolean;
    forwardKey?: (event: KeyboardEvent, player: VideoJsPlayer) => boolean;
    volumeUpKey?: (event: KeyboardEvent, player: VideoJsPlayer) => boolean;
    volumeDownKey?: (event: KeyboardEvent, player: VideoJsPlayer) => boolean;
    muteKey?: (event: KeyboardEvent, player: VideoJsPlayer) => boolean;
    fullscreenKey?: (event: KeyboardEvent, player: VideoJsPlayer) => boolean;
    customKeys?: VideoJsCustomHotkeyOptions;
}

export interface VideoJsCustomHotkeyOptions {
    [key: string]: VideoJsCustomHotkey;
}

export interface VideoJsCustomHotkey {
    key: (event: KeyboardEvent, player: VideoJsPlayer) => boolean;
    handler: (player: VideoJsPlayer, options: VideoJsHotkeysOptions, event: KeyboardEvent) => void;
}
