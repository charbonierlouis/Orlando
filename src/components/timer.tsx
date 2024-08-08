"use client";

import { Rate } from "@/data";
import { usePlaning } from "@/hooks/usePlaning";
import { findLandForAttraction, getTimeDifferenceBetweenTimes } from "@/utils";
import { useEffect, useMemo, useState } from "react";
import { Recommendations } from "./recomendations";

interface Props {
  dayNumber: number;
}

export const Timer = ({ dayNumber }: Props) => {
  const { nextAttraction } = usePlaning(1);

  const [timer, setTimer] = useState<{
    hours: number;
    minutes: number;
  } | null>(null);

  const nextAttractionTime = useMemo(() => {
    return nextAttraction?.time;
  }, [nextAttraction?.time]);

  const nextAttractionLand = useMemo(() => {
    if (!nextAttraction?.attractionName) {
      return;
    }

    return findLandForAttraction(nextAttraction.attractionName);
  }, [nextAttraction?.attractionName]);

  const colorClass = useMemo(() => {
    if (!timer) {
      return "bg-white/30";
    }
    if (timer.hours <= 0 && timer.minutes < 10) {
      return "text-red-500 bg-red-100";
    }
    if (timer.hours <= 0 && timer.minutes < 30) {
      return "text-orange-500 bg-orange-100";
    }

    if (timer.hours <= 0) {
      return "text-yellow-500 bg-yellow-100";
    }

    return "text-green-500 bg-green-100";
  }, [timer]);

  const setTimerTime = () => {
    if (!nextAttractionTime) {
      return;
    }

    const now = new Date();
    const nowString = now.getHours() + ":" + now.getMinutes();
    const diff = getTimeDifferenceBetweenTimes(nextAttractionTime, nowString);
    setTimer({
      hours: diff.hours,
      minutes: diff.minutes,
    });
  };

  useEffect(() => {
    if (!nextAttractionTime) {
      return;
    }

    setTimerTime();

    const interval = setInterval(() => {
      setTimerTime();
    }, 10000);

    return () => {
      clearInterval(interval);
    };
  }, [nextAttractionTime]);

  const renderTimer = () => {
    if (!timer) {
      return;
    }

    if (timer.hours > 0) {
      return (
        <div className="text-4xl font-bold uppercase">{`${timer.hours}h ${timer.minutes}m`}</div>
      );
    }

    return (
      <div className="text-4xl font-bold uppercase">{`${timer.minutes}m`}</div>
    );
  };

  const renderNextAttraction = () => {
    if (!nextAttraction) {
      return;
    }
    return (
      <div className="font-semibold text-xl">
        {nextAttraction.attractionName}
      </div>
    );
  };

  const renderLand = () => {
    if (!nextAttractionLand) {
      return;
    }

    return (
      <div className="font-semibold text-lg">{nextAttractionLand.name}</div>
    );
  };

  if (!timer) {
    return;
  }

  return (
    <div className="flex flex-col gap-6">
      <div
        className={`w-full flex flex-col justify-center items-center gap-6 text-center py-8 rounded-xl ${colorClass}`}
      >
        {renderNextAttraction()}
        {renderTimer()}
        {renderLand()}
      </div>
      <Recommendations />
    </div>
  );
};
