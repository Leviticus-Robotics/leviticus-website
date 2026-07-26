import { describe, expect, it } from "vitest";
import { sitePath } from "./paths";

describe("sitePath", () => {
	it("keeps root deployments root-relative", () => {
		expect(sitePath("/meet-our-team/", "/")).toBe("/meet-our-team/");
	});

	it("prefixes routes with the configured deployment base", () => {
		expect(sitePath("/meet-our-team/", "/leviticus-website")).toBe(
			"/leviticus-website/meet-our-team/",
		);
		expect(sitePath("/", "/leviticus-website/")).toBe("/leviticus-website/");
	});
});
