import { Attraction, Lane } from '@/data';
import { useMemo } from 'react';
import { ReservationPickDate } from './reservation-pick-date';

interface Props {
  attractions?: Attraction[];
  lane: Lane;
  value?: Attraction['name'];
  time?: string;
  onChange?: (attraction: Attraction['name'], time?: string) => void;
}

export const ReservationSelect = ({
  attractions,
  lane,
  value,
  time,
  onChange,
}: Props) => {
  const title = useMemo(() => {
    switch (lane) {
      case Lane.Multi_PASS_1:
        return 'Multipass Catégorie 1';
      case Lane.Multi_PASS_2:
        return 'Multipass Catégorie 2';
      case Lane.Single_PASS:
        return 'Singlepass';
      case Lane.Virtual_Lane:
        return 'Virtual Lane';
      default:
        return 'Classique';
    }
  }, [lane]);

  const handleChange = (e: string, time?: string) => {
    onChange?.(e, time);
  };

  if (!attractions?.length) {
    return null;
  }

  return (
    <div className='flex flex-col gap-3 w-full items-center bg-base-100/30 py-4 rounded-xl'>
      <h3>{title}</h3>
      <select
        className='select select-bordered w-full max-w-xs text-black font-bold'
        onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
          handleChange(e.target.value);
        }}
        value={value}
      >
        <option disabled selected>
          {title}
        </option>
        {attractions?.map((attraction) => (
          <option key={attraction.id}>{attraction?.name}</option>
        ))}
      </select>

      {!!value && (
        <ReservationPickDate
          value={time}
          onChange={(time) => {
            handleChange(value, time);
          }}
        />
      )}
    </div>
  );
};
