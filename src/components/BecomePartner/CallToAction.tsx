"use client";

import type React from "react";
import { CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowRight, MessageCircle } from "lucide-react";
import GradientCard from "../ui/GradientCard";
import { Link } from "react-router";

const CallToAction: React.FC = () => {
  const whatsappNumber = "+2348101480460"; // Replace with actual number (without + or spaces)

  // Pre-filled message
  const message =
    "Hi! I would like to sign up as a KlikkUp partner. I meet the social media requirements and I'm interested in earning 50% commission on referrals. Please help me get started with the registration process.";

  // Create WhatsApp link
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    message
  )}`;
  return (
    <GradientCard
      bg="from-blue-500 via-blue-600 to-blue-800"
      className="text-center"
    >
      <CardContent className="p-8">
        <div className="max-w-2xl mx-auto">
          <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-white/20 flex items-center justify-center">
            <MessageCircle className="w-10 h-10 text-white" />
          </div>

          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Ready to Start Earning?
          </h3>

          <p className="text-blue-100 mb-6 text-lg">
            Contact our customer support team to register as a partner and start
            earning 50% commission on every referral.
          </p>

          <div className="space-y-4 flex flex-col items-center">
            <Link to={whatsappLink} target="_blank">
              <Button
                size="lg"
                className="bg-white text-blue-600 hover:bg-gray-100 font-semibold px-8 py-3 text-lg"
              >
                Contact Customer Support
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>

            <div className="flex flex-wrap items-center justify-center gap-6 text-blue-100 text-sm">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4" />
                <span>Free to Join</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4" />
                <span>Quick Verification</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4" />
                <span>50% Commission</span>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </GradientCard>
  );
};

export default CallToAction;
