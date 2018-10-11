// Code your solution here:
function driversWithRevenueOver(drivers, r) {
  return drivers.filter(function(driver) {
    return driver.revenue > r;
  });
}

function driverNamesWithRevenueOver(drivers, revenue) {
  return driversWithRevenueOver(drivers, revenue).map(function(driver) {
    return driver.name;
  });
}

function exactMatch(drivers, condition) {
  return drivers.filter(function(driver) {
    let matches = false;
    for (const key in condition) {
      matches = driver[key] === condition[key];
    }
    return matches;
  });
}

function exactMatchToList(drivers, condition) {
  return exactMatch(drivers, condition).map(function(driver) {
    return driver.name;
  });
}
