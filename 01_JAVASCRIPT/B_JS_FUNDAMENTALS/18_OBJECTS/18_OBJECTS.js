let x = {};
console.log(x);

let sandwich = {
    slicesOfBread: 2,
    ham: true,
    veggies: ["lettuce", "mayo", "onion"]
}

console.log(sandwich);

console.log(sandwich.slicesOfBread);

console.log(sandwich.veggies[0]);

let sandwiches = [{
        id: 1,
        breadType: 'Sourdough',
        ingredients: 'Spicy Turkey, Spicy Mustard'
    },
    {
        id: 2,
        breadType: 'Marbled Rye',
        ingredients: 'Prosciutto, Swiss Cheese'
    },
    {
        id: 3,
        breadType: 'Wheat',
        ingredients: 'Ham, Provolone Cheese, Tomato'
    }
]

console.log(sandwiches[0]);

console.log(sandwiches[0].breadType);

for (let i = 0; i < sandwiches.length; i += 1) {
    console.log(sandwiches[i].id);
    console.log(sandwiches[i].breadType);
    console.log(sandwiches[i].ingredients);
}

let sandwich2 = {
    cheese: "Smoked Gouda",
    meat: "Dry-aged Bison",
    sauce: "Chipotle Aioli",
    veggies: "Caramelized Onions"
}

for (let topping in sandwich2) {
    console.log("Key: " + topping);

    console.log("Value: " + sandwich2[topping]);

    console.log("Key: " + topping + " | Value: " + sandwich2[topping]);

    // console.log("Value2: " + sandwich2.topping);
}