function driversWithRevenueOver(drivers, money) {
  const list = drivers.filter(driver => {
    return driver.revenue > money
  })
  console.log(list)
  return list
}

function driverNamesWithRevenueOver(drivers, money) {
  return driversWithRevenueOver(drivers, money).map( driver => {
    return driver.name
  })
}

function exactMatch(drivers, match) {
  if (match.name) {
    const nameMatch = drivers.filter(driver => {
      return driver.name === match.name
    })
    return nameMatch

  } else if (match.revenue) {
    const revenueMatch = drivers.filter(driver => {
      return driver.revenue === match.revenue
    })
    return revenueMatch
  }
}

function exactMatchToList(drivers, match) {
  return exactMatch(drivers, match).map(driver => {
    return driver.name
  })
}
