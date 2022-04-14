const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  // seu código aqui
  const colaboradores = data.employees.find(
    (person) =>
      person.firstName === employeeName || person.lastName === employeeName,
  );
  if (employeeName === undefined) {
    return {};
  }
  return colaboradores;
}

module.exports = getEmployeeByName;
