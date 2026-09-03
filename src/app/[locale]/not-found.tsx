import { useTranslations } from "next-intl";
import { ArrowLeft } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { Eyebrow } from "@/components/eyebrow";

export default function NotFound() {
  const t = useTranslations("notFound");

  return (
    <section className="container-max px-page mx-auto flex min-h-[60vh] flex-col items-start justify-center gap-8 py-28">
      <Eyebrow>{t("eyebrow")}</Eyebrow>
      <h1 className="font-display text-4xl text-primary md:text-display">
        {t("title")}
      </h1>
      <p className="max-w-md text-body-lg text-on-surface-variant">
        {t("body")}
      </p>
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-label-md text-secondary underline decoration-secondary/40 underline-offset-4"
      >
        <ArrowLeft className="h-4 w-4" strokeWidth={1.5} />
        {t("cta")}
      </Link>
    </section>
  );
}
