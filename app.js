const {formatOptions} = require("./utils/option");
const options = formatOptions(process.argv.slice(2)); // slice(2) for removing node.exe and app.js filepath from args
const {data} = require("./data");
const {filterByAnimals} = require("./utils/filter");

const result = filterByAnimals(data,'ry')
console.log(result);

