// Never type( will never reach the end of the function)
// never for errors
function errorHandler(message: string): never{
  throw new Error(message);
}

// this function returns void.  return; is explicit, you do not need it as void implies no return.
// void return nothing
function printValue(val: string, x: number): void{
  console.log(val);
  return;
}


// no classes in javascript - class is a cover for prototypes by using an object constructor
class SLNode {
  val: number;
  second: string;
  
  constructor(valueP: number, secondParam: string){
    this.val = valueP;
    this.second = secondParam;
  }
  
  doSomethingFun(){
    console.log("This is FUN!");
  }
}

let firstSLNode = new SLNode(1, "abc");
console.log(firstSLNode);
