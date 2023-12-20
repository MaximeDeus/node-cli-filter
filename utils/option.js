const InvalidOptionException = require("../errors/InvalidOptionException");
const UnknownOptionException = require("../errors/UnknownOptionException");
const availableOptions = [
    '--help',
    '--filter',
    '--count'
];
const regexValidOption = new RegExp('^(--([^=]+))(=(.*[^=]))?$');

/**
 * This function returns if an option is valid or not
 * @param {string} opt option to be tested
 * @throws {InvalidOptionException} if option is not well formatted
 * @throws {UnknownOptionException} if option is unavailable
 * @returns {boolean} return true if option is valid
 */
function isValidOption(opt){
    if (!regexValidOption.test(opt)){
        throw new InvalidOptionException(`Option "${opt}" is invalid. Use --help to see options`);
    }
    const [,option] = opt.match(regexValidOption);
    if (!availableOptions.includes(option)){
        throw new UnknownOptionException(`Option "${opt}" does not exist. Use --help to see options`);
    }
    return true;
}


/**
 * This function parse and returns a well formatted option, i.e :
 * 1. remove '--'
 * 2. store value linked to option if provided (ex: filter=toto)
 * @param {string} opt option
 * @returns {Object} option name associated with its value (which is null if not set)
 */
function formatOption(opt){
    if (isValidOption(opt)){
        const [optionName, optionValue] = opt.substring(2).split('=');
        return {
            [optionName]:optionValue || null
        };
    }

}

/**
 * This function parses and returns a well formatted list of options, i.e :
 * @param {string[]} opts list of options
 * @returns {Object} Object containing all options associated to their values
 */
function formatOptions(opts){
    const result = {};
    opts.forEach(opt => Object.assign(result, formatOption(opt)));
    return result;
}

module.exports = {
    isValidOption,
    formatOption,
    formatOptions
};
