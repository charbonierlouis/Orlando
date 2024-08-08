import { Parc } from '@/data';
import { useQuery } from 'react-query';
import axios from 'axios';

export interface ApiResponseQueueTimeRide {
  id: number;
  name: string;
  is_open: boolean;
  wait_time: number;
  last_updated: string;
}

export interface ApiResponseQueueTime {
  rides: ApiResponseQueueTimeRide[];
  lands: {
    id: number;
    name: string;
    rides: ApiResponseQueueTimeRide[];
  }[];
}

export const useWaitingTime = (parc?: Parc) => {
  return useQuery<ApiResponseQueueTime>({
    queryKey: ['waiting-time', parc?.id],
    queryFn: () =>
      fetch(
        `https://queue-times.com/parks/${parc?.id}/queue_times.json`
      ).then((res) => res.json()),
    enabled: !!parc?.id,
  });
};
