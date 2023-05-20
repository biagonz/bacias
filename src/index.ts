import { BACIAS, TBacia, TBaciaFiltered } from './bacias';
import orderBy from 'lodash/orderBy';

const filterBacias = (bacias: TBacia[], cod: string): TBaciaFiltered[] => {
  const filtered = bacias
    .filter((bacia) => {
      if (bacia.properties.cobacia.includes(cod)) {
        return {
          codigo: bacia.properties.cobacia,
          vazao: bacia.properties.Q_,
        };
      }
    })
    .map((bacia) => ({
      codigo: Number(bacia.properties.cobacia),
      vazao: bacia.properties.Q_,
    }));

  const ordered = orderBy(filtered, ['codigo', 'vazao'], ['asc', 'asc']);
  console.log(ordered);
  return ordered;
};

const sumBacias = (bacias: TBaciaFiltered[]): number => {
  let sum = 0;

  bacias.forEach((bacia) => {
    sum += bacia.vazao;
  });

  return sum;
};

const array = filterBacias(BACIAS, '');
console.log(sumBacias(array));
