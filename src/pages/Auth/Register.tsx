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
import { Link, useNavigate } from "react-router";
import { Eye, LockIcon, Mail, TicketIcon, User } from "lucide-react";
import GlidingButton from "@/components/ui/GlidingButton";
import { useRegister } from "@/api/mutations";
import { useMessageToaster } from "@/hooks/useMessageToaster";
import { AxiosError } from "axios";

const formSchema = z
  .object({
    username: z.string().min(2, {
      message: "Username must be at least 2 characters.",
    }),
    email: z.string().min(2, { message: "Email is required" }),
    coupon: z
      .string()
      .min(6, { message: "Invalid Coupon code" })
      .max(6, { message: "Invalid coupon code" }),
    password: z
      .string()
      .min(8, { message: "Password must be at least 8 characters." }),
    re_password: z
      .string()
      .min(8, { message: "Password must be at least 8 characters." }),
  })
  .refine((data) => data.password === data.re_password, {
    message: "Passwords do not match",
    path: ["re_password"],
  });

type FormField = {
  name: "username" | "email" | "password" | "re_password" | "coupon";
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
    type: "text",
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
    name: "re_password",
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
      email: "",
      coupon: "",
      password: "",
      re_password: "",
    },
  });

  const { mutate, isPending } = useRegister();
  const toastMessage = useMessageToaster();
  const navigate = useNavigate();

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    mutate(values, {
      onSuccess: () => {
        toastMessage({
          message: "Your accont was successfully created, Login to continue",
          type: "success"
        })
        navigate("/auth/login");
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
                    {formField.type === "password" && (
                      <div className="border-l-[2px] border-primary pl-2">
                        <Eye />
                      </div>
                    )}
                  </div>
                </FormControl>
                <FormMessage className=" px-4 py-1 bg-white/70 rounded-full" />
              </FormItem>
            )}
          />
        ))}
        <GlidingButton isLoading={isPending}>REGISTER</GlidingButton>
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
