const {filterByAnimals} = require("./filter");
const data = [{
    name: 'country1',
    people:
        [{
            name: 'people1',
            animals: [
                {name: 'dog1'},
                {name: 'dog2'}
            ]
        },
            {
                name: 'people2',
                animals: [
                    {name: 'dog'},
                    {name: '-cat'},
                ]
            }],
},
    {
        name: 'country2',
        people:
            [{
                name: 'people1',
                animals: [
                    {name: 'cat-'},
                    {name: 'bird'},
                ]
            },
                {
                    name: 'people2',
                    animals: [
                        {name: 'squirrel'}
                    ]
                }],
    }
]
describe('filterByAnimals', () => {
    test('filter who match nothing must return empty array', () => {
        const filter = 'hedgehog';
        expect(filterByAnimals(data, filter)).toEqual([]);
    });
    test('filter must only return people who have at least 1 animal matching filter', () => {
        const filter = 'cat';
        const filteredData = filterByAnimals(data, filter);
        expect(filteredData.length).toBe(2);

        expect(filteredData[0].name).toBe('country1');
        expect(filteredData[0].people.length).toBe(1);
        expect(filteredData[0].people[0].name).toBe('people2');
        expect(filteredData[0].people[0].animals.length).toBe(1);
        expect(filteredData[0].people[0].animals[0].name).toBe('-cat');

        expect(filteredData[1].name).toBe('country2');
        expect(filteredData[1].people.length).toBe(1);
        expect(filteredData[1].people[0].name).toBe('people1');
        expect(filteredData[1].people[0].animals.length).toBe(1);
        expect(filteredData[1].people[0].animals[0].name).toBe('cat-');
    });
    test('filter must only return country who have people with at least 1 animal matching filter', () => {
        const filter = 'squirrel';
        const filteredData = filterByAnimals(data, filter);
        expect(filteredData.length).toBe(1);

        expect(filteredData[0].name).toBe('country2');
        expect(filteredData[0].people.length).toBe(1);
        expect(filteredData[0].people[0].name).toBe('people2');
        expect(filteredData[0].people[0].animals.length).toBe(1);
        expect(filteredData[0].people[0].animals[0].name).toBe('squirrel');
    });
});
