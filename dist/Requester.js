var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { namespace } from "0g";
import { APIResponse } from "./APIResponse";
import { Item } from "./Item";
export class Requester {
    constructor() { }
    static getDomain() {
        const port = "3000";
        return `localhost:${port}`;
    }
    static fromSearchParamToQuery(sp) {
        let result = "?";
        result += sp.query ? `query=${sp.query}` : "";
        result += sp.type ? `type=${sp.type}` : "";
        result += sp.part ? `part=${sp.part}` : "";
        result += sp.order ? `order=${sp.order}` : "";
        result += sp.maxResults ? `order=${sp.maxResults}` : "";
        result += sp.nextPageToken
            ? `nextPageToken=${sp.nextPageToken}`
            : "";
        result += sp.regionCode ? `regionCode=${sp.regionCode}` : "";
        return encodeURI(result);
    }
    fromSearchParamToURL(sp) {
        const searchPath = "search";
        return `https://${Requester.getDomain()}/${searchPath}${Requester.fromSearchParamToQuery(sp)}`;
    }
    get(sp) {
        return __awaiter(this, void 0, void 0, function* () {
            return fetch(this.fromSearchParamToURL(sp))
                .then((res) => res.json())
                .then((result) => {
                const resp = new APIResponse(result);
                if (!resp.success) {
                    console.error(resp.message);
                    return resp.items;
                }
                return resp.items;
            });
        });
    }
}
//# sourceMappingURL=Requester.js.map