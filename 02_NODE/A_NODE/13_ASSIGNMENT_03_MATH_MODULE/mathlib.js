module.exports = function() {
    return {
        add: function(num1, num2) {
            let sum;
            sum = num1 + num2;
            console.log(`Log in add Func: ${sum}`);
            return sum;
        },
        multiply: function(num1, num2) {
            let total;
            total = num1 * num2;
            console.log(`Log in multiply Func: ${total}`);
            return total;
        },
        square: function(num) {
            let total;
            total = num * num;
            console.log(`Log in square Func: ${total}`);
            return total;
        },
        random: function(num1, num2) {
            let random;
            random = Math.floor(Math.random() * (num2 - num1 + 1) + num1);
            console.log(`Log in random Func: ${random}`);
            return random;
        }
    }
}