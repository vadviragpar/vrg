export function groupCountToStudentsPerGroup({
	students,
	groupCount,
}: {
	students: number;
	groupCount: number;
}): {
	bigStudentsPerGroup: number;
	smallStudentsPerGroup: number;
	bigGroupCount: number;
	smallGroupCount: number;
} {
	let bigStudentsPerGroup = Math.ceil(students / groupCount);
	let smallStudentsPerGroup = Math.floor(students / groupCount);
	let bigGroupCount = students - groupCount * smallStudentsPerGroup;
	let smallGroupCount = groupCount - bigGroupCount;
	if (bigGroupCount == 0) {
		bigGroupCount = smallGroupCount;
		smallGroupCount = 0;
	}
	// floor
	// if (students % groupCount > 0) {
	// 	smallStudentsPerGroup = bigStudentsPerGroup - 1;
	// } else {
	// 	smallStudentsPerGroup = bigStudentsPerGroup;
	// }
	return {
		bigStudentsPerGroup,
		smallStudentsPerGroup,
		bigGroupCount,
		smallGroupCount,
	};
}
