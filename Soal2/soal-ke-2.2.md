### 1. klik gambar ini https://res.cloudinary.com/devloops7/image/upload/v1612761431/chunin/screenshot-docs.google.com-2021.02.08-12_14_19_byiobb.png lalu Ubahlah data tersebut menggunakan spread operator menjadi: name: nama anda email: email anda hobby: hobi anda .

jawaban :

    ```javascript
    let data = {
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "address": {
        "street": "Kulas Light",
        "suite": "Apt. 556",
        "city": "Gwenborough",
        "zipcode": "92998-3874",
    },
    "phone": "1-770-736-8031 x56442",
    "website": "hildegard.org"
    };

    let { street, city } = data.address
    console.log(`street : ${street}, city : ${city}`);
    ```
penjelasan source code :

```
Hal pertama yang perlu kita lakukan untuk kasus diatas adalah menyiapkan variable untuk menampung value dari property object data.
disini kita mengunakan cara destructuring `let { street, city } = data.address`
```

[source code soal 2 ke 2.2](https://playcode.io/735158/)