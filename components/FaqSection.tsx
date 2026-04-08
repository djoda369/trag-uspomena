export function FaqSection() {
  return (
    <section className="py-24 px-6 max-w-4xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
        Česta pitanja
      </h2>
      <div className="space-y-4">
        <details className="group bg-surface-container-low rounded-lg transition-all">
          <summary className="flex justify-between items-center p-6 cursor-pointer font-bold text-lg list-none">
            Kako izgleda ceo proces?
            <span
              className="material-symbols-outlined transition-transform group-open:rotate-180"
              aria-hidden
            >
              expand_more
            </span>
          </summary>
          <div className="px-6 pb-6 text-on-surface-variant leading-relaxed">
            Nakon što pošaljete fotografije, pretvaramo ih u čiste linijske
            ilustracije i šaljemo vam pregled na Viber ili Email. Kada potvrdite
            da vam se dopada, dobijate finalni PDF ili štampanu bojanku.
          </div>
        </details>

        <details className="group bg-surface-container-low rounded-lg transition-all">
          <summary className="flex justify-between items-center p-6 cursor-pointer font-bold text-lg list-none">
            Koliko traje priprema?
            <span
              className="material-symbols-outlined transition-transform group-open:rotate-180"
              aria-hidden
            >
              expand_more
            </span>
          </summary>
          <div className="px-6 pb-6 text-on-surface-variant leading-relaxed">
            Digitalna bojanka stiže na email za 30-60 minuta. Dostava štampane
            verzije zavisi od kurirske službe i obično je na vašoj adresi u roku
            od 3-5 radnih dana.
          </div>
        </details>

        <details className="group bg-surface-container-low rounded-lg transition-all">
          <summary className="flex justify-between items-center p-6 cursor-pointer font-bold text-lg list-none">
            Da li mogu da pošaljem više slika od 12?
            <span
              className="material-symbols-outlined transition-transform group-open:rotate-180"
              aria-hidden
            >
              expand_more
            </span>
          </summary>
          <div className="px-6 pb-6 text-on-surface-variant leading-relaxed">
            Standardni paket sadrži 12 ilustracija. Ukoliko želite više, svaka
            dodatna strana se doplaćuje 150 RSD. Kontaktirajte nas za veće
            porudžbine!
          </div>
        </details>

        <details className="group bg-surface-container-low rounded-lg transition-all">
          <summary className="flex justify-between items-center p-6 cursor-pointer font-bold text-lg list-none">
            Kakav je kvalitet papira?
            <span
              className="material-symbols-outlined transition-transform group-open:rotate-180"
              aria-hidden
            >
              expand_more
            </span>
          </summary>
          <div className="px-6 pb-6 text-on-surface-variant leading-relaxed">
            Koristimo poseban 160g offset papir koji je deblji od običnog i
            idealan za flomastere, drvene bojice, pa čak i vodene boje, bez
            straha od probijanja na drugu stranu.
          </div>
        </details>
      </div>
    </section>
  );
}
