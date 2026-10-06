import { FileText } from "lucide-react";

import SEO from "../../components/SEO";
import PageHeader from "../../components/PageHeader";

export default function TermsOfUse() {
  return (
    <>
      <SEO
        title="Terms of Use | Practical Math Lab"
        description="Terms of Use for Practical Math Lab."
        canonical="/terms-of-use"
      />

      <PageHeader
        eyebrow="Legal"
        title="Terms of Use"
        description="Terms and conditions governing use of Practical Math Lab."
        icon={FileText}
      />

      <main className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <article className="prose prose-lg max-w-none">
          <h2>Educational purpose</h2>

          <p>
            Practical Math Lab provides educational material, mathematical
            explanations, references, and interactive tools for learning
            purposes.
          </p>

          <h2>Use of calculators</h2>

          <p>
            Calculator results may be approximate and should be independently
            verified when accuracy is important. Numerical tools are intended
            for educational exploration and should not be treated as
            authoritative professional calculations.
          </p>

          <h2>Accuracy</h2>

          <p>
            Reasonable effort is made to provide useful and accurate
            mathematical information. However, mathematical content may contain
            errors, omissions, or limitations.
          </p>

          <h2>Acceptable use</h2>

          <p>
            Visitors should use the website lawfully and should not attempt to
            disrupt, damage, abuse, or interfere with the website or its
            services.
          </p>

          <h2>External resources</h2>

          <p>
            The website may reference external websites or services. Practical
            Math Lab is not responsible for the content or policies of external
            websites.
          </p>

          <h2>Changes</h2>

          <p>
            These Terms of Use may be updated as the website develops. Continued
            use of the website after changes are published constitutes continued
            acceptance of the updated terms.
          </p>
        </article>
      </main>
    </>
  );
}
