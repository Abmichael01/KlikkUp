// src/components/course/CategoryActions.tsx

import React from "react";
import { Edit, MoreVertical, Trash2Icon } from "lucide-react";
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
import { Alert } from "@/components/Alert";
import { useDeleteCourseCategory } from "@/api/mutations";
import { useMessageToaster } from "@/hooks/useMessageToaster";
import { useQueryClient } from "@tanstack/react-query";
import AddEditCategory from "./AddEditCategory";
import { CourseCategory } from "@/types";

interface CategoryActionsProps {
  category: CourseCategory;
}

const Actions: React.FC<CategoryActionsProps> = ({ category }) => {
  const { mutate: deleteCategory } = useDeleteCourseCategory();
  const toastMessage = useMessageToaster();
  const queryClient = useQueryClient();

  return (
    <div>
      <Dialog>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreVertical className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" aria-describedby="editCategory">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>

            <DialogTrigger className="w-full">
              <DropdownMenuItem>
                <Edit />
                Edit
              </DropdownMenuItem>
            </DialogTrigger>

            <DropdownMenuSeparator />
            <Alert
              title="Delete Category"
              description="Are you sure you want to delete this category?"
              type="confirm"
              confirmText="Delete"
              onConfirm={() => {
                deleteCategory(category.id as number, {
                  onSuccess: () => {
                    toastMessage({
                      message: "Category deleted successfully",
                    });
                    queryClient.invalidateQueries({ queryKey: ["course-categories"] });
                  },
                  onError: () => {
                    toastMessage({
                      message: "An error occurred while deleting category",
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
            <DialogTitle>Edit Category</DialogTitle>
          </DialogHeader>
          <AddEditCategory data={category} />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Actions;