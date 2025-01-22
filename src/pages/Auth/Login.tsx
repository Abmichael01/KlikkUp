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
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Link } from "react-router";

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters." }),
});

type FormField = {
  name: "username" | "password";
  label: string;
  placeholder: string;
  type: string;
  required: boolean;
};

const formFields: FormField[] = [
  {
    name: "username",
    label: "Username",
    type: "text",
    placeholder: "Enter your username",
    required: true,
  },
  {
    name: "password",
    label: "Password",
    type: "password",
    placeholder: "Enter your password",
    required: true,
  },

];

const Login: React.FC = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 w-full flex flex-col">
        <h2 className="text-2xl fancy-font text-center">
          Login to Continue Earning
        </h2>
        {formFields.map((formField, index) => (
          <FormField
            key={index}
            control={form.control}
            name={formField.name as "username" | "password"}
            render={({ field }) => (
              <FormItem>
                <FormLabel>{formField.label}</FormLabel>
                <FormControl>
                  <Input
                    placeholder={formField.placeholder}
                    type={formField.type}
                    {...field}
                    className="w-full"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        ))}
        <Button type="submit" className="self-center px-10">Login</Button>
        <div className="text-center">
          <span>Don't have an account? </span>
          <Link to="/auth/register" className="font-semibold">Register</Link>
        </div>
      </form>
    </Form>
  );
};

export default Login;
