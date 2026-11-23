import { useLang } from "../LanguageContext";
import heroImg from "../assets/hero.jpg";

export default function Hero() {
  const { t } = useLang();

  const handleScrollTo = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      window.history.replaceState(null, "", `#${id}`);
    }
  };

  return (
    <section
      id="hero"
      style={{ backgroundImage: `url(${heroImg})` }}
      className="relative flex min-h-[85vh] scroll-mt-24 items-center bg-cover bg-center bg-no-repeat px-4 py-20 sm:px-6 lg:px-8"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/70 to-transparent rtl:bg-gradient-to-l rtl:from-slate-900/90 rtl:via-slate-900/70 rtl:to-transparent" />

      <div className="relative z-10 mx-auto w-full max-w-7xl">
        <div className="max-w-3xl text-start">
          <h1 className="text-4xl font-extrabold leading-[1.25] tracking-tight text-white sm:text-5xl sm:leading-[1.15] lg:text-6xl">
            {t.hero.title}
          </h1>

          <p className="mt-6 max-w-2xl text-lg font-light leading-relaxed text-slate-200 sm:text-xl">
            {t.hero.subtitle}
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#services"
              onClick={(e) => handleScrollTo(e, "services")}
              className="inline-flex items-center justify-center rounded-lg bg-indigo-600 px-6 py-3.5 text-base font-semibold text-white shadow-md transition-all duration-200 hover:bg-indigo-700 hover:shadow-indigo-500/20"
            >
              {t.hero.btnPrimary}
            </a>

            <a
              href="#contact"
              onClick={(e) => handleScrollTo(e, "contact")}
              className="inline-flex items-center justify-center rounded-lg border-2 border-white bg-white/10 px-6 py-3.5 text-base font-semibold text-white backdrop-blur-xs transition-all duration-200 hover:bg-white hover:text-indigo-950"
            >
              {t.hero.btnSecondary}
            </a>
          </div>
        </div>

        <div className="mt-8 inline-flex items-center gap-2 rounded-full border border-indigo-300/30 bg-indigo-950/60 px-4 py-1.5 text-xs font-semibold tracking-wide text-indigo-200 backdrop-blur-xs sm:text-sm">
          <span aria-hidden="true">📍</span>
          <span>{t.hero.address}</span>
        </div>
      </div>
    </section>
  );
}
