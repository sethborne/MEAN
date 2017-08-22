// Number Type

var myNum1: number;
myNum1 = 51;
console.log(myNum1);

var myNum2: number = 52;
console.log(myNum2);


// String Type

var myString1: string;
myString1 = "Hello Universe 1"
console.log(myString1);

var myString2: string = "Hello Universe 2";
console.log(myString2);

// Array Type

var myArr1: number[];
myArr1 = [1, 2, 3, 4];
console.log(`My Number Array 1: ${myArr1}`);

var myArr2: number[] = [1, 2, 3, 4];
console.log(`My Number Array 2: ${myArr2}`);

var myArr3: Array<number>;
myArr3 = [1, 2, 3, 4];
console.log(`My Number Array 3: ${myArr3}`);

var myArr4: Array<number> = [1, 2, 3, 4];
console.log(`My Number Array 4: ${myArr4}`);

// Object Type

var myObj1: { name: string };
myObj1 = { name: "Seth1"};
console.log(myObj1);

var myObj2: { name: string } = { name: "Seth2"};
console.log(myObj2);

// Anything Variable - String

var anythingVariableString1: any;
anythingVariableString1 = "AnythingString 1";
console.log(anythingVariableString1);

var anythingVariableString2: any = "AnythingString 2";
console.log(anythingVariableString2);

// Anything Variable Number

var anythingVariableNumber1: any;
anythingVariableNumber1 = 1;
console.log(anythingVariableNumber1);

var anythingVariableNumber2: any;
anythingVariableNumber2 = 2;
console.log(anythingVariableNumber2);

// Array Boolean

var arrayBoolean1: boolean[];
arrayBoolean1 = [true, false, true, false];
console.log(`Array Boolean 1: ${arrayBoolean1}`);

var arrayBoolean2: boolean[] = [false, true, false, true];
console.log(`Array Boolean 2: ${arrayBoolean2}`);

// Array Any?

var arrayAny1: any[];
arrayAny1 = [1, "abc", true, [1,2] ];
console.log(arrayAny1);

var arrayAny2: any[] = [2, "xyz", false, [3,4] ];
console.log(arrayAny2);

// Object

var myObjB1: { x: number, y: number };
myObjB1 = { x: 1, y: 2 };
console.log(myObjB1);

var myObjB2: { a: number, b: number } = { a: 3, b: 4 };
console.log(myObjB2);


// class

class myNode {
    val: number = 0;
    _priv?: number;
    
    constructor( val: number ){
        this.val = val;
    }
    
    doSomething(){
        this._priv = 10;
    }
}

let firstMyNode = new myNode(1);
console.log(firstMyNode.val);
// should only show val 1?
console.log(firstMyNode);
console.log(firstMyNode.val);
// should keep val 1 - but make _priv 10
firstMyNode.doSomething();
// should show both?
console.log(firstMyNode);
console.log(firstMyNode._priv);


// return types

function myFunction(): void {
    console.log("Hello World");
    return;
}

function sendingErrors(): never {
    throw new Error("Error Message");
}
