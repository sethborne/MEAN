module.exports = function() {
    return {
        greet: function() {
            console.log("We are Now Using a Module!");
        },
        add: function(num1, num2) {
            console.log(`The Sum is: ${num1 + num2}`);
        }
    }
}