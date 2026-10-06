import { Cookie } from "lucide-react";

import SEO from "../../components/SEO";
import PageHeader from "../../components/PageHeader";

export default function CookiePolicy() {
  return (
    <>
      <SEO
        title="Cookie Policy | Practical Math Lab"
        description="Cookie Policy for Practical Math Lab."
        canonical="/cookie-policy"
      />

      <PageHeader
        eyebrow="Legal"
        title="Cookie Policy"
        description="Information about cookies and similar technologies that may be used on Practical Math Lab."
        icon={Cookie}
      />

      <main className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <article className="prose prose-lg max-w-none">
          <h2>What are cookies?</h2>

          <p>
            Cookies are small pieces of information stored by a website in a
            visitor's browser. They can help websites remember settings,
            understand usage, and provide certain functionality.
          </p>

          <h2>How cookies may be used</h2>

          <p>
            Practical Math Lab may use cookies or similar technologies for
            essential website functionality, analytics, preferences, or
            advertising if those services are enabled.
          </p>

          <h2>Third-party cookies</h2>

          <p>
            Third-party services such as analytics or advertising providers may
            place their own cookies when their services are used.
          </p>

          <h2>Managing cookies</h2>

          <p>
            Most modern browsers allow visitors to control or delete cookies
            through browser settings. Disabling certain cookies may affect some
            website functionality.
          </p>

          <h2>Updates</h2>

          <p>
            This Cookie Policy may be updated when new services or technologies
            are introduced.
          </p>
        </article>
      </main>
    </>
  );
}
