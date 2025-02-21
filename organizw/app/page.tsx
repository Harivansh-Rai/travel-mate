"use client";

import { useState, useEffect } from "react";
import { CalendarIcon } from "lucide-react";
import { Calendar } from "@/app/components/ui/calender";
import { Popover, PopoverContent, PopoverTrigger } from "@/app/components/ui/popover";
import { Button } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/input";
import Link from "next/link";

export default function BookingCard() {
  const [fromStation, setFromStation] = useState("New Delhi");
  const [toStation, setToStation] = useState("Kanpur");
  const [date, setDate] = useState(new Date());

  return (
    <div className="w-full max-w-4xl rounded-xl shadow-lg p-6 bg-white text-black">
      {/* Title */}
      <h2 className="text-xl font-semibold mb-6">🚆 Book Train Tickets</h2>

      <div className="grid grid-cols-4 gap-4 items-center">
        {/* From Station */}
        <div>
          <label className="text-sm font-medium">From</label>
          <Input
            value={fromStation}
            onChange={(e) => setFromStation(e.target.value)}
            placeholder="Enter departure city"
          />
          <span className="text-sm text-gray-500">NDLS, New Delhi Railway Station</span>
        </div>

        {/* To Station */}
        <div>
          <label className="text-sm font-medium">To</label>
          <Input
            value={toStation}
            onChange={(e) => setToStation(e.target.value)}
            placeholder="Enter destination city"
          />
          <span className="text-sm text-gray-500">CNB, Kanpur Central</span>
        </div>

        {/* Travel Date */}
        <div>
          <label className="text-sm font-medium">Travel Date</label>
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline" className="flex justify-between items-center w-full">
                {date.toDateString()} <CalendarIcon className="ml-2" />
              </Button>
            </PopoverTrigger>
            <PopoverContent>
              <Calendar mode="single" selected={date} onSelect={setDate} />
            </PopoverContent>
          </Popover>
          <span className="text-sm text-gray-500">{date.toLocaleDateString("en-US", { weekday: "long" })}</span>
        </div>

        {/* Class */}
        <div>
          <label className="text-sm font-medium">Class</label>
          <Input value="All" readOnly />
          <span className="text-sm text-gray-500">All Classes</span>
        </div>
      </div>

      {/* Search Button */}
      <div className="mt-6 flex justify-center">
        <Link href="/pages/trains" passHref>
          <Button className="px-6 py-3 text-lg font-semibold bg-blue-500 text-white">SEARCH</Button>
        </Link>
      </div>
    </div>
  );
}
