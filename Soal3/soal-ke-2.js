let find = (nilaiAwal, nilaiAkhir, dataArray) => {
    let get = [];
    for (let i = 0; i < dataArray.length; i++) {
        if (dataArray[i] > nilaiAwal && dataArray[i] < nilaiAkhir) {
            get.push(dataArray[i])
        }
    }
    return get.sort((a, b) => a - b);
}
let urutkan = (nilaiAwal, nilaiAkhir, dataArray, callback) => {
    if (nilaiAwal < nilaiAkhir && dataArray.length > 5) {
        if (dataArray.includes(nilaiAwal) && dataArray.includes(nilaiAkhir)) {
            return callback(nilaiAwal, nilaiAkhir, dataArray)
        } else {
            return 'nilai awal atau akhir tidak ditemukan'
        }
    } else {
        return 'nilai awal atau nilai akhir ada yang salah, dan mungkin data array kurang'
    }
}


console.log(urutkan(11, 15, [12, 32, 11, 15, 14, 12, 13, 13], find));