const aritmatika = (n,a,b) => {
    let data = a;
    let fix = []
    fix.push(data)
    for (let i = 1; i < n; i++) {
        // console.table(fix);
        fix.push(data += b)
    }
    return fix;
}

console.log(aritmatika(9,2,3));