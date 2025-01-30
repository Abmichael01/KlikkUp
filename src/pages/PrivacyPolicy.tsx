import MainPadding from "@/layouts/MainPadding";
import React from "react";

const PrivacyPolicy: React.FC = () => {
  return (
    <MainPadding className="py-10">
      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-white">
          KlikkUp Privacy Policy
        </h1>
      </div>

      {/* Privacy Policy Section */}
      <section className="mb-10 p-5 sm:p-10 bg-white/10 rounded-lg">
        <h2 className="text-2xl font-bold mb-4 text-white">
          Privacy Policy
        </h2>
        <p className="mb-4 text-white">
          At KlikkUp, we value transparency, security, and user satisfaction. Our policies are designed to ensure a fair and rewarding experience for all users while maintaining compliance with legal and ethical standards.
        </p>
        <div className="space-y-4">
          <p className="text-white">
            KlikkUp is committed to protecting your personal information and ensuring a safe browsing and earnings experience. To keep the KlikkUp Platform running, we use third-party advertising companies to serve ads when you visit our website.
          </p>
          <p className="text-white">
            If we decide to change our privacy policy, we will post those changes on this page.
          </p>
        </div>
      </section>

      {/* Data Collection Section */}
      <section className="mb-10 p-5 sm:p-10 bg-white/10 rounded-lg">
        <h2 className="text-2xl font-bold mb-4 text-white">
          Data Collection
        </h2>
        <p className="mb-4 text-white">
          We collect data to improve platform functionality, including:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li className="text-white">
            <strong>Personal Information:</strong> Name, email, and other necessary details for registration.
          </li>
          <li className="text-white">
            <strong>Activity Data:</strong> Stories read, videos watched, tasks completed, and interactions for reward calculation.
          </li>
          <li className="text-white">
            <strong>Device Information:</strong> IP address, browser type, and session duration to optimize security and user experience.
          </li>
        </ul>
      </section>

      {/* Data Protection & Security Section */}
      <section className="mb-10 p-5 sm:p-10 bg-white/10 rounded-lg">
        <h2 className="text-2xl font-bold mb-4 text-white">
          Data Protection & Security
        </h2>
        <p className="mb-4 text-white/90">
          We implement industry-standard security measures, including:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li className="text-white">End-to-end encryption for sensitive data.</li>
          <li className="text-white">Two-factor authentication (2FA) for added account security.</li>
          <li className="text-white">Regular security audits to protect against cyber threats.</li>
        </ul>
        <p className="mt-4 text-white">
          KlikkUp does not sell, rent, or trade user data to third parties. Your data will only be used for internal analytics, fraud prevention, and platform optimization.
        </p>
      </section>

      {/* User Rights Section */}
      <section className="p-5 sm:p-10 bg-white/10 rounded-lg">
        <h2 className="text-2xl font-bold mb-4 text-white">
          User Rights
        </h2>
        <p className="mb-4 text-white/90">
          As a KlikkUp user, you have the right to:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li className="text-white">Access and update your personal information.</li>
          <li className="text-white">Request data deletion if you choose to leave the platform.</li>
          <li className="text-white">Control notifications and preferences through account settings.</li>
        </ul>
        <p className="mt-4 text-white">
          Failure to comply with our privacy policy may result in restrictions or removal from the platform.
        </p>
      </section>

      {/* Footer */}
      <div className="mt-10 text-center text-white">
        <p>Last Updated: October 2023</p>
      </div>
    </MainPadding>
  );
};

export default PrivacyPolicy;