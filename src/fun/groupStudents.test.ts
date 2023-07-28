import { expect, it } from "vitest";
import { contains } from "./contains";
import { groupStudents } from "./groupStudents";

it("1", () => {
	let groups = groupStudents(["Vadi", "Anna", "Béla"], 2);
	expect(groups.length).toEqual(2);
});

it("2", () => {
	let groups = groupStudents(["Vadi", "Anna", "Béla", "Cecil", "Dezső"], 3);
	console.log(groups);
	expect(groups.find((group) => contains(group, "Vadi"))).not.toEqual(
		undefined
	);
});
