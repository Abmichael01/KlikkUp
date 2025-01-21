import { AlignEndVerticalIcon, BrainIcon, MousePointerClickIcon, Video } from "lucide-react";
import React from "react";
import { Button } from "../ui/button";

const iconsClassName = "w-14 h-14 text-primary";

const features = [
  {
    icon: <AlignEndVerticalIcon className={iconsClassName} />,
    name: "Read Articles",
  },
  {
    icon: <Video className={iconsClassName} />,
    name: "Watch Videos",
  },
  {
    icon: <BrainIcon className={iconsClassName} />,
    name: "Solve Riddles",
  },
];

const Features: React.FC = () => {
  return (
    <div className="flex flex-col items-center gap-5">
      <h2 className="text-2xl sm:text-4xl text-center text-primary font-bold w-[80%]">
        Start earning points from what you love doing
      </h2>
      <div className="flex flex-wrap gap-10 justify-center mt-5">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex flex-col items-center gap-5 border shadow-xl rounded-xl px-14 py-10 transform transition-transform hover:scale-105"
          >
            {feature.icon}
            <p className="text-center text-xl font-semibold">{feature.name}</p>
          </div>
        ))}
      </div>
      <Button className="mt-5 flex items-center gap-2 px-8 py-4 text-lg">
        <MousePointerClickIcon />
        Start earning now!
      </Button>
    </div>
  );
};

export default Features;
