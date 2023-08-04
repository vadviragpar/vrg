import { expect, it } from "vitest";
import { isStudent } from "./isStudent";

it("1", () => {
	expect(isStudent("A", ["A"])).toEqual(true);
});

it("2", () => {
	expect(isStudent("B", ["A"])).toEqual(false);
});

it("3", () => {
	expect(isStudent("B", ["A", "B"])).toEqual(true);
});

it("4", () => {
	expect(isStudent("Kiss Béla", ["Andi", "Béla"])).toEqual(true);
});
