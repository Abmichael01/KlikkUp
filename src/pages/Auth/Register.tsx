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
import { Link, useNavigate, useSearchParams } from "react-router";
import { Eye, EyeClosed, LockIcon, Mail, TicketIcon, User, Users } from "lucide-react";
import GlidingButton from "@/components/ui/GlidingButton";
import { useRegister } from "@/api/mutations";
import { useMessageToaster } from "@/hooks/useMessageToaster";
import { AxiosError } from "axios";
import { Alert, AlertDescription } from "@/components/ui/alert";

const formSchema = z
  .object({
    username: z.string().min(3, {
      message: "Username must be at least 3 characters.",
    }),
    email: z.string().min(2, { message: "Email is required" }),
    coupon: z
      .string()
      .min(6, { message: "Invalid Coupon code" })
      .max(6, { message: "Invalid coupon code" }),
    ref_code: z.string().min(2, { message: "Referral code is required" }),
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
  name:
    | "username"
    | "email"
    | "password"
    | "re_password"
    | "coupon"
    | "ref_code";
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
    name: "ref_code",
    label: "Referral Code",
    type: "text",
    placeholder: "Referral Code",
    required: true,
    icon: <Users />,
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
  const [ params ] = useSearchParams()
  const couponCode = params.get("coupon_code")
  const refCode = params.get("ref_code")
   const [passwordVisibility, setPasswordVisibility] = React.useState<Record<string, boolean>>({
    password: false,
    confirmPassword: false
  });
  const [errorMessages, setErrorMessages] =
    React.useState<Record<string, string[]>>();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
      coupon: couponCode || "",
      ref_code: refCode || "",
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
          type: "success",
        });
        navigate("/auth/login");
      },
      onError: (error) => {
        const errorMessages = (error as AxiosError)?.response?.data as Record<
          string,
          string[]
        >;
        setErrorMessages(errorMessages);
        for (const key in errorMessages) {
          toastMessage({
            message: errorMessages[key].join(", "),
            type: "error",
          });
        }
      },
    });
  }

  const fieldLabels: Record<string, string> = {
    username: "Username",
    password: "Password",
    email: "Email",
    ref_code: "Referral Code",
    coupon: "Coupon Code",
    non_field_errors: "Error",
  };

  const toggleVisibility = (fieldName: string) => {
    setPasswordVisibility(prev => ({
      ...prev,
      [fieldName]: !prev[fieldName],
    }));
  };
  

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

        <div className="space-y-5">
          {errorMessages &&
            Object.keys(errorMessages).length > 0 &&
            Object.entries(errorMessages).map(([field, messages]) =>
              messages.map((message: string, index: number) => (
                <Alert key={`${field}-${index}`} className="text-destructive-foreground bg-destructive border-destructive">
                  <AlertDescription>
                    {`${fieldLabels[field] || field}: ${message}`}
                  </AlertDescription>
                </Alert>
              ))
            )}
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
                      type={
                        formField.type === "password"
                          ? passwordVisibility[formField.name]
                            ? "text"
                            : "password"
                          : formField.type
                      }
                      {...field}
                      className="w-full border-0 py-3 bg-transparent outline-none text-foreground/80"
                    />
                    {formField.type === "password" && (
                      <div 
                      onClick={() => toggleVisibility(formField.name)}
                      className="border-l-[2px] border-primary pl-2 cursor-pointer">
                        {passwordVisibility[formField.name] ? <EyeClosed /> : <Eye />}
                      </div>
                    )}
                  </div>
                </FormControl>
                <FormMessage className=" px-4 py-1 bg-destructive/80 text-destructive-foreground rounded-full" />
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
