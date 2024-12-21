const fs = require('fs');

function bestWorstRouteCalculation(data) {
    let routeDistances = []
    for (let a = 0; a < data.length; a++) { //going through all the arrays with a cooordinates in data
        let totalDistance = 0;
        let currentRouteHouses = data[a];
        let currentHouse = currentRouteHouses[0];
        for (let i = 0; i < currentRouteHouses.length; i++) { //going through all coordinates in selected array
            let aPower = (currentHouse[0] - currentRouteHouses[i][0]) ** 2;
            let bPower = (currentHouse[1] - currentRouteHouses[i][1]) ** 2;
            const distance = Math.sqrt(aPower + bPower);
            totalDistance += distance;
            currentHouse = currentRouteHouses[i];
        }
        routeDistances.push(totalDistance);
    }
    const maxDistance = Math.max(...routeDistances);
    const minDistance = Math.min(...routeDistances);

    console.log(`Maximum distance is: ${maxDistance}`);
    console.log(`Minimum distance is: ${minDistance}`);
    console.log(`Difference between longest and shortest route is: ${(maxDistance - minDistance).toFixed(2)}`);
}


fs.readFile('./data.json', 'utf8', (err, fileData) => {
    if (err) {
        console.error('Error reading file:', err);
        return;
    }
    data = JSON.parse(fileData)
    bestWorstRouteCalculation(data) //calculating distances of all routes 
});
