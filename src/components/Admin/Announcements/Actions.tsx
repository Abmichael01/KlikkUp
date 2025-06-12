import { Announcement } from "@/types";
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
import AddEditAnnouncement from "./AddEditAnnouncement";
import { Alert } from "@/components/Alert";
import { useDeleteAnnouncement } from "@/api/mutations";
import { useMessageToaster } from "@/hooks/useMessageToaster";
import { useQueryClient } from "@tanstack/react-query";

interface ActionsProps {
  announcement: Announcement;
}

const Actions: React.FC<ActionsProps> = ({ announcement }) => {
  const { mutate: deleteAnnouncement } = useDeleteAnnouncement();
  const toastMessage = useMessageToaster();
  const queryClient = useQueryClient();

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
          <DropdownMenuContent align="end" aria-describedby="editAnnouncement">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>

            <DialogTrigger className="w-full">
              <DropdownMenuItem>
                <Edit />
                Edit
              </DropdownMenuItem>
            </DialogTrigger>

            <DropdownMenuSeparator />
            <Alert
              title="Delete Announcement"
              description="Are you sure you want to delete this announcement?"
              type="confirm"
              confirmText="Delete"
              onConfirm={() => {
                deleteAnnouncement(announcement.id as number, {
                  onSuccess: () => {
                    toastMessage({
                      message: "Announcement deleted successfully",
                    });
                    queryClient.invalidateQueries({ queryKey: ["announcements"] });
                  },
                  onError: () => {
                    toastMessage({
                      message: "An error occurred while deleting announcement",
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
            <DialogTitle>Edit Announcement</DialogTitle>
          </DialogHeader>
          <AddEditAnnouncement data={announcement} update={true} />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Actions;