const promise1 = new Promise( (resolve, reject) => {
    let parkirKapasitas = 20;
    let nomorParkir = 21;

    if (parkirKapasitas >= nomorParkir) {
        resolve('anda bisa parkir');
    } else {
        reject('anda tidak bisa parkir');
    }
})

promise1.then((result) => {
    console.log(result);
}).catch( (error) => {
    console.log(error);
})

const promise2 = new Promise( (resolve, reject) => {
    let trafic = 'macet'

    if (trafic === 'macet') {
        resolve('Maaf aku terlambat');
    } else {
        reject('Aku sudah menunggu dari tadi');
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
        resolve('aku sehat dan bebas pergi kemana saja');
    } else {
        reject('mungkin aku sakit');
    }
})

promise3.then((result) => {
    console.log(result);
}).catch( (error) => {
    console.log(error);
})