### Buatlah 3 program bebas dengan menggunakan promise

jawaban :

    ```javascript
    const promise1 = new Promise( (resolve, reject) => {
    let parkirKapasitas = 20;
    let nomorParkir = 21;

    if (parkirKapasitas >= nomorParkir) {
        resolve('anda bisa parkir');
    } else {
        reject('anda tidak bisa parkir');
    }
})

promise1.then((result) => {
    console.log(result);
}).catch( (error) => {
    console.log(error);
})

const promise2 = new Promise( (resolve, reject) => {
    let trafic = 'macet'

    if (trafic === 'macet') {
        resolve('Maaf aku terlambat');
    } else {
        reject('Aku sudah menunggu dari tadi');
    }
})

promise1.then((result) => {
    console.log(result);
}).catch( (error) => {
    console.log(error);
})

const promise3 = new Promise( (resolve, reject) => {
    let kesehatan = 'healty'

    if (kesehatan === 'healty') {
        resolve('aku sehat dan bebas pergi kemana saja');
    } else {
        reject('mungkin aku sakit');
    }
})

promise3.then((result) => {
    console.log(result);
}).catch( (error) => {
    console.log(error);
})
    ```

penjelasan :

    - promise1 merupakan sebuah function promise yang menerima 2 paramter resolve dan reject yang bentuknya callcack.
    - pada function ini ada 2 variabel yaitu parkirKapsitas dan nomorParkir.
    - dan ada pengondisian jika parkirKapasitas lebih besar sama dengan nomorParkir maka jalankan resolve dan sebaliknya jika tidak maka akan menjalankan reject.
    - jika kita ingin menangkap resolve & reject kita bisa mengunakan `then() dan catch()` yang menerima parameter dari hasil if else di atas


    - promise2 merupakan sebuah function promise yang menerima 2 paramter resolve dan reject yang bentuknya callcack.
    - pada function ini ada 1 variabel trafic
    - dan ada pengondisian jika trafic bukan macet maka jalankan resolve dan sebaliknya jika tidak maka akan menjalankan reject.
    - jika kita ingin menangkap resolve & reject kita bisa mengunakan `then() dan catch()` yang menerima parameter dari hasil if else di atas

    - promise3 merupakan sebuah function promise yang menerima 2 paramter resolve dan reject yang bentuknya callcack.
    - pada function ini ada 1 variabel kesehatan
    - dan ada pengondisian jika kesehatan adalah healty maka jalankan resolve dan sebaliknya jika tidak maka akan menjalankan reject.
    - jika kita ingin menangkap resolve & reject kita bisa mengunakan `then() dan catch()` yang menerima parameter dari hasil if else di atas

[source code](https://playcode.io/736417/)
