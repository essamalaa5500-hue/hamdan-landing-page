import { useLang } from "../LanguageContext";
import Reveal from "./Reveal";
import aboutImg from "../assets/about.jpg";

export default function About() {
  const { t } = useLang();

  const handleScrollToContact = (e) => {
    e.preventDefault();
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      window.history.replaceState(null, "", "#contact");
    }
  };

  return (
    <section
      id="about"
      style={{ backgroundImage: `url(${aboutImg})` }}
      className="relative flex min-h-[75vh] scroll-mt-24 items-center bg-cover bg-center bg-no-repeat px-4 py-20 sm:px-6 lg:px-8"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-900/75 to-slate-950/45 rtl:bg-gradient-to-l rtl:from-slate-950/90 rtl:via-slate-900/75 rtl:to-slate-950/45" />

      <div className="relative z-10 mx-auto w-full max-w-7xl">
        <Reveal>
          <div className="max-w-3xl text-start">
            <span className="inline-block rounded-full border border-indigo-300/35 bg-indigo-950/70 px-4 py-1.5 text-xs font-bold tracking-wide text-indigo-200 backdrop-blur-xs sm:text-sm">
              {t.about.badge}
            </span>

            <h2 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
              {t.about.title}
            </h2>

            <p className="mt-5 max-w-2xl text-base font-light leading-relaxed text-slate-200 sm:text-lg">
              {t.about.description}
            </p>

            <div className="mt-6 inline-flex flex-wrap items-center gap-2 rounded-xl border border-white/15 bg-white/10 px-4 py-2.5 text-sm text-white backdrop-blur-xs">
              <span aria-hidden="true">📍</span>
              <span className="font-semibold text-indigo-200">
                {t.about.locationLabel}:
              </span>
              <span className="font-medium">{t.about.locationValue}</span>
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {t.about.highlights.map((item, idx) => (
                <Reveal key={idx} delay={idx * 100}>
                  <div className="rounded-xl border border-white/15 bg-slate-950/60 p-4 backdrop-blur-xs">
                    <p className="text-sm font-bold text-indigo-300">
                      {item.label}
                    </p>
                    <p className="mt-1 text-xs text-slate-200 sm:text-sm">
                      {item.value}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
            <div className="mt-8">
              <a
                href="#contact"
                onClick={handleScrollToContact}
                className="inline-flex items-center justify-center rounded-lg bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-md transition-all duration-200 hover:bg-indigo-700 sm:text-base"
              >
                {t.about.ctaText}
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
