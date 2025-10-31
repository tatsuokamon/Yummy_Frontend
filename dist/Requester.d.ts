import { Item } from "./Item";
interface SearchParam {
    query: string | undefined;
    type: string | undefined;
    part: string | undefined;
    order: string | undefined;
    maxResults: string | undefined;
    nextPageToken: string | undefined;
    regionCode: string | undefined;
}
export declare class Requester {
    constructor();
    static getDomain(): string;
    static fromSearchParamToQuery(sp: SearchParam): string;
    fromSearchParamToURL(sp: SearchParam): string;
    get(sp: SearchParam): Promise<Item[]>;
}
export {};
//# sourceMappingURL=Requester.d.ts.map