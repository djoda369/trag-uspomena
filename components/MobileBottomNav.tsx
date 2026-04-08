export function MobileBottomNav() {
  return (
    <nav className="md:hidden fixed bottom-0 left-0 w-full z-50 bg-[#FFF9EF]/90 backdrop-blur-xl rounded-t-[3rem] shadow-[0_-10px_40px_rgba(29,27,22,0.05)] flex justify-around items-center pb-6 pt-3 px-4">
      <a
        className="flex flex-col items-center justify-center bg-[#F28C8C] text-white rounded-full px-4 py-1 tap-highlight-none active:scale-95"
        href="#"
      >
        <span
          className="material-symbols-outlined"
          style={{ fontVariationSettings: "'FILL' 1" }}
          aria-hidden
        >
          home
        </span>
        <span className="text-xs font-medium uppercase tracking-wider">
          Početna
        </span>
      </a>
      <a
        className="flex flex-col items-center justify-center text-[#544242] tap-highlight-none active:scale-95"
        href="#kako-radi"
      >
        <span className="material-symbols-outlined" aria-hidden>
          auto_fix
        </span>
        <span className="text-xs font-medium uppercase tracking-wider">
          Kako radi
        </span>
      </a>
      <a
        className="flex flex-col items-center justify-center text-[#544242] tap-highlight-none active:scale-95"
        href="#primeri"
      >
        <span className="material-symbols-outlined" aria-hidden>
          auto_stories
        </span>
        <span className="text-xs font-medium uppercase tracking-wider">
          Primeri
        </span>
      </a>
      <a
        className="flex flex-col items-center justify-center text-[#544242] tap-highlight-none active:scale-95"
        href="#cene"
      >
        <span className="material-symbols-outlined" aria-hidden>
          payments
        </span>
        <span className="text-xs font-medium uppercase tracking-wider">
          Cene
        </span>
      </a>
    </nav>
  );
}
