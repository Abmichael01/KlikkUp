import { AlignEndVerticalIcon, BrainIcon, MousePointerClickIcon, Video } from "lucide-react";
import React from "react";
import GlidingButton from "../ui/GlidingButton";

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
    <div className="flex flex-col items-center gap-5 py-20">
      <div className="flex flex-wrap gap-10 justify-center mt-5">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex flex-col items-center gap-5 border-blue-800 border shadow-xl rounded-xl px-10 py-3 transform transition-transform hover:scale-105"
          >
            <p className="text-center text-sm sm:text-lg font-semibold text-primary">{feature.name}</p>
          </div>
        ))}
      </div>
      <GlidingButton className="mt-5 flex items-center gap-2 px-8">
        <MousePointerClickIcon />
        Sign up now!
      </GlidingButton>
    </div>
  );
};

export default Features;
