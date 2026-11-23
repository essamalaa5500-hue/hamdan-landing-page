import { useState } from "react";
import { useLang } from "../LanguageContext";
import Reveal from "./Reveal";

function PhoneIcon() {
  return (
    <svg
      className="h-6 w-6"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function WhatsappIcon() {
  return (
    <svg
      className="h-6 w-6"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
    </svg>
  );
}

function LocationIcon() {
  return (
    <svg
      className="h-6 w-6"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg
      className="h-6 w-6"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg
      className="h-6 w-6"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

function formatUaeWhatsappNumber(raw) {
  const digits = String(raw || "").replace(/\D/g, "");
  if (digits.startsWith("971")) return digits;
  if (digits.startsWith("0")) return `971${digits.slice(1)}`;
  return digits;
}

export default function Contact() {
  const { t } = useLang();
  const [copiedEmail, setCopiedEmail] = useState(false);

  const cleanPhone = t.contact.phoneValue.replace(/\s+/g, "");
  const whatsappNumber = formatUaeWhatsappNumber(t.contact.whatsappValue);
  const cleanEmail = String(t.contact.emailValue || "").trim();
  const mailtoHref = `mailto:${cleanEmail}?subject=${encodeURIComponent(
    `${t.brand} - Inquiry`,
  )}`;

  const handleCopyEmail = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    try {
      await navigator.clipboard.writeText(cleanEmail);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } catch {
      setCopiedEmail(false);
    }
  };

  const cards = [
    {
      key: "phone",
      label: t.contact.phoneLabel,
      value: t.contact.phoneValue,
      href: `tel:${cleanPhone}`,
      icon: <PhoneIcon />,
      dirLtr: true,
    },
    {
      key: "whatsapp",
      label: t.contact.whatsappLabel,
      value: t.contact.whatsappValue,
      href: `https://wa.me/${whatsappNumber}`,
      external: true,
      icon: <WhatsappIcon />,
      dirLtr: true,
    },
    {
      key: "address",
      label: t.contact.addressLabel,
      value: t.contact.addressValue,
      icon: <LocationIcon />,
      dirLtr: false,
    },
    {
      key: "email",
      label: t.contact.emailLabel,
      value: cleanEmail,
      href: mailtoHref,
      icon: <MailIcon />,
      dirLtr: true,
    },
    {
      key: "hours",
      label: t.contact.hoursLabel,
      value: t.contact.hoursValue,
      icon: <ClockIcon />,
      dirLtr: false,
    },
  ];

  return (
    <section
      id="contact"
      className="scroll-mt-24 bg-slate-50 px-4 py-20 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-block rounded-full border border-indigo-200 bg-indigo-50 px-4 py-1 text-xs font-bold tracking-wide text-indigo-700 sm:text-sm">
              {t.contact.badge}
            </span>

            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              {t.contact.title}
            </h2>

            <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
              {t.contact.subtitle}
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((card, index) => {
            const isEmail = card.key === "email";

            const cardBody = (
              <div className="group flex h-full items-start gap-4 rounded-2xl border border-slate-200/90 bg-white p-6 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-indigo-300 hover:shadow-md hover:shadow-indigo-950/5">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600 transition-colors duration-300 group-hover:bg-indigo-600 group-hover:text-white">
                  {card.icon}
                </div>

                <div className="min-w-0 flex-1 text-start">
                  <p className="text-xs font-bold tracking-wide text-indigo-600 uppercase">
                    {card.label}
                  </p>

                  {isEmail ? (
                    <div className="mt-1.5 flex flex-wrap items-center gap-2">
                      <a
                        href={card.href}
                        dir="ltr"
                        className="break-all text-base font-bold text-slate-900 underline-offset-4 transition-colors hover:text-indigo-600 hover:underline sm:text-lg"
                      >
                        {card.value}
                      </a>
                      <button
                        type="button"
                        onClick={handleCopyEmail}
                        className="cursor-pointer rounded-md border border-indigo-200 bg-indigo-50 px-2 py-0.5 text-xs font-semibold text-indigo-700 transition hover:bg-indigo-100"
                      >
                        {copiedEmail
                          ? `✓ ${t.contact.copiedLabel}`
                          : t.contact.copyLabel}
                      </button>
                    </div>
                  ) : (
                    <p
                      dir={card.dirLtr ? "ltr" : undefined}
                      className="mt-1.5 break-words text-base font-bold text-slate-900 sm:text-lg"
                    >
                      {card.value}
                    </p>
                  )}
                </div>
              </div>
            );

            return (
              <Reveal key={card.key} delay={index * 90} className="h-full">
                {card.href && !isEmail ? (
                  <a
                    href={card.href}
                    target={card.external ? "_blank" : undefined}
                    rel={card.external ? "noopener noreferrer" : undefined}
                    className="block h-full"
                  >
                    {cardBody}
                  </a>
                ) : (
                  <div className="h-full">{cardBody}</div>
                )}
              </Reveal>
            );
          })}
        </div>

        {/* أزرار تواصل سريعة */}
        <Reveal delay={200}>
          <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
            <a
              href={`tel:${cleanPhone}`}
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-indigo-600 px-6 py-3.5 text-sm font-semibold text-white shadow-md transition-all duration-200 hover:bg-indigo-700 sm:text-base"
            >
              <PhoneIcon />
              <span>{t.contact.callCta}</span>
            </a>

            <a
              href={`https://wa.me/${whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-indigo-200 bg-white px-6 py-3.5 text-sm font-semibold text-indigo-700 shadow-xs transition-all duration-200 hover:border-indigo-300 hover:bg-indigo-50 sm:text-base"
            >
              <WhatsappIcon />
              <span>{t.contact.whatsappCta}</span>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
