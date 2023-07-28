import { pullRandomStudent } from "./pullRandomStudent";
/**
 * annyi csoportba sorolja a diákokat ahányat szeretnénk
 * @param students összes jelenlévő diák
 * @param groupCount hány csoportot szeretnénk
 */
export function groupStudents(
	students: string[],
	groupCount: number
): string[][] {
	// létrehozzuk az arrayt amibe a csoportokat gyűjtjük
	let groups: string[][] = [];
	// annyi csoportot hozunk létre amennyi a groupcount
	for (let i = 0; i < groupCount; i++) {
		// létrehozunk egy új üres csoportot
		let group: string[] = [];
		// hozzáadjuk az új üres csoportot a groups-hoz
		groups.push(group);
	}

	// ez a csoport sorszáma ahová a következő diákot tesszük, először az első csoportba
	let groupIndex = 0;
	// itt fogjuk tárolni a megmaradt diákokat
	let remainingStudents = students;
	// annyiszor húzunk diákot, ahány diák van
	for (let n = 0; n < students.length; n++) {
		// kivesszük a soronkövetkező csoportot, ahová a diákot fogjuk tenni
		let group = groups[groupIndex];
		// kihúzunk egy diákot a  megmaradt diákok közül és megkapjuk a diákot és a megmaradt diákokat
		let result = pullRandomStudent(remainingStudents);
		remainingStudents = result.students;
		let student = result.student;
		// betesszük a diákot a csoportba
		group.push(student);
		// következő iterációban a következő csoportba tesszük a diákot
		groupIndex++;
		// groups.length-1 az utolsó érvényes index egy array-ben
		if (groupIndex > groups.length - 1) {
			// túljutottunk az utolsó csoporton, ideje visszatérni az elsőre
			groupIndex = 0;
		}
	}

	return groups;
}
