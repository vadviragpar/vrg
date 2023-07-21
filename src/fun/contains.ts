/**
 * igazat ad vissza, ha az elem benne van az array-ban
 * @param array ebben keresünk
 * @param elem ezt keressük
 */
export function contains(array: string[], elem: string): boolean {
	return array.indexOf(elem) != -1;
}
