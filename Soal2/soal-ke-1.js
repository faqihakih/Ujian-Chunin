const nilai = (nilai) => {
    let valid = 0;
    for (let i = 0; i < nilai.length; i++) {
        if (typeof(nilai[i]) === "number") {
            valid += 1
        } else {
            valid += 0
        }
    }
    if (nilai.length === 4 && valid === 4 ) {
        let nilaiAkhir = nilai.reduce((a, b) => a+b) / 4
        if (nilaiAkhir > 100) {
            return 'masukan nilai dengan benar'
        } else if (nilaiAkhir <= 100 && nilaiAkhir >= 90) {
            return `Grade anda A dengan nilai akhir ${nilaiAkhir}`
        } else if (nilaiAkhir < 90 && nilaiAkhir >= 80) {
            return `Grade anda B dengan nilai akhir ${nilaiAkhir}`
        } else if (nilaiAkhir < 80 && nilaiAkhir >= 70) {
            return `Grade anda C dengan nilai akhir ${nilaiAkhir}`
        } else if (nilaiAkhir < 70 && nilaiAkhir >= 60) {
            return `Grade anda D dengan nilai akhir ${nilaiAkhir}`
        } else if (nilaiAkhir < 60 && nilaiAkhir >= 0) {
            return `Grade anda E dengan nilai akhir ${nilaiAkhir}`
        }
    } else {
        return 'harap isi nilai dengan benar'
    }
}

console.log(nilai([90, 900, 90, 90]));