import { Item } from "./Item";
export class APIResponse {
    constructor(arg) {
        this.items = arg.items.map((item) => new Item(item));
        this.nextPageToken = arg.nextPageToken;
        this.success = arg.success;
        this.message = arg.message;
    }
}
//# sourceMappingURL=APIResponse.js.map