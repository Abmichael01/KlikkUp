import MainPadding from "@/layouts/MainPadding";
import React from "react";

const TermsOfService: React.FC = () => {
  return (
    <MainPadding className="py-10">
      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-white">
          KlikkUp Terms of Service
        </h1>
        <p className="mt-4 text-lg text-white/80">
          By accessing or using KlikkUp, you agree to the following terms:
        </p>
      </div>

      {/* Account Eligibility & Usage Section */}
      <section className="mb-10 p-5 sm:p-10 bg-white/10 rounded-lg">
        <h2 className="text-2xl font-bold mb-4 text-white">
          Account Eligibility & Usage
        </h2>
        <ul className="list-disc pl-6 space-y-2">
          <li className="text-white">
            Users must be 18 years or older (or have parental consent).
          </li>
          <li className="text-white">
            Each user is allowed one account only—multiple accounts for the same individual are not permitted.
          </li>
          <li className="text-white">
            Users must provide accurate information during registration.
          </li>
        </ul>
      </section>

      {/* Earning & Redeeming Points Section */}
      <section className="mb-10 p-5 sm:p-10 bg-white/10 rounded-lg">
        <h2 className="text-2xl font-bold mb-4 text-white">
          Earning & Redeeming Points
        </h2>
        <ul className="list-disc pl-6 space-y-2">
          <li className="text-white">
            Points are rewarded based on genuine participation in KlikkUp activities.
          </li>
          <li className="text-white">
            Users attempting to manipulate the system (e.g., using bots, fake accounts) will be banned without notice.
          </li>
          <li className="text-white">
            KlikkUp reserves the right to adjust reward structures based on platform updates.
          </li>
        </ul>
      </section>

      {/* Token Conversion & Withdrawals Section */}
      <section className="mb-10 p-5 sm:p-10 bg-white/10 rounded-lg">
        <h2 className="text-2xl font-bold mb-4 text-white">
          Token Conversion & Withdrawals
        </h2>
        <ul className="list-disc pl-6 space-y-2">
          <li className="text-white">
            Earned points can be converted into tokens at rates determined by KlikkUp.
          </li>
          <li className="text-white">
            Withdrawals require identity verification to prevent fraud.
          </li>
          <li className="text-white">
            A processing fee may apply to withdrawals based on blockchain network fees.
          </li>
        </ul>
      </section>

      {/* Anti-Fraud & Security Policy Section */}
      <section className="mb-10 p-5 sm:p-10 bg-white/10 rounded-lg">
        <h2 className="text-2xl font-bold mb-4 text-white">
          Anti-Fraud & Security Policy
        </h2>
        <p className="mb-4 text-white">
          We take platform integrity seriously and have strict measures against fraud.
        </p>
        <h3 className="text-xl font-bold mb-2 text-white">Prohibited Activities</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li className="text-white">
            Using automated scripts or bots to farm points.
          </li>
          <li className="text-white">
            Exploiting bugs, loopholes, or vulnerabilities in the system.
          </li>
          <li className="text-white">
            Engaging in spam, self-referrals, or fake engagements.
          </li>
        </ul>
        <h3 className="text-xl font-bold mt-4 mb-2 text-white">Penalties for Violations</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li className="text-white">
            Immediate account suspension without warning.
          </li>
          <li className="text-white">
            Forfeiture of earned points and tokens.
          </li>
          <li className="text-white">
            Permanent ban from KlikkUp services.
          </li>
          <li className="text-white">
            Legal action if fraudulent activities involve financial losses or data breaches.
          </li>
        </ul>
        <h3 className="text-xl font-bold mt-4 mb-2 text-white">Security Measures</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li className="text-white">
            Real-time monitoring for suspicious activities.
          </li>
          <li className="text-white">
            Secure wallet integration for safe token storage and withdrawals.
          </li>
          <li className="text-white">
            KYC (Know Your Customer) verification for high-value transactions.
          </li>
        </ul>
      </section>

      {/* Community Guidelines Section */}
      <section className="mb-10 p-5 sm:p-10 bg-white/10 rounded-lg">
        <h2 className="text-2xl font-bold mb-4 text-white">
          Community Guidelines
        </h2>
        <p className="mb-4 text-white">
          KlikkUp is a community-driven platform, and all users must engage respectfully.
        </p>
        <h3 className="text-xl font-bold mb-2 text-white">Code of Conduct</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li className="text-white">
            No hate speech, harassment, or abusive language is allowed.
          </li>
          <li className="text-white">
            No spreading of misinformation or engagement in unethical behavior.
          </li>
          <li className="text-white">
            Respect all users and platform moderators.
          </li>
        </ul>
        <h3 className="text-xl font-bold mt-4 mb-2 text-white">Content Guidelines</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li className="text-white">
            Plagiarism is strictly prohibited—users must share original content.
          </li>
          <li className="text-white">
            No explicit, illegal, or harmful content may be shared on KlikkUp.
          </li>
          <li className="text-white">
            Violations will result in content removal and possible account penalties.
          </li>
        </ul>
      </section>

      {/* Disclaimer & Liability Section */}
      <section className="mb-10 p-5 sm:p-10 bg-white/10 rounded-lg">
        <h2 className="text-2xl font-bold mb-4 text-white">
          Disclaimer & Liability
        </h2>
        <p className="mb-4 text-white">
          KlikkUp operates as a Web3 rewards platform and does not guarantee any financial gain.
        </p>
        <h3 className="text-xl font-bold mb-2 text-white">Token Value & Trading Risks</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li className="text-white">
            The value of KlikkUp tokens may fluctuate based on market demand.
          </li>
          <li className="text-white">
            KlikkUp is not responsible for financial losses incurred through trading or external investments.
          </li>
        </ul>
        <h3 className="text-xl font-bold mt-4 mb-2 text-white">Platform Liability</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li className="text-white">
            KlikkUp is not responsible for user negligence (e.g., lost wallet keys, incorrect transactions).
          </li>
          <li className="text-white">
            KlikkUp does not provide refunds once tokens are withdrawn.
          </li>
          <li className="text-white">
            Users are responsible for securing their accounts and wallets.
          </li>
        </ul>
      </section>

      {/* Policy Updates & Compliance Section */}
      <section className="mb-10 p-5 sm:p-10 bg-white/10 rounded-lg">
        <h2 className="text-2xl font-bold mb-4 text-white">
          Policy Updates & Compliance
        </h2>
        <h3 className="text-xl font-bold mb-2 text-white">Updates to Policies</h3>
        <p className="mb-4 text-white">
          KlikkUp reserves the right to update policies at any time. Users will be notified of major changes via email or platform announcements.
        </p>
        <h3 className="text-xl font-bold mb-2 text-white">Compliance with Local Laws</h3>
        <p className="mb-4 text-white">
          Users must ensure that their participation in KlikkUp complies with local laws and regulations in their country. KlikkUp is not liable for any legal consequences due to non-compliance.
        </p>
      </section>

      {/* Copyright Notice Section */}
      <section className="p-5 sm:p-10 bg-white/10 rounded-lg">
        <h2 className="text-2xl font-bold mb-4 text-white">
          COPYRIGHT NOTICE
        </h2>
        <p className="mb-4 text-white">
          We try not to infringe on any right-of-usage by reviewing the Terms of use/service of most of our sources and contents posted on this platform, but because Terms of use/service could change at any time and we do not guarantee to keep track of all our sources’ Terms of use/service.
        </p>
        <p className="text-white">
          We implore any source or individual content that feels we encroached on its copyright to give us notice of de-linking or removing contents via our contact us, we promise to remove the content from the database within 24 hours of confirming the request originated from the right news source.
        </p>
      </section>

      {/* Footer */}
      <div className="mt-10 text-center text-white">
        <p>Last Updated: October 2023</p>
      </div>
    </MainPadding>
  );
};

export default TermsOfService;