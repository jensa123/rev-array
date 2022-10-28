/**
 * Returns a new array which contains the input array's values in reversed order.
 * @param arr The array to reverse.
 * @return An array with the original array's values in reversed order. 
 */
export function reverseArray<T>(arr: T[]): T[] {
	let a: T[] = [];
	for(let i=arr.length - 1; i >= 0; --i)
		a.push(arr[i]);
	return a;
}