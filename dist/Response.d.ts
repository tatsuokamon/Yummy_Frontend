import { Item, type ItemArg } from "./Item";
interface ResponseArg {
    items: ItemArg[];
    nextPageToken: string;
    success: Boolean;
    message: string;
}
export declare class Response {
    items: Item[];
    nextPageToken: string;
    success: Boolean;
    message: string;
    constructor(arg: ResponseArg);
}
export {};
//# sourceMappingURL=Response.d.ts.map