function driversWithRevenueOver(array, amount) {
  return array.filter(function(driver) { return driver.revenue > amount })
}

function driverNamesWithRevenueOver(array, amount) {
  return driversWithRevenueOver(array, amount).map(function(driver) { return driver.name })
}

function exactMatch(array, object) {
  if (object.name) 
    return array.filter(function(driver) { return driver.name === object.name })
  else if (object.revenue)
    return array.filter(function(driver) { return driver.revenue === object.revenue })
}

function exactMatchToList(array, object) {
  return exactMatch(array, object).map(function(driver) { return driver.name })
}