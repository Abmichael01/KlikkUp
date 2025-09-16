import React, { useEffect, useState } from "react";
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
import { useAddTask, useUpdateTask } from "@/api/mutations";
import LoadingAnimation from "@/components/LoadingAnimation";
import {
  CheckCircle,
  ClipboardList,
  Gift,
  Link,
  ThumbsUp,
  Timer,
} from "lucide-react";
import { Task } from "@/types";
import { useQueryClient } from "@tanstack/react-query";
import { useDialog } from "@/hooks/useDialog";
import ImagePicker from "../ImagePicker";
import { toast } from "sonner";
import errorMessage from "@/api/errorMessage";
import { Checkbox } from "@/components/ui/checkbox";

const formSchema = z.object({
  title: z
    .string()
    .min(5, { message: "Title cannot be less than 5 chars" })
    .max(225, { message: "Title cannot exceed 225 chars" }),
  link: z.string().min(1, { message: "Link is required" }),
  reward: z.coerce.number().min(1, "Reward cannot be lesser than 1"),
  confirmation_code: z.string().optional(),
  estimated_time: z.coerce.number(),
  no_wait_confirm: z.boolean(),
  no_code_required: z.boolean(),
  banner: z.string().optional(),
  expired: z.boolean(),
});

interface AddEditTaskProps {
  data?: Task;
  update?: boolean;
}

