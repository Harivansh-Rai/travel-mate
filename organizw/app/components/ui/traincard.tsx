import Card from "@/app/components/ui/card";

const TrainCard = () => {
  const train = {
    name: "Shram Shkti Exp",
    departure: "11:55 PM, 21 FEB",
    duration: "6h 25m",
    arrival: "6:20 AM, 22 FEB",
    from: "New Delhi",
    to: "Kanpur Central",
    classes: [
      { type: "1A", price: 1815, availability: "GNWL 8" },
      { type: "2A", price: 1500, availability: "AVAILABLE 12" },
      { type: "3A", price: 1200, availability: "GNWL 15" },
      { type: "3E", price: 1035, availability: "TQWL 22", isTatkal: true },
      { type: "SL", price: 720, availability: "GNWL 31" },
      { type: "Tatkal 3AC", price: 1600, availability: "AVAILABLE 5", isTatkal: true },
      { type: "Tatkal SL", price: 850, availability: "AVAILABLE 3", isTatkal: true },
    ],
  };

  return (
    <Card className="p-4 shadow-lg rounded-2xl bg-white dark:bg-gray-800">
      <div className="flex justify-between items-start">
        <div>
          <h2 className="text-xl font-semibold">{train.name}</h2>
          <p className="text-gray-500 dark:text-gray-400">
            {train.from} ➜ {train.to}
          </p>
          <p className="mt-2 text-sm text-blue-500 cursor-pointer hover:underline">
            View Route
          </p>
        </div>

        <div className="text-right">
          <p>{train.departure}</p>
          <p className="text-gray-500 dark:text-gray-400">{train.duration}</p>
          <p>{train.arrival}</p>
        </div>
      </div>

      {/* Scrollable Class Cards with Hidden Scrollbar */}
      <div className="mt-6 overflow-x-auto whitespace-nowrap flex space-x-4 no-scrollbar">
        {train.classes.map((item, index) => (
          <div
            key={index}
            className="min-w-[200px] p-4 border rounded-lg bg-gray-100 dark:bg-gray-700"
          >
            <p className="text-lg font-semibold">₹ {item.price}</p>
            <p className="text-sm">{item.type}</p>
            <p className="text-yellow-600 font-medium mt-1">
              {item.availability}
            </p>
            {item.isTatkal && (
              <span className="text-xs text-red-500">TATKAL</span>
            )}
          </div>
        ))}
      </div>
    </Card>
  );
};

export default TrainCard;
