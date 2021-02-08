## Soal 1 ke 2
## Apakah perbedaan antara percabangan if-else dengan switch-case? Berikan contohnya dalam bentuk code sederhana!
    Perbedaan paling jelas pada pengondisian if-else dan switch-case adalah : 
        - if-else itu untuk pengondisian yang memiliki kondisi yang belum pasti atau didalam kondisi itu ada atau melakukan operasi aritmatika
        - switch-case untuk pengondisian yang memiliki kondisi pasti dan jumlah kondisi yang sedikit


[Contoh sederhana dari soal 1 ke 2](https://playcode.io/734897/)

```javascript
let suhu = 5;
if (suhu < 0) {
    console.log("suhu bisa bikin beku");
} else if (suhu < 10) {
    console.log("suhu dinggin");
} else {
    console.log("suhu sejuk , hangat atau panas");
}
```

⋅⋅* Penjelasan code if-else.

⋅⋅⋅jadi didalam code ada sebuah variabel yang menyimpan nilai suhu.⋅⋅
⋅⋅⋅lalu nilai pada variabel suhu masuk dalam kondisi if-else dimana jika nilai dari variable suhu kurang dari 0 maka akan menjalankan `console.log("suhu bisa bikin beku");`.⋅⋅
⋅⋅⋅kumudian jika nilai dari variabel suhu lebih dari 0 dan kurang dari 10 maka akan menjalankan `console.log("suhu dinggin");` dan.⋅⋅
⋅⋅⋅jika nilai dari variable suhu lebih dari 9 maka akan menjalankan perintah `console.log("suhu sejuk , hangat atau panas");`


```javascript
let warna = 'merah'
switch (warna) {
    case 'merah':
        console.log('berhenti');
        break;
    case 'kuning':
        console.log('siap siap');
        break;
    case 'hijau':
        console.log('jalan');
        break;
    default:
        console.log('bukan warna lampu lalin bozz');
        break;
}
```

⋅⋅* Penjelasan code switch-case.

⋅⋅⋅jadi didalam code ada sebuah variabel yang menyimpan nilai warna.⋅⋅
⋅⋅⋅lalu variabel warna masuk sebagai parameter.⋅⋅
⋅⋅⋅kumudian jika nilai dari variabel warna sama dengan case 'merah' maka akan menjalankan code `console.log('berhenti');`, kemudian akan di `break`.⋅⋅
⋅⋅⋅kumudian jika nilai dari variabel warna sama dengan case 'kuning' maka akan menjalankan code `console.log('siap siap');`, kemudian akan di `break`.⋅⋅
⋅⋅⋅kumudian jika nilai dari variabel warna sama dengan case 'hijau' maka akan menjalankan code `console.log('jalan');`, kemudian akan di `break`.⋅⋅
⋅⋅⋅dan jika nilai dari variabel warna tidak cocok dengan semua case maka akan menjalankan code `console.log('bukan warna lampu lalin bozz');`, kemudian akan di `break`.⋅⋅