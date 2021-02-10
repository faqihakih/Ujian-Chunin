const reverseLetter = () => {
    const letter = 'Saya cinta PLUGIN';
    let r = "";

    for (var i = letter.length - 1; i >= 0; i--) {
        r += letter[i];
    }

    var word = "", output = "";
    for(var i = 0; i < r.length; i++) {
        if (r[i] == " ") {
            output += reverseString(word) + " ";
            word = "";
        }
        else {
            word += r[i];
        }
    }
    console.log(r);
}
reverseLetter()