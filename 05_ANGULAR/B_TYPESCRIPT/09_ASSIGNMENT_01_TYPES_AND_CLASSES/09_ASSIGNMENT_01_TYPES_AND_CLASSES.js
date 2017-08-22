// Number Type
var myNum1;
myNum1 = 51;
console.log(myNum1);
var myNum2 = 52;
console.log(myNum2);
// String Type
var myString1;
myString1 = "Hello Universe 1";
console.log(myString1);
var myString2 = "Hello Universe 2";
console.log(myString2);
// Array Type
var myArr1;
myArr1 = [1, 2, 3, 4];
console.log("My Number Array 1: " + myArr1);
var myArr2 = [1, 2, 3, 4];
console.log("My Number Array 2: " + myArr2);
var myArr3;
myArr3 = [1, 2, 3, 4];
console.log("My Number Array 3: " + myArr3);
var myArr4 = [1, 2, 3, 4];
console.log("My Number Array 4: " + myArr4);
// Object Type
var myObj1;
myObj1 = { name: "Seth1" };
console.log(myObj1);
var myObj2 = { name: "Seth2" };
console.log(myObj2);
// Anything Variable - String
var anythingVariableString1;
anythingVariableString1 = "AnythingString 1";
console.log(anythingVariableString1);
var anythingVariableString2 = "AnythingString 2";
console.log(anythingVariableString2);
// Anything Variable Number
var anythingVariableNumber1;
anythingVariableNumber1 = 1;
console.log(anythingVariableNumber1);
var anythingVariableNumber2;
anythingVariableNumber2 = 2;
console.log(anythingVariableNumber2);
// Array Boolean
var arrayBoolean1;
arrayBoolean1 = [true, false, true, false];
console.log("Array Boolean 1: " + arrayBoolean1);
var arrayBoolean2 = [false, true, false, true];
console.log("Array Boolean 2: " + arrayBoolean2);
// Array Any?
var arrayAny1;
arrayAny1 = [1, "abc", true, [1, 2]];
console.log(arrayAny1);
var arrayAny2 = [2, "xyz", false, [3, 4]];
console.log(arrayAny2);
// Object
var myObjB1;
myObjB1 = { x: 1, y: 2 };
console.log(myObjB1);
var myObjB2 = { a: 3, b: 4 };
console.log(myObjB2);
// class
var myNode = (function () {
    function myNode(val) {
        this.val = 0;
        this.val = val;
    }
    myNode.prototype.doSomething = function () {
        this._priv = 10;
    };
    return myNode;
}());
var firstMyNode = new myNode(1);
console.log(firstMyNode.val);
// should only show val 1?
console.log(firstMyNode);
console.log(firstMyNode.val);
// should show both?
firstMyNode.doSomething();
console.log(firstMyNode);
console.log(firstMyNode._priv);
