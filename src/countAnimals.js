const data = require('../data/zoo_data');

// Se nenhum argumento for passado,
//  retorna um objeto cujo o nome de cada espécie é uma chave desse objeto,
// e o total de animais dessa espécie é o seu valor;

function countAnimals(animal) {
  if (animal === undefined) {
    const nothing = {};
    data.species.forEach((animalAtual) => {
      nothing[animalAtual.name] = animalAtual.residents.length;
    });
    return nothing;
  }
  if (animal.sex === undefined) {
    return data.species.find(
      (animalAtual) => animalAtual.name === animal.specie,
    ).residents.length;
  }
  return data.species
    .find((animalAtual) => animalAtual.name === animal.specie)
    .residents.filter((animalAtual) => animalAtual.sex === animal.sex).length;
}

module.exports = countAnimals;
