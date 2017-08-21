function testing() {
    var x = 10;
    console.log(x);
}
testing();
// var x scoped inside function testing
if (true) {
    var x_1 = 10;
    console.log(x_1);
} // to here
// let x scoped inside block defined by "{ }"
var x = 10;
// x can never change value
var myobj = {
    a: 1,
    b: 2
};
// can't change myobj type, can't change keys, BUT CAN change values, see below
// x = 15;
// vscode wont allow this
myobj.a = 5;
console.log(myobj);
