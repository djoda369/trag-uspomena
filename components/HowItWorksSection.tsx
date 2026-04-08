export function HowItWorksSection() {
  return (
    <section
      className="bg-surface-container-low rounded-t-xl py-24 px-6"
      id="kako-radi"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-on-surface">
            U tri jednostavna koraka
          </h2>
          <p className="text-on-surface-variant text-lg">
            Jednostavno, brzo i sa puno emocije
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-12">
          <div className="bg-surface-container p-10 rounded-xl space-y-6 transition-transform hover:-translate-y-2">
            <div className="w-16 h-16 bg-primary-container rounded-2xl flex items-center justify-center text-on-primary-container">
              <span className="material-symbols-outlined text-3xl" aria-hidden>
                upload_file
              </span>
            </div>
            <h3 className="text-2xl font-bold">1. Pošaljite fotografije</h3>
            <p className="text-on-surface-variant leading-relaxed">
              Izaberite omiljene porodične trenutke - rođendane, putovanja ili
              svakodnevne osmehe.
            </p>
          </div>

          <div className="bg-surface-container p-10 rounded-xl space-y-6 transition-transform hover:-translate-y-2">
            <div className="w-16 h-16 bg-tertiary-container rounded-2xl flex items-center justify-center text-on-tertiary-container">
              <span className="material-symbols-outlined text-3xl" aria-hidden>
                auto_fix
              </span>
            </div>
            <h3 className="text-2xl font-bold">2. Mi ih pretvaramo</h3>
            <h3 className="text-2xl font-bold sr-only">
              Priprema linija za bojenje
            </h3>
            <p className="text-on-surface-variant leading-relaxed">
              Svaku fotografiju pretvaramo u čiste i prepoznatljive linije za
              bojenje.
            </p>
          </div>

          <div className="bg-surface-container p-10 rounded-xl space-y-6 transition-transform hover:-translate-y-2">
            <div className="w-16 h-16 bg-secondary-container rounded-2xl flex items-center justify-center text-on-secondary-container">
              <span className="material-symbols-outlined text-3xl" aria-hidden>
                auto_stories
              </span>
            </div>
            <h3 className="text-2xl font-bold">3. PDF ili štampa</h3>
            <p className="text-on-surface-variant leading-relaxed">
              Dobijate digitalnu verziju spremnu za štampu kod kuće ili luksuznu
              štampanu bojanku na adresu.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
