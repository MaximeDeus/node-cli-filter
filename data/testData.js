const data = [{
  name: 'country1',
  people:
        [{
          name: 'people1',
          animals: [
            { name: 'dog1' },
            { name: 'dog2' },
          ],
        },
        {
          name: 'people2',
          animals: [
            { name: 'dog' },
            { name: '-cat' },
          ],
        }],
},
{
  name: 'country2',
  people:
            [{
              name: 'people1',
              animals: [
                { name: 'cat-' },
                { name: 'bird' },
              ],
            },
            {
              name: 'people2',
              animals: [
                { name: 'squirrel' },
              ],
            }],
},
];
module.exports = {
  data,
};
