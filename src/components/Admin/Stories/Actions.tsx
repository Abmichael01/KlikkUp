import type { Story } from "@/types"
import type React from "react"
import { Edit, MoreHorizontal, Trash2Icon } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import AddEditStory from "./AddEditStory"
import { useDialog } from "@/hooks/useDialog"
import { Alert } from "@/components/Alert"
import { useDeleteStory } from "@/api/mutations"
import { useMessageToaster } from "@/hooks/useMessageToaster"
import { useQueryClient } from "@tanstack/react-query"

interface ActionsProps {
  story: Story
}

const Actions: React.FC<ActionsProps> = ({ story }) => {
  const { open, setOpen } = useDialog("updateStory")
  const { mutate: deleteStory } = useDeleteStory()
  const toastMessage = useMessageToaster()
  const queryClient = useQueryClient()

  return (
    <div>
      <Dialog open={open} onOpenChange={setOpen}>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>

            <DialogTrigger className="w-full">
              <DropdownMenuItem>
                <Edit />
                Edit
              </DropdownMenuItem>
            </DialogTrigger>

            <DropdownMenuSeparator />
            <Alert
              title="Delete Story"
              description="Are you sure you want to delete this story?"
              type="confirm"
              confirmText="Delete"
              onConfirm={() => {
                deleteStory(story.id as number, {
                  onSuccess: () => {
                    toastMessage({
                      message: "Story deleted successfully",
                    })
                    queryClient.invalidateQueries({ queryKey: ["stories"] })
                  },
                  onError: () => {
                    toastMessage({
                      message: "An error occurred while deleting story",
                      type: "error",
                    })
                  },
                })
              }}
              trigger={
                <DropdownMenuItem onSelect={(e) => e.preventDefault()} className="w-full">
                  <Trash2Icon />
                  Delete
                </DropdownMenuItem>
              }
            />
          </DropdownMenuContent>
        </DropdownMenu>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Edit Story</DialogTitle>
          </DialogHeader>
          <AddEditStory data={story} update={true} />
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default Actions

