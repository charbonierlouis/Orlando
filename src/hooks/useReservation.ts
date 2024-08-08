'use client'

import { Attraction, Lane, data } from "@/data";
import { useEffect, useMemo, useState } from "react";

type DayNumber = number;

export interface Reservation {
  attractionName: Attraction["name"];
  time?: string;
}

export type ReservationData = Record<
  DayNumber,
  {
    parcName: string;
    singlePass?:Reservation;
    virtualLane?: Reservation;
    multiPass1?: Reservation;
    multiPass2Choice1?: Reservation;
    multiPass2Choice2?: Reservation;
  }
>;

export const useReservation = (dayNumber: DayNumber) => {
  const [reservationData, setReservationData] = useState<ReservationData>({});

  const haveReservation = useMemo(() => {
    return !!reservationData[dayNumber];
  }, [reservationData, dayNumber]);

  const parcName = useMemo(() => {
    return reservationData[dayNumber]?.parcName;
  }, [reservationData, dayNumber]);

  const parc = useMemo(() => {
    return data.parcs.find((parc) => parc.name === parcName);
  }, [parcName]);

  const attractions = useMemo(() => {
    return parc?.lands.flatMap((land) => land.attractions);
  }, [parc?.lands]);

  const attractionsMultiPass1 = useMemo(() => {
    return attractions
      ?.filter((attraction) => attraction?.lane?.includes(Lane.Multi_PASS_1))
      .filter((attraction) => !!attraction) as Attraction[] | undefined;
  }, [attractions]);

  const attractionsMultiPass2 = useMemo(() => {
    return attractions
      ?.filter((attraction) => attraction?.lane?.includes(Lane.Multi_PASS_2))
      .filter((attraction) => !!attraction) as Attraction[] | undefined;
  }, [attractions]);

  const attractionVirtualLane = useMemo(() => {
    return attractions
      ?.filter((attraction) => attraction?.lane?.includes(Lane.Virtual_Lane))
      .filter((attraction) => !!attraction) as Attraction[] | undefined;
  }, [attractions]);

  const attractionSinglePass = useMemo(() => {
    return attractions
      ?.filter((attraction) => attraction?.lane?.includes(Lane.Single_PASS))
      .filter((attraction) => !!attraction) as Attraction[] | undefined;
  }, [attractions]);

  const singlePass = useMemo(() => {
    return reservationData[dayNumber]?.singlePass;
  }, [reservationData, dayNumber]);

  const virtualLane = useMemo(() => {
    return reservationData[dayNumber]?.virtualLane;
  }, [reservationData, dayNumber]);

  const multiPass1 = useMemo(() => {
    return reservationData[dayNumber]?.multiPass1;
  }, [reservationData, dayNumber]);

  const multiPass2Choice1 = useMemo(() => {
    return reservationData[dayNumber]?.multiPass2Choice1;
  }, [reservationData, dayNumber]);

  const multiPass2Choice2 = useMemo(() => {
    return reservationData[dayNumber]?.multiPass2Choice2;
  }, [reservationData, dayNumber]);

  const setParcName = (parcName: string) => {
    const reservation: ReservationData = {
      ...reservationData,
      [dayNumber]: {
        parcName,
      },
    };

    setReservationData(reservation);
  };

  const setSinglePass = (attractionName: Attraction["name"], time?: string) => {
    const reservation: ReservationData = {
      ...reservationData,
      [dayNumber]: {
        ...reservationData[dayNumber],
        singlePass: {
          attractionName,
          time,
        },
      },
    };

    setReservationData(reservation);
  };

  const setVirtualLane = (attractionName: Attraction["name"], time?: string) => {
    const reservation: ReservationData = {
      ...reservationData,
      [dayNumber]: {
        ...reservationData[dayNumber],
        virtualLane: {
          attractionName,
          time
        },
      },
    };

    setReservationData(reservation);
  };

  const setMultiPass1 = (attractionName: Attraction["name"], time?: string) => {
    const reservation: ReservationData = {
      ...reservationData,
      [dayNumber]: {
        ...reservationData[dayNumber],
        multiPass1: {
          attractionName,
          time
        },
      },
    };

    setReservationData(reservation);
  }

  const setMultiPass2Choice1 = (attractionName: Attraction["name"], time?: string) => {
    const reservation: ReservationData = {
      ...reservationData,
      [dayNumber]: {
        ...reservationData[dayNumber],
        multiPass2Choice1: {
          attractionName,
          time
        },
      },
    };

    setReservationData(reservation);
  }

  const setMultiPass2Choice2 = (attractionName: Attraction["name"], time?: string) => {
    const reservation: ReservationData = {
      ...reservationData,
      [dayNumber]: {
        ...reservationData[dayNumber],
        multiPass2Choice2: {
          attractionName,
          time
        },
      },
    };

    setReservationData(reservation);
  }

  useEffect(() => {
    const localStorageData = localStorage.getItem("reservationData");

    if (localStorageData) {
      setReservationData(JSON.parse(localStorageData));
    }
  }, []);

  useEffect(() => {
    if (!!Object.keys(reservationData).length) {
      localStorage.setItem("reservationData", JSON.stringify(reservationData));
    }
  }, [reservationData]);

  return {
    reservationData,
    haveReservation,
    parcName,
    setParcName,
    attractionsMultiPass1,
    attractionsMultiPass2,
    attractionVirtualLane,
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
    setMultiPass2Choice2,
  };
};
