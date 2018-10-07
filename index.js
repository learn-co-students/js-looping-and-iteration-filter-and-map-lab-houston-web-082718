// Code your solution here:

//driversWithRevenueOver- This function takes an array of driver JavaScript objects 
//as the first argument and a number called revenue as the second argument. It returns 
//an array of driver objects that have a revenue attribute that's greater than the 
//passed-in revenue argument.
function driversWithRevenueOver(array, num) {
    return array.filter(function(object) {return object.revenue > num; });
}

//driverNamesWithRevenueOver() - This function works the same way as driversWithRevenueOver(). 
//The difference is that it returns an array of strings representing the name of each driver 
//who has a revenue greater than the specified amount.
function driverNamesWithRevenueOver(array, num) {
    return driversWithRevenueOver(array, num).map(function(object) {return object.name ; });
}

//exactMatch() - This function takes an array of driver objects as the first argument and 
//a JavaScript object that specifies an attribute and corresponding value. 
function exactMatch(array, object) {
    return array.filter(function(obj) {return obj[Object.keys(object)[0]] === Object.values(object)[0]; });
}

//exactMatchToList() - This function works the same way as the exactMatch() function, 
//except that instead of returning an array of driver objects, it returns an array of 
//strings with each element in the array corresponding to the matching driver's name. 
function exactMatchToList(array, object) {
    return exactMatch(array, object).map(function(obj) {return obj.name; });
}