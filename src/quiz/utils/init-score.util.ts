import { Dimension } from 'src/common/enum/dimensions.enum';

export const initDimensionScore = (): Record<Dimension, number> => {
  return Object.values(Dimension).reduce(
    (acc, dim) => {
      acc[dim] = 0;
      return acc;
    },
    {} as Record<Dimension, number>,
  );
};
