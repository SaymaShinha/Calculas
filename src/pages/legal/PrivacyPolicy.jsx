// src/pages/PrivacyPolicy.jsx

import { Database, FileText, Mail, ShieldCheck, UserRound } from "lucide-react";
import { Link } from "react-router-dom";

import SEO from "../../components/SEO";
import PageHeader from "../../components/PageHeader";

export default function PrivacyPolicy() {
  return (
    <>
      <SEO
        title="Privacy Policy | Practical Math Lab"
        description="Read the Practical Math Lab Privacy Policy to learn what information may be processed when you use the website, including contact information, technical data, cookies, analytics, and advertising."
        canonical="/privacy-policy"
      />

      <PageHeader
        eyebrow="Legal • Privacy Policy"
        title="Privacy Policy"
        description="This policy explains how Practical Math Lab may handle information when you visit and use the website."
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
                  Practical Math Lab is an educational website providing
                  calculus lessons, mathematical references, interactive
                  calculators, applications, and numerical mathematics
                  resources.
                </p>

                <p>
                  This Privacy Policy explains what types of information may be
                  processed when you use the website, why that information may
                  be used, and the choices available to you.
                </p>

                <p>
                  The website is designed so that many mathematical calculations
                  can be performed directly in your browser without requiring
                  you to create an account or submit the mathematical
                  expressions you are working with to us.
                </p>
              </article>

              <aside className="pml-card">
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#EEF3FF] text-[#2F5BEA]">
                  <ShieldCheck size={21} />
                </div>

                <h2 className="mt-5 text-xl font-bold text-[#17202A]">
                  Privacy at a glance
                </h2>

                <p className="mt-3 text-sm leading-6 text-[#687481]">
                  Practical Math Lab is primarily an educational resource. Many
                  interactive mathematical operations are processed locally in
                  your browser.
                </p>
              </aside>
            </div>
          </div>
        </section>

        {/* ---------------------------------------------------------------- */}
        {/* Information collected                                             */}
        {/* ---------------------------------------------------------------- */}

        <section className="pml-section bg-[#F8F7F4]">
          <div className="pml-container">
            <article className="pml-prose max-w-4xl">
              <div className="pml-eyebrow">01 • Information</div>

              <h2>Information we may process</h2>

              <p>
                The information processed by Practical Math Lab depends on how
                you interact with the website and which services are enabled. We
                aim to collect or process only information that is reasonably
                necessary for the relevant functionality.
              </p>

              <div className="not-prose mt-8 grid gap-5 md:grid-cols-3">
                <PrivacyCard
                  icon={UserRound}
                  title="Information you provide"
                  description="If you voluntarily contact us, you may provide information such as your name, email address, and the contents of your message."
                />

                <PrivacyCard
                  icon={Database}
                  title="Technical information"
                  description="Website infrastructure or third-party services may process technical information such as browser, device, network, or request information when the site is accessed."
                />

                <PrivacyCard
                  icon={FileText}
                  title="Usage information"
                  description="If analytics or similar services are enabled, information about general website usage may be processed to understand traffic and improve the site."
                />
              </div>
            </article>
          </div>
        </section>

        {/* ---------------------------------------------------------------- */}
        {/* Calculators                                                       */}
        {/* ---------------------------------------------------------------- */}

        <section className="pml-section bg-white">
          <div className="pml-container">
            <article className="pml-prose max-w-4xl">
              <div className="pml-eyebrow">02 • Interactive tools</div>

              <h2>Mathematical calculations</h2>

              <p>
                Practical Math Lab provides interactive mathematical tools for
                tasks such as evaluating functions, estimating limits,
                calculating numerical derivatives and integrals, exploring
                series, and studying optimization problems.
              </p>

              <p>
                Where a calculator performs its computation entirely in the
                browser, the mathematical expression and values entered into
                that calculator are processed locally by the web application.
                They are not necessarily transmitted to Practical Math Lab's
                servers simply because you use the calculator.
              </p>

              <p>
                This behavior can vary if a particular feature uses an external
                service or if the website architecture changes in the future.
              </p>
            </article>
          </div>
        </section>

        {/* ---------------------------------------------------------------- */}
        {/* Contact information                                               */}
        {/* ---------------------------------------------------------------- */}

        <section className="pml-section bg-[#F8F7F4]">
          <div className="pml-container">
            <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
              <article className="pml-prose">
                <div className="pml-eyebrow">03 • Contact</div>

                <h2>Information you voluntarily provide</h2>

                <p>
                  If you contact Practical Math Lab through a contact form or
                  another communication method provided on the website, you may
                  voluntarily provide personal information such as your name,
                  email address, and message.
                </p>

                <p>
                  This information may be used to understand and respond to your
                  request, provide support, investigate a reported problem, or
                  communicate with you about your inquiry.
                </p>

                <p>
                  Please avoid sending sensitive personal information through a
                  general website contact form unless it is specifically
                  requested and necessary.
                </p>
              </article>

              <div className="pml-card">
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#EEF3FF] text-[#2F5BEA]">
                  <Mail size={21} />
                </div>

                <h3 className="mt-5 text-xl font-bold text-[#17202A]">
                  Contact information
                </h3>

                <p className="mt-3 text-sm leading-6 text-[#687481]">
                  Information submitted through the Contact page may be used to
                  respond to your message and provide assistance related to
                  Practical Math Lab.
                </p>

                <Link
                  to="/contact"
                  className="mt-5 inline-flex items-center text-sm font-semibold text-[#2F5BEA] hover:text-[#2448C7]"
                >
                  Visit Contact page
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ---------------------------------------------------------------- */}
        {/* Cookies                                                           */}
        {/* ---------------------------------------------------------------- */}

        <section className="pml-section bg-white">
          <div className="pml-container">
            <article className="pml-prose max-w-4xl">
              <div className="pml-eyebrow">04 • Cookies</div>

              <h2>Cookies and similar technologies</h2>

              <p>
                Practical Math Lab may use cookies, local storage, session
                storage, or other browser technologies to support website
                functionality, remember preferences, understand website usage,
                or support services that are enabled on the website.
              </p>

              <p>
                Third-party services integrated into the website may also use
                their own cookies or similar technologies. These providers
                generally operate under their own privacy policies and terms.
              </p>

              <p>
                For more information about cookies and how they may be managed,
                please review the{" "}
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
        {/* Analytics                                                         */}
        {/* ---------------------------------------------------------------- */}

        <section className="pml-section bg-[#F8F7F4]">
          <div className="pml-container">
            <article className="pml-prose max-w-4xl">
              <div className="pml-eyebrow">05 • Website improvement</div>

              <h2>Analytics and usage measurement</h2>

              <p>
                If analytics services are enabled, they may collect information
                about how visitors interact with the website. This may include
                pages viewed, approximate usage patterns, device or browser
                information, referral information, and technical events
                associated with website activity.
              </p>

              <p>
                Analytics information can help us understand which educational
                resources are useful, identify technical problems, improve
                navigation, and make the website more reliable.
              </p>

              <p>
                The specific information collected depends on the analytics
                service being used. Analytics providers may process information
                according to their own privacy policies.
              </p>
            </article>
          </div>
        </section>

        {/* ---------------------------------------------------------------- */}
        {/* Advertising                                                       */}
        {/* ---------------------------------------------------------------- */}

        <section className="pml-section bg-white">
          <div className="pml-container">
            <article className="pml-prose max-w-4xl">
              <div className="pml-eyebrow">06 • Advertising</div>

              <h2>Advertising services</h2>

              <p>
                Practical Math Lab may use third-party advertising services,
                including Google AdSense, if advertising is enabled on the
                website.
              </p>

              <p>
                Advertising providers may use cookies, advertising identifiers,
                or similar technologies to serve advertisements, measure
                advertising performance, prevent fraud and abuse, or personalize
                advertising where permitted.
              </p>

              <p>
                The practices of third-party advertising providers are governed
                by their own privacy policies and applicable requirements. Their
                technologies and practices may also change over time.
              </p>

              <div className="not-prose mt-6 rounded-xl border border-[#DEDEDB] bg-[#F8F7F4] p-6">
                <p className="text-sm leading-7 text-[#34404C]">
                  Advertising services are only applicable when they are
                  actually enabled on Practical Math Lab. This policy does not
                  mean that advertising cookies are necessarily active on every
                  visit or on every page.
                </p>
              </div>
            </article>
          </div>
        </section>

        {/* ---------------------------------------------------------------- */}
        {/* Third parties                                                      */}
        {/* ---------------------------------------------------------------- */}

        <section className="pml-section bg-[#F8F7F4]">
          <div className="pml-container">
            <article className="pml-prose max-w-4xl">
              <div className="pml-eyebrow">07 • External services</div>

              <h2>Third-party services</h2>

              <p>
                Practical Math Lab may rely on external service providers for
                certain website functions, such as hosting, email delivery,
                analytics, advertising, security, or other technical
                infrastructure.
              </p>

              <p>
                When these providers process information as part of delivering
                their services, their processing may be governed by their own
                privacy policies, terms, and applicable legal requirements.
              </p>

              <p>
                Practical Math Lab does not control the privacy practices of
                independent third-party services. Visitors should review the
                relevant provider's privacy documentation when appropriate.
              </p>
            </article>
          </div>
        </section>

        {/* ---------------------------------------------------------------- */}
        {/* How information is used                                           */}
        {/* ---------------------------------------------------------------- */}

        <section className="pml-section bg-white">
          <div className="pml-container">
            <article className="pml-prose max-w-4xl">
              <div className="pml-eyebrow">08 • Purpose</div>

              <h2>How information may be used</h2>

              <p>
                Depending on the circumstances, information may be used for
                purposes such as:
              </p>

              <ul>
                <li>Operating and maintaining the website.</li>
                <li>Providing requested functionality or support.</li>
                <li>Responding to messages and inquiries.</li>
                <li>Understanding general website usage.</li>
                <li>Improving educational content and user experience.</li>
                <li>
                  Detecting, preventing, or investigating abuse and security
                  problems.
                </li>
                <li>
                  Supporting analytics or advertising services when enabled.
                </li>
                <li>Complying with applicable legal obligations.</li>
              </ul>
            </article>
          </div>
        </section>

        {/* ---------------------------------------------------------------- */}
        {/* Data retention                                                    */}
        {/* ---------------------------------------------------------------- */}

        <section className="pml-section bg-[#F8F7F4]">
          <div className="pml-container">
            <article className="pml-prose max-w-4xl">
              <div className="pml-eyebrow">09 • Retention</div>

              <h2>Data retention</h2>

              <p>
                Information is retained only for as long as reasonably necessary
                for the purpose for which it was collected, to provide requested
                services, resolve inquiries, maintain security, comply with
                legal obligations, or meet legitimate operational requirements.
              </p>

              <p>
                Retention periods can vary depending on the type of information
                and whether a third-party provider is involved.
              </p>
            </article>
          </div>
        </section>

        {/* ---------------------------------------------------------------- */}
        {/* Security                                                          */}
        {/* ---------------------------------------------------------------- */}

        <section className="pml-section bg-white">
          <div className="pml-container">
            <article className="pml-prose max-w-4xl">
              <div className="pml-eyebrow">10 • Security</div>

              <h2>Information security</h2>

              <p>
                Reasonable technical and organizational measures may be used to
                protect information handled through the website. However, no
                method of transmitting or storing information over the internet
                can be guaranteed to be completely secure.
              </p>

              <p>
                Visitors should therefore avoid submitting unnecessary sensitive
                information through publicly accessible website forms.
              </p>
            </article>
          </div>
        </section>

        {/* ---------------------------------------------------------------- */}
        {/* Children's privacy                                                */}
        {/* ---------------------------------------------------------------- */}

        <section className="pml-section bg-[#F8F7F4]">
          <div className="pml-container">
            <article className="pml-prose max-w-4xl">
              <div className="pml-eyebrow">11 • Children</div>

              <h2>Children's privacy</h2>

              <p>
                Practical Math Lab is an educational resource and does not
                intentionally request unnecessary personal information from
                children.
              </p>

              <p>
                If you believe that a child has provided personal information
                through the website and that information should be removed,
                please contact us so that the matter can be reviewed.
              </p>
            </article>
          </div>
        </section>

        {/* ---------------------------------------------------------------- */}
        {/* Your choices                                                      */}
        {/* ---------------------------------------------------------------- */}

        <section className="pml-section bg-white">
          <div className="pml-container">
            <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
              <article className="pml-prose">
                <div className="pml-eyebrow">12 • Your choices</div>

                <h2>Your choices and controls</h2>

                <p>
                  Depending on your browser, device, location, and the services
                  enabled on the website, you may have options to control
                  cookies, browser storage, analytics technologies, or
                  personalized advertising.
                </p>

                <p>
                  You can also choose not to provide information through
                  optional contact forms. However, choosing not to provide
                  requested information may prevent us from responding to a
                  particular inquiry.
                </p>
              </article>

              <div className="pml-card">
                <h3 className="text-xl font-bold text-[#17202A]">
                  Common controls
                </h3>

                <ul className="mt-5 space-y-3">
                  {[
                    "Browser cookie settings",
                    "Browser storage controls",
                    "Device privacy settings",
                    "Third-party advertising controls",
                    "Choosing whether to submit contact information",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-sm leading-6 text-[#34404C]"
                    >
                      <span className="mt-1 text-[#18794E]">
                        <ShieldCheck size={16} />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ---------------------------------------------------------------- */}
        {/* Policy changes                                                    */}
        {/* ---------------------------------------------------------------- */}

        <section className="pml-section bg-[#F8F7F4]">
          <div className="pml-container">
            <article className="pml-prose max-w-4xl">
              <div className="pml-eyebrow">13 • Updates</div>

              <h2>Changes to this Privacy Policy</h2>

              <p>
                This Privacy Policy may be updated when Practical Math Lab
                introduces new functionality, changes the services used by the
                website, changes how information is handled, or needs to reflect
                legal or regulatory requirements.
              </p>

              <p>
                The updated policy will be published on this page. Visitors are
                encouraged to review the policy periodically.
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
                  <Mail size={19} />
                </div>

                <div>
                  <h2 className="text-xl font-bold text-[#17202A]">
                    Questions about privacy?
                  </h2>

                  <p className="mt-3 text-sm leading-7 text-[#687481]">
                    If you have a question about this Privacy Policy or how
                    information may be handled on Practical Math Lab, please
                    contact us through the website.
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
        {/* Final legal navigation                                            */}
        {/* ---------------------------------------------------------------- */}

        <section className="bg-[#17324D]">
          <div className="mx-auto max-w-[1180px] px-4 py-14 sm:px-6 md:py-16 lg:px-8">
            <div className="max-w-3xl">
              <div className="text-xs font-bold uppercase tracking-[0.16em] text-white/65">
                Legal information
              </div>

              <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Review the other website policies
              </h2>

              <p className="mt-4 text-base leading-7 text-white/75 sm:text-lg">
                Privacy, cookies, and website usage are covered by separate
                policies so that each area can be explained clearly.
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <Link
                  to="/cookie-policy"
                  className="inline-flex items-center justify-center rounded-md bg-white px-5 py-3 text-sm font-semibold text-[#17324D] transition-colors hover:bg-slate-100"
                >
                  Cookie Policy
                </Link>

                <Link
                  to="/terms-of-use"
                  className="inline-flex items-center justify-center rounded-md border border-white/30 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
                >
                  Terms of Use
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

function PrivacyCard({ icon: Icon, title, description }) {
  return (
    <div className="rounded-xl border border-[#DEDEDB] bg-white p-6">
      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#EEF3FF] text-[#2F5BEA]">
        <Icon size={19} />
      </div>

      <h3 className="mt-4 text-lg font-bold text-[#17202A]">{title}</h3>

      <p className="mt-2 text-sm leading-6 text-[#687481]">{description}</p>
    </div>
  );
}
