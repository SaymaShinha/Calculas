import { useState } from "react";
import { CheckCircle2, Mail, MessageSquare, Send } from "lucide-react";
import emailjs from "@emailjs/browser";

import SEO from "../components/SEO.jsx";
import PageHeader from "../components/PageHeader.jsx";

const SITE_URL = "https://calculas-eight.vercel.app/";

const initialForm = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");

  function handleChange(event) {
    const { name, value } = event.target;

    setForm((current) => ({
      ...current,
      [name]: value,
    }));
  }

  async function handleSubmit(event) {
    event.preventDefault();

    if (status === "sending") {
      return;
    }

    setStatus("sending");
    setError("");

    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        throw new Error(
          "The email service is not currently configured. Please try again later.",
        );
      }

      await emailjs.send(
        serviceId,
        templateId,
        {
          site_url: SITE_URL,
          url: SITE_URL,
          from_name: form.name.trim(),
          from_email: form.email.trim(),
          subject: form.subject.trim(),
          message: form.message.trim(),
          reply_to: form.email.trim(),
        },
        {
          publicKey,
        },
      );

      setStatus("success");
      setForm(initialForm);
    } catch (err) {
      console.error("EMAILJS ERROR:", err);

      setStatus("error");
      setError(
        err?.text ||
          err?.message ||
          "We could not send your message. Please try again later.",
      );
    }
  }

  return (
    <>
      <SEO
        title="Contact Practical Math Lab | Questions & Feedback"
        description="Contact Practical Math Lab with questions, suggestions, corrections, or feedback about calculus lessons, formulas, applications, calculators, and numerical methods."
        canonical="/contact"
      />

      <PageHeader
        eyebrow="Contact"
        title="Get in touch"
        description="Have a question, suggestion, correction, or idea for Practical Math Lab? Send us a message."
      />

      <main>
        <section className="pml-section bg-[#F8F7F4]">
          <div className="pml-container">
            <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr]">
              {/* ------------------------------------------------------------ */}
              {/* Contact information                                           */}
              {/* ------------------------------------------------------------ */}

              <aside>
                <div className="pml-eyebrow">Contact information</div>

                <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[#17202A]">
                  We value your feedback.
                </h2>

                <p className="mt-5 max-w-md text-sm leading-7 text-[#687481] sm:text-base">
                  Practical Math Lab is designed to make calculus easier to
                  understand through explanations, examples, applications,
                  formulas, and interactive mathematical tools.
                </p>

                <div className="mt-8 space-y-4">
                  <div className="border border-[#DEDEDB] bg-white p-5">
                    <div className="flex gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#EEF3FF] text-[#17324D]">
                        <Mail size={19} strokeWidth={1.8} />
                      </div>

                      <div>
                        <h3 className="text-sm font-semibold text-[#17202A]">
                          Email
                        </h3>

                        <p className="mt-1 text-sm leading-6 text-[#687481]">
                          Use the contact form to send a message directly.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="border border-[#DEDEDB] bg-white p-5">
                    <div className="flex gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#EEF3FF] text-[#17324D]">
                        <MessageSquare size={19} strokeWidth={1.8} />
                      </div>

                      <div>
                        <h3 className="text-sm font-semibold text-[#17202A]">
                          Questions & feedback
                        </h3>

                        <p className="mt-1 text-sm leading-6 text-[#687481]">
                          Report an issue, suggest a topic, point out a
                          correction, or share feedback about the site.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 border-t border-[#DEDEDB] pt-6">
                  <p className="text-xs font-bold uppercase tracking-[0.12em] text-[#687481]">
                    Useful topics
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {[
                      "Calculus",
                      "Calculators",
                      "Formulas",
                      "Learning resources",
                      "Numerical methods",
                      "Website feedback",
                    ].map((item) => (
                      <span
                        key={item}
                        className="border border-[#DEDEDB] bg-white px-3 py-1.5 text-xs font-medium text-[#687481]"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-8 border border-[#DEDEDB] bg-white p-5">
                  <h3 className="text-sm font-semibold text-[#17202A]">
                    What can you contact us about?
                  </h3>

                  <ul className="mt-4 space-y-3">
                    {[
                      "Questions about educational content",
                      "Suggestions for new topics or tools",
                      "Corrections to mathematical content",
                      "Website problems or broken links",
                      "General feedback about the learning experience",
                    ].map((item) => (
                      <li
                        key={item}
                        className="flex gap-3 text-sm leading-6 text-[#687481]"
                      >
                        <CheckCircle2
                          size={16}
                          className="mt-1 shrink-0 text-[#18794E]"
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </aside>

              {/* ------------------------------------------------------------ */}
              {/* Contact form                                                   */}
              {/* ------------------------------------------------------------ */}

              <div className="border border-[#DEDEDB] bg-white p-6 shadow-sm sm:p-8">
                <div className="border-b border-[#DEDEDB] pb-6">
                  <div className="pml-eyebrow">Message form</div>

                  <h2 className="mt-3 text-2xl font-semibold tracking-tight text-[#17202A]">
                    Send a message
                  </h2>

                  <p className="mt-2 text-sm leading-7 text-[#687481]">
                    Complete the form below and your message will be sent
                    through our email service.
                  </p>
                </div>

                {/* Success message */}

                {status === "success" && (
                  <div className="pml-success mt-6 flex items-start gap-3 p-4">
                    <CheckCircle2 size={20} className="mt-0.5 shrink-0" />

                    <div>
                      <p className="font-semibold">
                        Message sent successfully.
                      </p>

                      <p className="mt-1 text-sm leading-6">
                        Thank you for contacting Practical Math Lab. We
                        appreciate your feedback.
                      </p>
                    </div>
                  </div>
                )}

                {/* Error message */}

                {status === "error" && (
                  <div className="pml-warning mt-6 p-4">
                    <p className="font-semibold">
                      Unable to send your message.
                    </p>

                    <p className="mt-1 text-sm leading-6">{error}</p>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="mt-7 space-y-5">
                  {/* Name + Email */}

                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="name"
                        className="mb-2 block text-sm font-semibold text-[#34404C]"
                      >
                        Name
                      </label>

                      <input
                        id="name"
                        name="name"
                        type="text"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        className="pml-input"
                        required
                        autoComplete="name"
                        maxLength={100}
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="mb-2 block text-sm font-semibold text-[#34404C]"
                      >
                        Email address
                      </label>

                      <input
                        id="email"
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="you@example.com"
                        className="pml-input"
                        required
                        autoComplete="email"
                        maxLength={254}
                      />
                    </div>
                  </div>

                  {/* Subject */}

                  <div>
                    <label
                      htmlFor="subject"
                      className="mb-2 block text-sm font-semibold text-[#34404C]"
                    >
                      Subject
                    </label>

                    <input
                      id="subject"
                      name="subject"
                      type="text"
                      value={form.subject}
                      onChange={handleChange}
                      placeholder="What would you like to ask?"
                      className="pml-input"
                      required
                      maxLength={150}
                    />
                  </div>

                  {/* Message */}

                  <div>
                    <label
                      htmlFor="message"
                      className="mb-2 block text-sm font-semibold text-[#34404C]"
                    >
                      Message
                    </label>

                    <textarea
                      id="message"
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Write your message here..."
                      className="pml-input min-h-[180px] resize-y"
                      required
                      rows={7}
                      maxLength={5000}
                    />

                    <p className="mt-2 text-xs text-[#8A949E]">
                      Please keep your message concise and do not include
                      sensitive personal information.
                    </p>
                  </div>

                  {/* Submit */}

                  <div className="flex flex-col gap-4 border-t border-[#DEDEDB] pt-6 sm:flex-row sm:items-center sm:justify-between">
                    <p className="max-w-md text-xs leading-5 text-[#8A949E]">
                      Please do not include passwords, payment information,
                      authentication codes, or other sensitive personal
                      information.
                    </p>

                    <button
                      type="submit"
                      disabled={status === "sending"}
                      className="pml-btn-primary shrink-0 !text-white disabled:cursor-not-allowed disabled:opacity-60"
                    >
                      {status === "sending" ? (
                        <>
                          <span
                            className="loading loading-spinner loading-sm"
                            aria-hidden="true"
                          />
                          Sending...
                        </>
                      ) : (
                        <>
                          Send message
                          <Send size={16} />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* ------------------------------------------------------------------ */}
        {/* Before contacting us                                                */}
        {/* ------------------------------------------------------------------ */}

        <section className="pml-section bg-white">
          <div className="pml-container">
            <div className="grid gap-8 lg:grid-cols-3">
              <div>
                <div className="pml-eyebrow">Before you contact us</div>

                <h2 className="mt-3 text-2xl font-semibold text-[#17202A] sm:text-3xl">
                  A few useful details
                </h2>
              </div>

              <div className="lg:col-span-2 grid gap-5 sm:grid-cols-3">
                <article className="border border-[#DEDEDB] bg-[#F8F7F4] p-5">
                  <h3 className="text-base font-semibold text-[#17202A]">
                    Mathematical corrections
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-[#687481]">
                    If you notice an error, include the page name and the
                    specific formula, example, or explanation that needs review.
                  </p>
                </article>

                <article className="border border-[#DEDEDB] bg-[#F8F7F4] p-5">
                  <h3 className="text-base font-semibold text-[#17202A]">
                    Tool problems
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-[#687481]">
                    For calculator issues, include the expression and inputs
                    that produced the unexpected result.
                  </p>
                </article>

                <article className="border border-[#DEDEDB] bg-[#F8F7F4] p-5">
                  <h3 className="text-base font-semibold text-[#17202A]">
                    Topic suggestions
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-[#687481]">
                    Tell us which calculus concept, application, or numerical
                    method you would like to see explained.
                  </p>
                </article>
              </div>
            </div>
          </div>
        </section>

        {/* ------------------------------------------------------------------ */}
        {/* Privacy reminder                                                    */}
        {/* ------------------------------------------------------------------ */}

        <section className="pml-section bg-[#F8F7F4]">
          <div className="pml-container">
            <div className="border border-[#DEDEDB] bg-white p-6 sm:p-8">
              <div className="flex items-start gap-4">
                <Mail size={22} className="mt-1 shrink-0 text-[#2F5BEA]" />

                <div>
                  <div className="pml-eyebrow">Privacy reminder</div>

                  <h2 className="mt-3 text-xl font-semibold text-[#17202A]">
                    Please share only what is necessary
                  </h2>

                  <p className="mt-3 max-w-3xl text-sm leading-7 text-[#687481]">
                    The contact form is intended for questions, feedback,
                    corrections, and suggestions about Practical Math Lab.
                    Please do not use it to submit passwords, financial
                    information, authentication credentials, or other sensitive
                    personal information.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
