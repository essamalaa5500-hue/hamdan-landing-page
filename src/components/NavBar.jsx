import { useState } from "react";
import { useLang } from "../LanguageContext";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { t, toggleLang } = useLang();

  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
    window.history.replaceState(null, "", "#hero");
    setIsOpen(false);
  };

  const handleNavClick = (e, to) => {
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
    setIsOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/95 backdrop-blur-md shadow-xs">
      <div
        dir="ltr"
        className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8"
      >
        <a
          href="#hero"
          onClick={scrollToTop}
          className="inline-flex shrink-0 items-center gap-2.5 text-lg font-extrabold tracking-wide text-slate-900 uppercase"
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600 text-sm font-black text-white shadow-xs">
            H
          </span>
          <span>{t.brand}</span>
        </a>

        <nav className="hidden items-center gap-6 lg:flex">
          {t.nav.map((link) => (
            <a
              key={link.to}
              href={link.to}
              onClick={(e) => handleNavClick(e, link.to)}
              className="whitespace-nowrap text-sm font-medium text-slate-700 transition-colors hover:text-indigo-600"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden shrink-0 items-center gap-2.5 md:flex">
          <a
            href={`tel:${t.callNumber.replace(/\s+/g, "")}`}
            className="flex items-center gap-2 rounded-lg border border-indigo-200 bg-indigo-50/70 px-3 py-1.5 text-left transition hover:bg-indigo-100/70"
          >
            <span className="text-base text-indigo-600">☎</span>
            <div className="leading-tight">
              <span className="block text-[10px] font-bold tracking-wider text-indigo-600 uppercase">
                {t.callLabel}
              </span>
              <span className="block text-xs font-extrabold text-indigo-900">
                {t.callNumber}
              </span>
            </div>
          </a>

          <button
            type="button"
            onClick={toggleLang}
            className="flex cursor-pointer items-center gap-1.5 rounded-lg border border-slate-300 bg-white px-3.5 py-2 text-xs font-bold text-slate-800 transition hover:border-indigo-600 hover:text-indigo-600"
          >
            <span>文/A</span>
            <span>{t.toggleBtn}</span>
          </button>
        </div>

        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label="Toggle Menu"
          className="rounded-lg border border-slate-200 p-2 text-slate-700 hover:bg-slate-50 md:hidden"
        >
          <span className="text-lg leading-none">{isOpen ? "✕" : "☰"}</span>
        </button>
      </div>
      {isOpen && (
        <div className="border-t border-slate-200 bg-white px-4 py-4 md:hidden">
          <div className="flex flex-col gap-3">
            {t.nav.map((link) => (
              <a
                key={link.to}
                href={link.to}
                onClick={(e) => handleNavClick(e, link.to)}
                className="rounded-md px-2 py-2 text-sm font-medium text-slate-700 hover:bg-indigo-50 hover:text-indigo-700"
              >
                {link.label}
              </a>
            ))}

            <div className="mt-2 flex items-center gap-2 border-t border-slate-100 pt-3">
              <button
                type="button"
                onClick={() => {
                  toggleLang();
                  setIsOpen(false);
                }}
                className="flex-1 rounded-lg border border-slate-300 px-3.5 py-2 text-center text-xs font-bold text-slate-800 hover:border-indigo-600 hover:text-indigo-600"
              >
                {t.toggleBtn}
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
