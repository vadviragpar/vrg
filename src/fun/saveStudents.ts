export function saveStudents(students: string[]) {
	let studentsSorted = students
		.slice()
		.sort((a, b) => a.localeCompare(b, "hu"));
	localStorage.setItem("students", JSON.stringify(studentsSorted));
}
