import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";


import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Link } from "react-router";
import { Eye, LockIcon, Mail, TicketIcon, User } from "lucide-react";
import GlidingButton from "@/components/ui/GlidingButton";

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  email: z.string().min(2, { message: "Email is required" }),
  coupon: z
    .string()
    .min(8, { message: "Invalid Coupon code" })
    .max(8, { message: "Invalid coupon code" }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters." }),
  confirmPassword: z.string(),
});

type FormField = {
  name: "username" | "email" | "password" | "confirmPassword" | "coupon";
  label: string;
  placeholder: string;
  type: string;
  required: boolean;
  icon: React.ReactNode;
};

const formFields: FormField[] = [
  {
    name: "username",
    label: "Username",
    type: "text",
    placeholder: "Enter your username",
    required: true,
    icon: <User />,
  },
  {
    name: "email",
    label: "Email",
    type: "email",
    placeholder: "Enter your email",
    required: true,
    icon: <Mail />,
  },
  {
    name: "coupon",
    label: "Coupon Code",
    type: "text",
    placeholder: "Enter your purchased coupon code",
    required: true,
    icon: <TicketIcon />,
  },
  {
    name: "password",
    label: "Password",
    type: "password",
    placeholder: "Enter your password",
    required: true,
    icon: <LockIcon />,
  },
  {
    name: "confirmPassword",
    label: "Confirm Password",
    type: "password",
    placeholder: "Confirm your password",
    required: true,
    icon: <LockIcon />,
  },
];

const Register: React.FC = () => {
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
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8 w-full flex flex-col"
      >
        <div className="flex flex-col items-center gap-2 text-white">
          <h2 className="text-3xl fancy-font text-center ">Register</h2>
          <p>Create your account</p>
        </div>
        {formFields.map((formField, index) => (
          <FormField
            key={index}
            control={form.control}
            name={formField.name}
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <div className="bg-white px-4 rounded-lg flex items-center gap-2 border border-black/80">
                    <div className="text-primary">{formField.icon}</div>
                    <input
                      placeholder={formField.label}
                      type={formField.type}
                      {...field}
                      className="w-full border-0 py-3 bg-transparent outline-none text-foreground/80"
                    />
                    {formField.type === "password" && 
                      <div className="border-l-[2px] border-primary pl-2">
                        <Eye />
                      </div>
                    }
                  </div>
                </FormControl>
                <FormMessage className="text-black" />
              </FormItem>
            )}
          />
        ))}
        <GlidingButton>
          REGISTER
        </GlidingButton>
        <p className="text-center text-white">
          Already have an account?{" "}
          <Link to="/auth/login" className="font-semibold underline">
            Login
          </Link>
        </p>
      </form>
    </Form>
  );
};

export default Register;
