/**
 * This function parses an array of Object and returns a new one where :
 * - a counter is added for each country's name, representing people with at least one animal
 * - a counter is added for each people's name, representing animals he possesses
 * example of representation: name: toto [1]
 * @param {Object[]} data - countries data
 * @param {string} data[].name - country's name
 * @param {Object[]} data[].people - peoples of country
 * @param {string} data[].people[].name - person's name
 * @param {Object[]} data[].people[].animals - animals of a person
 * @param {string} data[].people[].animals[].name - animal's name
 * @returns {Object[]} country data with count applied
 */
function count(data){
    return data
        .map(country => ({
            ...country,
            name: `${country.name} [${country.people.length}]`,
            people: country.people
                .map(person => ({
                    ...person,
                    name: `${person.name} [${person.animals.length}]`,
                }))
        }))
}

module.exports = {
    count
}
