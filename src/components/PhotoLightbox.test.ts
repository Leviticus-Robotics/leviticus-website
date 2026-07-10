import { fireEvent, render, screen, waitFor } from "@testing-library/svelte";
import { describe, expect, it } from "vitest";
import PhotoLightboxHarness from "../test/PhotoLightboxHarness.svelte";

describe("PhotoLightbox", () => {
	it("opens typed photos through its component API", async () => {
		render(PhotoLightboxHarness);

		await fireEvent.click(screen.getByRole("button", { name: "Open First robot" }));
		expect(await screen.findByRole("dialog")).toBeTruthy();
		expect(screen.getAllByRole("dialog")).toHaveLength(1);
		expect(screen.getByText("First description")).toBeTruthy();

		await fireEvent.click(screen.getByRole("button", { name: "Close photo details" }));
		await waitFor(() => expect(screen.queryByRole("dialog")).toBeNull());

		await fireEvent.click(screen.getByRole("button", { name: "Open Second robot" }));
		expect(await screen.findByText("Second description")).toBeTruthy();
		expect(screen.getAllByRole("dialog")).toHaveLength(1);
	});
});
