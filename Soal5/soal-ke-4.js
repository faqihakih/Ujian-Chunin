const reverseSentence = (sentence) => {
    let newString = dataSentence(sentence);
    console.log(newString);
    let tempString = '';
    let result = '';

    for (let i = 0; i < newString.length; i++) {
        if (newString[i] === ' ') {
            result += tempString + ' '
            tempString = '';
        } else {
            tempString = newString[i] + tempString
        }
    }
    if (tempString.length !== 0) {
        result += tempString
    }
    return result
}

const dataSentence = (words) => {
    let string = '';
    for (let i = words.length -1 ; i >= 0; i--) {
        string += words[i]
    }
    return string
}

console.log(reverseSentence('faqih zada ikhsan plugin'));