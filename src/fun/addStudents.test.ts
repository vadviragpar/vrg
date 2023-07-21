import { expect, it } from "vitest";
import { addStudents } from "./addStudents";

it("1", () => {
	expect(addStudents(["Vadi"], ["Anna"])).toEqual(["Vadi", "Anna"]);
});

it("2", () => {
	expect(addStudents(["Vadi", "Anna"], ["Béla", "Cecil"])).toEqual([
		"Vadi",
		"Anna",
		"Béla",
		"Cecil",
	]);
});

it("3", () => {
	expect(addStudents(["Vadi", "Anna"], ["Anna"])).toEqual(["Vadi", "Anna"]);
});
