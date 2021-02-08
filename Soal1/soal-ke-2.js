let suhu = 5;
if (suhu < 0) {
    console.log("suhu bisa bikin beku");
} else if (suhu < 10) {
    console.log("suhu dinggin");
} else {
    console.log("suhu sejuk , hangat atau panas");
}

let warna = 'merah'
switch (warna) {
    case 'merah':
        console.log('berhenti');
        break;
    case 'kuning':
        console.log('siap siap');
        break;
    case 'hijau':
        console.log('jalan');
        break;
    default:
        console.log('bukan warna lampu lalin bozz');
        break;
}

