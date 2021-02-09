### 1. klik gambar ini https://res.cloudinary.com/devloops7/image/upload/v1612761431/chunin/screenshot-docs.google.com-2021.02.08-12_14_19_byiobb.png lalu Ubahlah data tersebut menggunakan spread operator menjadi: name: nama anda email: email anda hobby: hobi anda .


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

let newData = { ...data }
newData.name = 'Faqih zada';
newData.email = 'faqihakih12@gmail.com';
newData.hobby = 'Playing Dota 2'
console.log(newData);
    ```
penjelasan source code :

```
Hal pertama yang perlu kita lakukan untuk kasus diatas adalah menge-clone object data sebagai object baru.
cara meng-clone object dengan spread operator ada pada `let newData = { ...data }`, kemudian kita reasign setiap property.
dengan cara `newData.name = 'Faqih zada';`
```

[source code soal 2 ke 2.1](https://playcode.io/735153/)