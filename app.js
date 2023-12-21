const {formatOptions} = require("./utils/option");
const options = formatOptions(process.argv.slice(2)); // slice(2) for removing node.exe and app.js filepath from args
const {data} = require("./data");
const {filterByAnimals} = require("./utils/filter");

let result = data;
if ('filter' in options) {
    result = filterByAnimals(data,options.filter);
}
if ('count' in options) {
    // TODO result = count(result));
}
console.log(JSON.stringify(result, null, 2)); // pretty printing;

