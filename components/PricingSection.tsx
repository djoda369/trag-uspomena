export function PricingSection() {
  return (
    <section className="py-24 px-3 sm:px-4 max-w-7xl mx-auto" id="cene">
      <div className="text-center mb-12 sm:mb-16 space-y-4">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
          Izaberite svoj format
        </h2>
        <p className="text-on-surface-variant text-lg">
          Akcijske cene i jasni paketi bez skrivenih troškova
        </p>
      </div>

      <div className="grid gap-5 sm:gap-6 max-w-5xl mx-auto md:grid-cols-3">
        <div className="bg-surface-container-low p-8 lg:p-10 rounded-xl border border-outline-variant/10 flex flex-col items-center text-center">
          <span className="text-primary font-bold uppercase tracking-widest text-sm mb-4">
            Digitalno
          </span>
          <h3 className="text-3xl font-bold mb-6">Digitalna bojanka</h3>
          <div className="mb-2 text-sm font-semibold text-on-surface-variant">
            <span className="line-through">1.349 RSD</span>
          </div>
          <div className="text-5xl font-extrabold text-on-surface mb-8">
            899{" "}
            <span className="text-xl font-normal text-on-surface-variant">
              RSD
            </span>
          </div>
          <ul className="space-y-4 mb-10 text-on-surface-variant">
            <li className="flex items-center gap-2">
              <span
                className="material-symbols-outlined text-tertiary"
                aria-hidden
              >
                check
              </span>{" "}
              12 personalizovanih strana
            </li>
            <li className="flex items-center gap-2">
              <span
                className="material-symbols-outlined text-tertiary"
                aria-hidden
              >
                check
              </span>{" "}
              PDF visoke rezolucije
            </li>
            <li className="flex items-center gap-2">
              <span
                className="material-symbols-outlined text-tertiary"
                aria-hidden
              >
                check
              </span>{" "}
              Isporuka na email za 30-60 minuta
            </li>
            <li className="flex items-center gap-2">
              <span
                className="material-symbols-outlined text-tertiary"
                aria-hidden
              >
                check
              </span>{" "}
              Štampaj neograničeno
            </li>
          </ul>
          <a
            className="w-full bg-surface text-on-surface border border-outline-variant py-4 rounded-full font-bold hover:bg-surface-variant transition-all text-center"
            href="/order?paket=digital#upload"
          >
            Naručite digitalno
          </a>
        </div>

        <div className="bg-primary text-on-primary p-8 lg:p-10 rounded-xl shadow-2xl flex flex-col items-center text-center transform scale-105 z-10 relative">
          <div className="absolute -top-4 bg-secondary-container text-on-secondary-container px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
            Najpopularnije
          </div>
          <span className="text-on-primary/80 font-bold uppercase tracking-widest text-sm mb-4">
            Štampano
          </span>
          <h3 className="text-3xl font-bold mb-2 text-white">
            Štampana bojanka <br /> (12 strana)
          </h3>
          <div className="mb-2 text-sm font-semibold text-on-primary/80">
            <span className="line-through">1.499 RSD</span>
          </div>
          <div className="text-5xl font-extrabold text-white mb-8">
            999{" "}
            <span className="text-xl font-normal text-on-primary/70">RSD</span>
          </div>
          <ul className="space-y-4 mb-10 text-on-primary/90">
            <li className="flex items-center gap-2">
              <span className="material-symbols-outlined" aria-hidden>
                check
              </span>{" "}
              12 strana + korice u boji
            </li>
            <li className="flex items-center gap-2">
              <span className="material-symbols-outlined" aria-hidden>
                check
              </span>{" "}
              Premium papir za bojenje
            </li>
            <li className="flex items-center gap-2">
              <span className="material-symbols-outlined" aria-hidden>
                check
              </span>{" "}
              Isporuka na kućnu adresu
            </li>
            <li className="flex items-center gap-2">
              <span className="material-symbols-outlined" aria-hidden>
                check
              </span>{" "}
              Besplatan digitalni primerak
            </li>
          </ul>
          <a
            className="w-full bg-white text-primary py-4 rounded-full font-bold hover:shadow-lg transition-all scale-95 active:scale-90 text-center"
            href="/order?paket=stamp12#upload"
          >
            Naručite štampano
          </a>
        </div>

        <div className="bg-surface-container-low p-8 lg:p-10 rounded-xl border border-outline-variant/10 flex flex-col items-center text-center">
          <span className="text-primary font-bold uppercase tracking-widest text-sm mb-4">
            Štampano
          </span>
          <h3 className="text-3xl font-bold mb-2">
            Štampana bojanka <br /> (16 strana)
          </h3>
          <div className="mb-2 text-sm font-semibold text-on-surface-variant">
            <span className="line-through">1.799 RSD</span>
          </div>
          <div className="text-5xl font-extrabold text-on-surface mb-8">
            1.199{" "}
            <span className="text-xl font-normal text-on-surface-variant">
              RSD
            </span>
          </div>
          <ul className="space-y-4 mb-10 text-on-surface-variant">
            <li className="flex items-center gap-2">
              <span
                className="material-symbols-outlined text-tertiary"
                aria-hidden
              >
                check
              </span>{" "}
              16 strana + korice u boji
            </li>
            <li className="flex items-center gap-2">
              <span
                className="material-symbols-outlined text-tertiary"
                aria-hidden
              >
                check
              </span>{" "}
              Premium papir za bojenje
            </li>
            <li className="flex items-center gap-2">
              <span
                className="material-symbols-outlined text-tertiary"
                aria-hidden
              >
                check
              </span>{" "}
              Isporuka na kućnu adresu
            </li>
            <li className="flex items-center gap-2">
              <span
                className="material-symbols-outlined text-tertiary"
                aria-hidden
              >
                check
              </span>{" "}
              Besplatan digitalni primerak
            </li>
          </ul>
          <a
            className="w-full bg-surface text-on-surface border border-outline-variant py-4 rounded-full font-bold hover:bg-surface-variant transition-all text-center"
            href="/order?paket=stamp16#upload"
          >
            Naručite štampano
          </a>
        </div>
      </div>

      <div className="mt-16 text-center">
        <div className="inline-flex items-center gap-3 bg-surface-container-high px-6 py-3 rounded-full">
          <span
            className="material-symbols-outlined text-primary"
            style={{ fontVariationSettings: "'FILL' 1" }}
            aria-hidden
          >
            security
          </span>
          <span className="font-medium text-on-surface-variant">
            Plaćate tek nakon što odobrite finalni pregled dizajna!
          </span>
        </div>
      </div>
    </section>
  );
}
