import Image from "next/image";

const BOOK_IMAGE =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDOnq7fLknKhY0Xqt63e-Pq8q1evFADrLkzX6JoGYfqZMUJiLXyFrmX8DdA2vDnDvcZpYsGGgHHIEfhvfTQYduXug0mnHta54msCOOppLi5y2U9qHWmU2bLyjy1Vavsg-6sA6kGZSs2RREhKaDnslflXl6qZLNtIX8lyDJA2IC2aBMhDVI3dHvTrl2T_5-KLJ6IsXB5uGy5ctV_eD5219oocy9KhG30iUzDbqNHkzKBSUGGK_kUa0v_95R79M6UNX1Sm3UBZNTEYiEp";

export function ProductWhySection() {
  return (
    <section className="bg-surface-container-highest rounded-[4rem] py-24 px-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
        <div className="relative order-2 lg:order-1">
          <div className="relative w-full aspect-[4/3]">
            <Image
              src={BOOK_IMAGE}
              alt="Otvorena štampana bojanka sa personalizovanim stranama"
              fill
              className="rounded-xl shadow-2xl object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div className="absolute -bottom-8 -right-8 bg-surface p-6 rounded-lg shadow-xl max-w-[200px]">
            <p className="text-sm font-bold text-primary mb-1">
              Kvalitetna štampa
            </p>
            <p className="text-xs text-on-surface-variant">
              Poseban papir koji ne presijava i lako upija bojice.
            </p>
          </div>
        </div>
        <div className="space-y-10 order-1 lg:order-2">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Zašto je ovo poseban dar?
          </h2>
          <div className="space-y-8">
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-surface rounded-full flex items-center justify-center text-primary shadow-sm">
                <span className="material-symbols-outlined" aria-hidden>
                  favorite
                </span>
              </div>
              <div>
                <h4 className="text-xl font-bold mb-2">
                  Vaša porodica u glavnoj ulozi
                </h4>
                <p className="text-on-surface-variant">
                  Najvoljeniji ne boje obične crteže, već mamu, tatu, baku, dedu
                  i svoje omiljene uspomene.
                </p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-surface rounded-full flex items-center justify-center text-primary shadow-sm">
                <span className="material-symbols-outlined" aria-hidden>
                  history
                </span>
              </div>
              <div>
                <h4 className="text-xl font-bold mb-2">Uspomena koja ostaje</h4>
                <p className="text-on-surface-variant">
                  Kada se bojanka završi, ona postaje najdraži album koji se
                  čuva decenijama.
                </p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-surface rounded-full flex items-center justify-center text-primary shadow-sm">
                <span className="material-symbols-outlined" aria-hidden>
                  celebration
                </span>
              </div>
              <div>
                <h4 className="text-xl font-bold mb-2">Zabava bez ekrana</h4>
                <p className="text-on-surface-variant">
                  Podstičete kreativnost i fokus kroz analognu aktivnost koja
                  iskreno raduje celu porodicu.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
