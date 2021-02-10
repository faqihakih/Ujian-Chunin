function iqTest(numbers) {
    let result = 1;
    let ada = numbers.split(' ')
    let haha = numbers.substr(1).split(' ')
    for (let i = 0; i < ada.length; i++) {
        if (ada[0] % 2 == 1 ) {
            if (ada[i] % 2 == 0 ) {
                result += i ;
                break
            }
        } else {
            if (ada[i] % 2 == 1) {
                result += i ;
                break
            }
        }
    }
    return result;
}

console.log(iqTest("1 2 2"));