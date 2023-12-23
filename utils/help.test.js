const { showHelp } = require('./help');
let logSpy;

beforeEach(() => {
    logSpy = jest.spyOn(console, 'log');
    logSpy.mockImplementation(() => {}); // avoid displaying message
});

afterEach(() => {
    logSpy.mockRestore();
})

test('showHelp must call console.log', () => {
    expect(logSpy).toHaveBeenCalledTimes(0);
    showHelp();
    expect(logSpy).toHaveBeenCalledTimes(1);
});
