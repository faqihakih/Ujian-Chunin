const uniqueFinder = (words) => {

    let temp = [...words];
    let data = temp.filter((item, index) => temp.indexOf(item) === index).sort().join('');
    // let data = temp.filter((item, index) => {
    //     console.log(
    //         // a. Item
    //         item,
    //         // b. Index
    //         index,
    //         // c. indexOf
    //         temp.indexOf(item),
    //         // d. Condition
    //         temp.indexOf(item) === index,
    //     )
    // })
    console.log(data);
}

console.log(uniqueFinder('pluginsangatkerensekali'));