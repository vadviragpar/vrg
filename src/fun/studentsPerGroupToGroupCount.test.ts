import { expect, it } from "vitest";
import { studentsPerGroupToGroupCount } from "./studentsPerGroupToGroupCount";

it("1", () => {
	expect(
		studentsPerGroupToGroupCount({ students: 1, studentsPerGroup: 1 })
	).toEqual(1);
});
it("2", () => {
	expect(
		studentsPerGroupToGroupCount({ students: 10, studentsPerGroup: 2 })
	).toEqual(5);
});
it("3", () => {
	expect(
		studentsPerGroupToGroupCount({ students: 8, studentsPerGroup: 3 })
	).toEqual(3);
});
it("4", () => {
	expect(
		studentsPerGroupToGroupCount({ students: 19, studentsPerGroup: 7 })
	).toEqual(3);
});
it("5", () => {
	expect(
		studentsPerGroupToGroupCount({ students: 3, studentsPerGroup: 3 })
	).toEqual(1);
});
