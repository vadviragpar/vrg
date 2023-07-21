import { expect, it } from "vitest";
import { contains } from "./contains";

it("1", () => {
	expect(contains(["a", "b", "c"], "b")).toBe(true);
});

it("2", () => {
	expect(contains(["a", "b", "c"], "d")).toBe(false);
});
