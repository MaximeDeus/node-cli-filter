let mockFilter;
let mockCount;
jest.mock('./data/sampleData', () => ({
    data: {data: 'original'},
}));
beforeEach(() => {
    jest.resetModules();
    mockFilter = require('./utils/filter');
    mockCount = require('./utils/count');
    jest.mock('./utils/filter', () => ({
        filterByAnimals: jest.fn(() => ({data: 'filtered'})),
    }));
    jest.mock('./utils/count', () => ({
        count: jest.fn(() => ({data: 'counted'})),
    }));
});

test('no option must call nothing', () => {
    jest.mock('./utils/option', () => ({
        formatOptions: jest.fn(() => ({})),
    }));

    expect(mockFilter.filterByAnimals).toHaveBeenCalledTimes(0);
    require('./app');
    expect(mockFilter.filterByAnimals).toHaveBeenCalledTimes(0);
});
test('filter option activated must call filterByAnimals once', () => {
    jest.mock('./utils/option', () => ({
        formatOptions: jest.fn(() => ({'filter' : null})),
    }));

    expect(mockFilter.filterByAnimals).toHaveBeenCalledTimes(0);
    require('./app');
    expect(mockFilter.filterByAnimals).toHaveBeenCalledTimes(1);
});

test('count option activated must call count once', () => {
    jest.mock('./utils/option', () => ({
        formatOptions: jest.fn(() => ({'count' : null})),
    }));

    expect(mockCount.count).toHaveBeenCalledTimes(0);
    require('./app');
    expect(mockCount.count).toHaveBeenCalledTimes(1);
});

test('filter and count option activated must call both', () => {
    jest.mock('./utils/option', () => ({
        formatOptions: jest.fn(() => ({'filter': null, 'count' : null})),
    }));
    require('./app');
    expect(mockFilter.filterByAnimals).toHaveBeenCalledTimes(1);
    expect(mockCount.count).toHaveBeenCalledTimes(1);
});
