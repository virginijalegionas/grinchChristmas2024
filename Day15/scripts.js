const items = [
    { id: 1, name: "Christmas Candles", price: 1.75, categoryId: 1, inventory: 100 },
    { id: 2, name: "Santa Claus Hat", price: 0.25, categoryId: 1, inventory: 100 },
    { id: 3, name: "Ornaments", price: 1.0, categoryId: 1, inventory: 100 },
    { id: 4, name: "Stockings", price: 3.0, categoryId: 2, inventory: 100 },
    { id: 5, name: "Gingerbread House", price: 1.0, categoryId: 2, inventory: 100 },
    { id: 6, name: "Candy Canes", price: 5.75, categoryId: 3, inventory: 100 },
    { id: 7, name: "Elf Figurines", price: 4.0, categoryId: 3, inventory: 100 },
    { id: 8, name: "Snow Globes", price: 5.5, categoryId: 4, inventory: 100 },
];
formatedItems = {}

function getItemPriceByName(itemName) {

    if (Object.keys(formatedItems).length == 0) {
        for (let item in items) {
            formatedItems[items[item]["name"]] = {
                "id": items[item]["id"],
                "price": items[item]["price"],
                "categoryId": items[item]["categoryId"],
                "inventory": items[item]["inventory"]
            }
        }
    }
    var table = document.getElementById("giftCost");
    table.insertRow(-1).innerHTML = `Gift "${itemName}" costs: ${formatedItems[itemName]["price"]}`;
}


getItemPriceByName("Candy Canes");
getItemPriceByName("Snow Globes");
getItemPriceByName("Gingerbread House");
getItemPriceByName("Christmas Candles");
getItemPriceByName("Stockings");
getItemPriceByName("Santa Claus Hat");
getItemPriceByName("Elf Figurines");
getItemPriceByName("Ornaments");
