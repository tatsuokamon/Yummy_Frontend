import { MusicPlayer } from "./MusicPlayer";
import { AudioManager } from "./AudioManager";
import { UIManager } from "./UIManager";
import { Requester } from "./Requester";
export class App {
    constructor() {
        const musicPlayer = new MusicPlayer();
        musicPlayer.init((e) => { });
        const audioManager = new AudioManager();
        this.musicPlayer = musicPlayer;
        this.audioManager = audioManager;
        this.uiManager = new UIManager();
        this.requester = new Requester();
    }
    init() { }
}
//# sourceMappingURL=App.js.map