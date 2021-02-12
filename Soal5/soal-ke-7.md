### Buat dan jelaskanlah 10 method bawaan JavaScript (Built-in Functions) beserta contoh penggunaannya

jawaban : 
 1. reverse adalah method membalikan index array dari terakhir ke pertama

contoh pengunaan : 
```JavaScript
const arr = ['faqih', 'zada', 'ikhsan']
const reversed = arr.reverse()
console.log(`original array ${arr} reverse array ${reversed}`);
```

2. concat adalah method untuk mengabungkan 2 buah atau lebih array atau String

contoh pengunaan : 
```JavaScript
const arr1 = [1, 2, 3]
const arr2 = [2, 5, 6]
const arr3 = arr1.concat(arr2)
console.log(`array 1 : ${arr1} array 2 : ${arr2} array 3 : ${arr3}`);
```

3. find adalah method yang mengembalikan nilai elemen pertama dalam array yang disediakan dan memenuhi kondisi yang disediakan. Jika tidak ada nilai yang memenuhi kondisi maka akan mengembalikan undefined.

contoh pengunaan : 
```JavaScript
const ketemu = arr3.find(index => index > 2 )
console.log(ketemu);
```

4. pop adalah method yang menghapus data pada index paling akhir dari array

contoh pengunaan : 
```JavaScript
const removeLastIndex = arr3.pop()
console.log('yg dihapus : '+removeLastIndex+', data '+ arr3);
```

5. shift adalah method yang menghapus data pada index paling awal dari array

contoh pengunaan : 
```JavaScript
const arr4 = arr3.shift()
console.log(arr4);
```

6. unshift adalah method yang menambahkan data pada index paling awal dari array

contoh pengunaan : 
```JavaScript
arr3.unshift(2,5)
console.log(arr3);
```
7. repeat adalah method yang membuat dan mengembalikan string baru yang berisi sejumlah salinan dari string yang dipanggil dan digabungkan bersama.

contoh pengunaan : 
```JavaScript
const hai = 'selamat malam '
let say = hai.repeat(10)
console.log(say);
```

8. trim adalah method yang menghapus spasi pada awal atau akhir kata

contoh pengunaan : 
```JavaScript
const spasi = ' hai kawan '
console.log(spasi.trim());
```

9. replace adalah methode yang mengembalikan string baru dengan menganti data yang cocok dengan parameter1 dan diubah sesuai dengan parameter2

contoh pengunaan : 
```JavaScript
const buah = 'melon jeruk apel nanas leci'
console.log(buah.replace('apel', 'anggur'));
```

10. delete adalah method yang dapat menghapus index array yang kita tentukan

contoh pengunaan : 
```JavaScript
console.log(delete arr3[4]);
console.log(arr3);
```

[source code](https://playcode.io/737110/)