// TODO add test with count
let mockFilter;
jest.mock('./data', () => ({
    data: {data: 'original'},
}));
beforeEach(() => {
    jest.resetModules();
    mockFilter = require('./utils/filter');
    jest.mock('./utils/filter', () => ({
        filterByAnimals: jest.fn(() => ({data: 'filtered'})),
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
