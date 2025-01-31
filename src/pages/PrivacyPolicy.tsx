import MainPadding from "@/layouts/MainPadding"
import { useEffect } from "react"
import { scrollToSection } from "@/lib/scroller"
import { useSearchParams } from "react-router"

export default function PrivacyPolicy() {
  const [searchParams] = useSearchParams()
  const section = searchParams.get("section")

  useEffect(() => {
    if (section === "terms" || section === "privacy") {
      scrollToSection(section)
    }
  }, [section])

  return (
    <MainPadding className="py-10 bg-white">
      <div id="privacy">
        <h1 className="text-4xl font-bold mb-6 text-center">Policies</h1>
        <p className="mb-4">
          At KlikkUp, we value transparency, security, and user satisfaction. Our policies are designed to ensure a fair
          and rewarding experience for all users while maintaining compliance with legal and ethical standards.
        </p>

        <h2 className="text-2xl font-semibold mb-4">Privacy Policy</h2>
        <p className="mb-4">
          KlikkUp is committed to protecting your personal information and ensuring a safe browsing and earnings
          experience. To keep the KlikkUp Platform running, we use third-party advertising companies to serve ads when
          you visit our website. These companies may use information (not including your name, address, email address,
          or telephone number) about your visits to this and other Websites to provide advertisements about goods and
          services of interest to you.
        </p>
        <p className="mb-4">
          KlikkUp uses a tool that collects your requests for pages and passes elements of them to search engines to
          assist them in indexing this site. We control the tool's configuration and are responsible for any information
          sent to the search engines. We gather data from you when you register on our site, submit a request, purchase
          any services, react to an overview, or round out a structure. When requesting any assistance or enrolling on
          our site, as suitable, you might be approached to enter your: name, email address, or telephone number. You
          may, nonetheless, visit our site anonymously.
        </p>
        <p className="mb-4">If we decide to change our privacy policy, we will post those changes on this page.</p>

        <h3 className="text-xl font-semibold mb-2">Data Collection</h3>
        <p className="mb-2">We collect data to improve platform functionality, including:</p>
        <ul className="list-disc pl-6 mb-4">
          <li>Personal Information: Name, email, and other necessary details for registration.</li>
          <li>
            Activity Data: Stories read, videos watched, tasks completed, and interactions for reward calculation.
          </li>
          <li>
            Device Information: IP address, browser type, and session duration to optimize security and user experience.
          </li>
        </ul>

        <h3 className="text-xl font-semibold mb-2">Data Protection & Security</h3>
        <p className="mb-2">We implement industry-standard security measures, including:</p>
        <ul className="list-disc pl-6 mb-4">
          <li>End-to-end encryption for sensitive data.</li>
          <li>Two-factor authentication (2FA) for added account security.</li>
          <li>Regular security audits to protect against cyber threats.</li>
        </ul>
        <p className="mb-4">
          KlikkUp does not sell, rent, or trade user data to third parties. Your data will only be used for internal
          analytics, fraud prevention, and platform optimization.
        </p>

        <h3 className="text-xl font-semibold mb-2">User Rights</h3>
        <p className="mb-2">As a KlikkUp user, you have the right to:</p>
        <ul className="list-disc pl-6 mb-4">
          <li>Access and update your personal information.</li>
          <li>Request data deletion if you choose to leave the platform.</li>
          <li>Control notifications and preferences through account settings.</li>
        </ul>
        <p className="mb-4">
          Failure to comply with our privacy policy may result in restrictions or removal from the platform.
        </p>
      </div>

      <div id="terms" className="mt-14">
        <h2 className="text-4xl text-center font-semibold mb-4">Terms of Service</h2>
        <p className="mb-4 text-center">By accessing or using KlikkUp, you agree to the following terms:</p>

        <h3 className="text-xl font-semibold mb-2">Account Eligibility & Usage</h3>
        <ul className="list-disc pl-6 mb-4">
          <li>Users must be 18 years or older (or have parental consent).</li>
          <li>Each user is allowed one account only—multiple accounts for the same individual are not permitted.</li>
          <li>Users must provide accurate information during registration.</li>
        </ul>

        <h3 className="text-xl font-semibold mb-2">Earning & Redeeming Points</h3>
        <ul className="list-disc pl-6 mb-4">
          <li>Points are rewarded based on genuine participation in KlikkUp activities.</li>
          <li>
            Users attempting to manipulate the system (e.g., using bots, fake accounts) will be banned without notice.
          </li>
          <li>KlikkUp reserves the right to adjust reward structures based on platform updates.</li>
        </ul>

        <h3 className="text-xl font-semibold mb-2">Token Conversion & Withdrawals</h3>
        <ul className="list-disc pl-6 mb-4">
          <li>Earned points can be converted into tokens at rates determined by KlikkUp.</li>
          <li>Withdrawals require identity verification to prevent fraud.</li>
          <li>A processing fee may apply to withdrawals based on blockchain network fees.</li>
        </ul>

        <h3 className="text-xl font-semibold mb-2">Anti-Fraud & Security Policy</h3>
        <p className="mb-4">We take platform integrity seriously and have strict measures against fraud.</p>

        <h4 className="text-lg font-semibold mb-2">Prohibited Activities</h4>
        <ul className="list-disc pl-6 mb-4">
          <li>Using automated scripts or bots to farm points.</li>
          <li>Exploiting bugs, loopholes, or vulnerabilities in the system.</li>
          <li>Engaging in spam, self-referrals, or fake engagements.</li>
        </ul>

        <h4 className="text-lg font-semibold mb-2">Penalties for Violations</h4>
        <p className="mb-2">Users caught engaging in fraudulent activities may face:</p>
        <ul className="list-disc pl-6 mb-4">
          <li>Immediate account suspension without warning.</li>
          <li>Forfeiture of earned points and tokens.</li>
          <li>Permanent ban from KlikkUp services.</li>
          <li>Legal action if fraudulent activities involve financial losses or data breaches.</li>
        </ul>

        <h4 className="text-lg font-semibold mb-2">Security Measures</h4>
        <p className="mb-2">To protect user accounts, KlikkUp employs:</p>
        <ul className="list-disc pl-6 mb-4">
          <li>Real-time monitoring for suspicious activities.</li>
          <li>Secure wallet integration for safe token storage and withdrawals.</li>
          <li>KYC (Know Your Customer) verification for high-value transactions.</li>
        </ul>

        <h3 className="text-xl font-semibold mb-2">Community Guidelines</h3>
        <p className="mb-4">KlikkUp is a community-driven platform, and all users must engage respectfully.</p>

        <h4 className="text-lg font-semibold mb-2">Code of Conduct</h4>
        <ul className="list-disc pl-6 mb-4">
          <li>No hate speech, harassment, or abusive language is allowed.</li>
          <li>No spreading of misinformation or engagement in unethical behavior.</li>
          <li>Respect all users and platform moderators.</li>
        </ul>

        <h4 className="text-lg font-semibold mb-2">Content Guidelines</h4>
        <ul className="list-disc pl-6 mb-4">
          <li>Plagiarism is strictly prohibited—users must share original content.</li>
          <li>No explicit, illegal, or harmful content may be shared on KlikkUp.</li>
          <li>Violations will result in content removal and possible account penalties.</li>
        </ul>

        <h3 className="text-xl font-semibold mb-2">Disclaimer & Liability</h3>
        <p className="mb-4">KlikkUp operates as a Web3 rewards platform and does not guarantee any financial gain.</p>

        <h4 className="text-lg font-semibold mb-2">Token Value & Trading Risks</h4>
        <ul className="list-disc pl-6 mb-4">
          <li>The value of KlikkUp tokens may fluctuate based on market demand.</li>
          <li>KlikkUp is not responsible for financial losses incurred through trading or external investments.</li>
        </ul>

        <h4 className="text-lg font-semibold mb-2">Platform Liability</h4>
        <ul className="list-disc pl-6 mb-4">
          <li>KlikkUp is not responsible for user negligence (e.g., lost wallet keys, incorrect transactions).</li>
          <li>KlikkUp does not provide refunds once tokens are withdrawn.</li>
          <li>Users are responsible for securing their accounts and wallets.</li>
        </ul>

        <h3 className="text-xl font-semibold mb-2">Policy Updates & Compliance</h3>
        <h4 className="text-lg font-semibold mb-2">Updates to Policies</h4>
        <p className="mb-4">
          KlikkUp reserves the right to update policies at any time. Users will be notified of major changes via email
          or platform announcements.
        </p>

        <h4 className="text-lg font-semibold mb-2">Compliance with Local Laws</h4>
        <p className="mb-4">
          Users must ensure that their participation in KlikkUp complies with local laws and regulations in their
          country. KlikkUp is not liable for any legal consequences due to non-compliance.
        </p>

        <p className="mb-4">By continuing to use KlikkUp, you agree to abide by these policies.</p>
      </div>

      <h2 className="text-2xl font-semibold mb-4">COPYRIGHT NOTICE</h2>
      <p className="mb-4">
        We try not to infringe on any right-of-usage by reviewing the Terms of use/service of most of our sources and
        contents posted on this platform, but because Terms of use/service could change at any time and we do not
        guarantee to keep track of all our sources' Terms of use/service.
      </p>
      <p className="mb-4">
        We implore any source or individual content that feels we encroached on its copyright to give us notice of
        de-linking or removing contents via our contact us, we promise to remove the content from the database within 24
        hours of confirming the request originated from the right news source.
      </p>
    </MainPadding>
  )
}

