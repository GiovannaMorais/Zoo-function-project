const data = require('../data/zoo_data');

// localização = pelo filter peguei as localizações que retornava true para a minha condição
// depois crie com o map um array como os nomes das regiões que retornaram true na condição
// dps pedi para retornar me resultando em algo assim:
// const expected = {
//   NE: ['lions', 'giraffes'],
//   NW: ['tigers', 'bears', 'elephants'],
//   SE: ['penguins', 'otters'],
//   SW: ['frogs', 'snakes'],
// };

const localização = () => {
  const animalsLocation = {
    NE: data.species
      .filter((lugar) => lugar.location === 'NE')
      .map((animal) => animal.name),
    NW: data.species
      .filter((lugar) => lugar.location === 'NW')
      .map((animal) => animal.name),
    SE: data.species
      .filter((lugar) => lugar.location === 'SE')
      .map((animal) => animal.name),
    SW: data.species
      .filter((lugar) => lugar.location === 'SW')
      .map((animal) => animal.name),
  };
  return animalsLocation;
};

// Função animalsMesmoSex com dois parametros genre e specie
// chamei o residents pelo segundo parametro para puxar as especies existentes
// na propriedade residents(onde está todos os animais da mesma especie)
// fiz o reduce para abstrair o sex dos animais
// se tivesse o mesmo 'sex' que o animal que eu estava comparando pelo reduce
// eu 'puxava/add' no acumulador (acc) o nome desse animal do 'sex' especificado.
// retornando somente os nomes de animais macho/fêmea.
// caso contrario se n tivesse um 'sex' definido eu 'puxava/add' no acumulador (acc) o nome desse animal.

const animalsMesmoSex = (genre, specie) =>
  specie.residents.reduce((acc, animal) => {
    if (genre.sex === animal.sex) {
      acc.push(animal.name);
    }
    if (!genre.sex) {
      acc.push(animal.name);
    }
    return acc;
  }, []);

// na função getAnimalMap eu considerei os pontos que seria avaliados:

// * Sem parâmetros, retorna animais categorizados por localização;
// * Sem a opção includeNames especificada, retorna animais categorizados por localização;
// * Com a opção includeNames: true especificada, retorna nomes de animais;
// * Com a opção sorted: true especificada, retorna nomes de animais ordenados;
// * Com a opção sex: 'female' ou sex: 'male' especificada, retorna somente nomes de animais macho/fêmea;
// * Com a opção sex: 'female' ou sex: 'male' especificada e a opção sorted: true especificada, retorna somente nomes de animais macho/fêmea com os nomes dos animais ordenados;

// primeira coisa eu inverti o includeNames,sorted,sex.Colocando falso para
// dps trazé-los da forma que o requisito pede; pq pede que ocorresse determinada
// ação quando ambos tivessem true; para eu poder trazer isso comecei com o oposto.
// pelo reduce na const animals puxei o obj de species para fazer um loop nele
// logo apos fiz as condições pedidas no requisito
// includeNames: true => retorna o nome dos animais que foi determinada na função
// animalsMesmoSex, chamando esta funçao no arrayAnimais(nesta funçao alem de retorna nomes,verifica se o 'sex' está determinado)
// com 2 parametros o options e animal
// options me referindo ao obj chamado na função getAnimalMap, e o animal como se referindo no reduce
// como o animal verificado a cada loop feito pelo reduce,
// depois ordernei como pedido caso fosse sorted: true
// caso passasse pelo dois if iria retorna ambos true, iria retorna um obj como
// localização de cada bicho como propriedade e dentro dele ter outras duas propriedades
// como a especie do animal indicada pelo animal.name dentro dele um array contendo
// os nomes dos animais com os 'sex' definidos
// no else, caso fosse sem parametros eu retornaria os animais categorizados por localização (caso da minha primeira função);

function getAnimalMap(
  options = { includeNames: false, sorted: false, sex: false },
) {
  const animals = data.species.reduce(
    (acc, animal) => {
      if (options.includeNames === true) {
        const arrayAnimais = animalsMesmoSex(options, animal);
        if (options.sorted === true) {
          arrayAnimais.sort();
        }
        acc[animal.location].push({ [animal.name]: arrayAnimais });
      } else {
        return localização();
      }
      return acc;
    },
    { NE: [], NW: [], SE: [], SW: [] },
  );
  return animals;
}
module.exports = getAnimalMap;
