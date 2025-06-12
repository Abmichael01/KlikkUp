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
import { ClipboardList, Gift, Link, ThumbsUp, Timer } from "lucide-react";
import { Task } from "@/types";
import { useQueryClient } from "@tanstack/react-query";
import { useDialog } from "@/hooks/useDialog";
import ImagePicker from "../ImagePicker";
import { toast } from "sonner";
import errorMessage from "@/api/errorMessage";

const formSchema = z.object({
  title: z
    .string()
    .min(5, { message: "Title cannot be less than 5 chars" })
    .max(225, { message: "Title cannot exceed 225 chars" }),
  link: z.string().min(1, { message: "Link is required" }),
  reward: z.coerce.number().min(1, "Reward cannot be lesser than 1"),
  confirmation_code: z.string().optional(),
  estimated_time: z.coerce.number().min(1, "Reward cannot be lesser than 1"),
  banner: z.string().optional()
});

interface AddEditTaskProps {
  data?: Task;
  update?: boolean;
}

const AddEditTask: React.FC<AddEditTaskProps> = ({ data, update }) => {
  const [imgUrl, setImgUrl] = useState<string>()
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: update ? data?.title : "",
      link: update ? data?.link : "",
      confirmation_code: update ? data?.confirmation_code : "",
      reward: update ? data?.reward : 500,
      estimated_time: update ? data?.estimated_time :  1,
      banner: imgUrl,
    },
  });

  useEffect(() => {
    if (imgUrl !== form.getValues('banner')) {
      form.setValue('banner', imgUrl || '', { shouldDirty: true });
    }
  }, [imgUrl, form]);
  
  const { isDirty } = form.formState;
  const { mutate: addTask, isPending: adding } = useAddTask();
  const { mutate: updateTask, isPending: updating } = useUpdateTask();
  const queryClient = useQueryClient()
  const { setOpen: setUpdateDialog } = useDialog("updateTask")
  const { setOpen: setAddDialog } = useDialog("addTask")
  console.log(data)

  useEffect(() => {
    setImgUrl(data?.banner)
  }, [setImgUrl, data])

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
    console.log({...values, 
      banner: imgUrl,
      id: data?.id
    })
    mutate({...values, 
      id: data?.id
    }, {
      onSuccess: () => {
        toast.success("Task update was successfull")
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
      <form onSubmit={form.handleSubmit(onSubmit)} className=" max-h-[70vh] overflow-y-auto space-y-8">
        <ImagePicker imgUrl={imgUrl} setImgUrl={setImgUrl} title="Upload Banner" />
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
