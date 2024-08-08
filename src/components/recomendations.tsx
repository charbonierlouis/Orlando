import { Rate } from '@/data';
import { usePlaning } from '@/hooks/usePlaning';
import { findLandForAttraction } from '@/utils';
import { useMemo } from 'react';
import { Ping } from './ping';

export const Recommendations = () => {
  const { nextAttraction } = usePlaning(1);

  const land = useMemo(
    () => findLandForAttraction(nextAttraction?.attractionName ?? ''),
    [nextAttraction?.attractionName]
  );

  const sortedAttractions = useMemo(
    () =>
      land?.attractions
        ?.filter((attraction) => {
          return (
            attraction.rate === Rate.SI_POSSIBLE ||
            attraction.rate === Rate.PAS_BESOIN
          );
        })
        .slice(0, 3),
    [land]
  );

  if (!sortedAttractions) {
    return null;
  }

  return (
    <div className='flex flex-col gap-3 bg-white/30 p-4 rounded-lg'>
      <div className='text-lg font-bold'>Recommendations:</div>

      {sortedAttractions?.map((attraction) => {
        return (
          <div key={attraction.id} className='flex gap-3'>
            <Ping attraction={attraction} />
            {attraction.name}
          </div>
        );
      })}
    </div>
  );
};
