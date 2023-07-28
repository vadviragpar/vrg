/**
 * véletlen egész számot generál 0 és n-1 között
 * @param n az a szám aminél kisebb legyen
 */
export function getRandomInt(n: number) {
	return Math.floor(Math.random() * n);
}
