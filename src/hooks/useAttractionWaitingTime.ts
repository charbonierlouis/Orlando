import { Attraction, Parc } from '@/data';
import { findParcForAttraction } from '@/utils';
import { useEffect, useMemo, useState } from 'react';
import { useWaitingTime } from './queries/use-waiting-time';

export const useAttractionWaitingTime = (attraction?: Attraction) => {
  const [parc, setParc] = useState<Parc | null>(null);

  const { data: waitingTimes } = useWaitingTime(parc!);

  const rides = useMemo(() => {
    return [
      ...(waitingTimes?.rides || []),
      ...(waitingTimes?.lands.flatMap((land) => land.rides) || []),
    ];
  }, [waitingTimes]);

  const waitingTime = useMemo(() => {
    return rides.find((ride) => ride.id === attraction?.id);
  }, [attraction?.id, rides]);

  useEffect(() => {
    const _parc = findParcForAttraction(attraction?.name ?? '');
    if (_parc) {
      setParc(_parc);
    }
  }, [attraction]);

  return {
    parc,
    waitingTimes,
    waitingTime,
    rides,
  };
};
