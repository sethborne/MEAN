// Never type( will never reach the end of the function)
// never for errors
function errorHandler(message) {
    throw new Error(message);
}
// this function returns void.  return; is explicit, you do not need it as void implies no return.
// void return nothing
function printValue(val, x) {
    console.log(val);
    return;
}
// no classes in javascript - class is a cover for prototypes by using an object constructor
var SLNode = (function () {
    function SLNode(valueP, secondParam) {
        this.val = valueP;
        this.second = secondParam;
    }
    SLNode.prototype.doSomethingFun = function () {
        console.log("This is FUN!");
    };
    return SLNode;
}());
var firstSLNode = new SLNode(1, "abc");
console.log(firstSLNode);
