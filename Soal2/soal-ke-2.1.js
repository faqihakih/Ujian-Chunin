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
// console.log(`nama : ${newData.name}, email : ${newData.email}, hobby : ${newData.hobby}`);
console.log(newData);