import { expect, it } from "vitest";
import { renameStudent } from "./renameStudent";

it("1", () => {
	expect(renameStudent(["Vadi", "Anna", "Cecil"], "Anna", "Béla")).toEqual([
		"Vadi",
		"Béla",
		"Cecil",
	]);
});
