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

    -

[source code](https://playcode.io/735180/)
