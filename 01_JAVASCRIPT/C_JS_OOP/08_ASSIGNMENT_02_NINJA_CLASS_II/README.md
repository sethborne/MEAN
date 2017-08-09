# Assignment: Ninja Class II

Complete the below challenges using the Ninja Class from the previous assignment.

### ~~.punch()~~

Add a new method to your Ninja class called **.punch()**. This method will take another Ninja instance and subtract 5 Health from the Ninja we passed in. Your **.punch()** should display a console message like the below example.

```javascript
var blue_ninja = new Ninja("Goemon");
var red_ninja = new Ninja("Bill Gates");
red_ninja.punch(blue_ninja);
// -> "Goemon was punched by Bill Gates and lost 5 Health!"
```

### ~~.kick()~~

Now add a method to your Ninja class called **.kick()**. Kick will subtract 15 Health for each point of Strength the calling Ninja has, and like **.punch()** will take another Ninja instance.

```javascript
blue_ninja.kick(red_ninja);
// -> "Bill Gates was kicked by Goemon and lost 15 Health!"
```

### Validations

Update **.punch()** and **.kick()** so that they only accept Instances of the Ninja class. 

Hint: You will need to find a way to check the constructor of an instance. You will often need to consult outside documentation to find solutions for particular features.