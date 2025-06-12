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
import { useAddGiveaway, useUpdateGiveaway } from "@/api/mutations";
import { ClipboardList, Gift, Calendar } from "lucide-react";
import { useQueryClient } from "@tanstack/react-query";
import { useDialog } from "@/hooks/useDialog";
import { toast } from "sonner";
import { Giveaway } from "@/types";
import errorMessage from "@/api/errorMessage";
import LoadingAnimation from "@/components/LoadingAnimation";

const formSchema = z.object({
  title: z.string().min(5).max(255),
  prize: z.string().min(5).max(255),
  date: z.string(),
});

interface AddEditGiveawayProps {
  data?: Giveaway;
  update?: boolean;
}

const AddEditGiveaway: React.FC<AddEditGiveawayProps> = ({ data, update }) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: update ? data?.title : "",
      prize: update ? data?.prize : "",
      date: update ? new Date(data?.date as string).toISOString().slice(0, 16) : "",
    },
  });

  const { isDirty } = form.formState;

  const { mutate: addGiveaway, isPending: adding } = useAddGiveaway();
  const { mutate: updateGiveaway, isPending: updating } = useUpdateGiveaway();

  const queryClient = useQueryClient();
  const { setOpen: setUpdateDialog } = useDialog("updateGiveaway");
  const { setOpen: setAddDialog } = useDialog("addGiveaway");

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    const mutate = data ? updateGiveaway : addGiveaway;
    mutate(
      { ...values, id: data?.id as number },
      {
        onSuccess: () => {
          toast.success(`Giveaway ${update ? "updated" : "added"} successfully`);
          queryClient.invalidateQueries({ queryKey: ["giveaways"] });
          if (data) setUpdateDialog(false);
          else setAddDialog(false);
        },
        onError: (error) => {
          toast.error(errorMessage(error));
        },
      }
    );
  };

  const formFields = [
    {
      name: "title",
      placeholder: "Title",
      icon: <ClipboardList />,
    },
    {
      name: "prize",
      placeholder: "Prize",
      icon: <Gift />,
    },
    {
      name: "date",
      placeholder: "Giveaway Date",
      icon: <Calendar />,
      type: "datetime",
    },
  ];

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        {formFields.map((field, index) => (
          <FormField
            key={index}
            control={form.control}
            name={field.name as keyof typeof formSchema.shape}
            render={({ field: formField }) => (
              <FormItem>
                <FormControl>
                  <div className="bg-white px-4 rounded-lg flex items-center gap-2 border">
                    <div className="text-primary [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 text-sm">
                      {field.icon}
                    </div>
                    <input
                      type={field.type || "text"}
                      placeholder={field.placeholder}
                      {...formField}
                      className="w-full border-0 py-3 bg-transparent outline-none text-foreground/80"
                    />
                  </div>
                </FormControl>
                <FormMessage className="px-4 py-1 bg-white/70 rounded-full" />
              </FormItem>
            )}
          />
        ))}
        <Button type="submit" disabled={adding || updating || !isDirty}>
          {adding || updating ? <LoadingAnimation size="small" /> : update ? "Update Giveaway" : "Add Giveaway"}
        </Button>
      </form>
    </Form>
  );
};

export default AddEditGiveaway;