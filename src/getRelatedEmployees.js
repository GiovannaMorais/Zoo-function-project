const data = require('../data/zoo_data');

function isManager(id) {
  // seu código aqui
  const colaboradora = data.employees.some((person) => person.managers.includes(id));
  // return colaboradora;
  return colaboradora;
}

function getRelatedEmployees(managerId) {
  // seu código aqui
  if (isManager(managerId) === false) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
  const listaDeColaboradores = data.employees.filter(
    (persons) => persons.managers.includes(managerId),
  );
  const fullName = listaDeColaboradores.map(
    (persons) => `${persons.firstName} ${persons.lastName}`,
  );
  return fullName;
}

module.exports = { isManager, getRelatedEmployees };
