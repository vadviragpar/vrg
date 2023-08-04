import { expect, it } from "vitest";
import { classifyStudents } from "./classifyStudents";

it("1", () => {
	expect(classifyStudents([])).toEqual({
		vadi: undefined,
		normalStudents: [],
		evilStudents: [],
	});
});
it("2", () => {
	expect(classifyStudents(["Vadi", "Anna", "Béla", "Kolos"])).toEqual({
		vadi: "Vadi",
		normalStudents: ["Anna", "Béla"],
		evilStudents: ["Kolos"],
	});
});

it("3", () => {
	expect(
		classifyStudents([
			"Parditka Vadvirág",
			"Nagy Anna",
			"Kiss Béla",
			"Szilágyi Kolos",
		])
	).toEqual({
		vadi: "Parditka Vadvirág",
		normalStudents: ["Nagy Anna", "Kiss Béla"],
		evilStudents: ["Szilágyi Kolos"],
	});
});
