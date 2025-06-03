"use client"

import type React from "react"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Lock, Eye, EyeOff, Shield, Send } from "lucide-react"
import { useChangePassword, useSendOtp } from "@/api/mutations" // Import the hook
import { toast } from "sonner"

const passwordChangeSchema = z
  .object({
    oldPassword: z.string().min(6, "Old password must be at least 6 characters"),
    newPassword: z
      .string()
      .min(8, "New password must be at least 8 characters")
      .regex(
        /^(?=.*[a-z])(?=.*\d)/,
        "Password must contain at least one uppercase letter, one lowercase letter, and one number",
      ),
    confirmPassword: z.string(),
    otp: z.string().min(4, "OTP must be at least 4 characters").max(8, "OTP must be at most 8 characters"),
  })
  .refine((data) => data.newPassword === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  })

type PasswordChangeFormData = z.infer<typeof passwordChangeSchema>

const PasswordChangeForm: React.FC = () => {
  const [otpSent, setOtpSent] = useState(false)
  const [passwordVisibility, setPasswordVisibility] = useState({
    oldPassword: false,
    newPassword: false,
    confirmPassword: false,
  })

  // Use the provided mutation hook
  const { mutate: sendOtp, isPending: sendingOtp } = useSendOtp()
  const { mutate, isPending } = useChangePassword()

  const form = useForm<PasswordChangeFormData>({
    resolver: zodResolver(passwordChangeSchema),
    defaultValues: {
      oldPassword: "",
      newPassword: "",
      confirmPassword: "",
      otp: "",
    },
  })

  const onSubmit = async (data: PasswordChangeFormData) => {
    console.log(data)
    mutate(data, {
        onSuccess: () => {
            toast.success("Password changed successfully!")
            form.reset()
            setOtpSent(false)
        }
    })
  }

  const handleSendOtp = () => {
    // Use the mutation hook to send OTP
    sendOtp(
      undefined,
      {
        onSuccess: () => {
          setOtpSent(true)
          toast.success("OTP sent successfully!")
        },
        onError: (error: unknown) => {
          console.error("Error sending OTP:", error)
        },
      },
    )
  }

  const togglePasswordVisibility = (field: keyof typeof passwordVisibility) => {
    setPasswordVisibility((prev) => ({
      ...prev,
      [field]: !prev[field],
    }))
  }

  // Form fields configuration
  const formFields = [
    {
      name: "oldPassword" as const,
      label: "Current Password",
      type: "password",
      placeholder: "Enter current password",
      hasVisibilityToggle: true,
    },
    {
      name: "newPassword" as const,
      label: "New Password",
      type: "password",
      placeholder: "Enter new password",
      hasVisibilityToggle: true,
    },
    {
      name: "confirmPassword" as const,
      label: "Confirm New Password",
      type: "password",
      placeholder: "Confirm new password",
      hasVisibilityToggle: true,
    },
    {
      name: "otp" as const,
      label: "OTP Code",
      type: "text",
      placeholder: "Enter OTP code",
      maxLength: 8,
      hasVisibilityToggle: false,
      hasOtpButton: true,
    },
  ]

  return (
    <Card className="w-full mx-auto">
      <CardHeader className="text-center">
        <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-red-100 flex items-center justify-center">
          <Lock className="w-6 h-6 text-red-600" />
        </div>
        <CardTitle className="text-2xl font-bold">Change Password</CardTitle>
        <CardDescription>Update your password with OTP verification</CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            {formFields.map((field) => (
              <FormField
                key={field.name}
                control={form.control}
                name={field.name}
                render={({ field: formField }) => (
                  <FormItem>
                    <FormLabel>{field.label}</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Input
                          type={
                            field.hasVisibilityToggle
                              ? passwordVisibility[field.name as keyof typeof passwordVisibility]
                                ? "text"
                                : "password"
                              : field.type
                          }
                          placeholder={field.placeholder}
                          maxLength={field.maxLength}
                          disabled={isPending}
                          {...formField}
                        />
                        {field.hasVisibilityToggle && (
                          <Button
                            type="button"
                            variant="ghost"
                            size="sm"
                            className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                            onClick={() => togglePasswordVisibility(field.name as keyof typeof passwordVisibility)}
                            disabled={isPending}
                          >
                            {passwordVisibility[field.name as keyof typeof passwordVisibility] ? (
                              <EyeOff className="h-4 w-4" />
                            ) : (
                              <Eye className="h-4 w-4" />
                            )}
                          </Button>
                        )}
                        {field.hasOtpButton && (
                          <Button
                            type="button"
                            variant="outline"
                            size="sm"
                            className="absolute right-1 top-1/2 -translate-y-1/2 h-8 px-3"
                            onClick={handleSendOtp}
                            disabled={sendingOtp || isPending}
                          >
                            {sendingOtp ? (
                              <>
                                <Send className="w-3 h-3 mr-1 animate-spin" />
                                Sending...
                              </>
                            ) : otpSent ? (
                              "Resend"
                            ) : (
                              <>
                                <Send className="w-3 h-3 mr-1" />
                                Send OTP
                              </>
                            )}
                          </Button>
                        )}
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            ))}

            <Button type="submit" className="w-full" disabled={ !otpSent || isPending}>
              {isPending ? (
                <>
                  <Shield className="w-4 h-4 mr-2 animate-spin" />
                  Updating Password...
                </>
              ) : (
                <>
                  <Lock className="w-4 h-4 mr-2" />
                  Change Password
                </>
              )}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  )
}

export default PasswordChangeForm
