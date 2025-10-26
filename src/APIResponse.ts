import { Item, type ItemArg } from "./Item";

interface APIResponseArg {
	items: ItemArg[];
	nextPageToken: string;
	success: Boolean;
	message: string;
}

export class APIResponse {
	items: Item[];
	nextPageToken: string;
	success: Boolean;
	message: string;

	constructor(arg: APIResponseArg) {
		this.items = arg.items.map((item) => new Item(item));
		this.nextPageToken = arg.nextPageToken;
		this.success = arg.success;
		this.message = arg.message;
	}
}
