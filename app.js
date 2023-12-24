const { formatOptions } = require('./utils/option');

const options = formatOptions(process.argv.slice(2)); // slice(2) for removing node.exe and app.js filepath from args
const { data } = require('./data/sampleData');
const { showHelp } = require('./utils/help');
const { filterByAnimals } = require('./utils/filter');
const { count } = require('./utils/count');

let result = data;
if ('help' in options) {
  showHelp();
} else {
  if ('filter' in options) {
    result = filterByAnimals(data, options.filter);
  }
  if ('count' in options) {
    result = count(result);
  }
  console.log(JSON.stringify(result, null, 2)); // pretty printing;
}
