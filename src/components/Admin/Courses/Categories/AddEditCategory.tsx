// src/components/course/AddEditCategory.tsx

import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { BookOpen } from "lucide-react";
import { useAddCourseCategory, useUpdateCourseCategory } from "@/api/mutations";
import LoadingAnimation from "@/components/LoadingAnimation";
import { CourseCategory } from "@/types";
import { useMessageToaster } from "@/hooks/useMessageToaster";
import { AxiosError } from "axios";
import { useQueryClient } from "@tanstack/react-query";
import { useDialog } from "@/hooks/useDialog";

// Zod schema for category form
const formSchema = z.object({
  name: z.string().min(3, { message: "Name must be at least 3 characters" }),
});

type FormValues = z.infer<typeof formSchema>;

interface AddEditCategoryProps {
  data?: CourseCategory;
}

const AddEditCategory: React.FC<AddEditCategoryProps> = ({ data }) => {
  const queryClient = useQueryClient();
  const toastMessage = useMessageToaster();
  const { setOpen } = useDialog("addCategory");

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: data?.name || "",
    },
  });

  const { isDirty } = form.formState;

  // Mutation hooks
  const { mutate: addCategory, isPending: adding } = useAddCourseCategory();
  const { mutate: updateCategory, isPending: updating } = useUpdateCourseCategory();

  const onSubmit = (values: FormValues) => {
    const payload = {
      ...values,
      id: data?.id,
    };

    const mutate = data ? updateCategory : addCategory;

    mutate(payload, {
      onSuccess: () => {
        toastMessage({
          message: `Category ${data ? "updated" : "added"} successfully`,
        });
        queryClient.invalidateQueries({ queryKey: ["course-categories"] });
        setOpen(false);
      },
      onError: (error) => {
        const errorMessages = (error as AxiosError)?.response?.data as Record<
          string,
          string[]
        >;
        for (const key in errorMessages) {
          toastMessage({
            message: errorMessages[key].join(", "),
            type: "error",
          });
        }
      },
    });
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        {/* Name Field */}
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <div className="bg-white px-4 rounded-lg flex items-center gap-2 border">
                  <div className="text-primary [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 text-sm">
                    <BookOpen />
                  </div>
                  <input className="text-sm w-full py-3 border-0 focus:outline-0 ring-0" placeholder="Category Name" {...field} />
                </div>
              </FormControl>
              <FormMessage className="px-4 py-1 bg-white/70 rounded-full" />
            </FormItem>
          )}
        />

        {/* Submit Button */}
        <Button type="submit" disabled={!isDirty || adding || updating} className="w-full">
          {adding || updating ? <LoadingAnimation size="small" /> : data ? "Update Category" : "Add Category"}
        </Button>
      </form>
    </Form>
  );
};

export default AddEditCategory;