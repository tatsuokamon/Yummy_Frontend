import { Item } from "./Item";
export class UIManger {
	static renderItem(item: Item): HTMLElement {
		const wrapper = document.createElement("div");

		const img = new Image();
		img.src = item.snippet.thumbnails.default.url;

		const des = document.createElement("span");
		des.innerText = item.snippet.description;

		wrapper.appendChild(img);
		wrapper.appendChild(des);

		return wrapper;
	}
}
