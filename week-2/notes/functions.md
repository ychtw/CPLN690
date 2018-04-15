# Functions

Functions are crucially important for writing clean, modular code in
just about any language. Here, we'll explore some of the interesting
features of functions and discuss their use.

### Their Declaration

Functions can be created in a variety of ways.

```javascript
// A function literal that simply gives back its argument
function(argument) { return argument; }

/*
 * This is the most common way of defining a function. We are just
 * stashing a function literal (see above) inside a variable.
 * This simply returns the number that follow the one you provide it.
 */
var plusOne = function(num) { return num + 1; };

/*
 * This function declaration syntax creates the variable 'plusTwo' and
 * stores our function within it.
 */
function plusTwo(num) { return num + 2; }
```

### As Values

The first thing to note about functions is that they are values which
can be stored in variables (seen above) and passed around for use
elsewhere.

```javascript
// This function takes a function and returns a function
var doItTwice = function(func) {
  return function(val) {
    return func(func(val))
  }
}

// We can use it for something like this:
var plusFour = doItTwice(plusTwo)

// This should print 9 to the console:
console.log(plusFour(5));

```

### As Context

Note that `func` (the argument to `doItTwice` above) is used inside the
function it returns. The references within a function are tied to the
variables they mention.

In what follows, under what conditions will `todayIsMonday1` return false?
How about `todayIsMonday2` and `todayIsMonday3`?

```javascript
var days = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];
var thisDay = 'mon';

val todayIsMonday1 = function() {
  if (thisDay === 'mon') {
    return true;
  } else {
    return false;
  }
};

val todayIsMonday2 = function() {
  var thisDay;
  if (thisDay === 'mon') {
    return true;
  } else {
    return false;
  }
};

val todayIsMonday3 = function() {
  var thisDay;
  return todayIsMonday1()
}
```

In `todayIsMonday1`, calling the function will return true if and only
if the first `thisDay` is set to the string `'mon'`. This is also the
case in `todayIsMonday3` but not in `todayIsMonday2`, which will always
return false. The difference is that `thisDay` has a referrant which is
within the same function block *when it is referred to*. In the third
case, we're using the already defined `thisDay`, which hangs on to its
reference.

