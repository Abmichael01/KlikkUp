import React from "react";
import { Badge } from "@/components/ui/badge";
import Logo from "@/components/Logo/Logo";
import HowItWorks from "@/components/BecomePartner/HowItWorks";
import { Handshake } from "lucide-react";
import MainPadding from "@/layouts/MainPadding";
import CallToAction from "@/components/BecomePartner/CallToAction";
import Criteria from "@/components/BecomePartner/Criteria";

const BecomePartner: React.FC = () => {
  return (
    <MainPadding className="min-h-screen bg-gradient-to-b from-blue-200 via-white to-white py-20 space-y-14">
      <div className="text-center mb-8 flex flex-col items-center">
        <div className="mb-5">
          <Logo className="" />
        </div>
        <Badge
          variant="outline"
          className="mb-4 px-3 py-1 bg-blue-50 text-blue-600 border-blue-200"
        >
          <Handshake className="w-3.5 h-3.5 mr-1" /> Become a Partner
        </Badge>
        <h1 className="text-3xl md:text-4xl fancy-font font-bold text-blue-600 mb-3">
          Welcome! Partner
        </h1>
        <p className="text-gray-600">
          Unlock unlimited earning potential by becoming a partner with KlikkUp.
        </p>
      </div>
        <HowItWorks />
        <Criteria />
        <CallToAction />
    </MainPadding>
  );
};

export default BecomePartner;
