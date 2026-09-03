"use client";

import { siteConfig } from "@/lib/site-config";
import { Send } from "lucide-react";
import { useTranslations } from "next-intl";
import { useActionState } from "react";
import { submitContactForm, type ContactFormState } from "./actions";

const initialState: ContactFormState = { status: "idle" };

export function ContactForm() {
  const t = useTranslations("contact.form");
  const [state, formAction, pending] = useActionState(
    submitContactForm,
    initialState,
  );

  if (state.status === "success") {
    return (
      <div className="border border-outline-variant bg-surface-container-lowest p-8">
        <p className="text-body-lg text-on-surface">{t("success")}</p>
      </div>
    );
  }

  return (
    <form action={formAction} className="flex flex-col gap-7">
      <div className="flex flex-col gap-2">
        <label htmlFor="name" className="text-label-md text-on-surface-variant">
          {t("name")}
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          placeholder={t("namePlaceholder")}
          className="border-b border-outline-variant bg-transparent py-3 text-body-md text-on-surface outline-none transition-colors"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label
          htmlFor="email"
          className="text-label-md text-on-surface-variant"
        >
          {t("email")}
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          placeholder={t("emailPlaceholder")}
          className="border-b border-outline-variant bg-transparent py-3 text-body-md text-on-surface outline-none transition-colors"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label
          htmlFor="message"
          className="text-label-md text-on-surface-variant"
        >
          {t("message")}
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          placeholder={t("messagePlaceholder")}
          className="resize-none border-b border-outline-variant bg-transparent py-3 text-body-md text-on-surface outline-none transition-colors"
        />
      </div>

      <button
        type="submit"
        disabled={pending}
        className="inline-flex w-fit items-center gap-2 bg-primary px-7 py-3 text-label-md text-on-primary transition-opacity hover:opacity-85 disabled:opacity-60"
      >
        {pending ? t("submitting") : t("submit")}
        <Send className="h-4 w-4" strokeWidth={1.5} />
      </button>

      {state.status === "error" && (
        <p className="text-body-md text-on-surface-variant">
          {t("error")}{" "}
          <a href={`mailto:${siteConfig.email}`} className="underline">
            {siteConfig.email}
          </a>
        </p>
      )}

      {state.status === "not_configured" && (
        <p className="text-body-md text-on-surface-variant">
          {t("error")}{" "}
          <a href={`mailto:${siteConfig.email}`} className="underline">
            {siteConfig.email}
          </a>
        </p>
      )}
    </form>
  );
}
