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
import Table from "@/components/Admin/Users/Table";
import AddUser from "@/components/Admin/Users/AddUser";
import { useDialog } from "@/hooks/useDialog";

const UsersManagement: React.FC = () => {
  const { open, setOpen } = useDialog("addUser");
  return (
    <div className="space-y-6 w-full">
      <div className="flex flex-col sm:flex-row items-start gap-5 justify-between sm:items-center">
        <h1 className="sm:text-3xl text-2xl  font-semibold fancy-font">Users Management</h1>

        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger>
            <GlidingButton className="text-sm px-5 bg-pink-600">
              <ClipboardList />
              New User
            </GlidingButton>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add a New User</DialogTitle>
            </DialogHeader>
            <AddUser />
          </DialogContent>
        </Dialog>
      </div>
      <Table />
    </div>
  );
};

export default UsersManagement;
