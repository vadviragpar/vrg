import { expect, it } from "vitest";
import { groupCountToStudentsPerGroup } from "./groupCountToStudentsPerGroup";

it("1", () => {
	expect(groupCountToStudentsPerGroup({ students: 1, groupCount: 1 })).toEqual({
		bigStudentsPerGroup: 1,
		smallStudentsPerGroup: 1,
		bigGroupCount: 1,
		smallGroupCount: 0,
	});
});
it("2", () => {
	expect(groupCountToStudentsPerGroup({ students: 10, groupCount: 5 })).toEqual(
		{
			bigStudentsPerGroup: 2,
			smallStudentsPerGroup: 2,
			bigGroupCount: 5,
			smallGroupCount: 0,
		}
	);
});
it("3", () => {
	expect(groupCountToStudentsPerGroup({ students: 19, groupCount: 3 })).toEqual(
		{
			bigStudentsPerGroup: 7,
			smallStudentsPerGroup: 6,
			bigGroupCount: 1,
			smallGroupCount: 2,
		}
	);
});
it("4", () => {
	expect(groupCountToStudentsPerGroup({ students: 9, groupCount: 4 })).toEqual({
		bigStudentsPerGroup: 3,
		smallStudentsPerGroup: 2,
		bigGroupCount: 1,
		smallGroupCount: 3,
	});
});
it("5", () => {
	expect(groupCountToStudentsPerGroup({ students: 8, groupCount: 3 })).toEqual({
		bigStudentsPerGroup: 3,
		smallStudentsPerGroup: 2,
		bigGroupCount: 2,
		smallGroupCount: 1,
	});
});
it("6", () => {
	expect(groupCountToStudentsPerGroup({ students: 4, groupCount: 3 })).toEqual({
		bigStudentsPerGroup: 2,
		smallStudentsPerGroup: 1,
		bigGroupCount: 1,
		smallGroupCount: 2,
	});
});
