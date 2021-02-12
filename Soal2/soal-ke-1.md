## Buat program yang menghitung rata-rata UN beserta gradenya, dengan mengisi 4 nilai yakni Bahasa indonesia,Bahasa Inggris Matematika dan IPA, yang di dalam program tersebut memiliki validasi yaitu semua nilai tersebut harus diisi dan juga untuk grade memiliki kondisi dengan ketentuan sebagai berikut: 90 - 100 = A, 80 - 89 = B, 70 - 79 = C, 60 - 69 = D, 0 - 59 = E

[Code dari soal 2 ke 1](https://playcode.io/735106/)

```javascript
const nilai = (nilai) => {
    let valid = 0;
    for (let i = 0; i < nilai.length; i++) {
        if (typeof(nilai[i]) === "number") {
            valid += 1
        } else {
            valid += 0
        }
        
    }
    if (nilai.length === 4 && valid === 4 ) {
        let nilaiAkhir = nilai.reduce((a, b) => a+b) / 4
        if (nilaiAkhir > 100) {
            return 'masukan nilai dengan benar'
        } else if (nilaiAkhir <= 100 && nilaiAkhir >= 90) {
            return `Grade anda A dengan nilai akhir ${nilaiAkhir}`
        } else if (nilaiAkhir < 90 && nilaiAkhir >= 80) {
            return `Grade anda B dengan nilai akhir ${nilaiAkhir}`
        } else if (nilaiAkhir < 80 && nilaiAkhir >= 70) {
            return `Grade anda C dengan nilai akhir ${nilaiAkhir}`
        } else if (nilaiAkhir < 70 && nilaiAkhir >= 60) {
            return `Grade anda D dengan nilai akhir ${nilaiAkhir}`
        } else if (nilaiAkhir < 60 && nilaiAkhir >= 0) {
            return `Grade anda E dengan nilai akhir ${nilaiAkhir}`
        }
    } else {
        return 'harap isi nilai dengan benar'
    }
}

console.log(nilai([90, 900, 90, 90]));
```

Penjelasan code diatas.

    - function nilai diatas menerima satu parameter yaitu nilai, dimana nilai itu bertipe data array.
    - yang di dalam array itu mempunyai 4 nilai dari nilai Bahasa indonesia,Bahasa Inggris Matematika dan IPA.
    - kemudian dilakukan validasi nilai yang harus di isi ada 4 nilai dan validasi jika nilai valid harus ada 4, jika kurang atau lebih tidak akan dijalankan proses penilaiannya.
    - jika nilai yang di inputkan benar ada 4 maka akan dilakukan penghitungan nilai rata-rata.
    - setelah itu akan masuk kedalam pengondisian, jika nilaiAkhir kurang dari sama dengan 100 dan nilaiAkhir lebih dari sama dengan 90 maka akan mendapat nilai 'A'
    - dan jika nilaiAkhir kurang dari 90 dan nilaiAkhir lebih dari sama dengan 80 maka akan mendapat nilai 'B'
    - dan jika nilaiAkhir kurang dari 80 dan nilaiAkhir lebih dari sama dengan 70 maka akan mendapat nilai 'C'
    - dan jika nilaiAkhir kurang dari 70 dan nilaiAkhir lebih dari sama dengan 60 maka akan mendapat nilai 'D'
    - dan jika nilaiAkhir kurang dari 60 dan nilaiAkhir lebih dari sama dengan 0 maka akan mendapat nilai 'E'