import Image from "next/image";

const ORIGINAL_IMAGE =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuC-KlVxsJcNu2yrYhTIBLnlO7QAlITeQ2u6gZ-lXgq6HUjyh6XHRM_6o06Sx_bcw6qjG4Mfp_jr13V_JyxKo7x7cMl6LPKkywgQSMJCvnZiO54-ya6kWiDkHAeum0E144UKaY2sPwVa15IFURAbjd1-yoatdS_SZeudj_kluK8Vzowi-vYKZA7T8qU6jyLWlwYpWLyD1dLrvp1at1V72AFu6DzFy6BDLQ-4SpfckyBoRRlzFvDEQoD2PY1FvSwVpChfZWpVMFubwKn9";

const LINE_ART_IMAGE =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuD61l_ycfiqmR3X88uk5w7uzElkJz9Zw2R_xOBJsWynjaelsKaNEXW8w8plotMgML4n_HPz_21pWzwe0gEmhZm-4LpskJn5RfNKdB9lm8ERfJMMhNz-a5oVrzD6FW47jwAf1b0xXw9y6PcpeD4wtuV9Ml3QUo2WBm9HIg3wFZykovvv83Wxz5YZnEbSsenknSkWhA-ihFFWj2GovERzavc5euepRCNWNr45aJKaeD0k7V9YVUT1SJmO1c66MelcmLfLvId1uOChCAkS";

export function ExamplesSection() {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto" id="primeri">
      <div className="flex flex-col lg:flex-row items-center gap-16">
        <div className="flex-1 space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            Uspomena koja <span className="text-primary italic">oživi</span> pod
            bojicama
          </h2>
          <p className="text-lg text-on-surface-variant leading-relaxed">
            Pogledajte kako realna fotografija postaje savršena ilustracija za
            bojenje. Zadržavamo sve ključne detalje koji čine vašu uspomenu
            prepoznatljivom, a istovremeno je činimo idealnom za zajedničke
            porodične trenutke.
          </p>
          <div className="bg-surface-container-low p-6 rounded-lg space-y-4">
            <div className="flex items-start gap-4">
              <span
                className="material-symbols-outlined text-primary mt-1"
                aria-hidden
              >
                check_circle
              </span>
              <p className="font-medium text-on-surface">
                Čuvamo fizionomiju i emociju sa slike
              </p>
            </div>
            <div className="flex items-start gap-4">
              <span
                className="material-symbols-outlined text-primary mt-1"
                aria-hidden
              >
                check_circle
              </span>
              <p className="font-medium text-on-surface">
                Čiste linije prilagođene najmlađima i celoj porodici
              </p>
            </div>
          </div>
        </div>

        <div className="flex-1 grid grid-cols-2 gap-4">
          <div className="space-y-4">
            <div className="bg-surface-container-lowest p-2 rounded-lg shadow-sm">
              <div className="relative w-full h-64">
                <Image
                  src={ORIGINAL_IMAGE}
                  alt="Porodična fotografija u parku"
                  fill
                  className="rounded-md object-cover"
                  sizes="(max-width: 1024px) 45vw, 22rem"
                />
              </div>
              <p className="text-xs text-center mt-2 font-medium uppercase tracking-wider text-on-surface-variant">
                Originalna slika
              </p>
            </div>
          </div>

          <div className="space-y-4 pt-12">
            <div className="bg-surface-container-lowest p-2 rounded-lg shadow-sm border border-outline-variant/10">
              <div className="w-full h-64 bg-white rounded-md flex items-center justify-center overflow-hidden relative">
                <Image
                  src={LINE_ART_IMAGE}
                  alt="Ilustracija za bojanku (crno-belo)"
                  fill
                  className="w-full h-full object-cover grayscale brightness-125 contrast-200"
                  sizes="(max-width: 1024px) 45vw, 22rem"
                />
              </div>
              <p className="text-xs text-center mt-2 font-medium uppercase tracking-wider text-primary">
                Strana u bojanci
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
