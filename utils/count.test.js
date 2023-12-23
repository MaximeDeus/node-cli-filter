const {data} = require("../data/testData");
const {count} = require("./count");
describe('count', () => {
    test('count must add to country\'s name number of people', () => {
        const result = count(data);
        for (let i = 0 ; i < data.length ; i++) {
            expect(result[i].name).toBe(`${data[i].name} [${data[i].people.length}]`)
        }
    });
    test('count must add to people\'s name number of animals', () => {
        const result = count(data);
        for (let i = 0 ; i < data[0].people.length ; i++) {
            expect(result[0].people[i].name).toBe(`${data[0].people[i].name} [${data[0].people[i].animals.length}]`)
        }
    });
});
