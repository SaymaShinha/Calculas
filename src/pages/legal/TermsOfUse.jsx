// src/pages/TermsOfUse.jsx

import {
  AlertTriangle,
  FileText,
  ExternalLink,
  Scale,
  ShieldCheck,
} from "lucide-react";
import { Link } from "react-router-dom";

import SEO from "../../components/SEO";
import PageHeader from "../../components/PageHeader";

export default function TermsOfUse() {
  return (
    <>
      <SEO
        title="Terms of Use | Practical Math Lab"
        description="Read the Terms of Use for Practical Math Lab, including educational use, calculator limitations, acceptable use, intellectual property, external resources, and website availability."
        canonical="/terms-of-use"
      />

      <PageHeader
        eyebrow="Legal • Terms of Use"
        title="Terms of Use"
        description="These terms explain the conditions that apply when you access and use Practical Math Lab."
      />

      <main>
        {/* ---------------------------------------------------------------- */}
        {/* Introduction                                                      */}
        {/* ---------------------------------------------------------------- */}

        <section className="pml-section bg-white">
          <div className="pml-container">
            <div className="grid gap-10 lg:grid-cols-[1.4fr_0.6fr] lg:items-start">
              <article className="pml-prose max-w-3xl">
                <p className="lead">
                  Welcome to Practical Math Lab. The website provides
                  educational calculus materials, mathematical references,
                  interactive calculators, applications, and resources related
                  to numerical mathematics.
                </p>

                <p>
                  By accessing or using Practical Math Lab, you agree to use the
                  website responsibly and in accordance with these Terms of Use.
                  If you do not agree with these terms, please do not use the
                  website.
                </p>

                <p>
                  These terms are intended to explain the general conditions of
                  website use. They do not replace any additional terms that may
                  apply to a specific third-party service linked to or
                  integrated with the website.
                </p>
              </article>

              <aside className="pml-card">
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#EEF3FF] text-[#2F5BEA]">
                  <Scale size={21} />
                </div>

                <h2 className="mt-5 text-xl font-bold text-[#17202A]">
                  In brief
                </h2>

                <p className="mt-3 text-sm leading-6 text-[#687481]">
                  Practical Math Lab is an educational resource. Use its content
                  and calculators as learning tools and independently verify
                  results when precision or professional consequences matter.
                </p>
              </aside>
            </div>
          </div>
        </section>

        {/* ---------------------------------------------------------------- */}
        {/* Educational purpose                                               */}
        {/* ---------------------------------------------------------------- */}

        <section className="pml-section bg-[#F8F7F4]">
          <div className="pml-container">
            <article className="pml-prose max-w-4xl">
              <div className="pml-eyebrow">01 • Educational purpose</div>

              <h2>Educational content</h2>

              <p>
                Practical Math Lab provides mathematical explanations,
                definitions, examples, formulas, rules, reference materials,
                interactive tools, and other educational resources intended to
                support learning and exploration.
              </p>

              <p>
                The content is designed to help students, independent learners,
                educators, and other visitors develop a better understanding of
                calculus and related mathematical concepts.
              </p>

              <p>
                Educational content should not be interpreted as personalized
                academic, professional, engineering, financial, scientific, or
                other specialized advice.
              </p>
            </article>
          </div>
        </section>

        {/* ---------------------------------------------------------------- */}
        {/* Calculators                                                       */}
        {/* ---------------------------------------------------------------- */}

        <section className="pml-section bg-white">
          <div className="pml-container">
            <article className="pml-prose max-w-4xl">
              <div className="pml-eyebrow">02 • Interactive calculators</div>

              <h2>Use of calculators and numerical tools</h2>

              <p>
                Practical Math Lab provides calculators for mathematical
                exploration, including tools related to functions, limits,
                derivatives, integrals, series, and optimization.
              </p>

              <p>
                Some calculations are performed numerically rather than
                symbolically. Numerical methods produce approximations, and the
                result may depend on factors such as step size, number of
                intervals, tolerance, sampling resolution, floating-point
                arithmetic, and the mathematical behavior of the input.
              </p>

              <p>
                Calculator results should therefore be treated as educational or
                computational aids rather than guaranteed exact results. When
                accuracy is important, users should independently verify the
                result using an appropriate mathematical or professional method.
              </p>

              <div className="not-prose mt-7 rounded-xl border border-[#E8D9B9] bg-[#FFF7E8] p-6">
                <div className="flex items-start gap-4">
                  <div className="mt-0.5 shrink-0 text-[#9A5B00]">
                    <AlertTriangle size={20} />
                  </div>

                  <div>
                    <h3 className="font-bold text-[#17202A]">
                      Numerical results may be approximate
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-[#687481]">
                      Do not rely on a calculator result as the sole basis for a
                      decision where an incorrect mathematical result could
                      cause significant academic, financial, engineering,
                      scientific, or other consequences.
                    </p>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </section>

        {/* ---------------------------------------------------------------- */}
        {/* Accuracy                                                          */}
        {/* ---------------------------------------------------------------- */}

        <section className="pml-section bg-[#F8F7F4]">
          <div className="pml-container">
            <article className="pml-prose max-w-4xl">
              <div className="pml-eyebrow">03 • Accuracy and limitations</div>

              <h2>Accuracy of information</h2>

              <p>
                Reasonable effort is made to provide useful, understandable, and
                mathematically sound educational material. However, no guarantee
                is made that every page, formula, example, numerical result, or
                explanation is complete, current, or free from errors.
              </p>

              <p>
                Mathematical problems can also have different interpretations,
                domain restrictions, assumptions, or solution methods. A result
                that appears correct under one set of assumptions may not be
                appropriate under another.
              </p>

              <p>
                Users are responsible for evaluating whether information or
                results are appropriate for their particular purpose.
              </p>
            </article>
          </div>
        </section>

        {/* ---------------------------------------------------------------- */}
        {/* Acceptable use                                                    */}
        {/* ---------------------------------------------------------------- */}

        <section className="pml-section bg-white">
          <div className="pml-container">
            <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
              <article className="pml-prose">
                <div className="pml-eyebrow">04 • Responsible use</div>

                <h2>Acceptable use</h2>

                <p>
                  You may use Practical Math Lab for lawful educational,
                  informational, and personal purposes.
                </p>

                <p>
                  You agree not to use the website in a way that intentionally
                  disrupts its operation, compromises its security, abuses its
                  infrastructure, or interferes with another visitor's ability
                  to use the service.
                </p>

                <p>
                  Prohibited activity includes attempting to gain unauthorized
                  access to systems, deliberately introducing malicious code,
                  abusing automated requests, circumventing reasonable technical
                  restrictions, or using the website for unlawful purposes.
                </p>
              </article>

              <div className="pml-card">
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#EEF9F3] text-[#18794E]">
                  <ShieldCheck size={21} />
                </div>

                <h3 className="mt-5 text-xl font-bold text-[#17202A]">
                  Respectful use
                </h3>

                <p className="mt-3 text-sm leading-6 text-[#687481]">
                  Please use the website in a way that protects its
                  availability, security, and usefulness for other visitors.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ---------------------------------------------------------------- */}
        {/* Intellectual property                                             */}
        {/* ---------------------------------------------------------------- */}

        <section className="pml-section bg-[#F8F7F4]">
          <div className="pml-container">
            <article className="pml-prose max-w-4xl">
              <div className="pml-eyebrow">05 • Content ownership</div>

              <h2>Intellectual property</h2>

              <p>
                Unless otherwise stated, the original text, page structure,
                design elements, graphics, branding, and software used to
                operate Practical Math Lab are protected by applicable
                intellectual-property laws.
              </p>

              <p>
                Mathematical facts, standard formulas, established mathematical
                notation, and general mathematical concepts are not claimed as
                original inventions of Practical Math Lab. However, original
                explanations, written educational content, presentation,
                software implementation, and other original creative material
                may be protected.
              </p>

              <p>
                You may use the educational information for personal learning
                and study. You should not reproduce, republish, redistribute,
                sell, or systematically copy substantial portions of original
                website content without appropriate permission.
              </p>
            </article>
          </div>
        </section>

        {/* ---------------------------------------------------------------- */}
        {/* External resources                                                */}
        {/* ---------------------------------------------------------------- */}

        <section className="pml-section bg-white">
          <div className="pml-container">
            <article className="pml-prose max-w-4xl">
              <div className="pml-eyebrow">06 • External services</div>

              <h2>External websites and resources</h2>

              <p>
                Practical Math Lab may contain links to external websites,
                services, documentation, or other resources that are not
                controlled by Practical Math Lab.
              </p>

              <p>
                External links are provided for convenience or additional
                information. Practical Math Lab does not necessarily endorse the
                content, accuracy, availability, security, or privacy practices
                of external websites.
              </p>

              <p>
                Your use of an external website is subject to that website's own
                terms, privacy policy, and other applicable conditions.
              </p>

              <div className="not-prose mt-7 flex items-start gap-4 rounded-xl border border-[#DEDEDB] bg-[#F8F7F4] p-6">
                <ExternalLink
                  size={20}
                  className="mt-0.5 shrink-0 text-[#2F5BEA]"
                />

                <p className="text-sm leading-6 text-[#34404C]">
                  Review the policies of an external service before submitting
                  personal information or relying on information provided by
                  that service.
                </p>
              </div>
            </article>
          </div>
        </section>

        {/* ---------------------------------------------------------------- */}
        {/* Availability                                                      */}
        {/* ---------------------------------------------------------------- */}

        <section className="pml-section bg-[#F8F7F4]">
          <div className="pml-container">
            <article className="pml-prose max-w-4xl">
              <div className="pml-eyebrow">07 • Website availability</div>

              <h2>Availability and changes to the website</h2>

              <p>
                Practical Math Lab may be updated, modified, temporarily
                unavailable, or discontinued in whole or in part. Features,
                calculators, educational materials, navigation, and other
                website functionality may change without prior notice.
              </p>

              <p>
                We aim to keep the website available and functional, but we do
                not guarantee uninterrupted access or that every feature will
                always operate without errors or interruptions.
              </p>
            </article>
          </div>
        </section>

        {/* ---------------------------------------------------------------- */}
        {/* Disclaimer                                                        */}
        {/* ---------------------------------------------------------------- */}

        <section className="pml-section bg-white">
          <div className="pml-container">
            <article className="pml-prose max-w-4xl">
              <div className="pml-eyebrow">08 • Disclaimer</div>

              <h2>Disclaimer of warranties</h2>

              <p>
                Practical Math Lab is provided for educational and informational
                purposes. To the extent permitted by applicable law, the website
                and its content are provided without warranties or guarantees
                regarding completeness, accuracy, reliability, availability, or
                suitability for a particular purpose.
              </p>

              <p>
                No guarantee is made that the website, its educational
                materials, calculators, software, or other resources will always
                be free from errors, interruptions, security issues, or other
                defects.
              </p>
            </article>
          </div>
        </section>

        {/* ---------------------------------------------------------------- */}
        {/* Limitation                                                        */}
        {/* ---------------------------------------------------------------- */}

        <section className="pml-section bg-[#F8F7F4]">
          <div className="pml-container">
            <article className="pml-prose max-w-4xl">
              <div className="pml-eyebrow">09 • Liability</div>

              <h2>Limitation of liability</h2>

              <p>
                To the extent permitted by applicable law, Practical Math Lab
                and its operators will not be responsible for losses or damages
                arising from reliance on website content, calculator results,
                interruptions in service, technical issues, external websites,
                or other use of the website.
              </p>

              <p>
                This provision does not exclude or limit any liability that
                cannot lawfully be excluded or limited under applicable law.
              </p>
            </article>
          </div>
        </section>

        {/* ---------------------------------------------------------------- */}
        {/* Privacy                                                           */}
        {/* ---------------------------------------------------------------- */}

        <section className="pml-section bg-white">
          <div className="pml-container">
            <article className="pml-prose max-w-4xl">
              <div className="pml-eyebrow">10 • Privacy</div>

              <h2>Privacy and cookies</h2>

              <p>
                Your use of Practical Math Lab may also be subject to the
                website's privacy and cookie practices.
              </p>

              <p>
                For information about how information may be processed, please
                review the{" "}
                <Link
                  to="/privacy-policy"
                  className="font-semibold text-[#2F5BEA] hover:text-[#2448C7]"
                >
                  Privacy Policy
                </Link>{" "}
                and{" "}
                <Link
                  to="/cookie-policy"
                  className="font-semibold text-[#2F5BEA] hover:text-[#2448C7]"
                >
                  Cookie Policy
                </Link>
                .
              </p>
            </article>
          </div>
        </section>

        {/* ---------------------------------------------------------------- */}
        {/* Changes                                                           */}
        {/* ---------------------------------------------------------------- */}

        <section className="pml-section bg-[#F8F7F4]">
          <div className="pml-container">
            <article className="pml-prose max-w-4xl">
              <div className="pml-eyebrow">11 • Updates</div>

              <h2>Changes to these Terms</h2>

              <p>
                These Terms of Use may be updated when Practical Math Lab
                changes its services, features, policies, or operating
                practices, or when updates are needed to reflect applicable
                legal requirements.
              </p>

              <p>
                The updated version will be published on this page. Continued
                use of the website after updated terms are published may
                constitute acceptance of the revised terms to the extent
                permitted by applicable law.
              </p>
            </article>
          </div>
        </section>

        {/* ---------------------------------------------------------------- */}
        {/* Contact                                                           */}
        {/* ---------------------------------------------------------------- */}

        <section className="pml-section bg-white">
          <div className="pml-container">
            <div className="mx-auto max-w-4xl rounded-xl border border-[#DEDEDB] bg-[#F8F7F4] p-7 sm:p-8">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#EEF3FF] text-[#2F5BEA]">
                  <FileText size={19} />
                </div>

                <div>
                  <h2 className="text-xl font-bold text-[#17202A]">
                    Questions about these terms?
                  </h2>

                  <p className="mt-3 text-sm leading-7 text-[#687481]">
                    If you have questions about these Terms of Use or your use
                    of Practical Math Lab, please contact us through the
                    website.
                  </p>

                  <Link
                    to="/contact"
                    className="mt-5 inline-flex items-center rounded-md bg-[#17324D] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#10283F]"
                  >
                    Contact Practical Math Lab
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ---------------------------------------------------------------- */}
        {/* Final CTA                                                         */}
        {/* ---------------------------------------------------------------- */}

        <section className="bg-[#17324D]">
          <div className="mx-auto max-w-[1180px] px-4 py-14 sm:px-6 md:py-16 lg:px-8">
            <div className="max-w-3xl">
              <div className="text-xs font-bold uppercase tracking-[0.16em] text-white/65">
                Legal information
              </div>

              <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Use Practical Math Lab as a learning resource
              </h2>

              <p className="mt-4 text-base leading-7 text-white/75 sm:text-lg">
                Explore the lessons, reference materials, and calculators while
                keeping the educational and numerical limitations described in
                these terms in mind.
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <Link
                  to="/learn"
                  className="inline-flex items-center justify-center rounded-md bg-white px-5 py-3 text-sm font-semibold text-[#17324D] transition-colors hover:bg-slate-100"
                >
                  Explore lessons
                </Link>

                <Link
                  to="/reference"
                  className="inline-flex items-center justify-center rounded-md border border-white/30 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
                >
                  Open reference
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
