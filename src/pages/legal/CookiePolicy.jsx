// src/pages/CookiePolicy.jsx

import { Cookie, Info, ShieldCheck } from "lucide-react";

import SEO from "../../components/SEO";
import PageHeader from "../../components/PageHeader";

export default function CookiePolicy() {
  return (
    <>
      <SEO
        title="Cookie Policy | Practical Math Lab"
        description="Learn how Practical Math Lab may use cookies, local storage, analytics technologies, and advertising technologies, and how you can manage these technologies in your browser."
        canonical="/cookie-policy"
      />

      <PageHeader
        eyebrow="Legal • Cookie Policy"
        title="Cookie Policy"
        description="This policy explains how Practical Math Lab may use cookies and similar technologies to operate, understand, and improve the website."
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
                  Practical Math Lab may use cookies and similar browser
                  technologies to support essential website functionality,
                  remember preferences, understand how visitors use the site,
                  and, where enabled, support advertising services.
                </p>

                <p>
                  This Cookie Policy should be read together with our{" "}
                  <a
                    href="/privacy-policy"
                    className="font-semibold text-[#2F5BEA] hover:text-[#2448C7]"
                  >
                    Privacy Policy
                  </a>
                  , which explains more generally how information may be
                  collected and used.
                </p>
              </article>

              <aside className="pml-card">
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#EEF3FF] text-[#2F5BEA]">
                  <Cookie size={21} />
                </div>

                <h2 className="mt-5 text-xl font-bold text-[#17202A]">
                  Quick overview
                </h2>

                <p className="mt-3 text-sm leading-6 text-[#687481]">
                  Cookies are small data files or similar technologies that
                  allow a website or service to recognize a browser or retain
                  information between visits.
                </p>
              </aside>
            </div>
          </div>
        </section>

        {/* ---------------------------------------------------------------- */}
        {/* What are cookies                                                  */}
        {/* ---------------------------------------------------------------- */}

        <section className="pml-section bg-[#F8F7F4]">
          <div className="pml-container">
            <article className="pml-prose max-w-4xl">
              <div className="pml-eyebrow">01 • Understanding cookies</div>

              <h2>What are cookies?</h2>

              <p>
                Cookies are small text files that websites can store in a
                visitor's browser. They can contain information that helps a
                website recognize a returning browser, remember preferences,
                maintain functionality, or measure website usage.
              </p>

              <p>
                Some technologies perform functions similar to cookies without
                using traditional cookie files. These may include local storage,
                session storage, pixels, tags, or other browser-based
                technologies. This policy uses the term "cookies and similar
                technologies" to cover these technologies where appropriate.
              </p>
            </article>
          </div>
        </section>

        {/* ---------------------------------------------------------------- */}
        {/* How cookies may be used                                           */}
        {/* ---------------------------------------------------------------- */}

        <section className="pml-section bg-white">
          <div className="pml-container">
            <article className="pml-prose max-w-4xl">
              <div className="pml-eyebrow">02 • Website functionality</div>

              <h2>How Practical Math Lab may use cookies</h2>

              <p>
                Depending on which services are enabled on the website,
                Practical Math Lab may use cookies or similar technologies for
                several purposes.
              </p>

              <div className="not-prose mt-8 grid gap-5 md:grid-cols-2">
                <CookiePurpose
                  title="Essential functionality"
                  description="Some technologies may be necessary for the website to operate correctly, maintain basic functionality, or remember temporary information during a visit."
                />

                <CookiePurpose
                  title="Preferences"
                  description="Technologies may be used to remember certain browser or website preferences so that visitors do not need to repeatedly configure the same settings."
                />

                <CookiePurpose
                  title="Analytics"
                  description="If analytics services are enabled, they may use cookies or similar technologies to help understand page visits, traffic patterns, and general website usage."
                />

                <CookiePurpose
                  title="Advertising"
                  description="If advertising services such as Google AdSense are enabled, advertising providers may use cookies or similar technologies to deliver, measure, or personalize advertisements according to their own policies."
                />
              </div>
            </article>
          </div>
        </section>

        {/* ---------------------------------------------------------------- */}
        {/* Analytics                                                         */}
        {/* ---------------------------------------------------------------- */}

        <section className="pml-section bg-[#F8F7F4]">
          <div className="pml-container">
            <article className="pml-prose max-w-4xl">
              <div className="pml-eyebrow">03 • Analytics</div>

              <h2>Analytics technologies</h2>

              <p>
                Practical Math Lab may use analytics tools to understand how
                visitors interact with educational content and website features.
                Analytics can help identify frequently visited pages, technical
                problems, general traffic patterns, and areas where the website
                could be improved.
              </p>

              <p>
                Analytics services may set their own cookies or use similar
                technologies. Information collected by a third-party analytics
                provider is generally handled according to that provider's
                privacy and cookie policies.
              </p>

              <div className="not-prose mt-6 rounded-xl border border-[#DEDEDB] bg-white p-6">
                <div className="flex gap-4">
                  <div className="mt-0.5 shrink-0 text-[#2F5BEA]">
                    <Info size={20} />
                  </div>

                  <p className="text-sm leading-6 text-[#34404C]">
                    Analytics services are only applicable when they are
                    actually enabled on the website. The existence of this
                    policy does not mean that every type of analytics technology
                    is active at all times.
                  </p>
                </div>
              </div>
            </article>
          </div>
        </section>

        {/* ---------------------------------------------------------------- */}
        {/* Advertising                                                       */}
        {/* ---------------------------------------------------------------- */}

        <section className="pml-section bg-white">
          <div className="pml-container">
            <article className="pml-prose max-w-4xl">
              <div className="pml-eyebrow">04 • Advertising</div>

              <h2>Advertising cookies and similar technologies</h2>

              <p>
                Practical Math Lab may display advertisements through
                third-party advertising providers. If an advertising service is
                enabled, that provider may use cookies, identifiers, or similar
                technologies to deliver advertisements, measure advertising
                performance, prevent abuse, or personalize advertising where
                permitted.
              </p>

              <p>
                Third-party advertising providers operate under their own
                privacy and cookie policies. Their practices may change as
                services, regulations, and advertising technologies evolve.
              </p>

              <p>
                Visitors should review the applicable policies of the relevant
                advertising provider for more information about how that
                provider handles cookies and advertising-related information.
              </p>
            </article>
          </div>
        </section>

        {/* ---------------------------------------------------------------- */}
        {/* Third party                                                        */}
        {/* ---------------------------------------------------------------- */}

        <section className="pml-section bg-[#F8F7F4]">
          <div className="pml-container">
            <article className="pml-prose max-w-4xl">
              <div className="pml-eyebrow">05 • Third-party services</div>

              <h2>Third-party cookies</h2>

              <p>
                Some services integrated into Practical Math Lab may be provided
                by third parties. Those services may place their own cookies or
                use similar technologies when their functionality is loaded or
                used.
              </p>

              <p>
                Examples may include analytics providers, advertising providers,
                embedded content, or other external services. The specific
                third-party technologies used may change as the website
                develops.
              </p>

              <p>
                Third-party providers are responsible for their own technologies
                and data practices. Their respective policies should be
                consulted for detailed information about their processing
                activities.
              </p>
            </article>
          </div>
        </section>

        {/* ---------------------------------------------------------------- */}
        {/* Local storage                                                     */}
        {/* ---------------------------------------------------------------- */}

        <section className="pml-section bg-white">
          <div className="pml-container">
            <article className="pml-prose max-w-4xl">
              <div className="pml-eyebrow">06 • Similar technologies</div>

              <h2>Local storage and browser storage</h2>

              <p>
                Some website features may use browser storage technologies such
                as local storage or session storage rather than traditional
                cookies.
              </p>

              <p>
                These technologies can allow information to remain available in
                a visitor's browser between page loads or during a browsing
                session. They may be used for functionality such as storing
                interface preferences or temporary application state.
              </p>
            </article>
          </div>
        </section>

        {/* ---------------------------------------------------------------- */}
        {/* Managing cookies                                                  */}
        {/* ---------------------------------------------------------------- */}

        <section className="pml-section bg-[#F8F7F4]">
          <div className="pml-container">
            <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
              <article className="pml-prose">
                <div className="pml-eyebrow">07 • Your browser</div>

                <h2>Managing cookies</h2>

                <p>
                  Most modern web browsers provide controls that allow you to
                  view, block, delete, or restrict cookies. Browser settings
                  differ, so you should consult the documentation provided by
                  your browser for instructions specific to your device.
                </p>

                <p>
                  You may also be able to control certain third-party
                  advertising or analytics technologies through settings or
                  controls provided by those services.
                </p>

                <p>
                  Blocking or deleting cookies may affect the operation of some
                  websites. Certain essential technologies may be required for
                  particular functionality to work correctly.
                </p>
              </article>

              <div className="pml-card">
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#EEF9F3] text-[#18794E]">
                  <ShieldCheck size={21} />
                </div>

                <h3 className="mt-5 text-xl font-bold text-[#17202A]">
                  Browser controls
                </h3>

                <p className="mt-3 text-sm leading-6 text-[#687481]">
                  You remain able to manage many cookie settings through your
                  browser. The available controls depend on the browser and
                  device you use.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ---------------------------------------------------------------- */}
        {/* Policy updates                                                    */}
        {/* ---------------------------------------------------------------- */}

        <section className="pml-section bg-white">
          <div className="pml-container">
            <article className="pml-prose max-w-4xl">
              <div className="pml-eyebrow">08 • Policy changes</div>

              <h2>Updates to this Cookie Policy</h2>

              <p>
                This Cookie Policy may be updated when the website introduces
                new functionality, third-party services, analytics systems,
                advertising technologies, or other changes that affect the use
                of cookies and similar technologies.
              </p>

              <p>
                The updated version will be published on this page. Visitors are
                encouraged to review this policy periodically to remain informed
                about how cookies and similar technologies may be used.
              </p>
            </article>
          </div>
        </section>

        {/* ---------------------------------------------------------------- */}
        {/* Important note                                                    */}
        {/* ---------------------------------------------------------------- */}

        <section className="pml-section bg-[#F8F7F4]">
          <div className="pml-container">
            <div className="mx-auto max-w-4xl rounded-xl border border-[#DEDEDB] bg-white p-7 sm:p-8">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#EEF3FF] text-[#2F5BEA]">
                  <Cookie size={19} />
                </div>

                <div>
                  <h2 className="text-xl font-bold text-[#17202A]">
                    Important information
                  </h2>

                  <p className="mt-3 text-sm leading-7 text-[#687481]">
                    This policy describes the types of cookies and similar
                    technologies that Practical Math Lab may use. The actual
                    technologies active on the website can change depending on
                    which features, analytics services, and advertising services
                    are currently enabled.
                  </p>
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
                Learn more about privacy and website use
              </h2>

              <p className="mt-4 text-base leading-7 text-white/75 sm:text-lg">
                Review the Privacy Policy and Terms of Use for additional
                information about Practical Math Lab and your use of the
                website.
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <a
                  href="/privacy-policy"
                  className="inline-flex items-center justify-center rounded-md bg-white px-5 py-3 text-sm font-semibold text-[#17324D] transition-colors hover:bg-slate-100"
                >
                  Privacy Policy
                </a>

                <a
                  href="/terms-of-use"
                  className="inline-flex items-center justify-center rounded-md border border-white/30 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
                >
                  Terms of Use
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

function CookiePurpose({ title, description }) {
  return (
    <div className="rounded-xl border border-[#DEDEDB] bg-white p-6">
      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#EEF3FF] text-[#2F5BEA]">
        <Cookie size={18} />
      </div>

      <h3 className="mt-4 text-lg font-bold text-[#17202A]">{title}</h3>

      <p className="mt-2 text-sm leading-6 text-[#687481]">{description}</p>
    </div>
  );
}
