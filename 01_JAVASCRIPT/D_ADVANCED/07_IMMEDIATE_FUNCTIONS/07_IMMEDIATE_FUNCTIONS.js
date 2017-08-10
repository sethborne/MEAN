// can be written two ways

(function() {
    console.log("Immediate Function - Type 01");
}());

(function() {
    console.log("Immediate Function - Type 02");
})();

// passing arguments to immediate functions

(function(param1, param2) {
    console.log("Immediate Function - Type 03");
    console.log("Param1: " + param1 + " | Param2: " + param2);
})(15, 30);

//

(function(global) {
    console.log("01 " + window);
    console.log("02 " + global);
})(window);