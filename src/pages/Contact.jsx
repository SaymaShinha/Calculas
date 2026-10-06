import { useState } from "react";
import { CheckCircle2, Mail, MessageSquare, Send } from "lucide-react";

import emailjs from "@emailjs/browser";

import SEO from "../components/SEO.jsx";
import PageHeader from "../components/PageHeader.jsx";

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

    setStatus("sending");
    setError("");

    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        throw new Error(
          "Email service is not configured. Please try again later.",
        );
      }

      await emailjs.send(
        serviceId,
        templateId,
        {
          url: "https://calculas-lab.vercel.app/",
          from_name: form.name,
          from_email: form.email,
          subject: form.subject,
          message: form.message,
          reply_to: form.email,
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
        err?.message || "We could not send your message. Please try again.",
      );
    }
  }

  return (
    <>
      <SEO
        title="Contact | Practical Math Lab"
        description="Contact Practical Math Lab with questions, suggestions, corrections, or feedback about our calculus lessons, formulas, applications, and calculators."
      />

      <PageHeader
        eyebrow="Contact"
        title="Get in touch"
        description="Have a question, suggestion, correction, or idea for Practical Math Lab? Send us a message."
      />

      <section className="pml-section">
        <div className="mx-auto max-w-[1180px] px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr]">
            {/* Information */}
            <aside>
              <div className="pml-eyebrow">Contact information</div>

              <h2 className="mt-4 text-2xl font-extrabold tracking-tight text-slate-900">
                We value your feedback.
              </h2>

              <p className="mt-4 max-w-md text-sm leading-7 text-slate-600">
                Practical Math Lab is designed to make calculus easier to
                understand through explanations, examples, applications,
                formulas, and interactive tools.
              </p>

              <div className="mt-8 space-y-4">
                <div className="flex gap-4 rounded-xl border border-slate-200 bg-white p-5">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-slate-100 text-[#17324d]">
                    <Mail size={19} strokeWidth={1.8} />
                  </div>

                  <div>
                    <h3 className="text-sm font-bold text-slate-900">Email</h3>

                    <p className="mt-1 text-sm leading-6 text-slate-500">
                      Use the form to send us a message directly.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 rounded-xl border border-slate-200 bg-white p-5">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-slate-100 text-[#17324d]">
                    <MessageSquare size={19} strokeWidth={1.8} />
                  </div>

                  <div>
                    <h3 className="text-sm font-bold text-slate-900">
                      Questions & feedback
                    </h3>

                    <p className="mt-1 text-sm leading-6 text-slate-500">
                      Tell us about an issue, suggest a topic, or share feedback
                      about the site.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 border-t border-slate-200 pt-6">
                <p className="text-xs font-bold uppercase tracking-[0.12em] text-slate-400">
                  Useful topics
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {[
                    "Calculus",
                    "Calculators",
                    "Formulas",
                    "Learning resources",
                    "Website feedback",
                  ].map((item) => (
                    <span
                      key={item}
                      className="rounded-md border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-500"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </aside>

            {/* Form */}
            <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
              <div className="border-b border-slate-200 pb-6">
                <h2 className="text-xl font-bold tracking-tight text-slate-900">
                  Send a message
                </h2>

                <p className="mt-2 text-sm leading-6 text-slate-500">
                  Complete the form below and your message will be sent securely
                  through our email service.
                </p>
              </div>

              {status === "success" && (
                <div className="pml-success mt-6 flex items-start gap-3 p-4">
                  <CheckCircle2 size={20} className="mt-0.5 shrink-0" />

                  <div>
                    <p className="font-semibold">Message sent successfully.</p>

                    <p className="mt-1 text-sm leading-6">
                      Thank you for contacting Practical Math Lab. We appreciate
                      your feedback.
                    </p>
                  </div>
                </div>
              )}

              {status === "error" && (
                <div className="pml-warning mt-6 p-4">
                  <p className="font-semibold">Unable to send your message.</p>

                  <p className="mt-1 text-sm leading-6">{error}</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="mt-7 space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-2 block text-sm font-semibold text-slate-800"
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
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block text-sm font-semibold text-slate-800"
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
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="mb-2 block text-sm font-semibold text-slate-800"
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
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-semibold text-slate-800"
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
                  />
                </div>

                <div className="flex flex-col gap-4 border-t border-slate-200 pt-6 sm:flex-row sm:items-center sm:justify-between">
                  <p className="max-w-md text-xs leading-5 text-slate-400">
                    Please do not include passwords, payment information, or
                    other sensitive personal information.
                  </p>

                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="pml-btn-primary shrink-0 disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {status === "sending" ? (
                      <>
                        <span className="loading loading-spinner loading-sm" />
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
    </>
  );
}
