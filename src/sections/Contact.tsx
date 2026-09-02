import { useState } from "react";
import type { FormEvent } from "react";
import { Mail, Phone, Send } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "../components/icons";
import SectionHeading from "../components/SectionHeading";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section id="contact" className="py-24 sm:py-32 border-t border-line-soft">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 grid lg:grid-cols-2 gap-16">
        <div>
          <SectionHeading
            eyebrow="POST /contact"
            title="Let's Build Something Reliable"
            description="Whether you're looking for a DevOps engineer, cloud infrastructure expertise, CI/CD automation, or Kubernetes solutions, let's connect."
          />

          <div className="mt-9 space-y-3">
            <a href="https://github.com/Nissar005" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-ink-dim hover:text-ink transition-colors">
              <GithubIcon size={17} /> GitHub
            </a>
            <a href="https://www.linkedin.com/in/nisar-ahmed-834950b5/" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-ink-dim hover:text-ink transition-colors">
              <LinkedinIcon size={17} /> LinkedIn
            </a>
            <a href="mailto:nissar005@gmail.com" className="flex items-center gap-3 text-ink-dim hover:text-ink transition-colors">
              <Mail size={17} /> nissar005@gmail.com
            </a>
            <a href="tel:+917204572822" className="flex items-center gap-3 text-ink-dim hover:text-ink transition-colors">
              <Phone size={17} /> +91 72045 72282
            </a>
          </div>
        </div>

        <div className="panel rounded-lg p-6 sm:p-8">
          {submitted ? (
            <div className="h-full flex flex-col items-center justify-center text-center py-10">
              <div className="w-11 h-11 rounded-full bg-mint/10 border border-mint-dim flex items-center justify-center mb-4">
                <Send size={17} className="text-mint" />
              </div>
              <h3 className="font-semibold text-ink">Message ready to send</h3>
              <p className="mt-2 text-sm text-ink-dim max-w-xs">
                This form is a UI demo. Wire it to an email service or backend to actually deliver
                messages.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <Field label="Name" id="name" type="text" required />
              <Field label="Email" id="email" type="email" required />
              <Field label="Subject" id="subject" type="text" />
              <div>
                <label htmlFor="message" className="block text-xs font-mono text-ink-faint mb-1.5">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  className="w-full rounded-md bg-void border border-line px-3.5 py-2.5 text-sm text-ink placeholder:text-ink-faint focus:border-mint-dim outline-none transition-colors resize-none"
                  placeholder="Tell me about the project..."
                />
              </div>
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 rounded-md bg-mint text-void font-semibold px-5 py-3 hover:bg-mint/90 transition-colors"
              >
                Send Message <Send size={15} />
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  id,
  type,
  required,
}: {
  label: string;
  id: string;
  type: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={id} className="block text-xs font-mono text-ink-faint mb-1.5">
        {label}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        required={required}
        className="w-full rounded-md bg-void border border-line px-3.5 py-2.5 text-sm text-ink placeholder:text-ink-faint focus:border-mint-dim outline-none transition-colors"
      />
    </div>
  );
}
