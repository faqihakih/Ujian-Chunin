### Diberikan sebuah variabel yang berisikan bilangan integer dengan ketentuan angka 0 (nol) dalam variabel tersebut merupakan pemisah antara satu bilangan dengan bilangan lainnya. Bilangan-bilangan tersebut akan dipisah dan diurutkan berdasarkan angka di bilangan-bilangan itu sendiri. Setelah itu, bilangan hasil pengurutan akan digabung kembali dengan tanpa pemisah dengan output berupa bilangan integer. Buatlah method/function yang menerima parameter hanya deret angka dan menghasilkan output seperti keterangan di atas. contoh (56431046145403146) menjadi (134561444561346)

jawaban :

    ```javascript
        const misahAngka = () => {
    const angka = 5643104614540314;
    if (typeof (angka) === 'number' && String(angka).length <= 16) {
        const pisah = angka.toString().split(0)
        // console.log(pisah);
        let result = '';

        pisah.map((response) => {
            return result = result + response.split('').sort((a, b) => { return a - b }).join('')
            // result += response.split('').sort((a, b) => { return a - b }).join('')
        })
        resultToInteger = parseInt(result)
        console.log(resultToInteger);
    } else {
        console.log('ada yang salah nich!');
    }

}

misahAngka()
    ```

penjelasan :

    - didalam function sebuah variabel yang menampung angka random.
    - lalu angka tersebut akan diurutkan, dengan melewati validasi terlebih dahulu.
    - jika tipe value variabel angka bukan number dan panjang data lebih dari sama dengan 16, maka ada yang salah dengan data angka itu.
    - jika benar maka data angka akan di pisah setiap bertemu angka '0', dan akan dimasukan dalam variable pisah.
    - lalu akan dilakukan perulangan dengan map. lalu setiap indexnya akan di pisah lagi, kemudian akan diurukan dari terkecil ke terbesar dan lalu akan di gabung kan.
    - kemudian data akan dimasukan kedalam variabel result.
    - kemudian variable result akan di convert ke integer.

[source code](https://playcode.io/736419/)
