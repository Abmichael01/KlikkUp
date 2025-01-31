import MainPadding from "@/layouts/MainPadding";
import { Check, MousePointerClick, ArrowRight } from "lucide-react";
import type React from "react";
import GlidingButton from "../ui/GlidingButton";
import { Link } from "react-router";

const reasons = [
  { text: "Have fun klikking", icon: "🎉" },
  { text: "Earn rewards for your time", icon: "💰" },
  { text: "Share and invite", icon: "👥" },
  { text: "Receive Airdrop", icon: "🚀" },
];

const RegisterNow: React.FC = () => {
  return (
    <MainPadding className="bg-gradient-to-br from-primary to-primary-dark py-16">
      <div
        className="flex flex-col lg:flex-row gap-12 items-center"
        id="register-now"
      >
        <div className="text-center flex flex-col lg:text-left w-full lg:w-1/2">
          <h2 className="fancy-font text-4xl md:text-5xl lg:text-6xl text-white mb-6 leading-tight">
            Register Now <br />
            <span className="relative">
              <MousePointerClick className="inline mr-2 animate-bounce" />
              On Klikk
              <span className="absolute bottom-0 left-0 w-full h-2 bg-secondary opacity-75 transform -skew-x-12"></span>
            </span>
          </h2>
          <p className="text-primary-foreground/80 mb-8 text-lg max-w-md mx-auto lg:mx-0">
            Join our community today and start earning rewards for your time and
            engagement!
          </p>
          <Link to="/auth/register" className="self-center md:self-start">
            <GlidingButton className="px-8 py-3 bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold text-lg">
              Get Started Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </GlidingButton>
          </Link>
        </div>
        <div className="w-full lg:w-1/2">
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow-xl">
            {reasons.map((reason, index) => (
              <div
                key={index}
                className="flex items-center py-4 border-b border-white/20 last:border-b-0"
              >
                <div className="bg-primary rounded-full p-3 text-white mr-4 shadow-lg">
                  <Check size={20} />
                </div>
                <div className="flex items-center">
                  <span className="text-3xl mr-3">{reason.icon}</span>
                  <h3 className="text-xl text-white font-medium">
                    {reason.text}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </MainPadding>
  );
};

export default RegisterNow;
