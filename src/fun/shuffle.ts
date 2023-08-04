import { getRandomInt } from "./getRandomInt";

/**
 * megkeveri a megadott arrayt
 * @param array
 */

export function shuffle<T>(array: T[]): T[] {
	// létrehozzuk az új arrayt amibe az eredményt tesszük
	let result = [];
	// itt fogjuk tárolni a maradék elemeket
	let remaining = array;
	// annyiszor húzunk ahány elem van
	for (let i = 0; i < array.length; i++) {
		// választunk egy véletlen sorszámot
		let index = getRandomInt(remaining.length);
		// kivesszük az elemet amihez a sorszám tartozik
		let elem = remaining[index];
		// kitöröljük az elemet a megmaradtak közül
		remaining = remaining.filter((e) => e != elem);
		// hozzáadjuk az elemet az eredményhez
		result.push(elem);
	}
	return result;
}
