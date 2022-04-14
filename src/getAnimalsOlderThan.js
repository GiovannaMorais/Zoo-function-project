const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  // seu código aqui
  const animals = data.species.find((specie) => specie.name === animal);
  return animals.residents.every((idades) => idades.age >= age);
}

module.exports = getAnimalsOlderThan;
