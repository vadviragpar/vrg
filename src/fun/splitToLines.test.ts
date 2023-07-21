import { expect, it } from "vitest";
import { splitToLines } from "./splitToLines";

it("1", () => {
	expect(splitToLines("a\nb\nc")).toEqual(["a", "b", "c"]);
});

it("2", () => {
	expect(splitToLines("")).toEqual([""]);
});

it("3", () => {
	expect(splitToLines("abc")).toEqual(["abc"]);
});

it("4", () => {
	expect(splitToLines("abc\n")).toEqual(["abc", ""]);
});
