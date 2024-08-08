"use client";
import { useCallback, useMemo } from "react";
import { Reservation, useReservation } from "./useReservation";

export const usePlaning = (dayNumber: number) => {
  const { reservationData } = useReservation(dayNumber);

  const dayReservationData = useMemo(() => {
    return reservationData[dayNumber];
  }, [reservationData,dayNumber]);

  const planing = useMemo(() => {
    const res: Reservation[] = [];

    if (!dayReservationData) {
      return res;
    }

    if (dayReservationData.virtualLane) {
      res.push(dayReservationData.virtualLane);
    }

    if (dayReservationData.singlePass) {
      res.push(dayReservationData.singlePass);
    }

    if (dayReservationData.multiPass1) {
      res.push(dayReservationData.multiPass1);
    }

    if (dayReservationData.multiPass2Choice1) {
      res.push(dayReservationData.multiPass2Choice1);
    }

    if (dayReservationData.multiPass2Choice2) {
      res.push(dayReservationData.multiPass2Choice2);
    }

    res.filter((r) => !!r.time);

    return res.sort((a, b) => {
      return (a.time ?? "").localeCompare(b.time ?? "");
    });
  }, [dayReservationData]);

  const nextAttraction = useMemo(() => {
    const now = new Date().getHours() + ":" + new Date().getMinutes();
    const next = planing.find((r) => {
      return (r.time ?? "").localeCompare(now) > 0;
    });

    return next;
  }, [planing]);

  return {
    planing,
    nextAttraction,
  };
};
