'use client';

import { Attraction } from '@/data';
import { useAttractionWaitingTime } from '@/hooks/useAttractionWaitingTime';

interface Props {
  attraction: Attraction;
}

export const WaitingTime = ({ attraction }: Props) => {
  const { waitingTime } = useAttractionWaitingTime(attraction);

  if (!waitingTime) {
    return;
  }

  return <div>{waitingTime.wait_time}</div>;
};
