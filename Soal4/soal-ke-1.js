const promise1 = new Promise( (resolve, reject) => {
    let nilaiAwal = 20;
    let nilaiAkhir = 20;

    if (nilaiAwal > nilaiAkhir) {
        console.log(nilaiAwal - nilaiAkhir);
    } else if (nilaiAwal === nilaiAkhir){
        console.log(nilaiAwal * nilaiAkhir);
    } else {
        console.log(nilaiAwal + nilaiAkhir);
    }
})

promise1.then((result) => {
    console.log(result);
}).then( (error) => {
    console.log(error);
})

const promise2 = new Promise( (resolve, reject) => {
    let trafic = 'macet'

    if (trafic === 'macet') {
        console.log('Maaf aku terlambat');
    } else {
        console.log('Aku sudah menunggu dari tadi');
    }
})

promise2.then((result) => {
    console.log(result);
}).catch( (error) => {
    console.log(error);
})

const promise3 = new Promise( (resolve, reject) => {
    let kesehatan = 'healty'

    if (kesehatan === 'healty') {
        console.log('aku sehat dan bebas pergi kemana saja');
    } else {
        console.log('mungkin aku sakit');
    }
})

promise3.then((result) => {
    console.log(result);
}).catch( (error) => {
    console.log(error);
})