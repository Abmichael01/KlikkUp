import {
  AlignEndVerticalIcon,
  AppWindow,
  BrainIcon,
  GraduationCap,
  MousePointerClickIcon,
  Video,
} from "lucide-react";
import type React from "react";
import GlidingButton from "../ui/GlidingButton";
import MainPadding from "@/layouts/MainPadding";
import { Link } from "react-router";

const iconsClassName =
  "w-8 h-8 sm:w-10 sm:h-10 md:w-14 md:h-14 text-primary-foreground";

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
  {
    icon: <GraduationCap className={iconsClassName} />,
    name: "Free Courses",
  },
  {
    icon: <AppWindow className={iconsClassName} />,
    name: "Free Premium \n Apps",
  },

];

const Features: React.FC = () => {
  return (
    <MainPadding className="bg-primary py-10">
      <div className="overflow-x-auto pb-4" id="features">
        <div className="flex justify-center flex-wrap gap-4 md:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-row sm:flex-col items-center gap-2 sm:gap-3 md:gap-4 bg-primary-foreground/10 rounded-lg sm:rounded-xl p-2 sm:p-4 md:p-6 backdrop-blur-sm transition-all duration-300 hover:bg-primary-foreground/20 px-3 py-3"
            >
              <div className="p-2 sm:p-3 md:p-4 bg-primary-foreground/20 rounded-full">
                {feature.icon}
              </div>
              <p className="text-center text-nowrap text-sm sm:text-lg md:text-lg font-medium sm:font-semibold text-primary-foreground">
                {feature.name}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-3 sm:mt-5 md:mt-8 text-center flex justify-center">
        <Link to="/auth/register">
          <GlidingButton className="px-4 sm:px-6 md:px-8 py-2 sm:py-3 bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold">
            <MousePointerClickIcon className="mr-2 h-6 w-6 sm:h-5 sm:w-5" />
            Sign up now!
          </GlidingButton>
        </Link>
      </div>
    </MainPadding>
  );
};

export default Features;
