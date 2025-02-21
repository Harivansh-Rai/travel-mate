import { useState } from "react";
import { Layout } from "lucide-react";
import Sidebar from "@/app/components/ui/sidebar";

interface TrainClass {
  type: string;
  isTatkal?: boolean;
  price: number;
  availability: string;
  tripGuarantee?: boolean;
  freeCancellation?: boolean;
}

interface Train {
  name: string;
  number: string;
  from: string;
  to: string;
  departureTime: string;
  arrivalTime: string;
  duration: string;
  date: string;
  classes: TrainClass[];
}

const TrainCard = ({ train }: { train: Train }) => (
  <div className="border rounded-2xl p-4 shadow-md mb-6 w-full">
    <div className="flex justify-between items-center mb-4">
      <h2 className="text-xl font-bold">{train.name}</h2>
      <span className="text-gray-600">#{train.number}</span>
    </div>

    <div className="flex justify-between mb-4">
      <div>
        <p className="font-semibold">{train.departureTime}, {train.date}</p>
        <p className="text-gray-600">{train.from}</p>
      </div>

      <p className="text-blue-600 font-medium">{train.duration}</p>

      <div>
        <p className="font-semibold">{train.arrivalTime}, {train.date}</p>
        <p className="text-gray-600">{train.to}</p>
      </div>
    </div>

    <div className="grid grid-cols-4 gap-4">
      {train.classes.map((cls, index) => (
        <div key={index} className="border rounded-lg p-2">
          <p className="font-medium">{cls.type} {cls.isTatkal && <span className="bg-orange-200 px-1 rounded">TATKAL</span>}</p>
          <p className="text-gray-700">₹ {cls.price}</p>
          <p className={cls.availability.includes("WL") ? "text-red-500" : "text-green-500"}>{cls.availability}</p>
          {cls.tripGuarantee && <p className="text-purple-500">🛡️ Trip Guarantee</p>}
          {cls.freeCancellation && <p className="text-gray-500">Free Cancellation</p>}
        </div>
      ))}
    </div>

    <a href="#" className="text-blue-600 mt-4 inline-block">Nearby dates ▼</a>
  </div>
);

export default function Home() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const trains = [
    {
      name: "Shatabdi Express",
      number: "12004",
      from: "New Delhi",
      to: "Kanpur Central",
      departureTime: "6:10 AM",
      arrivalTime: "11:23 AM",
      duration: "5h 13m",
      date: "21 FEB",
      classes: [
        { type: "CC", isTatkal: true, price: 1150, availability: "TQWL 55", freeCancellation: true },
        { type: "CC", price: 840, availability: "GNWL 53", tripGuarantee: true },
        { type: "EA", price: 1970, availability: "GNWL 12", tripGuarantee: true },
        { type: "EC", isTatkal: true, price: 1970, availability: "TQWL 7", freeCancellation: true },
      ],
    },
    {
      name: "Ndls Cnb Sht",
      number: "12034",
      from: "New Delhi",
      to: "Kanpur Central",
      departureTime: "3:40 PM",
      arrivalTime: "8:50 PM",
      duration: "5h 10m",
      date: "21 FEB",
      classes: [
        { type: "CC", isTatkal: true, price: 1115, availability: "TQWL 9", freeCancellation: true },
        { type: "CC", price: 1055, availability: "GNWL 44", tripGuarantee: true },
        { type: "EC", isTatkal: true, price: 2080, availability: "TQWL 4", freeCancellation: true },
        { type: "EC", price: 2080, availability: "GNWL 11", tripGuarantee: true },
      ],
    },
  ];

  return (
    <div className="flex">
      <Sidebar isCollapsed={isCollapsed} />

      <div className="flex-grow flex flex-col p-4">
        <h1 className="text-3xl font-bold mb-8">Train Search Results</h1>

        {trains.map((train, index) => (
          <TrainCard key={index} train={train} />
        ))}
      </div>
    </div>
  );
}
