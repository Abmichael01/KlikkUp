import React from "react";
import GlidingButton from "@/components/ui/GlidingButton";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ClipboardList } from "lucide-react";
import Table from "@/components/Admin/Stories/Table";
import AddEditStory from "@/components/Admin/Stories/AddEditStory";
import { useDialog } from "@/hooks/useDialog";

const StoriesManagement: React.FC = () => {
  const { open, setOpen } = useDialog("addStory");
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row items-start gap-5 justify-between sm:items-center">
        <h1 className="text-xl md:text-3xl font-semibold fancy-font">Stories Management</h1>

        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger>
            <GlidingButton className="text-sm px-5 bg-secondary">
              <ClipboardList />
              New Story
            </GlidingButton>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add a New Story</DialogTitle>
            </DialogHeader>
            <AddEditStory />
          </DialogContent>
        </Dialog>
      </div>
      <Table />
    </div>
  );
};

export default StoriesManagement;
