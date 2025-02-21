import type { User } from "@/types"
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
import EditUser from "./EditUser"
// import { useDialog } from "@/hooks/useDialog"
import { Alert } from "@/components/Alert"
import { useDeleteUser } from "@/api/mutations"
import { useMessageToaster } from "@/hooks/useMessageToaster"
import { useQueryClient } from "@tanstack/react-query"

interface ActionsProps {
  user: User
}

const Actions: React.FC<ActionsProps> = ({ user }) => {
  // const { open, setOpen } = useDialog("editUser")
  const { mutate: deleteUser } = useDeleteUser()
  const toastMessage = useMessageToaster()
  const queryClient = useQueryClient()

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
              title="Delete User"
              description="Are you sure you want to delete this user?"
              type="confirm"
              confirmText="Delete"
              onConfirm={() => {
                deleteUser(user.id as number, {
                  onSuccess: () => {
                    toastMessage({
                      message: "User deleted successfully",
                    })
                    queryClient.invalidateQueries({ queryKey: ["users"] })
                  },
                  onError: () => {
                    toastMessage({
                      message: "An error occurred while deleting user",
                      type: "error",
                    })
                  },
                })
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
            <DialogTitle>Edit User Details</DialogTitle>
          </DialogHeader>
          <EditUser data={user} />
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default Actions

