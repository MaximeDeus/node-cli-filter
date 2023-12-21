const InvalidOptionException = require("../errors/InvalidOptionException");
const {isValidOption, formatOption, formatOptions} = require("./option");
const UnknownOptionException = require("../errors/UnknownOptionException");
describe('isValidOption', () => {
    test('no well formatted option must throw InvalidOptionException', () => {
        let invalidOption;
        invalidOption = "help"; // missing '--'
        expect(() => isValidOption(invalidOption)).toThrow(InvalidOptionException);
        invalidOption = "-help"; // missing '-'
        expect(() => isValidOption(invalidOption)).toThrow(InvalidOptionException);
        invalidOption = "--help="; // missing value behind '='
        expect(() => isValidOption(invalidOption)).toThrow(InvalidOptionException);
    });

    test('Unknown option must throw UnknownOptionException', () => {
        const unknownOption = "--tototititutu";
        expect(() => isValidOption(unknownOption)).toThrow(UnknownOptionException);
    });

    test('valid option must return true', () => {
        const validOption = "--help";
        expect(isValidOption(validOption)).toBeTruthy();
    });
});

describe('formatOption', () => {
    test('must return Object containing paired optionName/optionValue', () => {
        const option = "--filter=ry";
        const formattedOption = formatOption(option);
        expect(formattedOption).toEqual({filter: "ry"});
    });
    test('optionValue must be set as "null" if not provided', () => {
        const option = "--count";
        const formattedOption = formatOption(option);
        expect(formattedOption).toEqual({count: null});
    });
});

describe('formatOptions', () => {
    test('must handle multiple options', () => {
        const options = ['--filter=ry','--count'];
        const formattedOptions = formatOptions(options);
        expect(formattedOptions).toEqual({filter: "ry", count: null});
    });

    test('options can only appear once and keeping the latest value', () => {
        const options = ['--filter=a','--filter=b'];
        const formattedOptions = formatOptions(options);
        expect(formattedOptions).toEqual({filter: "b"});
    });
});
