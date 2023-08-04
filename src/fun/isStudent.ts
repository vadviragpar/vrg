/**
 * megmondja hogy egy diákra illik-e bármelyik a megadott névrészletek közül
 * @param student diák
 * @param nameParts névrészletek
 */
export function isStudent(student: string, nameParts: string[]): boolean {
	for (let namePart of nameParts) {
		if (student.includes(namePart)) {
			return true;
		}
	}
	return false;
}
