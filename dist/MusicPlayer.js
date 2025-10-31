export class MusicPlayer {
    constructor() {
        this.player = null;
        this.ready = false;
    }
    init(stateChangeFunc) {
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
//# sourceMappingURL=MusicPlayer.js.map