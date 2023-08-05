import { classifyStudents } from "./classifyStudents";
import { pullRandomStudent } from "./pullRandomStudent";
import { shuffle } from "./shuffle";
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
	let classes = classifyStudents(students);
	if (classes.vadi != undefined) {
		//Vadi itt van
		// ez a csoport sorszáma ahová a következő diákot tesszük, először az első csoportba
		let groupIndex = 0;
		// itt fogjuk tárolni a megmaradt diákokat
		let remainingNormalStudents = classes.normalStudents;
		let remainingEvilStudents = classes.evilStudents;
		//a nagyobb csoportokban található diákok száma
		let studentsPerGroup = Math.ceil(students.length / groups.length);
		// Vadi számára előnyös csoport maximális létszáma
		let vadisGroupMaxStudentCount = 1 + classes.normalStudents.length;
		// itt tároljuk Vadi csoportjának sorszámát
		let vadisGroupIndex;
		// ha vannak kis csoportok, de nem elég a normális diák egy nagy csoport feltöltéséhez, akkor Vadi egy kis csoportba kerüljön (az utolsó biztosan az)
		if (studentsPerGroup - 1 == vadisGroupMaxStudentCount) {
			vadisGroupIndex = groupCount - 1;
		} else {
			vadisGroupIndex = 0;
		}
		// annyiszor húzunk diákot, ahány diák van Vadin kívül
		for (let n = 0; n < students.length; n++) {
			// kivesszük a soronkövetkező csoportot, ahová a diákot fogjuk tenni
			let group = groups[groupIndex];
			// kihúzunk egy diákot a  megmaradt diákok közül és megkapjuk a diákot és a megmaradt diákokat
			let result;
			// megállapítjuk, hogy ez Vadi csoportja e
			let isVadisGroup = groupIndex == vadisGroupIndex;
			// megállapítjuk, hogy van e még normális diák
			let haveNormalStudents = remainingNormalStudents.length > 0;
			// megállapítjuk, hogy van e még gonosz diák
			let haveEvilStudents = remainingEvilStudents.length > 0;
			// if ((isVadisGroup && haveNormalStudents) || !haveEvilStudents) {
			// 	result = pullRandomStudent(remainingNormalStudents);
			// 	remainingNormalStudents = result.students;
			// } else {
			// 	result = pullRandomStudent(remainingEvilStudents);
			// 	remainingEvilStudents = result.students;
			// }
			if (isVadisGroup) {
				if (group.length == 0) {
					// vadi csoportjába az első húzás Vadi
					result = { student: classes.vadi };
				} else if (haveNormalStudents) {
					// a normális diákok közül húzunk
					result = pullRandomStudent(remainingNormalStudents);
					remainingNormalStudents = result.students;
				} else {
					// a gonosz diákok közül húzunk
					result = pullRandomStudent(remainingEvilStudents);
					remainingEvilStudents = result.students;
				}
			} else {
				// nem Vadi csoportja
				if (haveEvilStudents) {
					// a gonosz diákok közül húzunk
					result = pullRandomStudent(remainingEvilStudents);
					remainingEvilStudents = result.students;
				} else {
					// a normális diákok közül húzunk
					result = pullRandomStudent(remainingNormalStudents);
					remainingNormalStudents = result.students;
				}
			}

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
		// kiveeszük Vadi csoportját
		let vadisGroup = groups[vadisGroupIndex];
		// összekeverjük Vadi csoportjának elemeit, majd az összekevert csoportot betesszük az eredeti helyére
		let vadisGroupShuffled = shuffle(vadisGroup);
		groups[vadisGroupIndex] = vadisGroupShuffled;
		// összekeverjük a csoportokat
		groups = shuffle(groups);
		// a végére rendezzük a rövidebb csoportokat
		groups.sort((a, z) => z.length - a.length);
	} else {
		//Vadi nincs itt
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
	}
	return groups;
}
