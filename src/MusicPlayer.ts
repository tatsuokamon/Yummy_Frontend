export class MusicPlayer {
	player: YT.Player | null;
	ready: Boolean;
	constructor() {
		this.player = null;
		this.ready = false;
	}

	init(stateChangeFunc: (e: YT.OnStateChangeEvent) => void) {
		window.onYoutubeIframeAPIReady = () => {
			const player = new YT.Player("player", {
				videoId: "facecQNF0jw", // dummy video id
				events: {
					onReady: () => {
						this.player = player;
					},

					onError: (e) => {
						console.error(e);
					},

					onStateChange: (e) => {
						stateChangeFunc(e);
						this.ready = true;
					},
				},
			});
		};
	}
}
