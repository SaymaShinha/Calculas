import SEO from "../../components/SEO";
import PageHeader from "../../components/PageHeader";
import { ShieldCheck } from "lucide-react";

export default function PrivacyPolicy() {
  return (
    <>
      <SEO
        title="Privacy Policy | Practical Math Lab"
        description="Privacy Policy for Practical Math Lab."
        canonical="/privacy-policy"
      />

      <PageHeader
        eyebrow="Legal"
        title="Privacy Policy"
        description="Information about how Practical Math Lab handles visitor information and privacy."
        icon={ShieldCheck}
      />

      <main className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <article className="prose prose-lg max-w-none">
          <p>
            This Privacy Policy explains how Practical Math Lab handles
            information when visitors use this website.
          </p>

          <h2>Information we collect</h2>

          <p>
            Practical Math Lab is primarily an educational website. Most
            mathematical calculations performed by the interactive tools are
            processed in the visitor's browser.
          </p>

          <p>
            If you voluntarily contact us through a contact form, information
            such as your name, email address, and message may be submitted so
            that we can respond to your request.
          </p>

          <h2>Cookies and similar technologies</h2>

          <p>
            The website or third-party services used on the website may use
            cookies or similar technologies for functionality, analytics, or
            advertising purposes.
          </p>

          <h2>Third-party services</h2>

          <p>
            External service providers may process limited technical or usage
            information when their services are used on the website. Their
            handling of information is governed by their own privacy policies.
          </p>

          <h2>Advertising</h2>

          <p>
            If advertising services are enabled, advertising providers may use
            cookies or similar technologies to deliver and measure
            advertisements according to their applicable policies.
          </p>

          <h2>Changes to this policy</h2>

          <p>
            This Privacy Policy may be updated when the website's services,
            features, or legal requirements change.
          </p>

          <h2>Contact</h2>

          <p>
            If you have questions about this Privacy Policy, please use the
            Contact page.
          </p>
        </article>
      </main>
    </>
  );
}
