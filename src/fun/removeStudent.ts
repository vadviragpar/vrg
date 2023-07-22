export function removeStudent(students: string[], student: string): string[] {
	return students.filter((elem) => elem != student);
}
