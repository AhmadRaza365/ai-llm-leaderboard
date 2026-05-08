import { SITE_DATA } from "@/data/SiteData"

function TermsService() {
  return (
    <main className="container mx-auto px-5 py-24 lg:px-6">
      <article className="prose prose-slate lg:prose-xl prose-headings:text-foreground prose-p:text-foreground prose-a:text-primary prose-li:text-foreground">
        <h1>Terms of Service</h1>
        <p>Last Updated: May 09, 2026</p>

        <p class="text-lg">
          Welcome to ai-llm-leaderboard. By accessing or using our website, you
          agree to be bound by these Terms of Service.
        </p>

        <h2>1. Acceptance of Terms</h2>
        <p>
          By using ai-llm-leaderboard.com, you confirm that you have read,
          understood, and agree to these Terms of Service. If you do not agree,
          please do not use our service.
        </p>

        <h2>2. Description of Service</h2>
        <p>
          ai-llm-leaderboard provides real-time rankings, comparisons, and
          information about Large Language Models (LLMs) across various
          categories including coding, languages, use cases, and more. All data
          is provided for informational purposes only.
        </p>

        <h2>3. User Accounts</h2>
        <ul>
          <li>
            You may need to create an account to access certain features (such
            as voting or submitting models).
          </li>
          <li>
            You are responsible for maintaining the confidentiality of your
            account credentials.
          </li>
          <li>
            You agree to provide accurate and complete information when creating
            an account.
          </li>
        </ul>

        <h2>4. User Conduct</h2>
        <p>You agree not to:</p>
        <ul>
          <li>Use the service for any illegal purpose</li>
          <li>Attempt to manipulate rankings or votes</li>
          <li>Scrape, crawl, or extract data without permission</li>
          <li>Harass, threaten, or impersonate other users</li>
          <li>Upload or transmit harmful code or malware</li>
        </ul>

        <h2>5. Intellectual Property</h2>
        <p>
          All content, design, logos, and data on ai-llm-leaderboard are the
          property of ai-llm-leaderboard or its licensors. You may not copy,
          modify, distribute, or commercially exploit any content without prior
          written permission.
        </p>

        <h2>6. Leaderboard Data & Accuracy</h2>
        <p>
          While we strive to provide accurate and up-to-date rankings, all data
          is provided &quot;as is&quot;. We do not guarantee the accuracy,
          completeness, or reliability of any leaderboard, score, or benchmark
          displayed on the platform.
        </p>

        <h2>7. Third-Party Links</h2>
        <p>
          Our website may contain links to third-party websites. We are not
          responsible for the content, privacy policies, or practices of any
          third-party sites.
        </p>

        <h2>8. Disclaimers</h2>
        <p>
          The service is provided on an &quot;AS IS&quot; and &quot;AS
          AVAILABLE&quot; basis. We disclaim all warranties, whether express or
          implied, including merchantability, fitness for a particular purpose,
          and non-infringement.
        </p>

        <h2>9. Limitation of Liability</h2>
        <p>
          To the fullest extent permitted by law, ai-llm-leaderboard shall not
          be liable for any indirect, incidental, special, consequential, or
          punitive damages arising out of your use of the service.
        </p>

        <h2>10. Termination</h2>
        <p>
          We reserve the right to suspend or terminate your access to the
          service at any time, with or without cause, and without prior notice.
        </p>

        <h2>11. Changes to Terms</h2>
        <p>
          We may update these Terms of Service from time to time. Continued use
          of the platform after changes constitutes your acceptance of the new
          terms.
        </p>

        <h2>12. Governing Law</h2>
        <p>
          These Terms shall be governed by and construed in accordance with the
          laws of [Your Country], without regard to conflict of law principles.
        </p>

        <h2>13. Contact Us</h2>
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

export default TermsService
