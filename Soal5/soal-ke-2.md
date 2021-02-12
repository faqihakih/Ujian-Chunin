### Buatlah sebuah function yang dapat mengembalikan string baru yang telah diurutkan dari a - z akan tetapi tidak diperbolehkan ada huruf yang sama. Contoh : (pluginsangatkerensekali) menjadi (aegiklnprsu)

jawaban :

    ```javascript
        const uniqueFinder = (words) => {

        let temp = [...words];
        let data = temp.filter((item, index) => temp.indexOf(item) === index).sort().join('');
        console.log(data);
    }

    console.log(uniqueFinder('pluginsangatkerensekali'));
    ```

penjelasan :

    - diatas ada function yang menerima satu parameter words
    - lalu parameter tadi kita masukan kedalam variabel temp dengan menggunakan spread operator untuk mengubah menjadi array langsung
    - lalu variabel temp kita gunakan methos filter yang mengembalikan array jika lolos kondisi yang sudah ditetapkan
    - lalu kita pakai indexOf yang mengembalikan indeks pertama yang ditemukannya dari elemen yang disediakan dari array kita.
    - jika index yang ditemukan tidak sama dengan index yang dijalankan maka mengahasilka false
    - jika lolos data akan kita urutkan dengan sort() dari a - z, kemudian kita gabung kan dengan join()


| item        | index       | indexOf    | kondisi     |
| ----------- | ----------- |----------- | ----------- |
| p           | 0           | 0          | true        |
| l           | 1           | 1          | true        |
| u           | 2           | 2          | true        |
| g           | 3           | 3          | true        |
| i           | 4           | 4          | true        |
| n           | 5           | 5          | true        |
| s           | 6           | 6          | true        |
| a           | 7           | 7          | true        |
| n           | 8           | 5          | false       |

[source code](https://playcode.io/736420/)
