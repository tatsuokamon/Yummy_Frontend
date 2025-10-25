interface IDArg {
    kind: string;
    videoId: string | undefined;
    channelId: string | undefined;
    playlistId: string | undefined;
}
declare class ID {
    kind: string;
    videoId: string | undefined;
    channelId: string | undefined;
    playlistId: string | undefined;
    constructor(arg: IDArg);
}
export interface ItemArg {
    id: IDArg;
    snippet: SnippetArg;
}
export declare class Item {
    id: ID;
    snippet: Snippet;
    constructor(arg: ItemArg);
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
declare class Snippet {
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
    constructor(arg: SnippetArg);
}
interface ThumbnailArg {
    height: number;
    width: number;
    url: string;
}
declare class Thumbnail {
    height: number;
    width: number;
    url: string;
    constructor(arg: ThumbnailArg);
}
export {};
//# sourceMappingURL=Item.d.ts.map