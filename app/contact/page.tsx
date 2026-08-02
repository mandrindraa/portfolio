"use client";

import { useState, FormEvent } from "react";
import { Terminal, ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";
import Reveal from "@/components/Reveal";
import PlaceholderArt from "@/components/PlaceholderArt";

type Status = "idle" | "submitting" | "submitted";

export default function ContactPage() {
  const { t } = useLanguage();
  const [status, setStatus] = useState<Status>("idle");
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");

    // No backend wired up yet: fall back to opening the visitor's mail
    // client with the message pre-filled. Swap this for a real API route
    // (Resend, Formspree, etc.) whenever you're ready.
    const subject = encodeURIComponent(`Portfolio contact — ${form.name}`);
    const body = encodeURIComponent(
      `${form.message}\n\n—\n${form.name} (${form.email})`
    );

    window.setTimeout(() => {
      window.location.href = `mailto:${t.contact.email}?subject=${subject}&body=${body}`;
      setStatus("submitted");
      window.setTimeout(() => {
        setStatus("idle");
        setForm({ name: "", email: "", message: "" });
      }, 3000);
    }, 800);
  };

  return (
    <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop pt-20 pb-20">
      {/* Hero */}
      <Reveal className="mb-24 md:mb-32">
        <span className="font-label-caps text-label-caps text-secondary uppercase block mb-4">
          {t.contact.eyebrow}
        </span>
        <h1 className="font-display text-headline-lg-mobile md:text-display text-primary max-w-3xl">
          {t.contact.title}
        </h1>
      </Reveal>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter items-start">
        {/* Form */}
        <Reveal className="md:col-span-7" delay={100}>
          <form className="space-y-10 md:space-y-12" onSubmit={handleSubmit}>
            <div className="relative group">
              <label
                className="font-label-caps text-label-caps text-on-surface-variant block mb-2 transition-colors group-focus-within:text-primary"
                htmlFor="name"
              >
                {t.contact.formName}
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                placeholder={t.contact.formNamePlaceholder}
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full font-body-lg text-body-lg form-input-editorial"
              />
            </div>

            <div className="relative group">
              <label
                className="font-label-caps text-label-caps text-on-surface-variant block mb-2 transition-colors group-focus-within:text-primary"
                htmlFor="email"
              >
                {t.contact.formEmail}
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder={t.contact.formEmailPlaceholder}
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full font-body-lg text-body-lg form-input-editorial"
              />
            </div>

            <div className="relative group">
              <label
                className="font-label-caps text-label-caps text-on-surface-variant block mb-2 transition-colors group-focus-within:text-primary"
                htmlFor="message"
              >
                {t.contact.formMessage}
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                placeholder={t.contact.formMessagePlaceholder}
                value={form.message}
                onChange={(e) =>
                  setForm({ ...form, message: e.target.value })
                }
                className="w-full font-body-lg text-body-lg form-input-editorial resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={status !== "idle"}
              className="bg-primary text-on-primary font-label-md text-label-md px-10 py-5 rounded-DEFAULT flex items-center gap-3 hover:bg-secondary transition-all duration-300 group disabled:opacity-70"
            >
              {status === "idle" && t.contact.submit}
              {status === "submitting" && t.contact.submitting}
              {status === "submitted" && t.contact.submitted}
              <Terminal
                size={18}
                className="group-hover:translate-x-1 transition-transform"
              />
            </button>
          </form>
        </Reveal>

        {/* Sidebar */}
        <Reveal className="md:col-span-4 md:col-start-9 space-y-16 md:space-y-20" delay={250}>
          <div className="space-y-6">
            <h3 className="font-label-caps text-label-caps text-on-surface-variant border-b border-surface-variant/40 pb-2 uppercase">
              {t.contact.directTitle}
            </h3>
            <div className="space-y-2">
              <a
                href={`mailto:${t.contact.email}`}
                className="font-headline-md text-headline-md block hover:text-secondary transition-colors break-all"
              >
                {t.contact.email}
              </a>
              <p className="font-body-md text-body-md text-on-surface-variant">
                {t.contact.location}
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="font-label-caps text-label-caps text-on-surface-variant border-b border-surface-variant/40 pb-2 uppercase">
              {t.contact.presenceTitle}
            </h3>
            <ul className="space-y-4">
              {t.contact.links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="flex justify-between items-center group font-body-lg text-body-lg hover:text-secondary transition-all"
                  >
                    <span>{link.label}</span>
                    <ArrowUpRight
                      size={20}
                      className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="pt-4">
            <div className="aspect-square bg-surface-container overflow-hidden">
              <PlaceholderArt label="Contact" variant={1} />
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
