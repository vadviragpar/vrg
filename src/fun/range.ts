/**
 * létrehoz egy n elemű arrayt amiben egész számok vannak 0-tól n-ig (n már nem)
 * @param n az új array elemszáma
 */

export function range(n: number): number[] {
	return [...Array(n).keys()];
}
