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
import { Mail, Shield, Send } from "lucide-react"
import { useSendOtp } from "@/api/mutations"
import { toast } from "sonner"

const changeEmailSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
  otp: z.string().min(4, "OTP must be at least 4 characters").max(8, "OTP must be at most 8 characters"),
})

type ChangeEmailFormData = z.infer<typeof changeEmailSchema>

const ChangeEmailForm: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [otpSent, setOtpSent] = useState(false)

  // Use the provided mutation hook
  const { mutate: sendOtp, isPending: sendingOtp } = useSendOtp()

  const form = useForm<ChangeEmailFormData>({
    resolver: zodResolver(changeEmailSchema),
    defaultValues: {
      email: "",
      otp: "",
    },
  })

  const onSubmit = async (data: ChangeEmailFormData) => {
    setIsLoading(true)
    try {
      console.log("Change Email Form Data:", data)
      // Handle form submission here
      // Example: await changeEmail(data)
    } catch (error) {
      console.error("Error submitting form:", error)
    } finally {
      setIsLoading(false)
    }
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
        onError: (error) => {
          console.error("Error sending OTP:", error)
        },
      },
    )
  }

  // Form fields configuration
  const formFields = [
    {
      name: "email" as const,
      label: "Email Address",
      type: "email",
      placeholder: "Enter your email",
    },
    {
      name: "otp" as const,
      label: "OTP Code",
      type: "text",
      placeholder: "Enter OTP code",
      maxLength: 8,
      hasOtpButton: true,
    },
  ]

  return (
    <Card className="w-full mx-auto">
      <CardHeader className="text-center">
        <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-blue-100 flex items-center justify-center">
          <Mail className="w-6 h-6 text-blue-600" />
        </div>
        <CardTitle className="text-2xl font-bold">Change Email</CardTitle>
        <CardDescription>Enter your new email and the OTP code sent to you</CardDescription>
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
                          type={field.type}
                          placeholder={field.placeholder}
                          maxLength={field.maxLength}
                          disabled={isLoading}
                          {...formField}
                        />
                        {field.hasOtpButton && (
                          <Button
                            type="button"
                            variant="outline"
                            size="sm"
                            className="absolute right-1 top-1/2 -translate-y-1/2 h-8 px-3"
                            onClick={handleSendOtp}
                            disabled={sendingOtp || isLoading}
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

            <Button type="submit" className="w-full" disabled={isLoading || !otpSent}>
              {isLoading ? (
                <>
                  <Shield className="w-4 h-4 mr-2 animate-spin" />
                  Verifying...
                </>
              ) : (
                <>
                  <Shield className="w-4 h-4 mr-2" />
                  Change Email
                </>
              )}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  )
}

export default ChangeEmailForm
