import Image from "next/image";

const HERO_IMAGE =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuC9mR2QbHL782C5NQsb2sUEuZYfNtt9IzStx_uAhVRt6eh6qCQ5qzVWT8eLiSp21lG_CDTK2fLk_St35EVyeVF0g78FcEy9AcOYG7XjkdttHsNEf1EfIXfmTk5qtISQUnZZqFBvyXnonuLqOfd0ElzHdsUf0hAbjuSGqoFfNbDi2IwkWG0OqFUn3s-TU_PxjAPx3l1bKieajdU8tPLqsesWfdySBhmSgc2dAxRKJRrkvXSfof0VsceX348sLL7dIlir3CURm8juI8Zu";

export function HeroSection() {
  return (
    <section className="px-6 py-12 md:py-24 max-w-7xl mx-auto">
      <div className="relative">
        <div className="flex flex-col md:flex-row gap-16 items-center">
          <div className="flex-1 space-y-8">
            <div className="inline-flex items-center gap-2 bg-tertiary-fixed text-on-tertiary-fixed-variant px-4 py-1.5 rounded-full text-sm font-medium">
              <span
                className="material-symbols-outlined text-sm"
                style={{ fontVariationSettings: "'FILL' 1" }}
                aria-hidden
              >
                auto_awesome
              </span>
              Najslađi poklon za najvoljenije
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.1] text-on-surface">
              Pretvorite vaše najdraže uspomene u{" "}
              <span className="text-primary">bojanku koja se čuva zauvek</span>
            </h1>
            <p className="text-xl text-on-surface-variant leading-relaxed max-w-xl">
              Pošaljite svoje fotografije i dobijte personalizovanu bojanku koju
              vaši najvoljeniji sa osmehom boje, čuvaju i pamte. Nežna uspomena
              koja se lako bira i još lakše poklanja.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-primary text-on-primary px-8 py-4 rounded-full text-lg font-bold shadow-xl hover:bg-on-primary-container transition-all scale-95 active:scale-90">
                Oživite uspomenu
              </button>
              <button className="bg-surface-container-low text-on-surface px-8 py-4 rounded-full text-lg font-semibold hover:bg-surface-container transition-all">
                Saznajte kako funkcioniše
              </button>
            </div>
            <div className="flex flex-wrap gap-6 pt-4">
              <div className="flex items-center gap-2 text-on-surface-variant">
                <span
                  className="material-symbols-outlined text-primary"
                  aria-hidden
                >
                  verified
                </span>
                <span className="text-sm font-medium">Personalizovano</span>
              </div>
              <div className="flex items-center gap-2 text-on-surface-variant">
                <span
                  className="material-symbols-outlined text-primary"
                  aria-hidden
                >
                  print
                </span>
                <span className="text-sm font-medium">PDF ili štampa</span>
              </div>
              <div className="flex items-center gap-2 text-on-surface-variant">
                <span
                  className="material-symbols-outlined text-primary"
                  aria-hidden
                >
                  visibility
                </span>
                <span className="text-sm font-medium">
                  Pregled pre poručivanja
                </span>
              </div>
            </div>
          </div>
          <div className="flex-1 relative">
            <div className="relative z-10 rounded-xl overflow-hidden shadow-2xl rotate-2">
              <div className="relative w-full aspect-[4/5]">
                <Image
                  src={HERO_IMAGE}
                  alt="Najmlađi boje personalizovanu bojanku za drvenim stolom u osvetljenoj sobi"
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 42rem"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              <div className="absolute bottom-6 left-6 text-white">
                <p className="text-sm font-medium opacity-80 uppercase tracking-widest">
                  Rezultat
                </p>
                <p className="text-xl font-bold">Bojanka Markove porodice</p>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute -top-10 -right-10 w-48 h-48 bg-primary-container/30 rounded-full blur-3xl -z-10" />
        <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-secondary-container/20 rounded-full blur-3xl -z-10" />
      </div>
    </section>
  );
}
