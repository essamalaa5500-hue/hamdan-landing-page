import { useLang } from "../LanguageContext";

export default function Footer() {
  const { t } = useLang();
  const cleanPhone = t.contact.phoneValue.replace(/\s+/g, "");
  const currentYear = new Date().getFullYear();

  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
    window.history.replaceState(null, "", "#hero");
  };

  const handleLinkClick = (e, to) => {
    if (to === "#hero" || to === "/") {
      scrollToTop(e);
      return;
    }

    if (to.startsWith("#")) {
      const targetId = to.slice(1);
      const element = document.getElementById(targetId);
      if (element) {
        e.preventDefault();
        element.scrollIntoView({ behavior: "smooth", block: "start" });
        window.history.replaceState(null, "", to);
      }
    }
  };

  return (
    <footer className="border-t border-slate-200 bg-slate-950 text-slate-300">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2 text-start">
            <a
              href="#hero"
              onClick={scrollToTop}
              className="inline-flex items-center gap-2.5 text-lg font-extrabold tracking-wide text-white uppercase"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600 text-sm font-black text-white">
                H
              </span>
              <span>{t.brand}</span>
            </a>

            <p className="mt-4 max-w-md text-sm leading-relaxed text-slate-400">
              {t.footer.description}
            </p>
          </div>

          <div className="text-start">
            <h3 className="text-sm font-bold tracking-wider text-white uppercase">
              {t.footer.quickLinksTitle}
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {t.nav.map((link) => (
                <li key={link.to}>
                  <a
                    href={link.to}
                    onClick={(e) => handleLinkClick(e, link.to)}
                    className="text-slate-400 transition-colors hover:text-indigo-400"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="text-start">
            <h3 className="text-sm font-bold tracking-wider text-white uppercase">
              {t.footer.contactTitle}
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-slate-400">
              <li className="flex items-start gap-2">
                <span aria-hidden="true" className="text-indigo-400">
                  📍
                </span>
                <span>{t.contact.addressValue}</span>
              </li>

              <li className="flex items-center gap-2">
                <span aria-hidden="true" className="text-indigo-400">
                  ☎
                </span>
                <a
                  href={`tel:${cleanPhone}`}
                  dir="ltr"
                  className="transition-colors hover:text-indigo-400"
                >
                  {t.contact.phoneValue}
                </a>
              </li>

              <li className="flex items-center gap-2">
                <span aria-hidden="true" className="text-indigo-400">
                  ✉
                </span>
                <a
                  href={`mailto:${t.contact.emailValue}`}
                  dir="ltr"
                  className="transition-colors hover:text-indigo-400"
                >
                  {t.contact.emailValue}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-slate-800 pt-6 text-xs text-slate-400 sm:flex-row">
          <p>
            © {currentYear} {t.brand}. {t.footer.rights}
          </p>
          <p>{t.contact.hoursValue}</p>
        </div>
      </div>
    </footer>
  );
}
