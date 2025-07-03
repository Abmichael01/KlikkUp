import React from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { useConvertPoints } from "@/api/mutations";
import { useQueryClient } from "@tanstack/react-query";
import { useDialog } from "@/hooks/useDialog";
import errorMessage from "@/api/errorMessage";

type ConvertPointsProps = {
  totalPoints: number;
};

const ConvertPoints: React.FC<ConvertPointsProps> = ({ totalPoints }) => {
  // Zod schema with dynamic max constraint
  const formSchema = z.object({
    amount: z
      .number({ invalid_type_error: "Amount must be a number" })
      .min(10000, "Amount must be at least 10000")
      .max(totalPoints, `Amount cannot exceed your total of ${totalPoints} points`),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      amount: 10000,
    },
  });

  const { mutate, isPending } = useConvertPoints()
  const queryClient = useQueryClient();
  const { setOpen } = useDialog("convert-points-dialog");

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    // 💸 Handle the logic 
    mutate(values.amount, {
      onSuccess: (data) => {
        toast.success(`Successfully converted ${values.amount} points to ${data.naira_equivalent} Naira!`);
        queryClient.invalidateQueries({ queryKey: ["account-overview"] });
        setOpen(false); // Close the dialog after successful conversion
      },
      onError: (error: Error) => {
        toast.error(errorMessage(error));
      },
    });

    form.reset();
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="amount"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Amount to convert</FormLabel>
              <FormControl>
                <Input
                  type="number"
                  placeholder="Enter amount"
                  {...field}
                  onChange={(e) => field.onChange(Number(e.target.value))}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button disabled={isPending} type="submit" className="w-full">
          {isPending ? <span className="ml-2">Processing...</span> : "Convert"}
        </Button>
      </form>
    </Form>
  );
};

export default ConvertPoints;
