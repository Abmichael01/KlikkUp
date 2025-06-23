import React from "react";
import GlidingButton from "@/components/ui/GlidingButton";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Gift } from "lucide-react";
import GiveawayTable from "@/components/Admin/Giveaways/Table";
import AddEditGiveaway from "@/components/Admin/Giveaways/AddEditGiveaway";
import { useDialog } from "@/hooks/useDialog";

const GiveawaysManagement: React.FC = () => {
  const { open, setOpen } = useDialog("addGiveaway");

  return (
    <div className="space-y-6 w-full">
      <div className="flex flex-col sm:flex-row items-start gap-5 justify-between sm:items-center">
        <h1 className="text-xl md:text-3xl font-semibold fancy-font">Giveaways Management</h1>

        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger>
            <GlidingButton className="text-sm px-5 bg-secondary">
              <Gift />
              New Giveaway
            </GlidingButton>
          </DialogTrigger>
          <DialogContent >
            <DialogHeader>
              <DialogTitle>Add a New Giveaway</DialogTitle>
            </DialogHeader>
            <AddEditGiveaway />
          </DialogContent>
        </Dialog>
      </div>
      <GiveawayTable />
    </div>
  );
};

export default GiveawaysManagement;