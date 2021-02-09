function printSegitiga(angka) {
    let printSegitiga = angka;
    for (var baris = 0; baris <= printSegitiga; baris++) {
        for (var tinggi = 0; tinggi <= angka; tinggi++) {
            if (tinggi > baris) {
                process.stdout.write("*");
            } else {
                process.stdout.write(" ");
            }
        }
        process.stdout.write("\n");
    }
}
printSegitiga(5)