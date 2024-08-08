'use client';

import { Timer } from "@/components/timer";
import Link from "next/link";
import { useState } from "react";
import { FaAngleRight } from "react-icons/fa6";

export default function Home() {
  const [dayNumber, setDayNumber] = useState(1);

  const handleDayChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setDayNumber(parseInt(e.target.value));
  };
  return (
    <div className="flex flex-col gap-4">
      <select
        value={dayNumber}
        className="select w-full text-blue-800 font-bold"
        onChange={handleDayChange}
      >
        <option value={1}>Jour 1</option>
        <option value={2}>Jour 2</option>
        <option value={3}>Jour 3</option>
        <option value={4}>Jour 4</option>
        <option value={5}>Jour 5</option>
      </select>
  
      <div className="w-full">
        <Timer dayNumber={dayNumber} />
      </div>
      <Link href="/data">
        <div className="w-full bg-white rounded-md p-4 text-black font-bold shadow-md flex justify-between">
          <div>Attractions</div>
          <FaAngleRight />
        </div>
      </Link>

      <Link href="/reservations">
        <div className="w-full bg-white rounded-md p-4 text-black font-bold shadow-md flex justify-between">
          <div>Réservations</div>
          <FaAngleRight />
        </div>
      </Link>

      <Link href="/planing">
        <div className="w-full bg-white rounded-md p-4 text-black font-bold shadow-md flex justify-between">
          <div>Planing</div>
          <FaAngleRight />
        </div>
      </Link>
    </div>
  );
}
