function testing(){
    var x = 10;
    console.log(x);
}
testing();
// var x scoped inside function testing


if(true){  // from here
    let x = 10;
    console.log(x);
} // to here

// let x scoped inside block defined by "{ }"

const x = 10;
// x can never change value
const myobj = {
    a: 1,
    b: 2
}
// can't change myobj type, can't change keys, BUT CAN change values, see below

// x = 15;
// vscode wont allow this

myobj.a = 5;
// myobj = { a: 1, b: 2 }
// must assign just values - redefining obj (like above) doesn't work.

console.log(myobj);
