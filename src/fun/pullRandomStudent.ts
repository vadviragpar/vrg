import { getRandomInt } from "./getRandomInt";
import { removeStudent } from "./removeStudent";
/**
 * kihúz egy diákot véletlenszerűen és visszaadja a diákot és a megmaradt diákok listáját
 * @param students jelenlévő diákok listája
 */
export function pullRandomStudent(students: string[]): {
	student: string;
	students: string[];
} {
	// egy diák véletenszerűen kiválasztott sorszáma
	let index = getRandomInt(students.length);
	// kivesszük a diákot
	let student = students[index];
	// kitöröljük a listából a diákot
	let studentsWithoutStudent = removeStudent(students, student);
	return { student: student, students: studentsWithoutStudent };
}
