export function studentsPerGroupToGroupCount({
	students,
	studentsPerGroup,
}: {
	students: number;
	studentsPerGroup: number;
}) {
	let averageGroupCount = students / studentsPerGroup;
	let bigGroupCount = Math.ceil(averageGroupCount);
	return bigGroupCount;
}
