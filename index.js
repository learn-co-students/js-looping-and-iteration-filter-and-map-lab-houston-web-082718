// Code your solution here:

function driversWithRevenueOver(drivers, revenue) {
    return drivers.filter(driver => {
        return driver.revenue >= revenue;
    });
};

function driverNamesWithRevenueOver(drivers, revenue) {
    return drivers.filter(driver => {
        return driver.revenue > revenue;
    }).map(driver => {
        return driver.name;
    });
};

function exactMatch (drivers, test) {
    return drivers.filter(driver => {
        return driver.name === test.name || driver.revenue === test.revenue
    });
};

function exactMatchToList (drivers, test) {
    return drivers.filter(driver => {
        return driver.name === test.name || driver.revenue === test.revenue
    }).map(name => {
        return name.name;
    });
};