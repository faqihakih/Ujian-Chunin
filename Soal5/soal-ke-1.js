const misahAngka = () => {
    const angka = 5643104614540314;

    if (typeof (angka) === 'number') {
        const pisah = angka.toString().split(0)
        // console.log(pisah);
        let result = '';

        pisah.map((response) => {
            return result = result + response.split('').sort((a, b) => { return a - b }).join('')
            // result += response.split('').sort((a, b) => { return a - b }).join('')
        })
        resultToInteger = parseInt(result)
        console.log(resultToInteger);
    } else {
        console.log('ada yang salah nich!');
    }

}

misahAngka()