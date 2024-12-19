const fs = require('fs');

function sumRouteToUS(data) {
    let routeLength = 0
    const rows = data.split("\n"); //read data from file line by line
    rows.forEach(row => {
        const number = row.match(/\d+/);  //get number       
        const numberValue = parseInt(number[0]) // convert to int
        const measure = row.match(/[a-zA-Z]+/); // get mesurement
        switch (measure[0]) { //according to the measurement make conversion
            case "ft":
                routeLength += numberValue * 30.48
                break;
            case "in":
                routeLength += numberValue * 2.54
                break;
            case "mil":
                routeLength += numberValue * 160934
                break;
            case "yd":
                routeLength += numberValue * 91.44
                break;
            case "wm":
                routeLength += numberValue * 60
                break;
        }
    });
    console.log(`Route Length is: ${routeLength.toFixed(2)}`);
}


fs.readFile('./data.txt', 'utf8', (err, fileData) => {
    if (err) {
        console.error('Error reading file:', err);
        return;
    }
    sumRouteToUS(fileData) // call funtion to sum the route
});