class ID {
    constructor(arg) {
        this.kind = arg.kind;
        this.videoId = arg.videoId;
        this.channelId = arg.channelId;
        this.playlistId = arg.playlistId;
    }
}
export class Item {
    constructor(arg) {
        this.id = new ID(arg.id);
        this.snippet = new Snippet(arg.snippet);
    }
}
class Snippet {
    constructor(arg) {
        this.channelId = arg.channelId;
        this.channelTitle = arg.channelTitle;
        this.description = arg.description;
        this.liveBroadcastContent = arg.liveBroadcastContent;
        this.publishTime = arg.publishTime;
        this.publishedAt = arg.publishedAt;
        this.thumbnails = {
            default: new Thumbnail(arg.thumbnails.default),
            high: new Thumbnail(arg.thumbnails.high),
            medium: new Thumbnail(arg.thumbnails.medium),
        };
    }
}
class Thumbnail {
    constructor(arg) {
        this.height = arg.height;
        this.width = arg.width;
        this.url = arg.url;
    }
}
//# sourceMappingURL=Item.js.map