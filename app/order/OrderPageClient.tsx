'use client';

import { useEffect, useState } from "react";

import type { Paket } from "@/app/order/paket";
import { Header } from "@/components/Header";
import { SiteFooter } from "@/components/SiteFooter";

type OrderPageClientProps = {
  initialPaket: Paket | null;
};

export default function OrderPageClient({
  initialPaket,
}: OrderPageClientProps) {
  const [manualSelectedPaket, setManualSelectedPaket] = useState<Paket | null>(
    null,
  );

  const selectedPaket = manualSelectedPaket ?? initialPaket;

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (!initialPaket && window.location.hash !== "#upload") return;

    const el = document.getElementById("upload");
    el?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [initialPaket]);

  const cardBase =
    "p-8 rounded-xl flex flex-col transition-all duration-300 hover:scale-[1.02]";

  return (
    <>
      <Header context="order" />

      <main
        className="pt-24 pb-20"
        style={{
          background:
            "radial-gradient(circle at top right, rgb(252 200 144 / 0.13) 0%, transparent 50%), radial-gradient(circle at bottom left, rgb(242 140 140 / 0.07) 0%, transparent 50%)",
        }}
      >
        {/* Intro */}
        <section className="max-w-4xl mx-auto px-6 py-12 text-center">
          <span className="text-primary font-bold tracking-widest text-sm uppercase mb-4 block">
            Trag uspomena
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold text-on-surface tracking-tight mb-6 leading-[1.1]">
            Pošaljite fotografije i napravite svoju bojanku
          </h1>
          <p className="text-on-surface-variant text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Izaberite paket, pošaljite slike i mi ćemo vaše uspomene pretvoriti
            u bojanku za decu.
          </p>
        </section>

        {/* Package Selection */}
        <section className="max-w-7xl mx-auto px-6 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Package 1 */}
            <div
              className={`${cardBase} bg-surface-container-low ${
                selectedPaket === "digital" ? "ring-4 ring-primary/15" : ""
              }`}
            >
              <span className="text-xs font-bold tracking-widest text-secondary mb-4 uppercase">
                DIGITALNO
              </span>
              <h3 className="text-2xl font-bold mb-2">Digitalna bojanka</h3>
              <div className="flex items-baseline gap-3 mb-8">
                <span className="text-3xl font-extrabold text-on-surface">
                  899 RSD
                </span>
                <span className="text-on-surface-variant/50 line-through text-lg">
                  1.349 RSD
                </span>
              </div>
              <ul className="space-y-4 mb-10 grow">
                <li className="flex items-center gap-3 text-on-surface-variant">
                  <span
                    className="material-symbols-outlined text-primary text-sm"
                    aria-hidden
                  >
                    check_circle
                  </span>
                  12 personalizovanih strana
                </li>
                <li className="flex items-center gap-3 text-on-surface-variant">
                  <span
                    className="material-symbols-outlined text-primary text-sm"
                    aria-hidden
                  >
                    check_circle
                  </span>
                  PDF visoke rezolucije
                </li>
                <li className="flex items-center gap-3 text-on-surface-variant">
                  <span
                    className="material-symbols-outlined text-primary text-sm"
                    aria-hidden
                  >
                    check_circle
                  </span>
                  Isporuka za 30-60 min
                </li>
                <li className="flex items-center gap-3 text-on-surface-variant">
                  <span
                    className="material-symbols-outlined text-primary text-sm"
                    aria-hidden
                  >
                    check_circle
                  </span>
                  Štampaj neograničeno
                </li>
              </ul>
              <a
                className="w-full py-4 px-6 rounded-full bg-surface-container-highest text-primary font-bold hover:bg-primary-fixed-dim transition-colors text-center"
                href="#upload"
                onClick={() => setManualSelectedPaket("digital")}
              >
                Izaberi paket
              </a>
            </div>

            {/* Package 2 (Highlighted) */}
            <div
              className={`relative ${cardBase} bg-surface-container shadow-xl ${
                selectedPaket === "stamp12"
                  ? "ring-4 ring-primary-container/35"
                  : "ring-4 ring-primary-container/20"
              }`}
            >
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white px-4 py-1 rounded-full text-xs font-bold tracking-wide">
                NAJPOPULARNIJE
              </div>
              <span className="text-xs font-bold tracking-widest text-secondary mb-4 uppercase">
                ŠTAMPANO
              </span>
              <h3 className="text-2xl font-bold mb-2">
                Štampana bojanka (12 strana)
              </h3>
              <div className="flex items-baseline gap-3 mb-8">
                <span className="text-3xl font-extrabold text-on-surface">
                  999 RSD
                </span>
                <span className="text-on-surface-variant/50 line-through text-lg">
                  1.499 RSD
                </span>
              </div>
              <ul className="space-y-4 mb-10 grow">
                <li className="flex items-center gap-3 text-on-surface-variant">
                  <span
                    className="material-symbols-outlined text-primary text-sm"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                    aria-hidden
                  >
                    check_circle
                  </span>
                  12 strana + korice u boji
                </li>
                <li className="flex items-center gap-3 text-on-surface-variant">
                  <span
                    className="material-symbols-outlined text-primary text-sm"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                    aria-hidden
                  >
                    check_circle
                  </span>
                  Premium papir
                </li>
                <li className="flex items-center gap-3 text-on-surface-variant">
                  <span
                    className="material-symbols-outlined text-primary text-sm"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                    aria-hidden
                  >
                    check_circle
                  </span>
                  Isporuka na kućnu adresu
                </li>
                <li className="flex items-center gap-3 text-on-surface-variant">
                  <span
                    className="material-symbols-outlined text-primary text-sm"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                    aria-hidden
                  >
                    check_circle
                  </span>
                  Besplatan digitalni primerak
                </li>
              </ul>
              <a
                className="w-full py-4 px-6 rounded-full bg-primary text-white font-bold hover:bg-on-primary-fixed-variant transition-colors shadow-lg shadow-primary/20 text-center"
                href="#upload"
                onClick={() => setManualSelectedPaket("stamp12")}
              >
                Izaberi paket
              </a>
            </div>

            {/* Package 3 */}
            <div
              className={`${cardBase} bg-surface-container-low ${
                selectedPaket === "stamp16" ? "ring-4 ring-primary/15" : ""
              }`}
            >
              <span className="text-xs font-bold tracking-widest text-secondary mb-4 uppercase">
                ŠTAMPANO
              </span>
              <h3 className="text-2xl font-bold mb-2">
                Štampana bojanka (16 strana)
              </h3>
              <div className="flex items-baseline gap-3 mb-8">
                <span className="text-3xl font-extrabold text-on-surface">
                  1.199 RSD
                </span>
                <span className="text-on-surface-variant/50 line-through text-lg">
                  1.799 RSD
                </span>
              </div>
              <ul className="space-y-4 mb-10 grow">
                <li className="flex items-center gap-3 text-on-surface-variant">
                  <span
                    className="material-symbols-outlined text-primary text-sm"
                    aria-hidden
                  >
                    check_circle
                  </span>
                  16 strana + korice u boji
                </li>
                <li className="flex items-center gap-3 text-on-surface-variant">
                  <span
                    className="material-symbols-outlined text-primary text-sm"
                    aria-hidden
                  >
                    check_circle
                  </span>
                  Premium papir
                </li>
                <li className="flex items-center gap-3 text-on-surface-variant">
                  <span
                    className="material-symbols-outlined text-primary text-sm"
                    aria-hidden
                  >
                    check_circle
                  </span>
                  Isporuka na kućnu adresu
                </li>
                <li className="flex items-center gap-3 text-on-surface-variant">
                  <span
                    className="material-symbols-outlined text-primary text-sm"
                    aria-hidden
                  >
                    check_circle
                  </span>
                  Besplatan digitalni primerak
                </li>
              </ul>
              <a
                className="w-full py-4 px-6 rounded-full bg-surface-container-highest text-primary font-bold hover:bg-primary-fixed-dim transition-colors text-center"
                href="#upload"
                onClick={() => setManualSelectedPaket("stamp16")}
              >
                Izaberi paket
              </a>
            </div>
          </div>
        </section>

        {/* Trust Strip */}
        <section className="max-w-7xl mx-auto px-6 py-6">
          <div className="bg-tertiary/10 rounded-full py-4 px-8 flex items-center justify-center gap-3">
            <span
              className="material-symbols-outlined text-tertiary"
              style={{ fontVariationSettings: "'FILL' 1" }}
              aria-hidden
            >
              verified_user
            </span>
            <p className="text-on-surface-variant font-medium text-center">
              Plaćate tek nakon što odobrite finalni pregled dizajna.
            </p>
          </div>
        </section>

        {/* Main Form & Upload */}
        <section className="max-w-4xl mx-auto px-6 py-12 space-y-16">
          {/* Photo Upload Area */}
          <div
            className="bg-surface-container-lowest p-8 md:p-12 rounded-xl shadow-sm scroll-mt-28"
            id="upload"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-full bg-primary-container flex items-center justify-center">
                <span
                  className="material-symbols-outlined text-on-primary-container"
                  aria-hidden
                >
                  add_a_photo
                </span>
              </div>
              <h2 className="text-2xl font-bold">Dodajte fotografije</h2>
            </div>

            <input
              id="photos"
              name="photos"
              type="file"
              accept="image/*"
              multiple
              className="sr-only"
            />

            <label
              htmlFor="photos"
              className="border-2 border-dashed border-outline-variant rounded-lg p-12 text-center flex flex-col items-center gap-4 hover:border-primary/40 transition-colors cursor-pointer group"
            >
              <div className="w-16 h-16 rounded-full bg-surface-container flex items-center justify-center group-hover:scale-110 transition-transform">
                <span
                  className="material-symbols-outlined text-outline text-3xl"
                  aria-hidden
                >
                  upload
                </span>
              </div>
              <div>
                <p className="text-on-surface font-semibold mb-1">
                  Kliknite da dodate slike
                </p>
                <p className="text-on-surface-variant text-sm">
                  Dodajte nekoliko jasnih fotografija porodice kako bismo
                  napravili što lepšu bojanku.
                </p>
              </div>
            </label>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex items-start gap-3 p-4 bg-surface-container rounded-lg">
                <span
                  className="material-symbols-outlined text-secondary text-xl"
                  aria-hidden
                >
                  face
                </span>
                <p className="text-xs text-on-surface-variant">
                  <strong className="block text-on-surface mb-1 uppercase tracking-tighter">
                    Jasna lica
                  </strong>
                  Gledajte direktno u kameru.
                </p>
              </div>
              <div className="flex items-start gap-3 p-4 bg-surface-container rounded-lg">
                <span
                  className="material-symbols-outlined text-secondary text-xl"
                  aria-hidden
                >
                  wb_sunny
                </span>
                <p className="text-xs text-on-surface-variant">
                  <strong className="block text-on-surface mb-1 uppercase tracking-tighter">
                    Osvetljenost
                  </strong>
                  Prirodno svetlo je najbolje.
                </p>
              </div>
              <div className="flex items-start gap-3 p-4 bg-surface-container rounded-lg">
                <span
                  className="material-symbols-outlined text-secondary text-xl"
                  aria-hidden
                >
                  high_quality
                </span>
                <p className="text-xs text-on-surface-variant">
                  <strong className="block text-on-surface mb-1 uppercase tracking-tighter">
                    Kvalitet
                  </strong>
                  Bez previše mutnih detalja.
                </p>
              </div>
            </div>
          </div>

          {/* Order Form */}
          <div className="bg-surface-container-lowest p-8 md:p-12 rounded-xl shadow-sm">
            <div className="flex items-center gap-4 mb-10">
              <div className="w-12 h-12 rounded-full bg-secondary-container flex items-center justify-center">
                <span
                  className="material-symbols-outlined text-on-secondary-container"
                  aria-hidden
                >
                  person_edit
                </span>
              </div>
              <h2 className="text-2xl font-bold">Vaši podaci</h2>
            </div>

            <form className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="block text-xs font-bold uppercase tracking-widest text-on-surface-variant ml-4">
                    Ime i prezime
                  </label>
                  <input
                    className="w-full px-6 py-4 rounded-full bg-surface-container-highest border-none focus:ring-2 focus:ring-primary/20 placeholder:text-outline"
                    placeholder="Marko Marković"
                    type="text"
                    autoComplete="name"
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-xs font-bold uppercase tracking-widest text-on-surface-variant ml-4">
                    Email adresa
                  </label>
                  <input
                    className="w-full px-6 py-4 rounded-full bg-surface-container-highest border-none focus:ring-2 focus:ring-primary/20 placeholder:text-outline"
                    placeholder="marko@primer.com"
                    type="email"
                    autoComplete="email"
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-xs font-bold uppercase tracking-widest text-on-surface-variant ml-4">
                    Broj telefona
                  </label>
                  <input
                    className="w-full px-6 py-4 rounded-full bg-surface-container-highest border-none focus:ring-2 focus:ring-primary/20 placeholder:text-outline"
                    placeholder="06x xxx xxxx"
                    type="tel"
                    autoComplete="tel"
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-xs font-bold uppercase tracking-widest text-on-surface-variant ml-4">
                    Ime deteta (opciono)
                  </label>
                  <input
                    className="w-full px-6 py-4 rounded-full bg-surface-container-highest border-none focus:ring-2 focus:ring-primary/20 placeholder:text-outline"
                    placeholder="Luka"
                    type="text"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="block text-xs font-bold uppercase tracking-widest text-on-surface-variant ml-4">
                  Adresa za dostavu
                </label>
                <input
                  className="w-full px-6 py-4 rounded-full bg-surface-container-highest border-none focus:ring-2 focus:ring-primary/20 placeholder:text-outline"
                  placeholder="Ulica i broj, Grad, Poštanski broj"
                  type="text"
                  autoComplete="shipping street-address"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-xs font-bold uppercase tracking-widest text-on-surface-variant ml-4">
                  Napomena / posebne želje
                </label>
                <textarea
                  className="w-full px-6 py-4 rounded-xl bg-surface-container-highest border-none focus:ring-2 focus:ring-primary/20 placeholder:text-outline"
                  placeholder="Želite li nešto specifično? (npr. 'Nacrtajte Lukinog psa na koricama')"
                  rows={3}
                />
              </div>

              <div className="pt-8 space-y-6 border-t border-outline-variant/20">
                <h3 className="text-xl font-bold">Personalizacija korica</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="block text-xs font-bold uppercase tracking-widest text-on-surface-variant ml-4">
                      Naziv na naslovnoj strani
                    </label>
                    <input
                      className="w-full px-6 py-4 rounded-full bg-surface-container-highest border-none focus:ring-2 focus:ring-primary/20 placeholder:text-outline"
                      placeholder="Lukin svet boja"
                      type="text"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="block text-xs font-bold uppercase tracking-widest text-on-surface-variant ml-4">
                      Kratka posveta
                    </label>
                    <input
                      className="w-full px-6 py-4 rounded-full bg-surface-container-highest border-none focus:ring-2 focus:ring-primary/20 placeholder:text-outline"
                      placeholder="Za najdraže uspomene, voli te baka..."
                      type="text"
                    />
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <button
                  type="button"
                  className="w-full bg-primary text-white text-lg px-10 py-5 rounded-full font-bold shadow-2xl hover:bg-on-primary-fixed-variant transition-all hover:scale-[1.01] active:scale-[0.99]"
                >
                  Pošalji zahtev
                </button>
                <div className="flex flex-col items-center gap-2 mt-6 text-center">
                  <p className="text-on-surface-variant font-medium">
                    Javljamo vam se sa pregledom pre finalne izrade.
                  </p>
                  <p className="text-on-surface-variant/70 text-sm italic">
                    Bez obaveze za plaćanje pre odobrenja pregleda.
                  </p>
                </div>
              </div>
            </form>
          </div>

          {/* Process Recap */}
          <div className="py-8">
            <h2 className="text-2xl font-bold text-center mb-12">
              Jednostavan proces
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
              <div className="text-center group">
                <div className="w-16 h-16 bg-surface-container mx-auto rounded-full flex items-center justify-center mb-4 group-hover:bg-primary-container transition-colors">
                  <span
                    className="material-symbols-outlined text-primary"
                    aria-hidden
                  >
                    cloud_upload
                  </span>
                </div>
                <p className="text-sm font-bold">Pošaljete slike</p>
              </div>
              <div className="text-center group">
                <div className="w-16 h-16 bg-surface-container mx-auto rounded-full flex items-center justify-center mb-4 group-hover:bg-primary-container transition-colors">
                  <span
                    className="material-symbols-outlined text-primary"
                    aria-hidden
                  >
                    auto_awesome
                  </span>
                </div>
                <p className="text-sm font-bold">Pregled</p>
              </div>
              <div className="text-center group">
                <div className="w-16 h-16 bg-surface-container mx-auto rounded-full flex items-center justify-center mb-4 group-hover:bg-primary-container transition-colors">
                  <span
                    className="material-symbols-outlined text-primary"
                    aria-hidden
                  >
                    thumb_up
                  </span>
                </div>
                <p className="text-sm font-bold">Odobrenje</p>
              </div>
              <div className="text-center group">
                <div className="w-16 h-16 bg-surface-container mx-auto rounded-full flex items-center justify-center mb-4 group-hover:bg-primary-container transition-colors">
                  <span
                    className="material-symbols-outlined text-primary"
                    aria-hidden
                  >
                    local_shipping
                  </span>
                </div>
                <p className="text-sm font-bold">Slanje</p>
              </div>
            </div>
          </div>
        </section>

        {/* Mini FAQ */}
        <section className="max-w-3xl mx-auto px-6 py-20">
          <h2 className="text-3xl font-bold mb-10 text-center">
            Česta pitanja
          </h2>
          <div className="space-y-4">
            <details className="group bg-surface-container rounded-xl">
              <summary className="flex justify-between items-center p-6 cursor-pointer list-none font-semibold">
                Koliko traje izrada?
                <span
                  className="material-symbols-outlined transition-transform group-open:rotate-180"
                  aria-hidden
                >
                  expand_more
                </span>
              </summary>
              <div className="p-6 pt-0 text-on-surface-variant leading-relaxed">
                Za digitalne primerke, pregled dobijate u roku od 30-60 minuta.
                Štampane bojanke se izrađuju i šalju u roku od 2-3 radna dana
                nakon vašeg odobrenja dizajna.
              </div>
            </details>

            <details className="group bg-surface-container rounded-xl">
              <summary className="flex justify-between items-center p-6 cursor-pointer list-none font-semibold">
                Da li prvo dobijam pregled?
                <span
                  className="material-symbols-outlined transition-transform group-open:rotate-180"
                  aria-hidden
                >
                  expand_more
                </span>
              </summary>
              <div className="p-6 pt-0 text-on-surface-variant leading-relaxed">
                Da! Naš cilj je da budete 100% zadovoljni. Prvo vam šaljemo
                digitalni pregled dizajna. Tek kada nam potvrdite da vam se sve
                dopada, bojanka ide u štampu i vršite plaćanje.
              </div>
            </details>

            <details className="group bg-surface-container rounded-xl">
              <summary className="flex justify-between items-center p-6 cursor-pointer list-none font-semibold">
                Kakve slike treba da pošaljem?
                <span
                  className="material-symbols-outlined transition-transform group-open:rotate-180"
                  aria-hidden
                >
                  expand_more
                </span>
              </summary>
              <div className="p-6 pt-0 text-on-surface-variant leading-relaxed">
                Najbolje su jasne slike portreta na kojima se lepo vide lica.
                Dobra osvetljenost i oštrina slike nam pomažu da kreiramo što
                vernije i lepše ilustracije za bojenje.
              </div>
            </details>
          </div>
        </section>

        <SiteFooter />
      </main>
    </>
  );
}
