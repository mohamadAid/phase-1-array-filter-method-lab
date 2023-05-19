// Code your solution here
const findMatching = (drivers, str) => drivers.filter((driverName) => driverName.toUpperCase() === str.toUpperCase());


const fuzzyMatch = (drivers, str) => drivers.filter(driver => driver.startsWith(str));


const matchName = (drivers, str) => drivers.filter((driver) => driver.name === str);