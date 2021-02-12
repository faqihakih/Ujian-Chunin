### Buatlah program menggunakan method fetch untuk menampilkan semua title (hanya title nya saja) dari REST API dibawah ini https://dhiyo-api-article.herokuapp.com/articles Gunakan debugger console bawaan browser Chrome untuk melihat hasilnya

jawaban :

    ```javascript
        fetch('https://dhiyo-api-article.herokuapp.com/articles')
            .then(Response => Response.json())
            .then(json => json.data.map(element => {
                console.log(element.tittle);
            }))
    ```

penjelasan :

    - diatas kita gunakan method fetch dimana method ini mengembalikan promise yang di resolve pada respone object.
    - lalu kita panggil then yang memangil callback, lalu arrow function kemudian kita pakai method json().
    - karna method json mengembalikan promise
    - lalu kita gunakan lagi then(), lalu tulis lagi response, lalu kita panggil properti data dari response
    - karna masih berbentuk array of object maka kita perlu melakukan pengulang untuk mendapatkan data tittle
    - kita map, kita cari setiap element yang memiliki tittle

[source code](https://playcode.io/736418/)
