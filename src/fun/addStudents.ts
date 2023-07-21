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
		if (contains(result, student) == false) {
			result.push(student);
		}
	}
	return result;
}
