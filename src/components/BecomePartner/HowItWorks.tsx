"use client";

import type React from "react";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Users, UserPlus, Coins, Zap } from "lucide-react";
import GradientCard from "../ui/GradientCard";
import { Link } from "react-router";

const HowItWorks: React.FC = () => {
  const [referralCount, setReferralCount] = useState<number>(1);
  const steps = [
    {
      id: 1,
      icon: Users,
      title: "Setup Partner Account",
      description: "Free account for you",
    },
    {
      id: 2,
      icon: Users,
      title: "You Refer",
      description: "Share your link",
    },
    {
      id: 3,
      icon: UserPlus,
      title: "User Registers",
      description: "Pays ₦3,000 fee",
    },
    {
      id: 4,
      icon: Coins,
      title: "You Earn",
      description: "Get ₦1,500 (50%)",
    },
  ];

  const whatsappNumber = "+2348101480460"; // Replace with actual number (without + or spaces)

  // Pre-filled message
  const message =
    "Hi! I would like to sign up as a KlikkUp partner. I meet the social media requirements and I'm interested in earning 50% commission on referrals. Please help me get started with the registration process.";

  // Create WhatsApp link
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <div className="mx-auto px-4">
      <div className="text-center mb-12">
        <Badge
          variant="outline"
          className="mb-4 px-3 py-1 bg-green-50 text-green-600 border-green-200"
        >
          <Zap className="w-3.5 h-3.5 mr-1" /> How It Works
        </Badge>
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Earn 50% Commission on Every Referral
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Simple and rewarding. Watch how you earn money by referring new users
          to KlikkUp.
        </p>
      </div>

      {/* Simple Flow with Moving Coin */}
      <div className="relative ">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {steps.map((step) => {
            const IconComponent = step.icon;
            return (
              <GradientCard
                key={step.id}
                className="relative"
                bg="from-blue-200 via-blue-500 to-blue-700"
              >
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-blue-100 flex items-center justify-center text-blue-500">
                    <IconComponent className="w-8 h-8" />
                  </div>
                  <h3 className="font-semibold text-white mb-2">
                    {step.title}
                  </h3>
                  <Badge className="text-primary bg-white">
                    {step.description}
                  </Badge>
                </CardContent>
              </GradientCard>
            );
          })}
        </div>
      </div>

      {/* Interactive Calculation */}
      <Card className="bg-gradient-to-r from-green-50 to-blue-50 border-0 shadow-lg">
        <CardContent className="p-6">
          <div className="text-center">
            <h3 className="text-xl font-bold text-gray-800 mb-6">
              Calculate Your Earnings
            </h3>

            <div className="max-w-md mx-auto mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                How many referrals do you want to target?
              </label>
              <Input
                type="number"
                min="1"
                value={referralCount}
                onChange={(e) =>
                  setReferralCount(Math.max(1, parseInt(e.target.value) || 1))
                }
                className="text-center text-lg font-semibold"
                placeholder="Enter number of referrals"
              />
            </div>

            <div className="space-y-3">
              <div className="flex items-center justify-center space-x-4 text-lg">
                <span className="font-semibold">
                  {referralCount} user{referralCount !== 1 ? "s" : ""} × ₦3,000
                </span>
                <span className="text-gray-400">→</span>
                <span className="font-semibold text-green-600">
                  You get ₦{(referralCount * 1500).toLocaleString()}
                </span>
              </div>

              <div className="text-sm text-gray-600">
                Total revenue: ₦{(referralCount * 3000).toLocaleString()} | Your
                commission: ₦{(referralCount * 1500).toLocaleString()} (50%)
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* CTA */}
      <div className="flex justify-center">
        <Link to={whatsappLink} target="_blank" className="text-center mt-8">
          <Button
            size="lg"
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
          >
            <Zap className="w-5 h-5 mr-2" />
            Get Started
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default HowItWorks;
