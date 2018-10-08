// Code your solution here:
function driversWithRevenueOver(array, amt) {
    return array.filter(function(driver) {return driver.revenue > amt})
}

function driverNamesWithRevenueOver(array, amt) {
    return driversWithRevenueOver(array, amt).map(function(driver) {
        return driver.name
    })
}

function exactMatch(array, info) {
   if (info.name) {
       return array.filter(function(driver) {
           return info.name === driver.name
       })
   } else if (info.revenue) {
       return array.filter(function(driver) {
           return info.revenue === driver.revenue
       })
   }
}

function exactMatchToList(array, info) {
    return exactMatch(array, info).map(function(driver) {
        return driver.name
    })
}