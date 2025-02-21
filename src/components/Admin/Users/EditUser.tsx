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
  FormLabel,
} from "@/components/ui/form";
import { useUpdateUser } from "@/api/mutations";
import LoadingAnimation from "@/components/LoadingAnimation";
import { Mail, UserIcon } from "lucide-react";
import { User } from "@/types";
import { useMessageToaster } from "@/hooks/useMessageToaster";
import { AxiosError } from "axios";
import { useQueryClient } from "@tanstack/react-query";
import { useDialog } from "@/hooks/useDialog";
import { Checkbox } from "@/components/ui/checkbox";

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  email: z.string().min(2, { message: "Email is required" }),
  is_admin: z.boolean(),
  is_staff: z.boolean(),
});

type FormField = {
  name: "username" | "email";
  label: string;
  type: string;
  required: boolean;
  icon: React.ReactNode;
};

const formFields: FormField[] = [
  {
    name: "username",
    label: "Username",
    type: "text",
    required: true,
    icon: <UserIcon />,
  },
  {
    name: "email",
    label: "Email",
    type: "text",
    required: true,
    icon: <Mail />,
  },
];

interface EditUserProps {
  data: User;
}

const EditUser: React.FC<EditUserProps> = ({ data }) => {
  console.log(data)
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: data ? data.username : "",
      email: data ? data.email : "",
      is_admin: data ? data.is_admin : false,
      is_staff: data ? data.is_staff : false,
    },
  });
  const { isDirty } = form.formState;
  const { mutate, isPending: adding } = useUpdateUser();
  const toastMessage = useMessageToaster();
  const queryClient = useQueryClient();
  const { setOpen: setEditDialog } = useDialog("updateUser");

  function onSubmit(values: User) {
    if (data && data.id) {
      values.id = data.id;
    }
    console.log(values);
    mutate(values, {
      onSuccess: () => {
        toastMessage({
          message: `${values.username} account was successfully updated`,
          type: "success",
        });
        setEditDialog(false);
        queryClient.invalidateQueries({ queryKey: ["users"] });
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
                    <div className="bg-white px-4 rounded-lg flex items-center gap-2 border">
                      <div className="text-primary [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 text-lg">
                        {formField.icon}
                      </div>
                      <input
                        placeholder={formField.label}
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

          <div className="space-y-3">
            <h1 className="pb-4 border-b">User Permissions</h1>
            <FormField
              control={form.control}
              name="is_admin"
              render={({ field }) => (
                <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <div className="space-y-1 leading-none">
                    <FormLabel className="text-sm font-medium">
                      Administrator
                    </FormLabel>
                    <p className="text-sm text-muted-foreground">
                      Can access all areas and manage other users
                    </p>
                  </div>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="is_staff"
              render={({ field }) => (
                <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <div className="space-y-1 leading-none">
                    <FormLabel className="text-sm font-medium">
                      Staff
                    </FormLabel>
                    <p className="text-sm text-muted-foreground">
                      Can moderate user content and comments
                    </p>
                  </div>
                </FormItem>
              )}
            />
          </div>

          <Button type="submit" disabled={adding || !isDirty}>
            {adding ? (
              <LoadingAnimation size="small" />
            ) : (
              "Update User"
            )}
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default EditUser;
