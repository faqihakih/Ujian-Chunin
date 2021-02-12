### Anton sedang bersiap untuk mengikuti tes IQ. Tes yang paling sering keluar adalah mencari angka mana yang berbeda dari yang lain. Anton mengamati bahwa pasti ada satu angka yang berbeda dari yang lain dalam hal pemerataan. Buatlah sebuah program yang dapat membantu Anton untuk mengetahui di posisi manakah angka yang berbeda. Catatan Posisi angka dimulai dari satu (1) bukan nol (0)

jawaban :

```javascript
    const iqTest = (bil) => {
    let newBil = bil.split(' ')

    let ganjil = 0;
    let genap = 0;
    let posisi = 0;

    for (let i = 0; i < newBil.length; i++) {
        if (newBil[i] % 2 === 0) {
            genap += 1
        } else {
            ganjil += 1
        }
    }

    if (ganjil < genap) {
        for (let i = 0; i < newBil.length; i++) {
            if (newBil[i] % 2 === 1) {
                posisi = newBil.indexOf(newBil[i]) + 1
            }
        }
    } else {
        for (let i = 0; i < newBil.length; i++) {
            if (newBil[i] % 2 === 0) {
                posisi = newBil.indexOf(newBil[i]) + 1
            }
        }
    }

    return posisi
}

console.log(iqTest('1 3 5 6 7 9'));
```

penjelasan :

    - fungsi iqTes menerima 1 param yaitu sebuah deret nilai
    - lalu nilai dari params akan masuk kedalam variabel newBil setelah di split() atau pisah dengan spasi yang akan mengembalikan array baru
    - lalu buat 3 variabel yaitu ganjil, genap dan posisi
    - lalu kita lakukan for loop untuk menghitung nilai ganjil dan genap
    - dengan i = 0, dan i lebih kecil dari panjang nilai newBil, maka i akan ditambah 1
    - lalu masuk dalam pengondisian jika nilai index newBil jika di sisa bagi 2 = 0 maka nilai genap akan ditambah 1 jika tidak makan ganjil akan ditambah 1
    - selanjutnya masuk dalam pengondisian jika nilai ganjil lebih kecil dari genap berarti nilai yang berbeda adalah bilangan ganjil
    - lalu masuk kedalam for loop lagi dimana dengan i = 0, dan i lebih kecil dari panjang nilai newBil, maka i akan ditambah 1
    - kemudian masuk kedalam pengondisian jika nilai index newBil bisa disisa bagi 2 == 0  maka kita akan mencari posisi index tersebut dengan mengunakan indexOf
     - jika ketemu makan nilai indexOf akan ditambahkan 1 karena indexOf akan dimulai dari 0 karna disoal nilai selalu dimulai dari 1
     - maka nilai indexOf akan dimasukan ke dalam bariabel posisi
     - lalu kita return posisi

[source code](https://playcode.io/736423/)
