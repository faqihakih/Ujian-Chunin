
### buatlah fungsi yang menampilkan angka, berdasarkan urutan angka yang sudah di tentukan. Yang menerima 3 parameter: n = urutan angka yang ingin dicari, a = angka pertama, b = selisih tiap angka

jawaban :

    ```javascript
        const aritmatika = (n,a,b) => {
        let data = a;
        let fix = []
        fix.push(data)
        for (let i = 1; i < n; i++) {
            // console.table(fix);
            fix.push(data += b)
        }
        return fix;
    }

    console.log(aritmatika(9,2,3));
    ```

penjelasan :

    - fungsi aritmatika menerima 3 parameter yang berisi n = urutan angka yang ingin dicari, a = angka pertama, b = selisih tiap angka
    - lalu nilai a akan ditangkap vatiabel data
    - kita buat variabel array kosong untuk menerima data dari perhitungan nanti
    - lalu variable kita isikan dulu dengan nilai nilai awal
    - kemudian lakukan perulangan untuk mencari selisih nilai awal dengan data yang dimaksudkan
    - dengan i = 1, jika i lebih kecil dari n(nilai yg ingin di tampilkan), maka i akan di tambah 1.
    - jika benar maka akan memasukan data nilai data ditambah selisih nilai
    - pengulangan akan dilakukan selama kondisi benar
    - jika pengulangan selesai maka kita akan menampilkan nilai dari varialbel fix

[source code](https://playcode.io/736421/)
