import Link from "next/link";
import Image from "next/image";

type HeaderProps = {
  context?: "home" | "order";
};

export function Header({ context = "home" }: HeaderProps) {
  const homeHref = context === "home" ? "#" : "/";
  const howHref = context === "home" ? "#kako-radi" : "/#kako-radi";
  const examplesHref = context === "home" ? "#primeri" : "/#primeri";
  const pricingHref = context === "home" ? "#cene" : "/#cene";
  const ctaHref = context === "order" ? "#upload" : "/order#upload";

  return (
    <header className="fixed top-0 w-full z-50 bg-[#FFF9EF]/80 backdrop-blur-md shadow-sm">
      <nav className="flex justify-between items-center px-6 py-4 max-w-7xl mx-auto">
        <Link href="/" className="flex items-center gap-3 shrink-0">
          <Image
            src="/Colorful%20logo%20of%20Trag%20Uspomena.png"
            alt="Trag uspomena"
            width={200}
            height={50}
            priority
            className="h-12 w-auto scale-175"
          />
          <span className="sr-only">Trag uspomena</span>
        </Link>
        <div className="hidden md:flex gap-8 items-center ml-[100px]">
          <a
            className={`font-semibold transition-colors duration-300 ${
              context === "home"
                ? "text-[#984446]"
                : "text-on-surface-variant hover:text-[#984446]"
            }`}
            href={homeHref}
          >
            Početna
          </a>
          <a
            className="text-on-surface-variant hover:text-[#984446] transition-colors duration-300"
            href={howHref}
          >
            Kako radi
          </a>
          <a
            className="text-on-surface-variant hover:text-[#984446] transition-colors duration-300"
            href={examplesHref}
          >
            Primeri
          </a>
          <a
            className="text-on-surface-variant hover:text-[#984446] transition-colors duration-300"
            href={pricingHref}
          >
            Cene
          </a>
        </div>
        <a
          className="bg-primary text-on-primary px-6 py-2.5 rounded-full font-semibold scale-95 active:scale-90 transition-transform shadow-md"
          href={ctaHref}
        >
          Oživite uspomenu
        </a>
      </nav>
    </header>
  );
}
