import { contains } from "./contains";

/**
 * felveszi a már meglévő tanulók listáját, és egy listát új tanulókból és visszaadja az egyesített listát
 */
export function addStudents(
	students: string[],
	newStudents: string[]
): string[] {
	//	return [...students, ...newStudents];
	let result: string[] = [...students];
	for (let student of newStudents) {
		student = student.trim();
		if (!contains(result, student) && student != "") {
			result.push(student);
		}
	}
	return result;
}
