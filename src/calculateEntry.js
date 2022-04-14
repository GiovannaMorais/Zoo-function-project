const data = require('../data/zoo_data');

// const entrants = [
//   { name: 'Lara Carvalho', age: 5 },
//   { name: 'Frederico Moreira', age: 5 },
//   { name: 'Pedro Henrique Carvalho', age: 5 },
//   { name: 'Maria Costa', age: 18 },
//   { name: 'Núbia Souza', age: 18 },
//   { name: 'Carlos Nogueira', age: 50 },
// ];
function countEntrants(entrants) {
  // seu código aqui
  const crianças = entrants.filter((criança) => criança.age < 18).length;
  const adultos = entrants.filter(
    (adulto) => adulto.age >= 18 && adulto.age < 50,
  ).length;
  const senhores = entrants.filter((senhor) => senhor.age >= 50).length;
  const visitantes = { child: crianças, adult: adultos, senior: senhores };
  return visitantes;
}

function calculateEntry(entrants) {
  if (entrants === undefined || Object.keys(entrants).length === 0) return 0;
  // seu código aqui
  const pessoasClientes = countEntrants(entrants);
  const preço = data.prices;

  const valueChild = pessoasClientes.child * preço.child;
  const valueAdult = pessoasClientes.adult * preço.adult;
  const valueSenior = pessoasClientes.senior * preço.senior;

  return valueChild + valueAdult + valueSenior;
}

module.exports = { calculateEntry, countEntrants };
