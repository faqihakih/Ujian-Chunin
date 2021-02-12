### Buatlah fungsi yang memiliki parameter nilaiAwal (number) dan nilaiAkhir (number), serta dataArray (array). Fungsi tersebut memiliki validasi nilaiAwal < nilaiAkhir dan jumlah data dalam dataArray harus lebih dari 5. Fungsi tersebut akan mencari data didalam dataArray yang memiliki nilai diantara nilaiAwal dan nilaiAkhir, mengurutkan hasil pencarian dan menampilkannya ke layar/console.

jawaban :

```javascript
    let find = (nilaiAwal, nilaiAkhir, dataArray) => {
    let get = [];
    for (let i = 0; i < dataArray.length; i++) {
        if (dataArray[i] > nilaiAwal && dataArray[i] < nilaiAkhir) {
            get.push(dataArray[i])
        }
    }
    return get.sort((a, b) => a - b);

    }
    let urutkan = (nilaiAwal, nilaiAkhir, dataArray, callback) => {
        if (nilaiAwal < nilaiAkhir && dataArray.length > 5) {
            if (dataArray.includes(nilaiAwal) && dataArray.includes(nilaiAkhir)) {
                return callback(nilaiAwal, nilaiAkhir, dataArray)
            } else {
                return 'nilai awal atau akhir tidak ditemukan'
            }
        } else {
            return 'nilai awal atau nilai akhir ada yang salah, dan mungkin data array kurang'
        }
    }

console.log(urutkan(11, 15, [12, 32, 11, 15, 14, 12, 13, 13], find));
```
penjelasan source code :

  - diatas ada dua function function urutkan yang menerima 4 parameter yaitu nilai awal, nilai akhir, data array, dan callback function.
  - function urutkan memiliki beberapa validasi seperti di pengondisian pertama, jika nilai awal harus lebih kecil dari nilai akhir dan panjang data array harus lebih dari 5.
  - dan function urutkan akan mengecek lagi apa apakah nilai awal dan nilai akhir ada pada data array atau tidak. jika ada pada data array maka akan melakukan callback function pada function find.
  - dan function find akan menerima 3 parameter yaitu nilaiAwal, nilaiAkhir dan dataArray.
  - kemudian buat variabel kosong untuk menanmpung data diantara nilai awal dan nilai akhir
  - lalu kita lakukan pengulangan untuk mencari nilai yang lebih besar dari nilai awal dan nilia yang lebih kecil dari nilai akhir. jika ada maka nilai akan dimasukan ke dalam variabel get.
  - dan jika sudah terkumpul maka akan di urutkan dengan method sort.

[source code soal 3 ke 2](https://playcode.io/736415/)
