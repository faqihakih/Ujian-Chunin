## Soal 1 ke 3
### Apakah yang dimaksud dengan function dan method dalam Javascript? Jelaskan perbedaannya! dan berikan contohnya dalam bentuk code sederhana

definisi :
    - functin -> suatu code atau perintah yang dibuat untuk melakukan perintah tertentu
    - method -> Metode adalah fungsi yang merupakan properti dari suatu object.

    Perbedaan paling jelas pada pengondisian function dan method adalah : 
            - Suatu metode ada pada suatu object.
            - Fungsi tidak tergantung pada suatu object.
            - saat memanggil method harus melewati dulu si nama object


[Contoh sederhana dari soal 1 ke 3](https://playcode.io/735067/)

```javascript
function plugin(nama) {
    return `hai, selamat datang di plugin ${nama}`;
}
console.log(plugin('faqih'));
```

Penjelasan code function.

    jadi diatas ada sebuah function yang menerima satu parameter yaitu nama.
    kemudian function diatas mengembalikan sebuah perintah "return `hai, selamat datang di plugin ${nama}`;".
    lalu parameter nama tadi akan dimasukan kedalam `${nama}`


```javascript
let nama = {
    nama: 'faqih',
    hai : () => {
        return`hai, selamat datang di plugin ${nama.nama}`;
    }
}
console.log(nama.nama+' - '+ nama.hai());
```

Penjelasan code method.

    diatas ada sebuah object yang memiliki properti nama dengan value faqih.
    dan ada properti hai yang memiliki value sebuah method.
    dimana method tersebut mengembalikan sebuah perintah 'return`hai, selamat datang di plugin ${nama.nama}`;'
    dimana ${nama.nama} itu memanggil properti nama dari object itu sendiri