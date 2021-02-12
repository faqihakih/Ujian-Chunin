function Segitiga() {
    let printSegitiga = 10;

    if (typeof (printSegitiga) !== "number") {
        console.log('bukan angka');
    } else {
        let data = '';
        for (var tinggi = 0; tinggi < printSegitiga; tinggi++) {
            for (var alas = 0; alas < printSegitiga; alas++) {
                if (alas >= tinggi) {
                    data += " " + (alas + 1)
                } else {
                    data += " "
                }
            }
            data += "\n"
        }
        console.log(data)
    }
}
Segitiga()