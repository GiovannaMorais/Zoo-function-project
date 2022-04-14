const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  // seu código aqui
  const specieId = ids.map((id) => data.species.find((animal) => animal.id === id));
  return specieId;
}

module.exports = getSpeciesByIds;
