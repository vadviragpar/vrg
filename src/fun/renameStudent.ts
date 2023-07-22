export function renameStudent(
	students: string[],
	oldName: string,
	newName: string
): string[] {
	let result: string[] = [];
	for (let student of students) {
		if (student == oldName) {
			result.push(newName);
		} else {
			result.push(student);
		}
	}
	return result;

	// let index = students.indexOf(oldName);
	// return [...students.filter((student) => student != oldName), newName];

	// return [...students.slice(0, index), newName, ...students.slice(index + 1)];
}
