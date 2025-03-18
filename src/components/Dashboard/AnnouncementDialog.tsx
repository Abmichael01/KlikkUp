"use client";

import React, { useEffect, useState } from "react";
import { Bell } from "lucide-react";
import { useAnnouncementStore } from "@/stores/announcementStore";
import { Announcement } from "@/types";
import { Dialog, DialogContent, DialogHeader } from "@/components/ui/dialog";


const announcements: Announcement[] = [
  {
    id: 1,
    title: "🚀 New Feature",
    message: "We just launched a new dashboard!",
    link: "/dashboard",
  },
  {
    id: 2,
    title: "🔥 Limited Offer",
    message: "Get 20% off on all purchases today!",
    link: "/pricing",
  },
  {
    id: 3,
    title: "📢 System Update",
    message: "Scheduled maintenance at 2 AM.",
  },
];

const AnnouncementDialog: React.FC = () => {
  const { isOpen, setIsOpen } = useAnnouncementStore();
  const [dontShow, setDontShow] = useState(false);

  useEffect(() => {
    const lastDismissed = localStorage.getItem("announcement-dismissed");
    const today = new Date().toDateString();
    if (lastDismissed === today) {
      setIsOpen(false);
    }
  }, [setIsOpen]);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="">
        <DialogHeader>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 flex items-center justify-center bg-blue-950 text-secondary rounded-full">
              <Bell size={18} />
            </div>
            <h2 className="text-lg font-medium text-gray-900">Announcements</h2>
          </div>
        </DialogHeader>
        <div className="space-y-8 mt-5 *: max-h-[50vh] overflow-y-scroll overflow-hidden">
          {announcements.map((announcement) => (
            <div
              key={announcement.id}
              className="flex flex-col items-center p-3 px-5 text-white gap-2 py-5 rounded-xl bg-blue-950"
            >
              <h1 className="font-medium text-lg">This is a new announcement</h1>
              <p className="text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
                maiores illum laboriosam cumque sapiente, pariatur veniam
                veritatis repellat explicabo facilis, sequi quae error delectus?
                Suscipit provident sapiente magni quo id!
              </p>
            </div>
          ))}
        </div>
        <div className="flex items-center gap-2 border-t pt-2">
          <input
            type="checkbox"
            id="dont-show"
            className="h-4 w-4"
            checked={dontShow}
            onChange={() => setDontShow(!dontShow)}
          />
          <label htmlFor="dont-show" className="text-sm">
            Don't show again today
          </label>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AnnouncementDialog;
