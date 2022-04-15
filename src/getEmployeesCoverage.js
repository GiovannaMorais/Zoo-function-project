const data = require('../data/zoo_data');

const acharPeloNomeOuSobrenome = (value) => {
  const funcinario = data.employees.find(
    (pessoa) =>
      pessoa.firstName === value.name
      || pessoa.lastName === value.name
      || pessoa.id === value.id,
  );
  return `${funcinario.firstName} ${funcinario.lastName}`;
};
console.log();

const acharPeloId = (value) => {
  const funcinario = data.employees.find(
    (pessoa) =>
      pessoa.id === value.id
      || pessoa.firstName === value.name
      || pessoa.lastName === value.name,
  );
  return `${funcinario.id}`;
};
const getSpecies = (value) => {
  const funcinario = data.employees.find(
    (person) =>
      person.firstName === value.name
      || person.lastName === value.name
      || person.id === value.id,
  );
  const responsabilidade = funcinario.responsibleFor;
  const porEspecie = data.species
    .filter((specie) => responsabilidade.some((id) => specie.id === id))
    .map((animal) => animal.name);
  return porEspecie;
};

const getLocation = (value) => {
  const funcinario = data.employees.find(
    (jovem) =>
      jovem.firstName === value.name
      || jovem.lastName === value.name
      || jovem.id === value.id,
  );
  const responsabilidade = funcinario.responsibleFor;
  const porLocal = data.species
    .filter((specie) => responsabilidade.some((id) => specie.id === id))
    .map((animal) => animal.location);
  return porLocal;
};

const objAllFuncionarios = () =>
  data.employees.map((valueInfo) => {
    const funcinarioInfo = {
      id: valueInfo.id,
      fullName: `${valueInfo.firstName} ${valueInfo.lastName}`,
      species: getSpecies(valueInfo),
      locations: getLocation(valueInfo),
    };
    return funcinarioInfo;
  });
const objFuncionario = (valueInfo) => ({
  id: acharPeloId(valueInfo),
  fullName: acharPeloNomeOuSobrenome(valueInfo),
  species: getSpecies(valueInfo),
  locations: getLocation(valueInfo),
});
function getEmployeesCoverage(valueInfo) {
  if (valueInfo === undefined) {
    return objAllFuncionarios();
  }
  const verificarSeTemErro = data.employees.some(
    (person) =>
      person.id === valueInfo.id
      || person.firstName === valueInfo.name
      || person.lastName === valueInfo.name,
  );
  if (!verificarSeTemErro) {
    throw new Error('Informações inválidas');
  }

  return objFuncionario(valueInfo);
}

module.exports = getEmployeesCoverage;
