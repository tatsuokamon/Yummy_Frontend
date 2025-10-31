import { namespace } from "0g";
import { APIResponse } from "./APIResponse";
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

export class Requester {
	constructor() {}
	static getDomain(): string {
		const port = "3000";
		return `localhost:${port}`;
	}

	static fromSearchParamToQuery(sp: SearchParam): string {
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

	fromSearchParamToURL(sp: SearchParam): string {
		const searchPath = "search";
		return `https://${Requester.getDomain()}/${searchPath}${Requester.fromSearchParamToQuery(sp)}`;
	}

	async get(sp: SearchParam): Promise<Item[]> {
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
	}
}
