import { Course } from "@/types";
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
} from "@/components/ui/dialog"; // Renamed component
import { Alert } from "@/components/Alert";
import { useDeleteCourse } from "@/api/mutations"; // Renamed hook
import { useMessageToaster } from "@/hooks/useMessageToaster";
import { useQueryClient } from "@tanstack/react-query";
import AddEditCourse from "./AddEditCourse";

interface ActionsProps {
  course: Course;
}

const Actions: React.FC<ActionsProps> = ({ course }) => {
  const { mutate: deleteCourse } = useDeleteCourse();
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
          <DropdownMenuContent align="end" aria-describedby="editCourse">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>

            <DialogTrigger className="w-full">
              <DropdownMenuItem>
                <Edit />
                Edit
              </DropdownMenuItem>
            </DialogTrigger>

            <DropdownMenuSeparator />
            <Alert
              title="Delete Course"
              description="Are you sure you want to delete this course?"
              type="confirm"
              confirmText="Delete"
              onConfirm={() => {
                deleteCourse(course.id as number, {
                  onSuccess: () => {
                    toastMessage({
                      message: "Course deleted successfully",
                    });
                    queryClient.invalidateQueries({ queryKey: ["courses"] }); // Updated query key
                  },
                  onError: () => {
                    toastMessage({
                      message: "An error occurred while deleting course",
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
            <DialogTitle>Add a New Course</DialogTitle>
          </DialogHeader>
          <AddEditCourse data={course} /> {/* Updated component name */}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Actions;