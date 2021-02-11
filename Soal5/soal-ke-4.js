function reverseWords(str) {
    let count_letters = 1;
    let new_string = "";
    for (let i = str.length - 1; i >= 0; i--) {
        new_string += str[i]
    }
    console.log(new_string);
    return new_string;
}

reverseWords('Saya cinta PLUGIN')