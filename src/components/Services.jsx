import { useLang } from "../LanguageContext";
import Reveal from "./Reveal";
import docCopyImg from "../assets/docCopy.jpg";
import verifyImg from "../assets/verify.png";
import docImg from "../assets/doc.jpg";
import translateImg from "../assets/translate.jpg";

const images = {
  copying: docCopyImg,
  verification: verifyImg,
  clearing: docImg,
  translation: translateImg,
};

export default function Services() {
  const { t } = useLang();

  return (
    <section
      id="services"
      className="scroll-mt-24 bg-slate-50 px-4 py-20 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-block rounded-full border border-indigo-200 bg-indigo-50 px-4 py-1 text-xs font-bold tracking-wide text-indigo-700 sm:text-sm">
              {t.services.badge}
            </span>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              {t.services.title}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
              {t.services.subtitle}
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {t.services.items.map((item, index) => (
            <Reveal key={item.id} delay={index * 120} className="h-full">
              <div
                id={`service-${item.id}`}
                className="group flex h-full scroll-mt-24 flex-col overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-xs transition-all duration-300 hover:-translate-y-1.5 hover:border-indigo-300 hover:shadow-lg hover:shadow-indigo-950/5"
              >
                {/* صورة الكارت */}
                <div className="relative h-48 w-full overflow-hidden bg-slate-100">
                  <img
                    src={images[item.id]}
                    alt={item.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/25 via-transparent to-transparent" />
                </div>

                {/* محتوى الكارت */}
                <div className="flex flex-1 flex-col justify-between p-6">
                  <div>
                    <h3 className="text-lg font-bold leading-snug text-slate-900">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-sm leading-relaxed text-slate-600">
                      {item.description}
                    </p>
                  </div>

                  <div className="mt-6 border-t border-slate-100 pt-4">
                    <a
                      href="#contact"
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-indigo-600 transition-colors hover:text-indigo-800"
                    >
                      <span>{t.hero.btnSecondary}</span>
                      <span className="transition-transform duration-200 group-hover:translate-x-1 rtl:group-hover:-translate-x-1">
                        →
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
