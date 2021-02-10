let urutkan = (nilaiAwal, nilaiAkhir, dataArray) => {
    if (nilaiAwal < nilaiAkhir && dataArray.length > 5) {
        return dataArray.sort( (a, b) => a - b ).slice(nilaiAwal, nilaiAkhir-1)
    } else {
        return 'ada yang salah'
    }

}

console.log(urutkan(1, 6, [1, 3, 2, 5, 4, 6]));