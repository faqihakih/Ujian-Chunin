### Soal

jawaban :

    ```javascript
    function Segitiga() {
    let printSegitiga = 6;
    for (let tinggi = 0; tinggi < printSegitiga; tinggi++) {
        for (let alas = 0; alas < printSegitiga; alas++) {
            if (alas >= tinggi) {
                process.stdout.write(" " + (alas + 1));
            } else {
                process.stdout.write(" ");
            }
        }
        process.stdout.write("\n");
    }
}
Segitiga()
    ```
penjelasan source code :


- Hal pertama yang perlu kita lakukan untuk kasus diatas adalah menyiapkan variable untuk menampung value dari tinggi segitiga.
- lalu kita lakukan perulangan pertama untuk mencetak tinggi tinggi segitiga
- dan didalam perulangan pertama ada perulangan lagi untuk mencatak alas segitiga atau lebar dari segitiga, dangan menampilkan nilai alas + 1, jika memenuhi kondisi alas lebih besar sama dengan tinggi, jika tidak maka akan menampilkn ' '.


[source code soal 2 ke 3](https://playcode.io/735160/)