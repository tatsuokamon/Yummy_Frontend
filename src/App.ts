import { MusicPlayer } from "./MusicPlayer";
import { AudioManager } from "./AudioManager";
import { UIManager } from "./UIManager";
import { Requester } from "./Requester";

export class App {
	musicPlayer: MusicPlayer;
	audioManager: AudioManager;
	uiManager: UIManager;
	requester: Requester;

	constructor() {
		const musicPlayer = new MusicPlayer();
		musicPlayer.init((e: YT.OnStateChangeEvent) => {});

		const audioManager = new AudioManager();

		this.musicPlayer = musicPlayer;
		this.audioManager = audioManager;
		this.uiManager = new UIManager();
		this.requester = new Requester();
	}

	init() {}
}
