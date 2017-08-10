var _ = {
    map: function(array, callback) {
        //will do some function to each item.  return all items.
        // let tempArray = [];
        for (var i = 0; i < array.length; i += 1) {
            // tempArray.push(callback(array[i]));
            array[i] = callback(array[i]);
        }
        // return tempArray;
        return array;
    },
    reduce: function(array, callback, memo) {
        console.log(array);
        console.log(callback);
        if (!memo) {
            memo = 0;
        }
        for (let i = 0; i < array.length; i += 1) {
            memo = callback(array[i], memo);
        }
        return memo;
    },
    find: function(array, callback) {
        for (let i = 0; i < array.length; i += 1) {
            if (callback(array[i])) {
                return array[i];
            }
        }
    },
    filter: function(array, callback) {
        console.log(array);
        let tempArray = [];
        for (let i = 0; i < array.length; i += 1) {
            // [ false, true, false, true, false, true]
            // tempArray.push(callback(array[i]));
            // need conditional = if true
            if (callback(array[i])) {
                tempArray.push(array[i]);
            }
            // console.log(array[i]);
        }
        // return array of vals meet criteria in cb
        return tempArray;
    },
    reject: function(array, callback) {
        console.log(array);
        let tempArray = [];
        for (let i = 0; i < array.length; i += 1) {
            if (!callback(array[i])) {
                tempArray.push(array[i]);
            }
        }
        return tempArray;
    }
}

var mapAddTo = _.map([1, 2, 3, 4, 5, 6], function callback(num) {
    let addIncrement = 5;
    return num + addIncrement;
});
console.log(mapAddTo);

var mapMultiBy = _.map([1, 2, 3, 4, 5, 6], function(num) {
    let multiIncrement = 5;
    return num * multiIncrement;
})
console.log(mapMultiBy);

var reduceBySum = _.reduce([1, 2, 3, 4, 5, 6], function(num, memo) {
    return num + memo;
}, 0);
console.log(reduceBySum);

var reduceBySumNoMemo = _.reduce([1, 2, 3, 4, 5, 6], function(num, memo) {
    return num + memo;
});
console.log(reduceBySumNoMemo);

var findFirstEven = _.find([1, 2, 3, 4, 5, 6], function(num) {
    return num % 2 === 0;
});
console.log("FFE", findFirstEven);

var evens = _.filter([1, 2, 3, 4, 5, 6], function(num) {
    return num % 2 == 0;
});
console.log(evens);

var notEvens = _.reject([1, 2, 3, 4, 5, 6], function(num) {
    return num % 2 == 0;
});
console.log(notEvens);