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
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import AddEditGiveaway from "./AddEditGiveaway";
import { useMessageToaster } from "@/hooks/useMessageToaster";
import { useDeleteGiveaway } from "@/api/mutations";
import { useQueryClient } from "@tanstack/react-query";
import { Giveaway } from "@/types";

interface ActionsProps {
  giveaway: Giveaway;
}

const Actions: React.FC<ActionsProps> = ({ giveaway }) => {
  const { mutate: deleteGiveaway } = useDeleteGiveaway();
  const toastMessage = useMessageToaster();
  const queryClient = useQueryClient();

  const handleDelete = () => {
    deleteGiveaway(giveaway.id as number, {
      onSuccess: () => {
        toastMessage({ message: "Giveaway deleted successfully" });
        queryClient.invalidateQueries({ queryKey: ["giveaways"] });
      },
      onError: () => {
        toastMessage({ message: "An error occurred while deleting giveaway", type: "error" });
      },
    });
  };

  return (
    <Dialog>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="h-8 w-8 p-0">
            <span className="sr-only">Open menu</span>
            <MoreHorizontal className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>Actions</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DialogTrigger asChild>
            <DropdownMenuItem>
              <Edit className="mr-2 h-4 w-4" /> Edit
            </DropdownMenuItem>
          </DialogTrigger>
          <DropdownMenuItem onClick={handleDelete}>
            <Trash2Icon className="mr-2 h-4 w-4" /> Delete
          </DropdownMenuItem>
        </DropdownMenuContent>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Edit Giveaway</DialogTitle>
          </DialogHeader>
          <AddEditGiveaway data={giveaway} update={true} />
        </DialogContent>
      </DropdownMenu>
    </Dialog>
  );
};

export default Actions