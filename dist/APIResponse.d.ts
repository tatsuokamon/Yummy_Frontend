import { Item, type ItemArg } from "./Item";
interface APIResponseArg {
    items: ItemArg[];
    nextPageToken: string;
    success: Boolean;
    message: string;
}
export declare class APIResponse {
    items: Item[];
    nextPageToken: string;
    success: Boolean;
    message: string;
    constructor(arg: APIResponseArg);
}
export {};
//# sourceMappingURL=APIResponse.d.ts.map