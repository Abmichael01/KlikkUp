"use client";

import type React from "react";
import { useEffect, useState } from "react";
import { Bell } from "lucide-react";
import { useAnnouncementStore } from "@/stores/announcementStore";
import { Dialog, DialogContent, DialogHeader } from "@/components/ui/dialog";
import { Checkbox } from "@/components/ui/checkbox";
import { ScrollArea } from "@/components/ui/scroll-area";
import GradientCard from "../ui/GradientCard";
import { CardContent, CardHeader } from "../ui/card";
import { useAnnouncementData } from "@/api/queries";


const AnnouncementDialog: React.FC = () => {
  const { isOpen, setIsOpen } = useAnnouncementStore();
  const [dontShow, setDontShow] = useState(false);
  const { data } = useAnnouncementData()

  useEffect(() => {
    const lastDismissed = localStorage.getItem("announcement-dismissed");
    const today = new Date().toDateString();
    if (lastDismissed === today) {
      setIsOpen(false);
    }
  }, [setIsOpen]);

  // Handle dialog close with "don't show again" option
  const handleOpenChange = (open: boolean) => {
    if (!open && dontShow) {
      localStorage.setItem("announcement-dismissed", new Date().toDateString());
    }
    setIsOpen(open);
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader className="flex flex-row items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 flex items-center justify-center bg-blue-950 text-secondary rounded-full">
              <Bell size={18} />
            </div>
            <h2 className="text-lg font-medium text-gray-900">Announcements</h2>
          </div>
        </DialogHeader>

        <ScrollArea className="max-h-[50vh] pr-4">
          <div className="space-y-4 mt-5">
            {data?.map((announcement) => (
              <GradientCard
                key={announcement.id}
                className=" text-white rounded-xl "
              >
                <CardHeader>
                  <h3 className="font-medium text-lg">{announcement.title}</h3>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-blue-100">
                    {announcement.content}
                  </p>
                  {announcement.link && (
                    <a
                      href={announcement.link}
                      className="text-secondary text-sm mt-2 hover:underline self-end"
                    >
                      Learn more →
                    </a>
                  )}
                </CardContent>
              </GradientCard>
            ))}
          </div>
        </ScrollArea>

        <div className="flex items-center gap-2 border-t pt-4 mt-2">
          <Checkbox
            id="dont-show"
            checked={dontShow}
            onCheckedChange={(checked) => setDontShow(checked === true)}
            className="data-[state=checked]:bg-secondary data-[state=checked]:border-secondary"
          />
          <label
            htmlFor="dont-show"
            className="text-sm text-gray-600 cursor-pointer"
          >
            Don't show again today
          </label>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AnnouncementDialog;
