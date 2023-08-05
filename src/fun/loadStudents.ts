export function loadStudents(): string[] {
	let studentsJSONString = localStorage.getItem("students");
	if (studentsJSONString == null) {
		return [];
	} else {
		return JSON.parse(studentsJSONString);
	}
}
