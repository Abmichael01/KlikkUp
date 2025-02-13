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
import { useAddTask, useUpdateTask } from "@/api/mutations";
import LoadingAnimation from "@/components/LoadingAnimation";
import { ClipboardList, Gift, Link, ThumbsUp } from "lucide-react";
import { Task } from "@/types";
import { useMessageToaster } from "@/hooks/useMessageToaster";
import { AxiosError } from "axios";
import { useQueryClient } from "@tanstack/react-query";
import { useDialog } from "@/hooks/useDialog";

const formSchema = z.object({
  title: z
    .string()
    .min(5, { message: "Title cannot be less than 5 chars" })
    .max(225, { message: "Title cannot exceed 225 chars" }),
  link: z.string().min(1, { message: "Link is required" }),
  reward: z.coerce.number().min(1, "Reward cannot be lesser than 1"),
  confirmation_code: z.string().optional(),
});

interface AddEditTaskProps {
  data?: Task;
  update?: boolean;
}

const AddEditTask: React.FC<AddEditTaskProps> = ({ data, update }) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: update ? data?.title : "",
      link: update ? data?.link : "",
      confirmation_code: update ? data?.confirmation_code : "",
      reward: update ? data?.reward : 500,
    },
  });
  const { isDirty } = form.formState;
  const { mutate: addTask, isPending: adding } = useAddTask();
  const { mutate: updateTask, isPending: updating } = useUpdateTask();
  const toastMessage = useMessageToaster();
  const queryClient = useQueryClient()
  const { setOpen: setUpdateDialog } = useDialog("updateTask")
  const { setOpen: setAddDialog } = useDialog("addTask")


  type FormField = {
    name: "title" | "link" | "reward" | "confirmation_code";
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
  ];

  function onSubmit(values: Task) {
    if (data && data.id) {
      values.id = data.id;
    }
    const mutate = data ? updateTask : addTask;
    mutate(values, {
      onSuccess: () => {
        toastMessage({
          message: `Task ${data ? "updated" : "added"} successfully`,
        });
        queryClient.invalidateQueries({ queryKey: ["tasks"] })
        console.log(open)
        if (data) {
          setUpdateDialog(false)
        } else {
          setAddDialog(false)
        }
        
      },
      onError: (error) => {
        const errorMessages = (error as AxiosError)?.response?.data as Record<string, string[]>;
        for (const key in errorMessages) {
          toastMessage({
            message: errorMessages[key].join(", "),
            type: "error"
          })
        }
      },
    });
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        {formFields.map((formField, index) => (
          <FormField
            key={index}
            control={form.control}
            name={formField.name}
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <div className="bg-white px-4 rounded-lg flex items-center gap-2 border">
                    <div className="text-primary [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 text-sm">{formField.icon}</div>
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
        ))}
        <Button type="submit" disabled={adding || updating || !isDirty}>
          {adding || updating ? <LoadingAnimation size="small" /> : data ? "Update Task" : "Add Task"}
        </Button>
      </form>
    </Form>
  );
};

export default AddEditTask;
