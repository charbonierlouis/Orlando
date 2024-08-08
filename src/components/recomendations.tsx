import { Rate } from '@/data';
import { usePlaning } from '@/hooks/usePlaning';
import { findLandForAttraction } from '@/utils';
import { useMemo } from 'react';
import { Ping } from './ping';
import { WaitingTime } from './waiting-time';
import { useRecomendation } from '@/hooks/useRecomendation';

export const Recommendations = () => {
  const { nextAttraction } = usePlaning(1);
  const { recomendations } = useRecomendation(nextAttraction);

  if (!recomendations) {
    return null;
  }

  return (
    <div className='flex flex-col gap-3 bg-white/30 p-4 rounded-lg'>
      <div className='text-lg font-bold'>Recommendations:</div>

      {recomendations?.map((recomendation) => {
        return (
          <div key={recomendation.attraction.id} className='flex gap-3'>
            <Ping attraction={recomendation.attraction} />
            {recomendation.attraction.name}
            <WaitingTime attraction={recomendation.attraction} />
          </div>
        );
      })}
    </div>
  );
};
