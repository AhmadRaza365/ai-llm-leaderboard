import { SITE_DATA } from "@/data/SiteData"

function PrivcyPage() {
  return (
    <main className="container mx-auto px-5 py-24 lg:px-6">
      <article className="prose prose-slate lg:prose-xl prose-headings:text-foreground prose-p:text-foreground prose-a:text-primary prose-li:text-foreground">
        <h1>Privacy Policy</h1>
        <p>Last Updated: May 09, 2026</p>

        <p className="text-lg">
          At ai-llm-leaderboard, we respect your privacy and are committed to
          protecting your personal data. This Privacy Policy explains how we
          collect, use, and safeguard your information when you use our website.
        </p>

        <h2>1. Information We Collect</h2>
        <h3>1.1 Information You Provide</h3>
        <ul>
          <li>
            Name and email address (when you subscribe to our newsletter or
            create an account)
          </li>
          <li>Account credentials and preferences</li>
          <li>Feedback, comments, or votes on leaderboards</li>
        </ul>

        <h3>1.2 Automatically Collected Information</h3>
        <ul>
          <li>IP address, browser type, and device information</li>
          <li>Pages visited and time spent on our site</li>
          <li>Referral source and interaction data</li>
          <li>Cookies and similar tracking technologies</li>
        </ul>

        <h2>2. How We Use Your Information</h2>
        <p>We use the collected information to:</p>
        <ul>
          <li>Provide and improve our LLM leaderboard services</li>
          <li>Personalize your experience</li>
          <li>Send important updates and newsletter (with your consent)</li>
          <li>Analyze site usage and trends</li>
          <li>Prevent fraud and ensure security</li>
          <li>Respond to your inquiries and support requests</li>
        </ul>

        <h2>3. Cookies and Tracking</h2>
        <p>
          We use essential cookies to make our website work. We may also use
          analytics cookies (e.g., Google Analytics) to understand how visitors
          use our site. You can manage your cookie preferences through your
          browser settings.
        </p>

        <h2>4. Sharing of Information</h2>
        <p>
          We do not sell your personal data. We may share your information only
          in the following cases:
        </p>
        <ul>
          <li>
            With service providers who help us operate the website (under strict
            confidentiality)
          </li>
          <li>When required by law or to protect our rights</li>
          <li>In case of business transfer (merger, acquisition, etc.)</li>
        </ul>

        <h2>5. Data Security</h2>
        <p>
          We implement reasonable security measures to protect your personal
          information. However, no method of transmission over the internet is
          100% secure.
        </p>

        <h2>6. Your Rights</h2>
        <p>You have the right to:</p>
        <ul>
          <li>Access, update, or delete your personal data</li>
          <li>Withdraw consent for marketing communications</li>
          <li>Request data portability</li>
          <li>Object to certain data processing</li>
        </ul>
        <p>
          To exercise these rights, please contact us at{" "}
          <a href={`mailto:${SITE_DATA.siteEmail}`} className="text-indigo-400">
            {SITE_DATA.siteEmail}
          </a>
          .
        </p>

        <h2>7. Data Retention</h2>
        <p>
          We retain your personal data only as long as necessary to fulfill the
          purposes outlined in this policy or as required by law.
        </p>

        <h2>8. Children&apos;s Privacy</h2>
        <p>
          Our services are not intended for children under the age of 13. We do
          not knowingly collect data from children.
        </p>

        <h2>9. Changes to This Privacy Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. We will notify
          you of any material changes by posting the new policy on this page.
        </p>

        <h2>10. Contact Us</h2>
        <p>
          If you have any questions about this Privacy Policy, please contact us
          at:
        </p>
        <p className="font-medium">
          Email: {SITE_DATA.siteEmail}
          <br />
          Website:{" "}
          <a href="https://ai-llm-leaderboard.com" className="text-indigo-400">
            ai-llm-leaderboard.com
          </a>
        </p>
      </article>
    </main>
  )
}

export default PrivcyPage
