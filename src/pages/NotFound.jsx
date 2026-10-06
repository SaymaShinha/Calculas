import { Mail, MessageSquare, Send } from "lucide-react";
import { useState } from "react";

import SEO from "../components/SEO";
import PageHeader from "../components/PageHeader";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <>
      <SEO
        title="Contact Practical Math Lab"
        description="Contact Practical Math Lab with questions, suggestions, corrections, or feedback about the calculus resources and tools."
        canonical="/contact"
      />

      <PageHeader
        eyebrow="Get in touch"
        title="Contact Practical Math Lab"
        description="Have a question, found an error, or have an idea for a useful calculus resource? We would like to hear from you."
        icon={MessageSquare}
      />

      <main className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <div className="rounded-2xl border border-base-300 bg-base-200/50 p-6">
              <Mail size={25} className="text-primary" />

              <h2 className="mt-5 text-xl font-bold">Send us a message</h2>

              <p className="mt-3 leading-7 text-base-content/60">
                Feedback helps improve the quality and usefulness of the
                educational material.
              </p>

              <div className="mt-6 space-y-3 text-sm text-base-content/60">
                <div>
                  <strong className="text-base-content">Questions</strong>
                  <br />
                  Ask about a concept or resource.
                </div>

                <div>
                  <strong className="text-base-content">Corrections</strong>
                  <br />
                  Report inaccurate or unclear information.
                </div>

                <div>
                  <strong className="text-base-content">Suggestions</strong>
                  <br />
                  Recommend topics or useful tools.
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-base-300 bg-base-100 p-6 shadow-sm sm:p-8">
            {submitted ? (
              <div className="py-12 text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-success/10 text-success">
                  <Send size={24} />
                </div>

                <h2 className="mt-5 text-2xl font-bold">Thank you!</h2>

                <p className="mx-auto mt-3 max-w-md leading-7 text-base-content/60">
                  Your message has been received. We appreciate your feedback.
                </p>

                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="btn btn-outline mt-7"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="mb-2 block text-sm font-semibold">
                    Name
                  </label>

                  <input
                    required
                    type="text"
                    className="input input-bordered w-full"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-semibold">
                    Email
                  </label>

                  <input
                    required
                    type="email"
                    className="input input-bordered w-full"
                    placeholder="you@example.com"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-semibold">
                    Subject
                  </label>

                  <input
                    required
                    type="text"
                    className="input input-bordered w-full"
                    placeholder="How can we help?"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-semibold">
                    Message
                  </label>

                  <textarea
                    required
                    rows="7"
                    className="textarea textarea-bordered w-full"
                    placeholder="Write your message..."
                  />
                </div>

                <button type="submit" className="btn btn-primary">
                  <Send size={17} />
                  Send message
                </button>
              </form>
            )}
          </div>
        </div>
      </main>
    </>
  );
}
