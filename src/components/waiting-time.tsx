'use client';

import { Attraction, Lane } from '@/data';
import { useAttractionWaitingTime } from '@/hooks/useAttractionWaitingTime';
import { useMemo } from 'react';

interface Props {
  attraction: Attraction;
}

export const WaitingTime = ({ attraction }: Props) => {
  const { waitingTime } = useAttractionWaitingTime(attraction);
  const base = 'px-2 rounded-xl w-fit';

  const styles = useMemo(() => {
    if (!waitingTime) {
      return `${base} bg-gray-200 border border-gray-500 text-gray-500`;
    }

    if (waitingTime.wait_time < 10) {
      return `${base} bg-green-200 border border-green-500 text-green-500`;
    }

    if (waitingTime.wait_time < 20) {
      return `${base} bg-yellow-200 border border-yellow-500 text-yellow-500`;
    }

    if (waitingTime.wait_time < 30) {
      return `${base} bg-orange-200 border border-orange-500 text-orange-500`;
    }

    return `${base} bg-red-200 border border-red-500 text-red-500`;
  }, [waitingTime]);

  if (!waitingTime) {
    return;
  }

  if (!waitingTime.is_open) {
    return (
      <div
        className={`${base} bg-gray-200 border border-gray-500 text-gray-500`}
      >
        Closed
      </div>
    );
  }

  if (attraction.lane?.includes(Lane.Virtual_Lane)) {
    return (
      <div
        className={`${base} bg-gray-200 border border-gray-500 text-gray-500`}
      >
        Virtual
      </div>
    );
  }

  return <div className={styles}>{waitingTime.wait_time}min</div>;
};
