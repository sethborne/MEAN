// not using an interface
function printName(user: { name: string }): void {
  console.log(user.name);
  return;
}

printName({name: "Seth"});

// Using an Interface
interface UserInterface {
  firstName: string;
  lastName: string;
  userName?: string;
}

function printNameUseInter(user: UserInterface): void{
  console.log(user.firstName);
  console.log(user.lastName);
  if(user.userName){
    console.log(user.userName);
  }
  return;
}

let firstName = "Seth";
let lastName = "Borne";
let phone = "";

printNameUseInter({ firstName: firstName, lastName: lastName });

printNameUseInter({ firstName: "Steven", lastName: "Rizzo", userName: "theRat" });
