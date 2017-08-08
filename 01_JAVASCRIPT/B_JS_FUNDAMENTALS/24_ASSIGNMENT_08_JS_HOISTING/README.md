# Assignment: JavaScript Hoisting

Predict the output of the following snippets. Do not plug these into the interpreter.

### Note

Even if let and const prevent a lot of the confusing behavior of JavaScript's hoisting, these are ES6 constructs and a huge amount of the world's live JavaScript code is still ES5. Understanding how ES5 hoists var and the rules of scoping are important for every JavaScript developer!

#### ~~1~~
```javascript
console.log(hello);
var hello = 'world';
```

#### ~~2~~
```javascript
var needle = 'haystack';
test();

function test(){
	var needle = 'magnet';
	console.log(needle);
}
```
#### ~~3~~

```javascript
var brendan = 'super cool';
function print(){
	brendan = 'only okay';
	console.log(brendan);
}
console.log(brendan);
```

#### ~~4~~

```javascript
var food = 'chicken';
console.log(food);
eat();
function eat(){
	food = 'half-chicken';
	console.log(food);
	var food = ‘gone’;
}
```

#### ~~5~~

```javascript
mean();
console.log(food);
var mean = function() {
	food = "chicken";
	console.log(food);
	var food = "fish";
	console.log(food);
}
console.log(food);
```

#### ~~6~~

```javascript
console.log(genre);
var genre = "disco";
rewind();
function rewind() {
	genre = "rock";
	console.log(genre);
	var genre = "r&b";
	console.log(genre);
}
console.log(genre);
```

#### ~~7~~

```javascript
dojo = "san jose";
console.log(dojo);
learn();
function learn() {
	dojo = "seattle";
	console.log(dojo);
	var dojo = "burbank";
	console.log(dojo);
}
console.log(dojo);
```