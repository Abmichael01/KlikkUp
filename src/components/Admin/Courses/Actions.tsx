import { Task } from "@/types";
import React from "react";
import { Edit, MoreHorizontal, Trash2Icon } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Dialog,
  DialogContent, 
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"; 
import AddEditTask from "./AddEditTask";
// import { useDialog } from "@/hooks/useDialog";
import { Alert } from "@/components/Alert";
import { useDeleteTask } from "@/api/mutations";
import { useMessageToaster } from "@/hooks/useMessageToaster";
import { useQueryClient } from "@tanstack/react-query";

interface ActionsProps {
  task: Task;
}

const Actions: React.FC<ActionsProps> = ({ task }) => {
  // const { open, setOpen } = useDialog("updateTask");
  const { mutate: deleteTask } = useDeleteTask();
  const toastMessage = useMessageToaster();
  const queyClient = useQueryClient();

  

  return (
    <div>
      <Dialog>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" aria-describedby="editTask">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>

            <DialogTrigger className="w-full">
              <DropdownMenuItem>
                <Edit />
                Edit
              </DropdownMenuItem>
            </DialogTrigger>

            <DropdownMenuSeparator />
            <Alert
              title="Delete Task"
              description="Are you sure you want to delete this task?"
              type="confirm"
              confirmText="Delete"
              onConfirm={() => {
                deleteTask(task.id as number, {
                  onSuccess: () => {
                    toastMessage({
                      message: "Task deleted successfully",
                    });
                    queyClient.invalidateQueries({ queryKey: ["tasks"] });
                  },
                  onError: () => {
                    toastMessage({
                      message: "An error occurred while deleting task",
                      type: "error",
                    });
                  },
                });
              }}
              trigger={
                <DropdownMenuItem onSelect={(e) => e.preventDefault()}>
                  <Trash2Icon />
                  Delete
                </DropdownMenuItem>
              }
            />
          </DropdownMenuContent>
        </DropdownMenu>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Add a New Task</DialogTitle>
          </DialogHeader>
          <AddEditTask data={task} update={true} />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Actions;
