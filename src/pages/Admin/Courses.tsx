import Table from "@/components/Admin/Courses/Table";
import GlidingButton from "@/components/ui/GlidingButton";
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import AddEditCourse from "@/components/Admin/Courses/AddEditCourse";
import AddEditCategory from "@/components/Admin/Courses/Categories/AddEditCategory";
import Categories from "@/components/Admin/Courses/Categories";
import { Separator } from "@radix-ui/react-dropdown-menu";

const CoursesManagement: React.FC = () => {
    
  return (
    <div className="space-y-8">
      <div className="flex flex-col sm:flex-row items-start gap-5 justify-between sm:items-center">
        <h1 className="text-xl md:text-3xl font-semibold fancy-font">
          Courses Management
        </h1>

        <div className="flex gap-5">
          <Dialog>
            <DialogTrigger>
              <GlidingButton className="text-sm px-5">Add Course</GlidingButton>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Add Course</DialogTitle>
              </DialogHeader>
              <AddEditCourse />
            </DialogContent>
          </Dialog>

          <Dialog>
            <DialogTrigger>
              <GlidingButton className="text-sm px-5 bg-orange-500 text-white">
                Add Category
              </GlidingButton>
            </DialogTrigger>
            <DialogContent aria-description="Add Category">
              <DialogHeader>
                <DialogTitle>Add Category</DialogTitle>
              </DialogHeader>
              <AddEditCategory />
            </DialogContent>
          </Dialog>
        </div>
      </div>
      <Categories />
      <Separator />
      <Table />
    </div>
  );
};

export default CoursesManagement;
