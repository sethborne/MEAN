var foo = "bar";

function magic() {
    foo = "hello world";
    console.log(foo);
    var foo;
}
magic();
console.log(foo);

// magicalUnicorns();
var magicalUnicorns = function() {
    console.log("Will it blend?");
}
console.log("Don't breath this!");