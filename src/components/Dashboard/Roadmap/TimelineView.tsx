import React from "react";
import { motion } from "framer-motion";
import { Calendar, CheckCircle, MapPin } from "lucide-react";
import { CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import GradientCard from "@/components/ui/GradientCard";
import { RoadmapItem } from "@/types";

const TimelineView: React.FC<{ roadmapItems: RoadmapItem[] }> = ({ roadmapItems }) => {
  return (
    <GradientCard className="border-none text-white shadow-md">
      <CardHeader className="pb-2">
        <CardTitle className="flex items-center gap-2">
          <Calendar className="h-5 w-5 text-secondary" />
          Project Timeline
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="relative flex flex-col gap-2 pt-2 pb-4">
          {/* Timeline Line */}
          <div className="absolute left-[22px] top-8 bottom-0 w-[2px] bg-blue-800"></div>

          {roadmapItems?.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ type: "tween", ease: "easeOut", duration: 0.6 }}
              className="mb-6 last:mb-0"
            >
              {/* Step Number */}
              <div className="flex items-center gap-3">
                <div
                  className={cn(
                    "z-10 flex h-11 w-11 items-center justify-center rounded-full border-2",
                    index === 0 ? "bg-secondary border-secondary" : "bg-blue-900 border-blue-800"
                  )}
                >
                  <span className="text-sm font-bold">{index + 1}</span>
                </div>
              </div>

              {/* Step Details */}
              <div className="ml-5 pl-10 border-l-2 border-blue-800">
                <motion.div
                  initial={{ opacity: 0, x: -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ type: "tween", ease: "easeOut", duration: 0.5, delay: 0.1 }}
                  className="space-y-3"
                >
                  <div
                    className={cn(
                      "flex items-center gap-3 p-3 rounded-full transition-colors",
                      item.completed
                        ? "bg-blue-900/50 border border-secondary/30"
                        : "bg-blue-900/20 border border-blue-800"
                    )}
                  >
                    <div
                      className={cn(
                        "flex h-8 w-8 shrink-0 items-center justify-center rounded-full",
                        item.completed ? "bg-secondary/20 text-secondary" : "bg-blue-900 text-blue-200"
                      )}
                    >
                      {item.completed ? <CheckCircle className="h-5 w-5" /> : <MapPin className="h-5 w-5" />}
                    </div>
                    <span className={item.completed ? "text-white" : "text-blue-100"}>{item.title}</span>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </CardContent>
    </GradientCard>
  );
};

export default TimelineView;
