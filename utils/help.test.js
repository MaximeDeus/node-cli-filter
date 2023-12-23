const { showHelp } = require('./help');

test('showHelp must call console.log', () => {
    const logSpy = jest.spyOn(console, 'log');
    logSpy.mockImplementation(() => {}); // avoid displaying message

    expect(logSpy).toHaveBeenCalledTimes(0);
    showHelp();
    expect(logSpy).toHaveBeenCalledTimes(1);

    logSpy.mockRestore(); // restore console.log behavior
});
