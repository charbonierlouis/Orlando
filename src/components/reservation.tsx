import { Lane, data } from "@/data";
import { useReservation } from "@/hooks/useReservation";
import { ReservationSelect } from "./reservation-select";

interface Props {
  dayNumber: number;
}

export const Reservation = ({ dayNumber }: Props) => {
  const {
    parcName,
    setParcName,
    attractionVirtualLane,
    attractionsMultiPass1,
    attractionsMultiPass2,
    attractionSinglePass,
    singlePass,
    setSinglePass,
    virtualLane,
    setVirtualLane,
    multiPass1,
    setMultiPass1,
    multiPass2Choice1,
    setMultiPass2Choice1,
    multiPass2Choice2,
    setMultiPass2Choice2
  } = useReservation(dayNumber);

  const handleParcChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setParcName(e.target.value);
  };

  return (
    <div className="w-full flex flex-col gap-8 items-center">
      <select
        className="select select-bordered w-full max-w-xs text-black font-bold"
        value={parcName}
        onChange={handleParcChange}
      >
        <option disabled selected>
          Parc
        </option>
        {data.parcs.map((parc) => (
          <option>{parc.name}</option>
        ))}
      </select>

      <ReservationSelect
        attractions={attractionSinglePass}
        lane={Lane.Single_PASS}
        value={singlePass?.attractionName}
        time={singlePass?.time}
        onChange={setSinglePass}
      />

      <ReservationSelect
        attractions={attractionVirtualLane}
        lane={Lane.Virtual_Lane}
        value={virtualLane?.attractionName}
        time={virtualLane?.time}
        onChange={setVirtualLane}
      />

      <ReservationSelect
        attractions={attractionsMultiPass1}
        lane={Lane.Multi_PASS_1}
        value={multiPass1?.attractionName}
        time={multiPass1?.time}
        onChange={setMultiPass1}
      />

      <ReservationSelect
        attractions={attractionsMultiPass2}
        lane={Lane.Multi_PASS_2}
        value={multiPass2Choice1?.attractionName}
        time={multiPass2Choice1?.time}
        onChange={setMultiPass2Choice1}
      />
       <ReservationSelect
        attractions={attractionsMultiPass2}
        lane={Lane.Multi_PASS_2}
        value={multiPass2Choice2?.attractionName}
        time={multiPass2Choice2?.time}
        onChange={setMultiPass2Choice2}
      />
    </div>
  );
};
