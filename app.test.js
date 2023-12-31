let logSpy;

let mockHelp;
let mockFilter;
let mockCount;

jest.mock('./data/sampleData', () => ({
  data: { data: 'original' },
}));
beforeEach(() => {
  logSpy = jest.spyOn(console, 'log');
  logSpy.mockImplementation(() => {}); // avoid displaying message

  mockHelp = require('./utils/help');
  mockFilter = require('./utils/filter');
  mockCount = require('./utils/count');

  jest.mock('./utils/help', () => ({
    showHelp: jest.fn(),
  }));
  jest.mock('./utils/filter', () => ({
    filterByAnimals: jest.fn(() => ({ data: 'filtered' })),
  }));
  jest.mock('./utils/count', () => ({
    count: jest.fn(() => ({ data: 'counted' })),
  }));
});

afterEach(() => {
  logSpy.mockRestore();
  jest.resetModules();
});

test('no option still have to call console.log', () => {
  jest.mock('./utils/option', () => ({
    formatOptions: jest.fn(() => ({})),
  }));

  expect(logSpy).toHaveBeenCalledTimes(0);
  require('./app');
  expect(logSpy).toHaveBeenCalledTimes(1);
});

test('help option activated must call showHelp once', () => {
  jest.mock('./utils/option', () => ({
    formatOptions: jest.fn(() => ({ help: null })),
  }));

  expect(mockHelp.showHelp).toHaveBeenCalledTimes(0);
  require('./app');
  expect(mockHelp.showHelp).toHaveBeenCalledTimes(1);
});
test('help option activated must not call console.log', () => {
  jest.mock('./utils/option', () => ({
    formatOptions: jest.fn(() => ({ help: null })),
  }));

  expect(logSpy).toHaveBeenCalledTimes(0);
  require('./app');
  expect(logSpy).toHaveBeenCalledTimes(0);
});
test('help option activated must not call filter nor count', () => {
  jest.mock('./utils/option', () => ({
    formatOptions: jest.fn(() => ({ help: null, filter: null, count: null })),
  }));

  require('./app');
  expect(mockHelp.showHelp).toHaveBeenCalledTimes(1);
  expect(mockFilter.filterByAnimals).toHaveBeenCalledTimes(0);
  expect(mockCount.count).toHaveBeenCalledTimes(0);
});
test('filter option activated must call filterByAnimals once', () => {
  jest.mock('./utils/option', () => ({
    formatOptions: jest.fn(() => ({ filter: null })),
  }));

  expect(mockFilter.filterByAnimals).toHaveBeenCalledTimes(0);
  require('./app');
  expect(mockFilter.filterByAnimals).toHaveBeenCalledTimes(1);
});

test('count option activated must call count once', () => {
  jest.mock('./utils/option', () => ({
    formatOptions: jest.fn(() => ({ count: null })),
  }));

  expect(mockCount.count).toHaveBeenCalledTimes(0);
  require('./app');
  expect(mockCount.count).toHaveBeenCalledTimes(1);
});

test('filter and count option activated must call both', () => {
  jest.mock('./utils/option', () => ({
    formatOptions: jest.fn(() => ({ filter: null, count: null })),
  }));
  require('./app');
  expect(mockFilter.filterByAnimals).toHaveBeenCalledTimes(1);
  expect(mockCount.count).toHaveBeenCalledTimes(1);
});
