/* =====================
# Lab 2, Part 2 — Underscore Each Function

## Introduction

Up to this point, we have used Javascript's for loop to loop through data. Underscore's _.each function provides us with an easy to read, simple way to accomplish the same goal.

## Task

Find two previous labs that use for loops. Rewrite these labs to use _.each.

## Syntax
You can see an example of how to use ._each in the underscore documentation: http://underscorejs.org/#each and in the code below.

var myArray = [1, 10, 100, 1000];

_.each(myArray, function(value, key, list) {
  console.log(value, key, list);
});
===================== */

var newArray = [1, 2, 3, 4, 5, 4, 4];

var countItem = function(array, number) {
  var count = 0;
  _.each(array, function(value){
    if(value === number){
      count += 1;
    }
  });
  console.log(count);
};

countItem(newArray, 4);
