import { isStudent } from "./isStudent";

/**
 * kategóriákba sorolja a diákokat
 * @param students a diákok
 */

export function classifyStudents(students: string[]): {
	vadi: string | undefined;
	normalStudents: string[];
	evilStudents: string[];
} {
	let vadi: string | undefined = undefined;
	let normalStudents: string[] = [];
	let evilStudents: string[] = [];
	for (let student of students) {
		if (
			vadi == undefined &&
			(student.includes("Vadi") || student.includes("Vadvirág"))
		) {
			vadi = student;
		} else if (
			isStudent(student, [
				"Leó",
				"Leonárd",
				"Kornél",
				"Eszti",
				"Eszter",
				"Beki",
				"Pusztai",
				"Kolos",
				"Áron",
			])
		) {
			evilStudents.push(student);
		} else {
			normalStudents.push(student);
		}
	}
	return { vadi, normalStudents, evilStudents };
}
