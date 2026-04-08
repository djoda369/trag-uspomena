export function FinalCtaSection() {
  return (
    <section className="px-6 pb-24">
      <div className="max-w-7xl mx-auto bg-primary-container/20 rounded-xl p-12 md:p-24 text-center space-y-8 relative overflow-hidden">
        <div className="absolute -top-24 -left-24 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-secondary-container/20 rounded-full blur-3xl" />
        <h2 className="text-4xl md:text-6xl font-bold tracking-tight relative z-10">
          Poklonite najdražima uspomenu za ceo život
        </h2>
        <p className="text-xl text-on-surface-variant max-w-2xl mx-auto relative z-10">
          Prvi korak je besplatan pregled dizajna, a odluka laka: dobijate ličnu
          bojanku koja ostaje uspomena i nakon bojenja.
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center relative z-10">
          <a
            className="bg-primary text-on-primary px-10 py-5 rounded-full text-xl font-bold shadow-xl scale-95 active:scale-90 transition-transform text-center"
            href="/order#upload"
          >
            Započnite porudžbinu
          </a>
          <a
            className="bg-white text-on-surface px-10 py-5 rounded-full text-xl font-bold border border-outline-variant/30 hover:bg-surface-variant transition-all text-center"
            href="#primeri"
          >
            Pogledajte primere
          </a>
        </div>
      </div>
    </section>
  );
}
