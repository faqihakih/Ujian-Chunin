function Segitiga() {
    let printSegitiga = 6;
    for (var tinggi = 0; tinggi < printSegitiga; tinggi++) {
        for (var alas = 0; alas < printSegitiga; alas++) {
            if (alas >= tinggi) {
                process.stdout.write(" " + (alas + 1));
            } else {
                process.stdout.write(" ");
            }
        }
        process.stdout.write("\n");
    }
}
Segitiga()