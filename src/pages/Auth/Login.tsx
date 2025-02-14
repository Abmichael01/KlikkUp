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
import { Link, useNavigate, useLocation } from "react-router";
import { Eye, LockIcon, User } from "lucide-react";
import GlidingButton from "@/components/ui/GlidingButton";
import { useLogin } from "@/api/mutations";
import { LoginData } from "@/types";
import { useAuthStore } from "@/stores/useAuthStore";
import { getUser } from "@/api/apiEndpoints";
import { useMessageToaster } from "@/hooks/useMessageToaster";
import { AxiosError } from "axios";

const formSchema = z.object({
  username: z.string().optional(),
  password: z.string().optional(),
});

type FormField = {
  name: "username" | "password";
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
    name: "password",
    label: "Password",
    type: "password",
    placeholder: "Enter your password",
    required: true,
    icon: <LockIcon />,
  },
];

const Login: React.FC = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
    },
  });
  const { mutate, isPending } = useLogin();
  const setUser = useAuthStore((state) => state.setUser);
  const navigate = useNavigate();
  const location = useLocation();
  const toastMessage = useMessageToaster();
  const from = location.state?.from?.pathname || "/dashboard";

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    mutate(values as LoginData, {
      onSuccess: async () => {
        const user = await getUser();
        console.log(user);
        setUser(user);
        navigate(from);
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
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8 w-full flex flex-col"
      >
        <div className="flex flex-col items-center gap-2 text-white">
          <h2 className="text-3xl fancy-font text-center ">Welcome Back</h2>
          <p>Login to your account</p>
        </div>
        {formFields.map((formField, index) => (
          <FormField
            key={index}
            control={form.control}
            name={formField.name as "username" | "password"}
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
                <FormMessage />
              </FormItem>
            )}
          />
        ))}
        <GlidingButton isLoading={isPending}>LOGIN</GlidingButton>
        <div className="text-center text-white">
          <span>Don't have an account? </span>
          <Link to="/auth/register" className="font-semibold">
            Register
          </Link>
        </div>
        <Link to="#" className="text-white font-semibold text-sm text-center">
          Forgot Password?
        </Link>
      </form>
    </Form>
  );
};

export default Login;
