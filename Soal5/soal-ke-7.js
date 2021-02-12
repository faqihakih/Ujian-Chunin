// reverse
const arr = ['faqih', 'zada', 'ikhsan']
const reversed = arr.reverse()
console.log(`original array ${arr} reverse array ${reversed}`);

// concat
const arr1 = [1, 2, 3]
const arr2 = [2, 5, 6]
const arr3 = arr1.concat(arr2)
console.log(`array 1 : ${arr1} array 2 : ${arr2} array 3 : ${arr3}`);

// find
const ketemu = arr3.find(index => index > 2 )
console.log(ketemu);

// pop
const removeLastIndex = arr3.pop()
console.log('yg dihapus : '+removeLastIndex+', data '+ arr3);

// shift
const arr4 = arr3.shift()
console.log(arr4);

// unshift
arr3.unshift(2,5)
console.log(arr3);

// repeat
const hai = 'selamat malam '
let say = hai.repeat(10)
console.log(say);

// trim
const spasi = ' hai kawan '
console.log(spasi.trim());

// replace
const buah = 'melon jeruk apel nanas leci'
console.log(buah.replace('apel', 'anggur'));

// delete
console.log(delete arr3[4]);
console.log(arr3);