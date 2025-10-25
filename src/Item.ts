interface IDArg {
	kind: string;
	videoId: string | undefined;
	channelId: string | undefined;
	playlistId: string | undefined;
}

class ID {
	kind: string;
	videoId: string | undefined;
	channelId: string | undefined;
	playlistId: string | undefined;

	constructor(arg: IDArg) {
		this.kind = arg.kind;
		this.videoId = arg.videoId;
		this.channelId = arg.channelId;
		this.playlistId = arg.playlistId;
	}
}

export interface ItemArg {
	id: IDArg;
	snippet: SnippetArg;
}

export class Item {
	id: ID;
	snippet: Snippet;
	constructor(arg: ItemArg) {
		this.id = new ID(arg.id);
		this.snippet = new Snippet(arg.snippet);
	}
}

interface SnippetArg {
	channelId: string;
	channelTitle: string;
	description: string;
	liveBroadcastContent: string;
	publishTime: string;
	publishedAt: string;
	thumbnails: {
		default: ThumbnailArg;
		high: ThumbnailArg | undefined;
		medium: ThumbnailArg | undefined;
	};
}

class Snippet {
	channelId: string;
	channelTitle: string;
	description: string;
	liveBroadcastContent: string;
	publishTime: string;
	publishedAt: string;
	thumbnails: {
		default: Thumbnail;
		high: Thumbnail | undefined;
		medium: Thumbnail | undefined;
	};
	constructor(arg: SnippetArg) {
		this.channelId = arg.channelId;
		this.channelTitle = arg.channelTitle;
		this.description = arg.description;
		this.liveBroadcastContent = arg.liveBroadcastContent;
		this.publishTime = arg.publishTime;
		this.publishedAt = arg.publishedAt;
		this.thumbnails = {
			default: new Thumbnail(arg.thumbnails.default),
			high: arg.thumbnails.high
				? new Thumbnail(arg.thumbnails.high)
				: undefined,
			medium: arg.thumbnails.medium
				? new Thumbnail(arg.thumbnails.medium)
				: undefined,
		};
	}
}

interface ThumbnailArg {
	height: number;
	width: number;
	url: string;
}

class Thumbnail {
	height: number;
	width: number;
	url: string;

	constructor(arg: ThumbnailArg) {
		this.height = arg.height;
		this.width = arg.width;
		this.url = arg.url;
	}
}
