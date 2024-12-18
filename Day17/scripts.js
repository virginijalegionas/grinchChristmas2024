const fs = require('fs');

function compileGoodDeeds(data) {
    goodPeople = []
    // add into array 
    const rows = data.split("\n");
    rows.forEach(row => {
        const rowData = row.split(":");
        goodPeople.push({ "person": rowData[0], "goodDeeds": parseInt(rowData[1]) })
    });
    // sort array by goodDeeds 
    goodPeople.sort((a, b) => b.goodDeeds - a.goodDeeds);
    // print TOP 3 people 
    console.log("People with biggest good deeds score:")
    console.log(`First Place: ${goodPeople[0].person} with score: ${goodPeople[0].goodDeeds}`)
    console.log(`Second Place: ${goodPeople[1].person} with score: ${goodPeople[1].goodDeeds}`)
    console.log(`Third Place: ${goodPeople[2].person} with score: ${goodPeople[2].goodDeeds}`)
}


fs.readFile('./data.txt', 'utf8', (err, fileData) => {
    if (err) {
        console.error('Error reading file:', err);
        return;
    }
    compileGoodDeeds(fileData) // calculating people with highest good deeds
});
