function plugin(nama) {
    return`hai, selamat datang di plugin ${nama}`;
}
plugin('faqih')

let nama = {
    nama: 'faqih',
    hai : () => {
        return`hai, selamat datang di plugin ${nama.nama}`;
    }
}
console.log(nama.nama+' - '+ nama.hai());