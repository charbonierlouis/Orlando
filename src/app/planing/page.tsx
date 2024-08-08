'use client';
import { WaitingTime } from '@/components/waiting-time';
import { usePlaning } from '@/hooks/usePlaning';
import {
  findAttractionByName,
  findLandForAttraction,
  getTimeDifference,
  getTimeDifferenceBetweenTimes,
} from '@/utils';
import { useMemo, useState } from 'react';

export default function PlaningPage() {
  const { planing } = usePlaning(1);
  const [dayNumber, setDayNumber] = useState(1);

  const handleDayChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setDayNumber(parseInt(e.target.value));
  };

  const getTimeColor = (time: string) => {
    const diff = getTimeDifference(time);

    if (diff.hours > 1) {
      return 'text-gray-500 bg-gray-300 border-gray-500';
    }

    if (diff.hours > 0) {
      return 'text-red-500 bg-red-300 border-red-500';
    }

    if (diff.hours > -1) {
      return 'text-orange-500 bg-orange-300 border-orange-500';
    }

    if (diff.hours > -2) {
      return 'text-yellow-500 bg-yellow-300 border-yellow-500';
    }

    return 'text-green-500 bg-green-300 border-green-500';
  };

  const renderAlert = (idx: number) => {
    if (idx === planing.length - 1) {
      return;
    }

    const diff = getTimeDifferenceBetweenTimes(
      planing[idx].time!,
      planing[idx + 1].time!
    );

    if (diff.totalMinutes > -30) {
      return (
        <div className='flex gap-2 items-center w-full bg-red-300 border border-red-800 text-red-800 px-3 py-2 rounded-md font-bold'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-6 w-6 shrink-0 stroke-current'
            fill='none'
            viewBox='0 0 24 24'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z'
            />
          </svg>
          Vous avez moins de 30 minutes pour vous rendre à votre prochaine
          attraction
        </div>
      );
    }

    const land = findLandForAttraction(planing[idx].attractionName);
    const nextLand = findLandForAttraction(planing[idx + 1].attractionName);

    if (diff.totalMinutes > -60 && land !== nextLand) {
      return (
        <div className='flex gap-2 items-center w-full bg-orange-300 border border-orange-800 text-orange-800 px-3 py-2 rounded-md font-bold'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-6 w-6 shrink-0 stroke-current'
            fill='none'
            viewBox='0 0 24 24'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z'
            />
          </svg>
          Vous avez moins d'une heure pour vous rendre à votre prochaine
          attraction
        </div>
      );
    }
  };

  return (
    <div className='flex flex-col gap-4'>
      <select
        value={dayNumber}
        className='select w-full text-blue-800 font-bold'
        onChange={handleDayChange}
      >
        <option value={1}>Jour 1</option>
        <option value={2}>Jour 2</option>
        <option value={3}>Jour 3</option>
        <option value={4}>Jour 4</option>
        <option value={5}>Jour 5</option>
      </select>

      {planing.map((reservation, idx) => {
        if (!reservation.time) {
          return;
        }

        const attraction = findAttractionByName(reservation.attractionName);

        return (
          <div key={idx} className='flex flex-col gap-4'>
            <div className='bg-white/30 p-4 rounded-xl flex flex-col gap-4'>
              <div className='text-xl font-bold'>
                {reservation.attractionName}
              </div>

              <div className='flex gap-3'>
                {reservation.time && (
                  <div
                    className={`border border-2 px-1 rounded-md w-fit font-bold ${getTimeColor(
                      reservation.time
                    )}`}
                  >
                    {reservation.time}
                  </div>
                )}

                <div className='border border-2 px-1 rounded-md w-fit font-bold'>
                  {findLandForAttraction(reservation.attractionName)?.name}
                </div>

                {!!attraction && (
                  <WaitingTime
                    attraction={attraction}
                  />
                )}
              </div>
            </div>

            {renderAlert(idx)}
          </div>
        );
      })}
    </div>
  );
}
