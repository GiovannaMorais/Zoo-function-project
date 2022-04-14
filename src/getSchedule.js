const data = require('../data/zoo_data');

// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/includes

const verificaAnimaisNosDias = (dia) => {
  const animaisDia = data.species.filter((animal) =>
    animal.availability.includes(dia));
  const fullAnimalsName = animaisDia.map((animal) => animal.name);
  // console.log(fullAnimalsName);
  return fullAnimalsName;
};

const dias = Object.keys(data.hours);
// const horas = Object.values(data.hours);

const offParameters = () => {
  const mensagemOffParameters = {};
  dias.forEach((dia) => {
    if (dia !== 'Monday') {
      mensagemOffParameters[dia] = {
        officeHour: `Open from ${data.hours[dia].open}am until ${data.hours[dia].close}pm`,
        exhibition: verificaAnimaisNosDias(dia),
      };
    }
    if (dia === 'Monday') {
      mensagemOffParameters[dia] = {
        officeHour: 'CLOSED',
        exhibition: 'The zoo will be closed!',
      };
    }
  });
  return mensagemOffParameters;
};

const onParameters = (dia) => {
  const mensagemOnParameters = {};
  if (dia !== 'Monday') {
    mensagemOnParameters[dia] = {
      officeHour: `Open from ${data.hours[dia].open}am until ${data.hours[dia].close}pm`,
      exhibition: verificaAnimaisNosDias(dia),
    };
  }
  if (dia === 'Monday') {
    mensagemOnParameters[dia] = {
      officeHour: 'CLOSED',
      exhibition: 'The zoo will be closed!',
    };
  }
  return mensagemOnParameters;
};

const allAnimalsName = data.species.map((animal) => animal.name);

const animalPassadoComoParametro = (animal) => {
  const selectedAnimal = data.species.find((bicho) => bicho.name === animal);
  return selectedAnimal.availability;
};

function getSchedule(scheduleTarget) {
  // seu código aqui
  if (allAnimalsName.includes(scheduleTarget)) {
    return animalPassadoComoParametro(scheduleTarget);
  }
  if (dias.includes(scheduleTarget)) {
    return onParameters(scheduleTarget);
  }
  return offParameters();
}

module.exports = getSchedule;
