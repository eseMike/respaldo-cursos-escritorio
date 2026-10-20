//Flat
const array = [1, 2, 3, 4, 5, [8, 7, 6, [1, 3, 4, 5]]];
console.log(array.flat(3));

//Flat map
const array2 = [1, 2, 3, 4, 5];
console.log(array2.flatMap(v => [v, v * 2]));