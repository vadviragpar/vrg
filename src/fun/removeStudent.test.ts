import { expect, it } from "vitest";
import { removeStudent } from "./removeStudent";

it("1", () => {
	expect(removeStudent(["Vadi", "Anna", "Béla"], "Béla")).toEqual([
		"Vadi",
		"Anna",
	]);
});

it("2", () => {
	expect(removeStudent(["Vadi", "Anna", "Béla"], "Cecil")).toEqual([
		"Vadi",
		"Anna",
		"Béla",
	]);
});
