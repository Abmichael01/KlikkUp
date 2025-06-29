"use client";

import type React from "react";
import { useState } from "react";
import GradientCard from "../ui/GradientCard";
import { CardContent } from "../ui/card";
import MainPadding from "@/layouts/MainPadding";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRight,
  Key,
  Loader,
  ShieldCheck,
  Ticket,
  UserPlus,
} from "lucide-react";
import Logo from "../Logo/Logo";
import { useBuyCoupon } from "@/api/mutations";
import PaystackPop from "@paystack/inline-js";
import { Link } from "react-router";
import { toast } from "sonner";

const BuyCoupon: React.FC = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  const { mutate, isPending } = useBuyCoupon();

  const makePayment = () => {
    const details = {
      email: email,
      name: name,
    };
    mutate(details, {
      onSuccess: (response) => {
        const popup = new PaystackPop();
        popup.resumeTransaction(response.data?.access_code);
        toast.info("The coupon code will sent to your mail if the payment was successful")
      },
      onError: (error) => {
        console.log(error);
      },
    });
  };

  return (
    <MainPadding className="py-10 border-0  flex justify-center">
      <div className="max-w-6xl">
        <div className="text-center mb-8 flex flex-col items-center">
          <div className="mb-5">
            <Logo className="" />
          </div>
          <Badge
            variant="outline"
            className="mb-4 px-3 py-1 bg-blue-50 text-blue-600 border-blue-200"
          >
            <Ticket className="w-3.5 h-3.5 mr-1" /> KlikkUp Registration
          </Badge>
          <h1 className="text-3xl md:text-4xl fancy-font font-bold text-blue-600 mb-3">
            Purchase Your KlikkUp Coupon
          </h1>
          <p className="text-gray-600">
            Get your coupon code instantly and complete your KlikkUp
            registration
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-8 mb-8">
          <div className="md:col-span-3 bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
            <div className="p-6 md:p-8">
              <h2 className="text-xl font-semibold text-gray-800 mb-6">
                Enter Your Details
              </h2>

              <div className="space-y-5">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    placeholder="Enter your full name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <p className="text-sm text-gray-500">
                    Your coupon code will be sent to this email
                  </p>
                </div>

                <div className="pt-4">
                  <Button
                    onClick={makePayment}
                    disabled={isPending}
                    className="w-full py-6 text-lg bg-blue-600 hover:bg-blue-700"
                  >
                    Proceed to Payment
                    {isPending ? (
                      <Loader className="w-5 h-5 ml-2 animate-spin" />
                    ) : (
                      <ArrowRight className="w-5 h-5 ml-2" />
                    )}
                  </Button>
                </div>

                <div className="flex items-center justify-center space-x-2 text-sm text-gray-500">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Secure payment powered by Paystack</span>
                </div>
              </div>
            </div>
          </div>

          <div className="md:col-span-2">
            <GradientCard
              bg="from-blue-600 to-blue-800"
              className="border-0 shadow-lg h-full"
            >
              <CardContent className="p-6 md:p-8">
                <div className="flex justify-between items-start mb-6">
                  <h2 className="text-xl font-bold text-white">
                    Coupon Details
                  </h2>
                  <div className="bg-white/20 p-2 rounded-full">
                    <Key className="w-5 h-5 text-white" />
                  </div>
                </div>

                <div className="bg-white/10 rounded-xl p-5 mb-6">
                  <div className="flex items-baseline justify-center">
                    <span className="text-3xl font-bold text-white">
                      ₦3,000
                    </span>
                  </div>
                  <p className="text-blue-100 text-center mt-2">
                    One-time purchase
                  </p>
                </div>

                <ul className="space-y-3 mb-6">
                  {[
                    "Instant email delivery",
                    "Valid for one KlikkUp registration",
                    "24/7 customer support",
                  ].map((item, index) => (
                    <li key={index} className="flex items-center text-blue-100">
                      <div className="w-5 h-5 mr-2 text-blue-300 flex-shrink-0">
                        ✓
                      </div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="bg-white/10 rounded-xl p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-blue-200">
                        Have a coupon already?
                      </p>
                    </div>
                    <Link to="/auth/register">
                      <Button
                        variant="ghost"
                        className="text-white hover:text-blue-200 hover:bg-white/10 p-2 h-auto"
                      >
                        <UserPlus />
                        <span className="text-sm">Sign Up</span>
                      </Button>
                    </Link>
                  </div>
                </div>
              </CardContent>
            </GradientCard>
          </div>
        </div>

        <div className="bg-blue-50 rounded-xl p-4 border border-blue-100">
          <div className="flex items-start">
            <div className="bg-blue-100 p-2 rounded-full mr-3">
              <ShieldCheck className="w-5 h-5 text-blue-600" />
            </div>
            <div>
              <h3 className="font-medium text-blue-800">
                Important Information
              </h3>
              <p className="text-sm text-blue-700 mt-1">
                After payment, your coupon code will be sent to your email
                immediately. You'll need this code to complete your KlikkUp
                registration.
              </p>
            </div>
          </div>
        </div>
      </div>
    </MainPadding>
  );
};

export default BuyCoupon;
