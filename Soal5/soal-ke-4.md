### Diberikan sebuah kalimat, ubah urutan kata-kata di dalam kalimat menjadi terbalik. Misalnya kalimat “Saya cinta PLUGIN”, output “PLUGIN cinta Saya” tanpa menggunakan built-in function / method bawaan dari javascript

jawaban :

    ```javascript
        const reverseSentence = (sentence) => {
    let newString = dataSentence(sentence);
    console.log(newString);
    let tempString = '';
    let result = '';

    for (let i = 0; i < newString.length; i++) {
        if (newString[i] === ' ') {
            result += tempString + ' '
            tempString = '';
        } else {
            tempString = newString[i] + tempString
        }
    }
    if (tempString.length !== 0) {
        result += tempString
    }
    return result
}

const dataSentence = (words) => {
    let string = '';
    for (let i = words.length -1 ; i >= 0; i--) {
        string += words[i]
    }
    return string
}

console.log(reverseSentence('faqih zada ikhsan plugin'));
    ```

penjelasan :

    - kita buat fungsi untuk mebalikan kalimat dulu dengan nama dataSentence
    - dengan cara mengunakan for loop
    - dengan i = panjang nilai words yang di masukan dari parameter dikurangi 1
    - lalu jika i lebih besar sama dengan 0, maka i akan dikurangi 1
    - jika benar maka nilai akan dimasukan dan ditambah kedalam variabel string
    - lalu kita return value string
    - kemudian di fungsi kedua (reverseSentence) kita akan memisah kata dan mengurutkan
    - nilai dari return value string kita masukan dalam variabel newString dengan callback function dari fungsi 1
    - lalu kita buat 2 variabel kosong yaitu tempString dana result
    - lalu kita gunakan for loop untuk melakukan memisah spasi dan mengrutukan
    - dengan i = 0 jika i < dari panjang value newString, maka i akan ditambah 1
    - kemudia akan masuk dalam validasi jika nilai index dari newString === ' ' maka nilai tempString akan dimasukan ke dalam result dan nilai dari tempString akan di hapus
    - jika nilai index newString bukan spasi makan nilai akan di masukan nilai index tersebut dan akan digabung dengan nilai tempString
    - for loop ini akan berlangsung sebanyak panjang dari value newString
    - lalu jika nilai tempString ada maka nilai result akan di tambah dengan nilai tempString
    - setelah itu baru kita return nilai result

[source code](https://playcode.io/736422/)
