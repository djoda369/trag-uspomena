import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="w-full bg-[#F3EDE4] rounded-t-[4rem] mt-20 py-16 px-8 flex flex-col items-center text-center gap-8">
      <div className="text-xl font-bold text-[#984446] mb-4">Trag uspomena</div>
      <p className="text-on-surface-variant leading-relaxed max-w-md">
        Personalizovane bojanke koje čuvaju najlepše porodične trenutke. Svaka
        strana je nežna uspomena koju vaši najdraži boje, čuvaju i pamte.
      </p>
      <div className="flex flex-wrap justify-center gap-x-8 gap-y-4">
        <a
          className="text-on-surface-variant hover:underline decoration-[#F28C8C] underline-offset-4 transition-all duration-300"
          href="#"
        >
          Instagram
        </a>
        <Link
          className="text-on-surface-variant hover:underline decoration-[#F28C8C] underline-offset-4 transition-all duration-300"
          href="/#kako-radi"
        >
          Kako funkcioniše
        </Link>
        <Link
          className="text-on-surface-variant hover:underline decoration-[#F28C8C] underline-offset-4 transition-all duration-300"
          href="/#primeri"
        >
          Primeri
        </Link>
        <Link
          className="text-on-surface-variant hover:underline decoration-[#F28C8C] underline-offset-4 transition-all duration-300"
          href="/#cene"
        >
          Cene
        </Link>
        <Link
          className="text-on-surface-variant hover:underline decoration-[#F28C8C] underline-offset-4 transition-all duration-300"
          href="/order"
        >
          Poruči
        </Link>
        <a
          className="text-on-surface-variant hover:underline decoration-[#F28C8C] underline-offset-4 transition-all duration-300"
          href="#"
        >
          FAQ
        </a>
        <a
          className="text-on-surface-variant hover:underline decoration-[#F28C8C] underline-offset-4 transition-all duration-300"
          href="#"
        >
          Uslovi korišćenja
        </a>
      </div>
      <div className="pt-8 border-t border-outline-variant/20 w-full max-w-2xl">
        <p className="text-sm text-on-surface-variant/70">
          © 2024 Trag uspomena. Sva prava zadržana.
        </p>
      </div>
    </footer>
  );
}
