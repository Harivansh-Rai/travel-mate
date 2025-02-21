import TrainCard from "@/app/components/ui/traincard";
import DarkModeToggle from "@/app/components/ui/themetoggle";

const TrainPage = () => {
  return (
    <div className="min-h-screen p-8 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Train Details</h1>
        <DarkModeToggle />
      </div>

      {/* First Train Card */}
      <TrainCard
        trainName="Shatabdi Express"
        departureTime="6:10 AM, 21 FEB"
        arrivalTime="11:23 AM, 21 FEB"
        duration="5h 13m"
        route="New Delhi → Kanpur Central"
        fareOptions={[
          { type: "CC", fare: "₹1150", status: "TQWL 55", isTatkal: true },
          { type: "CC", fare: "₹840", status: "GNWL 53" },
          { type: "EA", fare: "₹1970", status: "GNWL 12" },
          { type: "EC", fare: "₹2080", status: "TQWL 7", isTatkal: true },
        ]}
      />

      {/* Second Train Card */}
      <TrainCard
        trainName="Ndls Cnb Sht"
        departureTime="3:40 PM, 21 FEB"
        arrivalTime="8:50 PM, 21 FEB"
        duration="5h 10m"
        route="New Delhi → Kanpur Central"
        fareOptions={[
          { type: "CC", fare: "₹1115", status: "TQWL 9", isTatkal: true },
          { type: "CC", fare: "₹1055", status: "GNWL 44" },
          { type: "EC", fare: "₹2080", status: "TQWL 4", isTatkal: true },
          { type: "EC", fare: "₹2080", status: "GNWL 11" },
        ]}
      />
    </div>
  );
};

export default TrainPage;
