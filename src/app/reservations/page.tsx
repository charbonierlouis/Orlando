"use client";

import { Reservation } from "@/components/reservation";
import { useState } from "react";

export default function ReservationsPage() {
  const [dayNumber, setDayNumber] = useState<number>(1);

  const handleDayChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setDayNumber(parseInt(e.target.value));
  };

  return (
    <div className="flex flex-col items-center gap-6">
      <select
        value={dayNumber}
        className="select select-primary w-full max-w-xs text-blue-800 font-bold"
        onChange={handleDayChange}
      >
        <option value={1}>Jour 1</option>
        <option value={2}>Jour 2</option>
        <option value={3}>Jour 3</option>
        <option value={4}>Jour 4</option>
        <option value={5}>Jour 5</option>
      </select>
      <Reservation dayNumber={dayNumber} />
    </div>
  );
}
