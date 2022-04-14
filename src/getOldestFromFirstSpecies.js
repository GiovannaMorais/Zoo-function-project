const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  // seu código aqui
  const colaboradora = data.employees.find((person) => person.id === id);
  const primeiroAnimal = colaboradora.responsibleFor[0];
  const verificandoPrimeiroAnimal = data.species.find((animal) => animal.id === primeiroAnimal);
  const animalMaisVelho = verificandoPrimeiroAnimal.residents.sort((a, b) => b.age - a.age); // ordem descrescente
  return [animalMaisVelho[0].name, animalMaisVelho[0].sex, animalMaisVelho[0].age];
}

module.exports = getOldestFromFirstSpecies;
