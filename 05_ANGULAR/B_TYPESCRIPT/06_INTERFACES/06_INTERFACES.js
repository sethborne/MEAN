// not using an interface
function printName(user) {
    console.log(user.name);
    return;
}
printName({ name: "Seth" });
function printNameUseInter(user) {
    console.log(user.firstName);
    console.log(user.lastName);
    if (user.userName) {
        console.log(user.userName);
    }
    return;
}
var firstName = "Seth";
var lastName = "Borne";
var phone = "";
printNameUseInter({ firstName: firstName, lastName: lastName });
printNameUseInter({ firstName: "Steven", lastName: "Rizzo", userName: "theRat" });
