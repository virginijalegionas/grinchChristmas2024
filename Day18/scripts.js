function countFlavors(input) {
    const cheers = input.split(",");
    let froyoFlavors = {};
    cheers.forEach(flavor => {
        if (froyoFlavors[flavor]) {
            froyoFlavors[flavor]++;
        } else {
            froyoFlavors[flavor] = 1;
        }
    });
    return froyoFlavors;
}

// wait until enter is pressed
document.getElementById("cheer").addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        // Get the text from the input field
        const input = event.target.value;
        if (input === '') { //if input is empty, message displayed
            document.getElementById("froyoFlavors").innerHTML = `No flavors added, please add your flavors 🍨🍦🍦🍨`;
            return;
        }
        const output = countFlavors(input);
        let outputText = `🎅 Froyo Flavor Totals: 🎅<br>`;
        for (const [key, value] of Object.entries(output)) {
            if (value === 1) {
                outputText += `${key}: ${value} serving<br>`;
            }
            else {
                outputText += `${key}: ${value} servings<br>`;
            }
        }
        document.getElementById("froyoFlavors").innerHTML = outputText;
        //clear the input field
        event.target.value = '';
    }
});