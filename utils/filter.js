/**
 * This function parses an array of Object and returns a new one based on an expression used as a filter
 * - filter are applied only on animal's name
 * - remove entry if a people or a country doesn't have any animal matching expression
 * @param {Object[]} data - countries data
 * @param {string} data[].name - country's name
 * @param {Object[]} data[].people - peoples of country
 * @param {string} data[].people[].name - people's name
 * @param {Object[]} data[].people[].animals - animals of people
 * @param {string} data[].people[].animals[].name - animal's name
 * @param {string} expression expression to be matched
 * @returns {Object[]} country data with filter applied
 */
function filterByAnimals(data,expression){
    return data
        .map(country => ({
            ...country,
            people: country.people
                .map(person => ({
                    ...person,
                    animals: person.animals.filter(animal => animal.name.includes(expression))
                }))
            .filter(person => person.animals.length > 0)
        }))
        .filter(country => country.people.length > 0);
}

module.exports = {
    filterByAnimals
}
