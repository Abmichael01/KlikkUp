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
import { useAddAnnouncement, useUpdateAnnouncement } from "@/api/mutations";
import LoadingAnimation from "@/components/LoadingAnimation";
import { MessageSquare, FileText, CheckCircle } from "lucide-react";
import { Announcement } from "@/types";
import { useQueryClient } from "@tanstack/react-query";
import { useDialog } from "@/hooks/useDialog";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "sonner";
import errorMessage from "@/api/errorMessage";

const formSchema = z.object({
  title: z
    .string()
    .min(5, { message: "Title cannot be less than 5 chars" })
    .max(255, { message: "Title cannot exceed 255 chars" }),
  content: z
    .string()
    .min(10, { message: "Content cannot be less than 10 chars" })
    .max(2000, { message: "Content cannot exceed 2000 chars" }),
  is_active: z.boolean().default(true),
});

interface AddEditAnnouncementProps {
  data?: Announcement;
  update?: boolean;
}

const AddEditAnnouncement: React.FC<AddEditAnnouncementProps> = ({ data, update }) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: update ? data?.title : "",
      content: update ? data?.content : "",
      is_active: update ? data?.is_active : true,
    },
  });

  const { isDirty } = form.formState;
  const { mutate: addAnnouncement, isPending: adding } = useAddAnnouncement();
  const { mutate: updateAnnouncement, isPending: updating } = useUpdateAnnouncement();
  const queryClient = useQueryClient();
  const { setOpen: setUpdateDialog } = useDialog("updateAnnouncement");
  const { setOpen: setAddDialog } = useDialog("addAnnouncement");

  type FormField = {
    name: "title" | "content";
    placeholder: string;
    type: string;
    icon: React.ReactNode;
    isTextarea?: boolean;
  };

  const formFields: FormField[] = [
    {
      name: "title",
      type: "text",
      placeholder: "Enter announcement title",
      icon: <MessageSquare />,
    },
    {
      name: "content",
      type: "text",
      placeholder: "Enter announcement content",
      icon: <FileText />,
      isTextarea: true,
    },
  ];

  function onSubmit(values: z.infer<typeof formSchema>) {
    const mutate = data ? updateAnnouncement : addAnnouncement;
    
    mutate({
      ...values,
      id: data?.id as number
    }, {
      onSuccess: () => {
        toast.success(`Announcement ${data ? 'updated' : 'added'} successfully`);
        queryClient.invalidateQueries({ queryKey: ["announcements"] });
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
    <div className="max-h-[70vh] overflow-y-auto p-1 sm:p-4">
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
                    <div className="bg-white px-4 rounded-lg flex items-start gap-2 border">
                      <div className="text-primary [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 text-sm mt-3">
                        {formField.icon}
                      </div>
                      {formField.isTextarea ? (
                        <textarea
                          placeholder={formField.placeholder}
                          {...field}
                          rows={4}
                          className="w-full border-0 py-3 bg-transparent outline-none text-foreground/80 resize-none"
                        />
                      ) : (
                        <input
                          placeholder={formField.placeholder}
                          type={formField.type}
                          {...field}
                          className="w-full border-0 py-3 bg-transparent outline-none text-foreground/80"
                        />
                      )}
                    </div>
                  </FormControl>
                  <FormMessage className="px-4 py-1 bg-white/70 rounded-full" />
                </FormItem>
              )}
            />
          ))}

          <FormField
            control={form.control}
            name="is_active"
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
                    Active Announcement
                  </label>
                  <p className="text-sm text-muted-foreground">
                    When checked, this announcement will be visible to users
                  </p>
                </div>
              </FormItem>
            )}
          />

          <Button type="submit" disabled={adding || updating || !isDirty}>
            {adding || updating ? (
              <LoadingAnimation size="small" />
            ) : data ? (
              "Update Announcement"
            ) : (
              "Add Announcement"
            )}
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default AddEditAnnouncement;