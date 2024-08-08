import {
  findAttractionByName,
  findLandByName,
  findLandForAttraction,
} from '@/utils';
import { Reservation } from './useReservation';
import { useMemo } from 'react';
import { useAttractionWaitingTime } from './useAttractionWaitingTime';
import { Lane } from '@/data';

export const useRecomendation = (nextReservation?: Reservation) => {
  const attraction = useMemo(
    () => findAttractionByName(nextReservation?.attractionName ?? ''),
    [nextReservation?.attractionName]
  );

  const { waitingTimes, rides } = useAttractionWaitingTime(attraction);

  const land = useMemo(
    () => findLandForAttraction(nextReservation?.attractionName ?? ''),
    [nextReservation?.attractionName]
  );

  const nearbyLands = useMemo(() => {
    return land?.neerTo
      .map((landName) => findLandByName(landName))
      .filter((land) => !!land);
  }, [land]);

  const attractionWithWaitingTime = useMemo(() => {
    return land?.attractions?.map((attr) => ({
      attraction: attr,
      waiting: rides.find((ride) => ride.id === attr.id),
    }));
  }, [rides, land]);

  const nearbyAttractionsWithWaitingTime = useMemo(() => {
    return nearbyLands
      ?.flatMap((land) => land.attractions ?? [])
      .map((attr) => ({
        attraction: attr,
        waiting: rides.find((ride) => ride.id === attr.id),
      }));
  }, [nearbyLands, rides]);

  const nearbyRecomendations = useMemo(() => {
    return nearbyAttractionsWithWaitingTime
      ?.sort((a, b) => {
        if (!a.waiting) {
          return 1;
        }
        if (!b.waiting) {
          return -1;
        }
        return a.waiting.wait_time - b.waiting.wait_time;
      })
      .filter((attr) => attr.attraction.id !== attraction?.id)
      .filter((attr) => attr.waiting?.is_open)
      .filter((attr) => !attr.attraction.lane?.includes(Lane.Virtual_Lane));
  }, [nearbyAttractionsWithWaitingTime, attraction?.id]);

  const recomendations = useMemo(() => {
    const mergedrecommendations = [
      ...(attractionWithWaitingTime ?? []),
      ...(nearbyRecomendations ?? []),
    ];

    return mergedrecommendations
      ?.sort((a, b) => {
        if (!a.waiting) {
          return 1;
        }
        if (!b.waiting) {
          return -1;
        }
        return a.waiting.wait_time - b.waiting.wait_time;
      })
      .filter((attr) => attr.attraction.id !== attraction?.id)
      .filter((attr) => attr.waiting?.is_open)
      .filter((attr) => !attr.attraction.lane?.includes(Lane.Virtual_Lane));
  }, [attractionWithWaitingTime, nearbyRecomendations, attraction?.id]);

  return {
    attraction,
    land,
    recomendations,
  };
};
