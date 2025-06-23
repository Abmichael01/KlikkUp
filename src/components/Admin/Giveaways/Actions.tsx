import { MoreHorizontal, Trash2Icon, Edit } from "lucide-react";
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
import { Alert } from "@/components/Alert"; // Assuming reusable Confirm Alert
import { useDeleteGiveaway } from "@/api/mutations";
import { useMessageToaster } from "@/hooks/useMessageToaster";
import { useQueryClient } from "@tanstack/react-query";
import { Giveaway } from "@/types";
import AddEditGiveaway from "./AddEditGiveaway";
import { toast } from "sonner";

interface ActionsProps {
  giveaway: Giveaway;
}

const Actions: React.FC<ActionsProps> = ({ giveaway }) => {
  const { mutate: deleteGiveaway } = useDeleteGiveaway();
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

          <DropdownMenuContent align="end" aria-describedby="editGiveaway">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>

            {/* ✅ Edit Trigger */}
            <DialogTrigger className="w-full">
              <DropdownMenuItem>
                <Edit className="mr-2 h-4 w-4" />
                Edit
              </DropdownMenuItem>
            </DialogTrigger>

            <DropdownMenuSeparator />

            {/* ✅ Delete Confirmation */}
            <Alert
              title="Delete Giveaway"
              description={`Are you sure you want to delete "${giveaway.title}"?`}
              type="confirm"
              confirmText="Delete"
              onConfirm={() => {
                deleteGiveaway(giveaway.id as number, {
                  onSuccess: () => {
                    toast.success("Deleted Successfully");
                    queryClient.invalidateQueries({ queryKey: ["giveaways"] });
                  },
                  onError: () => {
                    toastMessage({
                      message: "An error occurred while deleting the giveaway",
                      type: "error",
                    });
                  },
                });
              }}
              trigger={
                <DropdownMenuItem onSelect={(e) => e.preventDefault()}>
                  <Trash2Icon className="mr-2 h-4 w-4" />
                  Delete
                </DropdownMenuItem>
              }
            />
          </DropdownMenuContent>
        </DropdownMenu>

        {/* ✅ Edit Giveaway Dialog */}
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Edit Giveaway</DialogTitle>
          </DialogHeader>
          <AddEditGiveaway data={giveaway} update={true} />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Actions;
