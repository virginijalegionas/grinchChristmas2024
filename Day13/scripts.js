let customerData = {
    'Joe': {
        visits: 1
    },
    'Carol': {
        visits: 2
    },
    'Howard': {
        visits: 3
    },
    'Carrie': {
        visits: 4
    }
};

function greetCustomer(customer) {
    var table = document.getElementById("welcome");
    if (customer in customerData) {
        if (customerData[customer].visits == 1) {
            table.insertRow(-1).innerHTML = `Ho ho ho! Welcome back, ${customer}! We\’re glad you enjoyed your first visit! 🎅`;
        }
        else {
            table.insertRow(-1).innerHTML = `Merry greetings, ${customer}! So wonderful to see you again! 🎄`;
        }
        customerData[customer].visits += 1
    }
    else {
        table.insertRow(-1).innerHTML = `Welcome to the North Pole Café! Is this your first time? ❄️`;
        customerData[customer] = { "visits": 1 }
    }
}





greetCustomer("Joe");
greetCustomer("Legolas");
greetCustomer("Legolas");
greetCustomer("Carol");
greetCustomer("Joe");
greetCustomer("Howard");
greetCustomer("Galadriel");
greetCustomer("Legolas");
greetCustomer("Carrie");
greetCustomer("Joe");
greetCustomer("Galadriel");
greetCustomer("Howard");
