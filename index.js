// Code your solution here:
let drivers = [];
function driversWithRevenueOver(drivers, revenue) {
  return drivers.filter( function (driver) { return driver.revenue > revenue
  });
}

function driverNamesWithRevenueOver(drivers, revenue) {
  let driver_array = driversWithRevenueOver(drivers, revenue);
  return driver_array.map( function(driver) {
    return driver.name;
   });
}

function exactMatch(extendedDrivers, obj) {
  return extendedDrivers.filter(function (driver) {
    let flag = false;
    for (const key in obj) {
      flag = driver[key] === obj[key];
    }
    return flag;
  });
}

function exactMatchToList(extendedDrivers, obj) {
  let driver_match = exactMatch(extendedDrivers, obj);
  return driver_match.map( function(driver) {
    return driver.name
  });
}