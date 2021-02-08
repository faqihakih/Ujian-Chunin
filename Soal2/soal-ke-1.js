const nilai = (nilai) => {
    if (nilai.length === 4) {
        let nilaiAkhir = nilai.reduce((a, b) => a+b) / 4
        if (nilaiAkhir <= 100 && nilaiAkhir >= 90) {
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

console.log(nilai([90, 90, 90, 90, 20]));