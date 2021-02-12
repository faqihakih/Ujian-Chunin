### Buatlah program menggunakan method fetch untuk menampilkan semua title (hanya title nya saja) dari REST API dibawah ini https://dhiyo-api-article.herokuapp.com/articles Gunakan debugger console bawaan browser Chrome untuk melihat hasilnya

jawaban :

```javascript
    let get = fetch('https://dhiyo-api-article.herokuapp.com/articles')
        

    get.then(Response => Response.json())
        .then(json => json.data.map(element => {
            console.log(element.tittle);
        }))
        .catch(err => console.log(err))
    console.log('wait for get all data');
```

penjelasan :

    - diatas kita gunakan method fetch dimana method ini mengembalikan promise yang di resolve pada respone object.
    - lalu kita panggil then yang memangil callback, lalu arrow function kemudian kita pakai method json().
    - karna method json mengembalikan promise
    - lalu kita gunakan lagi then(), lalu tulis lagi response, lalu kita panggil properti data dari response
    - karna masih berbentuk array of object maka kita perlu melakukan pengulang untuk mendapatkan data tittle
    - kita map, kita cari setiap element yang memiliki tittle
    - jika error maka akan ditangkap oleh catch dan menampilakn error
    - dan untuk membuktikan bahwa async kita `console.log('wait for get all data');` paling bawah tapi akan muncul paling awal karena saat menge-get data kita butuh waktu.
    - karna async bisa berjalan jika proses sebelumnya belum selesai berjalan

[source code](https://playcode.io/736418/)
