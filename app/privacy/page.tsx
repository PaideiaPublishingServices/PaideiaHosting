import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Policy - Paideia Hosting",
  description:
    "Privacy and confidentiality statement of Paideia Hosting / Paideia Publishing Services LLC.",
}

export default function PrivacyPage() {
  return (
    <main className="flex-1">
      <section className="w-full py-12 md:py-24 bg-gradient-to-b from-blue-50 to-white">
        <div className="container px-4 md:px-6 max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl mb-2">Privacy policy</h1>
          <p className="text-gray-500 text-sm">
            Privacy and confidentiality statement of Paideia Hosting.{" "}
            <br />Version updated: March 29, 2026.
          </p>
        </div>
      </section>

      <section className="w-full py-12">
        <div className="container px-4 md:px-6 max-w-3xl mx-auto prose prose-gray">

          <p>
            At Paideia Hosting we understand the protection of personal data as an opportunity to create value for our
            users. By making responsible use of personal information, we not only protect the privacy of those who have
            entrusted us with their data, but we also allow them to operate safely and confidently within our ecosystem.
          </p>
          <p>
            This privacy policy forms part of the general terms and conditions of Paideia Hosting. Providing your
            voluntary, express and informed consent to this privacy policy is an essential requirement to be able to
            contract and/or have any kind of relationship with Paideia Hosting.
          </p>

          <h2>1. Who is responsible for processing personal information?</h2>
          <p>
            Paideia Hosting — a brand of Paideia Publishing Services LLC — is the party responsible for processing the
            data of users and visitors to its platforms. The data controller determines the purposes for which the
            information will be used and the means employed in that processing.
          </p>

          <h2>2. What information do we collect and process?</h2>
          <p>
            Paideia Hosting collects your personal information so that you can enjoy our services and so that we can
            continuously improve them. In some cases you provide the information yourself; in others it is collected
            automatically.
          </p>
          <p>
            <strong>Information you provide directly:</strong>
          </p>
          <ul>
            <li>Name and personal image (photo or ID document)</li>
            <li>National identification number or valid ID</li>
            <li>Contact information (phone number, address, email address)</li>
            <li>Payment information and methods</li>
            <li>Technical information related to contracted services (domain names, server credentials)</li>
          </ul>
          <p>
            <strong>Information collected automatically:</strong>
          </p>
          <ul>
            <li>Device and browser information (type, version, operating system, connection data)</li>
            <li>IP address used when connecting to our services</li>
            <li>Activity within our site (pages visited, interactions, purchases)</li>
            <li>Location information (geolocation)</li>
          </ul>

          <h2>3. What do we do with personal information?</h2>
          <p>
            Unless prohibited by applicable regulations, Paideia Hosting may use your personal information to:
          </p>
          <ul>
            <li>Identify and contact you</li>
            <li>Register you in our systems and verify your identity</li>
            <li>Provide the hosting services and subscriptions you contract with us</li>
            <li>Manage subscription renewals, billing, and invoice issuance</li>
            <li>Handle your comments, complaints, and support requests</li>
            <li>Carry out internal studies and statistics to improve our services</li>
            <li>Provide information about new features or services</li>
            <li>Comply with applicable legal obligations</li>
            <li>Detect and prevent fraud, abuse, and related crimes</li>
          </ul>

          <h2>4. How do we share personal information?</h2>
          <p>
            We do not sell or trade information that identifies our users. We may share your personal information only
            with:
          </p>
          <ul>
            <li>
              <strong>Service providers:</strong> third parties engaged to operate our infrastructure (AWS, Cloudflare,
              Stripe, Odoo), following our instructions and this privacy policy.
            </li>
            <li>
              <strong>Commercial partners:</strong> companies with which Paideia Hosting has a collaboration agreement,
              under confidentiality standards.
            </li>
            <li>
              <strong>Public authorities:</strong> administrative and judicial authorities requiring information in the
              exercise of their competence.
            </li>
            <li>
              <strong>Dispute parties:</strong> mediators, courts, or entities intervening in dispute resolution.
            </li>
          </ul>
          <p>
            If Paideia Hosting decides to share your data with third parties other than those mentioned, we will request
            your prior and express consent unless a legal authorization or obligation allows otherwise.
          </p>

          <h2>5. International data transfers</h2>
          <p>
            Our infrastructure relies on cloud services — including AWS — that may be located in countries different from
            yours. Countries receiving transferred data may not offer adequate levels of personal data protection under
            all applicable regulations. In such cases, Paideia Hosting adopts contractual measures to impose the same
            protection standards described in this policy.
          </p>

          <h2>6. How long do we store personal information?</h2>
          <p>
            We store personal information only for as long as necessary to fulfill the purpose for which it was
            collected, to comply with regulatory or legal requirements, or during the legal limitation period for
            possible liabilities.
          </p>

          <h2>7. How can you exercise your rights?</h2>
          <p>
            You may request: (i) access; (ii) update; (iii) rectification; (iv) cessation of promotional
            communications; (v) deletion; (vi) revocation of consent; (vii) confidentiality; and (viii) review of
            automated decisions.
          </p>
          <p>
            Submit your request to:{" "}
            <a href="mailto:support@paideiahosting.net">support@paideiahosting.net</a>
          </p>

          <h2>8. Cookies and other technologies</h2>
          <p>
            Paideia Hosting may use cookies and similar tracking technologies to understand user behavior and improve our
            services. Your data obtained through these technologies will not be transferred to third parties in a manner
            different from those described in this policy.
          </p>
          <p>
            You can configure your cookie preferences from your browser settings at any time. Some of the services we
            may use include: Google Analytics, Google Ads, Google Tag Manager, Meta Pixel, and remarketing audiences,
            among others.
          </p>

          <h2>9. Security and storage</h2>
          <p>
            Paideia Hosting has adopted security measures following industry standards, including encrypted data
            transmission (SSL/TLS), access controls, and regular security audits of our infrastructure. To the extent
            that Paideia Hosting has complied with these measures, it is not responsible for illegal interceptions or
            unauthorized access by third parties.
          </p>

          <h2>10. Changes to this policy</h2>
          <p>
            Paideia Hosting will periodically update this privacy policy to reflect ongoing changes in the services we
            offer. Updates will transparently reflect the way personal information is processed.
          </p>

          <h2>11. Applicable law and jurisdiction</h2>
          <p>
            This privacy policy is governed by the laws of the State of Delaware, United States. Any dispute arising
            from its application shall be resolved by the competent courts of the State of Delaware, United States.
          </p>
          <p>
            The legal entity responsible for this service is{" "}
            <strong>Paideia Publishing Services LLC</strong>, registered at 2810 North Church Street, Wilmington, DE
            19802, United States.
          </p>
          <p>
            Contact:{" "}
            <a href="mailto:support@paideiahosting.net">support@paideiahosting.net</a>
          </p>

          <hr />

          <h2>I. Privacy protection</h2>
          <p>
            <strong>PAIDEIA HOSTING</strong> will request certain data from each user to enable the operation of the
            site and related security processes. All data declared by the USER must be truthful and accurate. Any
            falsehood, voluntary error or omission shall be grounds for canceling any type of interaction with the USER.
          </p>

          <h2>II. Cookie processing</h2>
          <p>
            <strong>PAIDEIA HOSTING</strong> reserves the right to use cookies — small files sent to the user's device
            to ensure the correct functioning and display of the site. The following data may be collected: browsing
            data, access paths, geolocation, and device information.
          </p>
          <p>
            If the USER has the technical means, they may adjust their browser to disable cookies. PAIDEIA HOSTING shall
            not be responsible for any complications arising from such disabling.
          </p>

          <h2>III. Personal data processing</h2>
          <p>
            <strong>PAIDEIA HOSTING</strong> handles certain information considered personal. Anonymous data will be
            processed through software tools to improve the user experience and will form part of the customer database,
            with PAIDEIA HOSTING as the sole data controller. Personal information is used to: provide services; resolve
            conflicts; offer products and promotions; protect our network; verify identity; fulfill legal obligations;
            carry out statistical analyses; and improve resource use.
          </p>

          <h2>IV. Right of access, rectification and deletion</h2>
          <p>
            Any USER, upon verifying their identity, may request access to their personal data, as well as its
            rectification, update, cancellation or deletion by sending an email to{" "}
            <a href="mailto:support@paideiahosting.net">support@paideiahosting.net</a>. PAIDEIA HOSTING will provide the
            requested information within ten (10) calendar days of receiving the formal notification.
          </p>

          <h2>V. Data management contact</h2>
          <p>
            <a href="mailto:support@paideiahosting.net">support@paideiahosting.net</a>
          </p>
        </div>
      </section>
    </main>
  )
}