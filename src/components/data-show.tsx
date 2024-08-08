import { Attraction, Rate, data } from '@/data';
import { findAttractionsByRate } from '@/utils';
import { Ping } from './ping';
import { WaitingTime } from './waiting-time';

export const DataShow = () => {
  const renderCard = (attraction: Attraction) => (
    <div className='flex flex-col gap-3'>
      <div key={attraction.id} className='flex gap-4'>
        <Ping attraction={attraction} />
        <div>{attraction.name}</div>
      </div>
      <div className='w-full flex justify-center'>
        <WaitingTime attraction={attraction} />
      </div>
    </div>
  );
  return (
    <div className='flex flex-col gap-8'>
      {data.parcs.map((parc) => (
        <div key={parc.id} className='collapse bg-white/30'>
          <input type='radio' name='my-accordion-1' defaultChecked />
          <div className='collapse-title text-xl font-bold font-medium'>
            {parc.name}
          </div>
          <div className='collapse-content'>
            <div className='flex flex-col gap-4'>
              <div className='flex flex-col gap-3'>
                {findAttractionsByRate(parc.name, Rate.A_FAIRE_ABSOLUMENT).map(
                  (attraction) => renderCard(attraction)
                )}
              </div>
            </div>
            <div className='divider'></div>

            <div className='flex flex-col gap-4'>
              <div className='flex flex-col gap-3'>
                {findAttractionsByRate(parc.name, Rate.A_FAIRE).map(
                  (attraction) => renderCard(attraction)
                )}
              </div>
            </div>
            <div className='divider'></div>

            <div className='flex flex-col gap-4'>
              <div className='flex flex-col gap-3'>
                {findAttractionsByRate(parc.name, Rate.SI_POSSIBLE).map(
                  (attraction) => renderCard(attraction)
                )}
              </div>
            </div>
            <div className='divider'></div>

            <div className='flex flex-col gap-4'>
              <div className='flex flex-col gap-3'>
                {findAttractionsByRate(parc.name, Rate.PAS_BESOIN).map(
                  (attraction) => renderCard(attraction)
                )}
              </div>
            </div>
            <div className='divider'></div>

            <div className='flex flex-col gap-4'>
              <div className='flex flex-col gap-3'>
                {findAttractionsByRate(parc.name, Rate.A_EVITER).map(
                  (attraction) => renderCard(attraction)
                )}
              </div>
            </div>
            <div className='divider'></div>
          </div>
        </div>
      ))}
    </div>
  );
};
