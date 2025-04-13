import React from "react";
import GradientCard from "@/components/ui/GradientCard";
import { CardContent } from "../ui/card";
import MainPadding from "@/layouts/MainPadding";

const Banner2: React.FC = () => {
  return (
    <MainPadding>
      <GradientCard className="border-0 shadow-2xl rounded-[50px]" bg="from-blue-700 via-blue-500 to-blue-800">
        <CardContent className="flex flex-col gap-10 justify-center items-center px-5 sm:px-10 py-20">
          <h1 className=" text-lg sm:text-2xl md:text-3xl shadow-xl border-[5px] border-blue-200 bg-primary text-primary-foreground px-10 py-3 rounded-full">Join the Movement</h1>
          <h1 className="text-white sm:text-3xl md:text-4xl text-2xl text-center">
          Early users will get access to special bonuses, beta testing opportunities, and hidden missions before anyone else. Start earning today — the future of gaming is already in your hands.
          </h1>
        </CardContent>
      </GradientCard>
    </MainPadding>
  );
};

export default Banner2;
