const iqTest = (bil) => {
    let newBil = bil.split(' ')

    let ganjil = 0;
    let genap = 0;
    let posisi = 0;

    for (let i = 0; i < newBil.length; i++) {
        if (newBil[i] % 2 === 0) {
            genap += 1
        } else {
            ganjil += 1
        }
    }

    if (ganjil < genap) {
        for (let i = 0; i < newBil.length; i++) {
            if (newBil[i] % 2 === 1) {
                posisi = newBil.indexOf(newBil[i]) + 1
            }
        }
    } else {
        for (let i = 0; i < newBil.length; i++) {
            if (newBil[i] % 2 === 0) {
                posisi = newBil.indexOf(newBil[i]) + 1
            }
        }
    }

    return posisi
}

console.log(iqTest('1 3 5 6 7 9'));