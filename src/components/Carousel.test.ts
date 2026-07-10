import { fireEvent, render } from "@testing-library/svelte";
import { createRawSnippet } from "svelte";
import { describe, expect, it, vi } from "vitest";
import Carousel from "./Carousel.svelte";

const children = createRawSnippet(() => ({
	render: () => "<article>Carousel item</article>",
}));

const setScrollable = (viewport: HTMLElement) => {
	Object.defineProperties(viewport, {
		clientWidth: { configurable: true, value: 500 },
		scrollLeft: { configurable: true, value: 0, writable: true },
		scrollWidth: { configurable: true, value: 1000 },
	});
	viewport.dispatchEvent(new Event("scroll"));
};

describe("Carousel", () => {
	it("scopes scrolling to each component instance", async () => {
		render(Carousel, { children, id: "first", label: "First carousel" });
		render(Carousel, { children, id: "second", label: "Second carousel" });

		const firstViewport = document.querySelector<HTMLElement>("#first-viewport");
		const secondViewport = document.querySelector<HTMLElement>("#second-viewport");
		expect(firstViewport).toBeTruthy();
		expect(secondViewport).toBeTruthy();

		setScrollable(firstViewport!);
		setScrollable(secondViewport!);
		const firstScroll = vi.fn();
		const secondScroll = vi.fn();
		firstViewport!.scrollBy = firstScroll;
		secondViewport!.scrollBy = secondScroll;

		await fireEvent.click(document.querySelector<HTMLButtonElement>("[data-carousel='first'] button[aria-label='Next items']")!);

		expect(firstScroll).toHaveBeenCalledWith({ left: 430, behavior: "smooth" });
		expect(secondScroll).not.toHaveBeenCalled();
	});
});
