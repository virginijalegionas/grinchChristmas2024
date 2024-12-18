function elfMorse() {
    // taking input from input field
    const message = document.getElementById("greeting").value.toUpperCase();
    let convertedMessage = "";
    for (let i = 0; i < message.length; i++) {
        switch (message[i]) {
            case "A":
                convertedMessage += "ho hoho ";
                break;
            case "B":
                convertedMessage += "hoho ho ho ho ";
                break;
            case "C":
                convertedMessage += "hoho ho hoho ho ";
                break;
            case "D":
                convertedMessage += "hoho ho ho ";
                break;
            case "E":
                convertedMessage += "ho ";
                break;
            case "F":
                convertedMessage += "ho ho hoho ho ";
                break;
            case "G":
                convertedMessage += "hoho hoho ho ";
                break;
            case "H":
                convertedMessage += "ho ho ho ho ";
                break;
            case "I":
                convertedMessage += "ho ho ";
                break;
            case "J":
                convertedMessage += "ho hoho hoho hoho ";
                break;
            case "K":
                convertedMessage += "hoho ho hoho ";
                break;
            case "L":
                convertedMessage += "ho hoho ho ho ";
                break;
            case "M":
                convertedMessage += "hoho hoho ";
                break;
            case "N":
                convertedMessage += "hoho ho ";
                break;
            case "O":
                convertedMessage += "hoho hoho hoho ";
                break;
            case "P":
                convertedMessage += "ho hoho hoho ho ";
                break;
            case "Q":
                convertedMessage += "hoho hoho ho hoho ";
                break;
            case "R":
                convertedMessage += "ho hoho ho ";
                break;
            case "S":
                convertedMessage += "ho ho ho ";
                break;
            case "T":
                convertedMessage += "hoho ";
                break;
            case "U":
                convertedMessage += "ho ho hoho ";
                break;
            case "V":
                convertedMessage += "ho ho ho hoho ";
                break;
            case "W":
                convertedMessage += "ho hoho hoho ";
                break;
            case "X":
                convertedMessage += "hoho ho ho hoho ";
                break;
            case "Y":
                convertedMessage += "hoho ho hoho hoho ";
                break;
            case "Z":
                convertedMessage += "hoho hoho ho ho ";
                break;
            case " ": //if greeting contains few words additional space added between words
                convertedMessage += "&nbsp;";
                break;
            default: // if a special char, number or any other unrecognized character appears it will be printed as it is
                convertedMessage += `${message[i]} `;
                break;
        }
    }
    document.getElementById("convertedGreeting").innerHTML = `Elf greeting to you is: ${convertedMessage}`;
}











