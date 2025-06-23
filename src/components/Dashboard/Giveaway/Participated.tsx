import React from "react";
import { CardContent } from "@/components/ui/card";
import GradientCard from "@/components/ui/GradientCard";
import { Gift, Trophy, CalendarCheck, CheckCircle2 } from "lucide-react";
import { Giveaway } from "@/types";

interface Props {
  data: Giveaway
}

const Participated: React.FC<Props> = ({ data }) => {
  const giveawayDate = new Date(data.date);

  return (
    <GradientCard >
      <CardContent className="p-10 text-center space-y-6">
        <div className="flex justify-center">
          <Gift className="w-16 h-16 text-green-300 animate-pulse" />
        </div>

        <h2 className="text-3xl font-bold text-white">
          🎉 Giveaway Participation Complete!
        </h2>

        <p className="text-white/80 text-lg">
          You participated in <span className="font-semibold">{data.title}</span>.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-4 text-white/90">
          <div className="flex flex-col items-center">
            <Trophy className="w-8 h-8 text-yellow-400 mb-1" />
            <span className="text-lg font-bold">₦{Number(data.prize).toLocaleString()}</span>
            <p className="text-sm text-white/60">Prize</p>
          </div>

          <div className="flex flex-col items-center">
            <CalendarCheck className="w-8 h-8 text-blue-400 mb-1" />
            <span className="text-lg font-bold">
              {giveawayDate.toLocaleDateString()}
            </span>
            <p className="text-sm text-white/60">Giveaway Date</p>
          </div>

          <div className="flex flex-col items-center">
            <CheckCircle2 className="w-8 h-8 text-green-400 mb-1" />
            <span className="text-lg font-bold">✔️ Participated</span>
            <p className="text-sm text-white/60">Status</p>
          </div>
        </div>

        <p className="mt-6 text-white/70 text-sm">
          Winners may be contacted soon if the draw has been finalized. Good luck!
        </p>
      </CardContent>
    </GradientCard>
  );
};

export default Participated;
