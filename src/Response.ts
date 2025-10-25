import { Item, type ItemArg } from "./Item";

interface ResponseArg {
	items: ItemArg[];
	nextPageToken: string;
	success: Boolean;
	message: string;
}

export class Response {
	items: Item[];
	nextPageToken: string;
	success: Boolean;
	message: string;

	constructor(arg: ResponseArg) {
		this.items = arg.items.map((item) => new Item(item));
		this.nextPageToken = arg.nextPageToken;
		this.success = arg.success;
		this.message = arg.message;
	}
}
