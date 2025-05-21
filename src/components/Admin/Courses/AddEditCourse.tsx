import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { useAddCourse, useUpdateCourse } from "@/api/mutations";
import { useGetCourseCategories } from "@/api/queries";
import LoadingAnimation from "@/components/LoadingAnimation";
import { GraduationCap, Link, Loader2 } from "lucide-react";
import { Course } from "@/types";
import { useMessageToaster } from "@/hooks/useMessageToaster";
import { AxiosError } from "axios";
import { useQueryClient } from "@tanstack/react-query";
import { useDialog } from "@/hooks/useDialog";

// Zod schema for course form
const formSchema = z.object({
  title: z.string().min(5, { message: "Title must be at least 5 characters" }),
  course_url: z.string().url({ message: "Must be a valid URL" }),
  category_id: z.number({ required_error: "Please select a category" }),
});

type FormValues = z.infer<typeof formSchema>;

interface AddEditCourseProps {
  data?: Course;
}

const AddEditCourse: React.FC<AddEditCourseProps> = ({ data: courseData }) => {
  const queryClient = useQueryClient();
  const toastMessage = useMessageToaster();
  const { setOpen } = useDialog("addCourse");

  // Fetch all categories
  const { data: categories = [], isLoading } = useGetCourseCategories();

  // Mutation hooks
  const { mutate: addCourse, isPending: adding } = useAddCourse();
  const { mutate: updateCourse, isPending: updating } = useUpdateCourse();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: courseData?.title || "",
      course_url: courseData?.course_url || "",
      category_id: courseData?.category?.id || 0,
    },
  });

  const { isDirty } = form.formState;

  const onSubmit = (values: FormValues) => {
    const payload = {
      ...values,
      id: courseData?.id,
    };

    const mutate = courseData ? updateCourse : addCourse;

    mutate(payload, {
      onSuccess: () => {
        toastMessage({
          message: `Course ${courseData ? "updated" : "added"} successfully`,
        });
        queryClient.invalidateQueries({ queryKey: ["courses"] });
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

  if (isLoading) return (
    <div className="flex justify-center items-center">
      <Loader2 className="animate-spin" />
    </div>
  )

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        {/* Title Field */}
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <div className="bg-white px-4 rounded-lg flex items-center gap-2 border">
                  <div className="text-primary [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 text-sm">
                    <GraduationCap />
                  </div>
                  <input className="text-sm w-full py-3 border-0 focus:outline-0 ring-0" placeholder="Course Title" {...field} />
                </div>
              </FormControl>
              <FormMessage className="px-4 py-1 bg-white/70 rounded-full" />
            </FormItem>
          )}
        />

        {/* Course URL Field */}
        <FormField
          control={form.control}
          name="course_url"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <div className="bg-white px-4 rounded-lg flex items-center gap-2 border">
                  <div className="text-primary [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 text-sm">
                    <Link />
                  </div>
                  <input className="text-sm w-full py-3 border-0 focus:outline-0 ring-0" placeholder="Course URL" {...field} />
                </div>
              </FormControl>
              <FormMessage className="px-4 py-1 bg-white/70 rounded-full" />
            </FormItem>
          )}
        />

        {/* Category Selection Field */}
        <FormField
          control={form.control}
          name="category_id"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormControl>
                  <Select
                    onValueChange={(value) => field.onChange(Number(value))}
                    value={field.value ? field.value.toString() : "-1"}
                  >
                    <SelectTrigger className="outline-0 ring-0">
                      <SelectValue placeholder="Select a category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="-1" disabled>
                        Select a category
                      </SelectItem>
                      {categories.map((cat) => (
                        <SelectItem key={cat.id} value={cat?.id?.toString() as string}>
                          {cat.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
              </FormControl>
              <FormMessage className="px-4 py-1 bg-white/70 rounded-full mt-1" />
            </FormItem>
          )}
        />

        {/* Submit Button */}
        <Button
          type="submit"
          disabled={!isDirty || adding || updating}
          className="w-full"
        >
          {adding || updating ? (
            <LoadingAnimation size="small" />
          ) : courseData ? (
            "Update Course"
          ) : (
            "Add Course"
          )}
        </Button>
      </form>
    </Form>
  );
};

export default AddEditCourse;