const AddEditTask: React.FC<AddEditTaskProps> = ({ data, update }) => {
  const [imgUrl, setImgUrl] = useState<string>();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: update ? data?.title : "",
      link: update ? data?.link : "",
      confirmation_code: update ? data?.confirmation_code : "",
      reward: update ? data?.reward : 500,
      estimated_time: update ? data?.estimated_time : 1,
      no_wait_confirm: update ? data?.no_wait_confirm : false,
      no_code_required: update ? data?.no_code_required : false,
      banner: imgUrl,
      expired: update ? data?.expired : false,
    },
  });

  useEffect(() => {
    if (imgUrl !== form.getValues("banner")) {
      form.setValue("banner", imgUrl || "", { shouldDirty: true });
    }
  }, [imgUrl, form]);

  const { isDirty } = form.formState;
  const { mutate: addTask, isPending: adding } = useAddTask();
  const { mutate: updateTask, isPending: updating } = useUpdateTask();
  const queryClient = useQueryClient();
  const { setOpen: setUpdateDialog } = useDialog("updateTask");
  const { setOpen: setAddDialog } = useDialog("addTask");

  useEffect(() => {
    setImgUrl(data?.banner);
  }, [setImgUrl, data]);

  // Reset form when data changes (for editing)
  useEffect(() => {
    if (update && data) {
      form.reset({
        title: data.title || "",
        link: data.link || "",
        confirmation_code: data.confirmation_code || "",
        reward: data.reward || 500,
        estimated_time: data.estimated_time || 1,
        no_wait_confirm: data.no_wait_confirm || false,
        no_code_required: data.no_code_required || false,
        banner: data.banner || "",
        expired: data.expired || false,
      });
    }
  }, [data, update, form]);

  type FormField = {
    name: "title" | "link" | "reward" | "confirmation_code" | "estimated_time";
    placeholder: string;
    type: string;
    icon: React.ReactNode;
  };

  const formFields: FormField[] = [
    {
      name: "title",
      type: "text",
      placeholder: "Title",
      icon: <ClipboardList />,
    },
    {
      name: "link",
      type: "text",
      placeholder: "Link e.g https://link.com",
      icon: <Link />,
    },
    {
      name: "reward",
      type: "number",
      placeholder: "Reward e.g 500",
      icon: <Gift />,
    },
    {
      name: "confirmation_code",
      type: "text",
      placeholder: "Confirmation Code",
      icon: <ThumbsUp />,
    },
    {
      name: "estimated_time",
      type: "text",
      placeholder: "Estimated Time",
      icon: <Timer />,
    },
  ];

  function onSubmit(values: z.infer<typeof formSchema>) {
    const mutate = data ? updateTask : addTask;
    const payload = {
      ...values,
      id: data?.id,
      banner: imgUrl && imgUrl.trim() !== "" ? imgUrl : undefined,
    };

    mutate(payload, {
      onSuccess: () => {
        toast.success(`Task ${data ? "updated" : "created"} successfully`);
        queryClient.invalidateQueries({ queryKey: ["tasks"] });
        if (data) {
          setUpdateDialog(false);
        } else {
          setAddDialog(false);
        }
      },
      onError: (error: Error) => {
        toast.error(errorMessage(error));
      },
    });
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className=" max-h-[70vh] overflow-y-auto space-y-8"
      >
        <ImagePicker
          imgUrl={imgUrl}
          setImgUrl={setImgUrl}
          title="Upload Banner"
        />
        {formFields.map((formField, index) => {
          // Hide confirmation_code field if no_code_required is checked
          if (formField.name === "confirmation_code" && form.watch("no_code_required")) {
            return null;
          }
          
          // Hide estimated_time field if no_wait_confirm is checked
          if (formField.name === "estimated_time" && form.watch("no_wait_confirm")) {
            return null;
          }
          
          return (
            <FormField
              key={index}
              control={form.control}
              name={formField.name}
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <div className="bg-white px-4 rounded-lg flex items-center gap-2 border">
                      <div className="text-primary [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 text-sm">
                        {formField.icon}
                      </div>
                      <input
                        placeholder={formField.placeholder}
                        type={formField.type}
                        {...field}
                        className="w-full border-0 py-3 bg-transparent outline-none text-foreground/80"
                      />
                    </div>
                  </FormControl>
                  <FormMessage className=" px-4 py-1 bg-white/70 rounded-full" />
                </FormItem>
              )}
            />
          );
        })}
        
        {/* Show info when fields are hidden */}
        {form.watch("no_code_required") && (
          <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg">
            <p className="text-sm text-blue-700">
              ℹ️ Confirmation Code field is hidden because "No Confirmation Code Required" is checked.
            </p>
          </div>
        )}
        
        {form.watch("no_wait_confirm") && (
          <div className="p-3 bg-green-50 border border-green-200 rounded-lg">
            <p className="text-sm text-green-700">
              ℹ️ Estimated Time field is hidden because "No Wait for Confirmation" is checked.
            </p>
          </div>
        )}
        <FormField
          control={form.control}
          name="no_wait_confirm"
          render={({ field }) => (
            <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
              <div className="space-y-1 leading-none">
                <label className="text-sm font-medium flex items-center gap-2">
                  <CheckCircle className="w-4 h-4" />
                  No Wait for Confirmation
                </label>
                <p className="text-sm text-muted-foreground">
                  When checked, users can confirm this task immediately without waiting for a timer. The "Estimated Time" field will be hidden.
                </p>
              </div>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="no_code_required"
          render={({ field }) => (
            <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
              <div className="space-y-1 leading-none">
                <label className="text-sm font-medium flex items-center gap-2">
                  <CheckCircle className="w-4 h-4" />
                  No Confirmation Code Required
                </label>
                <p className="text-sm text-muted-foreground">
                  When checked, users don't need to enter a confirmation code to complete this task. The "Confirmation Code" field will be hidden.
                </p>
              </div>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="expired"
          render={({ field }) => (
            <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
              <div className="space-y-1 leading-none">
                <label className="text-sm font-medium flex items-center gap-2">
                  <CheckCircle className="w-4 h-4" />
                  Mark As Expired
                </label>
                <p className="text-sm text-muted-foreground">
                  When checked, this task will not be visible to users
                </p>
              </div>
            </FormItem>
          )}
        />
        <Button type="submit" disabled={adding || updating || !isDirty}>
          {adding || updating ? (
            <LoadingAnimation size="small" />
          ) : data ? (
            "Update Task"
          ) : (
            "Add Task"
          )}
        </Button>
      </form>
    </Form>
  );
};

export default AddEditTask;
