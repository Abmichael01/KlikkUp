import React from "react";
import GlidingButton from "@/components/ui/GlidingButton";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { MessageSquare } from "lucide-react";
import AddEditAnnouncement from "@/components/Admin/Announcements/AddEditAnnouncement";
import { useDialog } from "@/hooks/useDialog";
import Table from "@/components/Admin/Announcements/Table";

const AnnouncementsManagement: React.FC = () => {
  const { open, setOpen } = useDialog("addAnnouncement");
  return (
    <div className="space-y-6 w-full">
      <div className="flex flex-col sm:flex-row items-start gap-5 justify-between sm:items-center">
        <h1 className="text-xl md:text-3xl font-semibold fancy-font">Announcements Management</h1>

        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger>
            <GlidingButton className="text-sm px-5 bg-secondary">
              <MessageSquare />
              New Announcement
            </GlidingButton>
          </DialogTrigger>
          <DialogContent aria-describedby="addAnnouncement">
            <DialogHeader>
              <DialogTitle>Add a New Announcement</DialogTitle>
            </DialogHeader>
            <AddEditAnnouncement />
          </DialogContent>
        </Dialog>
      </div>
      <Table />
    </div>
  );
};

export default AnnouncementsManagement;