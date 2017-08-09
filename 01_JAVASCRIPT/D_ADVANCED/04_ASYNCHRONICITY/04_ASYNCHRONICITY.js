// simulated DB cal

// function getStuffFromDatabase(callback) {
//     var data;
//     var myTimer = setTimeout(function() {
//         if (typeof(callback) == 'function') {
//             data = [
//                 { name: 'Todd' },
//                 { name: 'Michael' },
//                 { name: 'Portia' }
//             ];
//             callback(data);
//         }
//     }, 2000);
//     return data;
// }

// function requestDataFromDatabase() {
//     var data = getStuffFromDatabase(function myCallback(data) {
//         console.log(data, "ASynchronous");
//         for (var i = 0; i < data.length; i += 1) {
//             console.log(data[i].name);
//         }
//     });
//     console.log(data, "Synchronous");
// }

// function catchFly() {
//     console.log("I just caught a fly!");
// }

// requestDataFromDatabase();

// console.log('Hello!');

// catchFly();

// 02

function getStuffFromDatabase(resolve, reject) {
    // reject
    var data = "whee";
    setTimeout(function() {
        data = [
                { name: "Todd" },
                { name: "Michael" },
                { name: "Portia" }
            ]
            // resolve
        resolve(data);
    }, 1000);
}

function requestDataFromDatabase() {
    console.log("running");
    var data = new Promise(function(resolve, reject) {
        getStuffFromDatabase(resolve, reject);
    });
    data.then(function(data) {
        console.log(data, "ASynchronous");
        for (var i = 0; i < data.length; i += 1) {
            console.log(data[i].name);
        }
    });
    data.catch(function() {
        console.log("Failure!");
    })
    console.log('End');
}

requestDataFromDatabase();