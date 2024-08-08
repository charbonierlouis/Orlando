import { Rate, data } from "@/data";
import { findAttractionsByRate } from "@/utils";
import { Ping } from "./ping";

export const DataShow = () => {
  return (
    <div className="flex flex-col gap-8">
      {data.parcs.map((parc) => (
        <div className="collapse bg-white/30">
          <input type="radio" name="my-accordion-1" defaultChecked />
          <div className="collapse-title text-xl font-bold font-medium">
            {parc.name}
          </div>
          <div className="collapse-content">
            <div className="flex flex-col gap-4">
              <h2 className="font-bold">{Rate.A_FAIRE_ABSOLUMENT}: </h2>
              <div className="flex flex-col gap-3">
                {findAttractionsByRate(parc.name, Rate.A_FAIRE_ABSOLUMENT).map(
                  (attraction) => (
                    <div className="flex gap-4">
                      <div className="w-5 h-5 rounded-full bg-red-300 border border-red-500" />
                      <div>{attraction.name}</div>
                    </div>
                  )
                )}
              </div>
            </div>
            <div className="divider"></div>

            <div className="flex flex-col gap-4">
              <h2 className="font-bold">{Rate.A_FAIRE}: </h2>
              <div className="flex flex-col gap-3">
                {findAttractionsByRate(parc.name, Rate.A_FAIRE).map(
                  (attraction) => (
                    <div className="flex gap-4">
                      <Ping attraction={attraction} />
                      <div>{attraction.name}</div>
                    </div>
                  )
                )}
              </div>
            </div>
            <div className="divider"></div>

            <div className="flex flex-col gap-4">
              <h2 className="font-bold">{Rate.SI_POSSIBLE}: </h2>
              <div className="flex flex-col gap-3">
                {findAttractionsByRate(parc.name, Rate.SI_POSSIBLE).map(
                  (attraction) => (
                    <div className="flex gap-4">
                      <Ping attraction={attraction} />
                      <div>{attraction.name}</div>
                    </div>
                  )
                )}
              </div>
            </div>
            <div className="divider"></div>

            <div className="flex flex-col gap-4">
              <h2 className="font-bold">{Rate.PAS_BESOIN}: </h2>
              <div className="flex flex-col gap-3">
                {findAttractionsByRate(parc.name, Rate.PAS_BESOIN).map(
                  (attraction) => (
                    <div className="flex gap-4">
                      <Ping attraction={attraction} />
                      <div>{attraction.name}</div>
                    </div>
                  )
                )}
              </div>
            </div>
            <div className="divider"></div>

            <div className="flex flex-col gap-4">
              <h2 className="font-bold">{Rate.A_EVITER}: </h2>
              <div className="flex flex-col gap-3">
                {findAttractionsByRate(parc.name, Rate.A_EVITER).map(
                  (attraction) => (
                    <div className="flex gap-4">
                      <Ping attraction={attraction} />
                      <div>{attraction.name}</div>
                    </div>
                  )
                )}
              </div>
            </div>
            <div className="divider"></div>
          </div>
        </div>
      ))}
    </div>
  );
};
