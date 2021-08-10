const returnFirstTwoDrivers = function(drivers) {
    return drivers.slice(0,2);
}

const returnLastTwoDrivers = function(drivers) {
    return drivers.slice(-2);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = function() {
    return function(fee) {return fee * 5;};
}

const fareDoubler = function(fee) {
    return fee * 2;
}

const fareTripler = function(fee) {
    return fee * 3;
}

const selectDifferentDrivers = function(options, group) {
    return group(options);
}