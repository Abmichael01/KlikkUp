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
import Table from "@/components/Admin/Tasks/Table";
import AddEditTask from "@/components/Admin/Tasks/AddEditTask";
import { useDialog } from "@/hooks/useDialog";

const TasksManagement: React.FC = () => {
  const { open, setOpen } = useDialog("addTask");
  return (
    <div className="space-y-6 w-full">
      <div className="flex flex-col sm:flex-row items-start gap-5 justify-between sm:items-center">
        <h1 className="text-xl md:text-3xl font-semibold fancy-font">Tasks Management</h1>

        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger>
            <GlidingButton className="text-sm px-5 bg-secondary">
              <ClipboardList />
              New Task
            </GlidingButton>
          </DialogTrigger>
          <DialogContent aria-describedby="addTask">
            <DialogHeader>
              <DialogTitle>Add a New Task</DialogTitle>
            </DialogHeader>
            <AddEditTask />
          </DialogContent>
        </Dialog>
      </div>
      <Table />
    </div>
  );
};

export default TasksManagement;
