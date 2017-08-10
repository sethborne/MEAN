// 01

function ninjaBelt(ninja, beltColor) {
    console.log("Ninja " + ninja + " has earned a " + beltColor + " belt.");
}

// ninjaBelt("Steven", "Black");

// 02

function ninjaBelt(ninja) {
    return function belt(beltColor) {
        console.log("Ninja " + ninja + " has earned a " + beltColor + " belt.");
    }
}

ninjaBelt("Steven")("Black");