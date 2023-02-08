export function merge(collection1: number[], collection2: number[]): number[] {
  let array: number[] = [];
  while (collection1.length || collection2.length) {
    if (collection1?.[0] === undefined) {
      array.push(collection2[0]);
      collection2.splice(0, 1);
    } else if (collection1[0] > collection2[0]) {
      array.push(collection2[0]);
      collection2.splice(0, 1);
    } else {
      array.push(collection1[0]);
      collection1.splice(0, 1);
    }
  }
  return array;
}
