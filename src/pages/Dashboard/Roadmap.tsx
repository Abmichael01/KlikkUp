import React from "react";
import devious from "@/assets/images/devious.png";
import CircleWave from "@/components/CircleWave";
import { MapPin } from "lucide-react";
import { cn } from "@/lib/utils";

const roadmaps = [
  { title: "Launch of The KlikkUp points farming", completed: true },
  { title: "Launch of referral program", completed: false },
  { title: "Social quest", completed: false },
  { title: "Load testing", completed: false },
  { title: "Building community", completed: false },
  { title: "5,000 Activations", completed: false },
  { title: "10,000 Activations", completed: false },
  { title: "50,000 Activations", completed: false },
  { title: "100,000 Activations", completed: false },
  { title: "Daily rewards", completed: false },
  { title: "Building of initial project", completed: false },
  { title: "Test running the initial project", completed: false },
  { title: "1,000,000 Activations", completed: false },
  { title: "Eligibility checking", completed: false },
  { title: "Conversion of points to $Coins", completed: false },
  { title: "Social launch of the initial project", completed: false },
  { title: "End of KlikkUp farming program", completed: false },
  { title: "Journey to the initial project", completed: false },
  { title: "Launching on App Store", completed: false },
  { title: "Initial project Airdrop and Listing Q3 2030", completed: false },
];

const Roadmap: React.FC = () => {
  return (
    <div className="flex flex-col gap-14">
      <div className="bg-primary/50 px-10 py-10 border shadow-lg rounded-xl flex flex-col md:flex-row justify-between items-center gap-10 relative overflow-hidden flex-shrink">
        <CircleWave className="rotate-180" />
        <div className="flex flex-col gap-2">
          <h2 className="fancy-font text-4xl max-w-full text-wrap break-words">
            THE <span className="text-white">BIGGEST PROJECT</span> IS COMING
            VERY SOON
          </h2>
          <h2 className="text-2xl font-bold text-foreground/80 fancy-font">
            Anticipate what KlikkUp is cooking.....
          </h2>
        </div>
        <img className="w-[200px]" src={devious} alt="Blushing" />
      </div>

      <div className="flex flex-col gap-10">
        {roadmaps.map((roadmap, index) => (
          <div key={index} className="flex gap-5 items-center w-full">
            <div
              className={cn(
                "bg-foreground/10 text-foreground p-4 flex items-center justify-center rounded-full",
                roadmap.completed
                  ? "text-white bg-primary"
                  : "text-gray-500"
              )}
            >
              <MapPin className="w-8 h-8" />
            </div>
            <h2 className={cn(
                "border rounded-full px-5 py-3 w-full font-semibold text-xl bg-white",
                roadmap.completed && "border-primary bg-primary/30"
            )}>{roadmap.title}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Roadmap;
