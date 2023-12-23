/**
 * This function displays usage and available options to user
 */
function showHelp() {
    console.log(
    `Usage: node app.js [...options]"
    Options:
    --help                  How to run this program
    --filter=value          Filter by animals matching name's value
    --count                 Add counter next to countries and people's names representing population
`)
}

module.exports = {
    showHelp
}
