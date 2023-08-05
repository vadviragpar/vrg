export function saveStudents(students: string[]) {
	localStorage.setItem("students", JSON.stringify(students));
}
