/**
 * létrehoz egy új listát, amiből hiányzik a törlendő diák
 * @param students diákok listája
 * @param student törlendő diák
 */

export function removeStudent(students: string[], student: string): string[] {
	return students.filter((elem) => elem != student);
}
