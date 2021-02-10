### Buatlah program searching nama yang dapat dibatasi jumlah outputnya yang menerapkan callback function dengan data sebagai berikut: const name = [‘Abigail’, ‘Alexandra’, ‘Alison’, ‘Amanda’, ‘Angela’, ’Bella’, ‘Carol’, ‘Caroline’, ‘Carolyn’, ‘Deirdre’, ‘Diana’, ‘Elizabeth’, ‘Ella’, ‘Faith’, ‘Olivia’, ‘Penelope’]. Contoh: searchName(“an”, 3, callback)

jawaban :

    ```javascript
    function searching(name, cariNama, jml) {
    let kecilNama = name.map(e => e.toLowerCase())
    let cari = kecilNama.filter(x => x.includes(cariNama.toLowerCase()));
    let resetnama = cari.map(x => x.charAt(0).toUpperCase() + x.substr(1));
    let result = resetnama.slice(0, jml);
    console.log(result);
    }

    function searchName(carinama, jml, callback) {
        const name = ['Abigail', 'Alexandra', 'Alison', 'Amanda', 'Angela', 'Bella', 'Carol', 'Caroline', 'Carolyn', 'Deirdre', 'Diana', 'Elizabeth', 'Ella', 'Faith', 'Olivia', 'Penelope'];

        callback(name, carinama, jml);
    }

    searchName('An', 3, searching)
    ```

penjelasan :

    - diatas ada dua function function searchName yang menerima 3 parameter yaitu cariNama, jml data yang akan ditampilkan, dan callback function.
    - function searchName memeliki variable name yang bertipe data array dengan value berbagai nama.
    - dan function searchName melakukan callback pada function searching yang menerima 3 parameter name dari variable name, cariNama dan jml.
    - dan di function searching ada variabel kecilNama yang memiliki value dari name yang sudah di ubah menjadi lower case semua
    - lalu ada variable cari dimana variabel tersebut memiliki value dari kecilNama yang sudah dilakukan filter dimana di setiap index nya akan dicari nama yang memiliki huruf yang dicari.
    - lalu di variabel resetNama dilakukan kapitalisasi nama yang tadinya lower case dari value cari.
    - dan di variabel result akan melakukan pengambilan data sebanyak jumlah data yang ingin ditampilkan sesuai dengan parameter jml

[source code](https://playcode.io/735180/)
