import type { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";
import { login } from "@/app/login/actions";
import { createClient } from "@/lib/supabase/server";

export const metadata: Metadata = {
  title: "Prijava | Trag uspomena",
  description: "Prijavite se kako biste otvorili svoj korisnički dashboard.",
};

type LoginPageProps = {
  searchParams: Promise<{
    error?: string | string[];
    next?: string | string[];
  }>;
};

function getSafeNextPath(value: string | string[] | undefined) {
  const nextPath = Array.isArray(value) ? value[0] : value;

  if (!nextPath || !nextPath.startsWith("/") || nextPath.startsWith("//")) {
    return "/dashboard";
  }

  return nextPath;
}

function getErrorMessage(errorCode: string | string[] | undefined) {
  const code = Array.isArray(errorCode) ? errorCode[0] : errorCode;

  switch (code) {
    case "missing_fields":
      return "Unesite email adresu i lozinku kako biste nastavili.";
    case "invalid_credentials":
      return "Email ili lozinka nisu ispravni. Proverite podatke i pokušajte ponovo.";
    default:
      return null;
  }
}

export default async function LoginPage({ searchParams }: LoginPageProps) {
  const [{ error, next }, supabase] = await Promise.all([
    searchParams,
    createClient(),
  ]);

  const { data } = await supabase.auth.getClaims();

  if (data?.claims) {
    redirect("/dashboard");
  }

  const nextPath = getSafeNextPath(next);
  const errorMessage = getErrorMessage(error);

  return (
    <main className="min-h-screen bg-surface px-6 py-10">
      <div className="mx-auto flex min-h-[calc(100vh-5rem)] max-w-6xl items-center justify-center">
        <div className="grid w-full gap-8 overflow-hidden rounded-[2rem] bg-surface-container-lowest shadow-card lg:grid-cols-[1.05fr_0.95fr]">
          <section className="relative overflow-hidden bg-primary px-8 py-12 text-white md:px-12">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgb(255_218_217_/_0.34),transparent_48%),radial-gradient(circle_at_bottom_left,_rgb(252_200_144_/_0.28),transparent_38%)]" />
            <div className="relative flex h-full flex-col justify-between gap-10">
              <div className="space-y-6">
                <Link
                  href="/"
                  className="inline-flex items-center gap-2 rounded-full bg-white/12 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/18"
                >
                  <span
                    className="material-symbols-outlined text-base"
                    aria-hidden
                  >
                    arrow_back
                  </span>
                  Nazad na sajt
                </Link>
                <div className="space-y-4">
                  <p className="text-sm font-semibold uppercase tracking-[0.28em] text-white/80">
                    Trag uspomena
                  </p>
                  <h1 className="max-w-md text-4xl font-extrabold leading-tight md:text-5xl">
                    Prijavite se i otvorite svoj dashboard.
                  </h1>
                  <p className="max-w-lg text-base leading-7 text-white/84 md:text-lg">
                    U ovom prvom koraku povezujemo Supabase autentikaciju sa
                    aplikacijom kako biste mogli bezbedno da pristupite svom
                    nalogu i budućim privatnim funkcijama.
                  </p>
                </div>
              </div>

              <div className="grid gap-4 text-sm text-white/88">
                <div className="rounded-[1.5rem] bg-white/10 p-5 backdrop-blur-sm">
                  <p className="font-semibold">Šta dobijate posle prijave</p>
                  <p className="mt-2 leading-6 text-white/80">
                    Za sada ćete videti svoj nalog i aktivnu sesiju. Dashboard
                    ostaje spreman za sledeći korak kada dodamo privatne podatke
                    i tokove rada.
                  </p>
                </div>
                <div className="flex items-center gap-3 text-white/74">
                  <span
                    className="material-symbols-outlined rounded-full bg-white/12 p-2 text-base"
                    aria-hidden
                  >
                    verified_user
                  </span>
                  Prijava koristi Supabase sesije preko bezbednih HTTP kolačića.
                </div>
              </div>
            </div>
          </section>

          <section className="px-8 py-12 md:px-12">
            <div className="mx-auto max-w-md">
              <div className="space-y-3">
                <p className="text-sm font-semibold uppercase tracking-[0.28em] text-secondary">
                  Email prijava
                </p>
                <h2 className="text-3xl font-bold text-on-surface">
                  Dobrodošli nazad
                </h2>
                <p className="text-on-surface-variant leading-7">
                  Koristite korisnika kog ste već napravili u Supabase-u kako
                  bismo odmah mogli da proverimo kompletnu autentikaciju.
                </p>
              </div>

              {errorMessage ? (
                <div className="mt-6 rounded-[1.5rem] border border-error/15 bg-error-container/80 px-5 py-4 text-sm leading-6 text-on-error-container">
                  {errorMessage}
                </div>
              ) : null}

              <form action={login} className="mt-8 space-y-5">
                <input type="hidden" name="next" value={nextPath} />

                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="block text-xs font-bold uppercase tracking-[0.24em] text-on-surface-variant"
                  >
                    Email adresa
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    className="w-full rounded-full bg-surface-container-highest px-6 py-4 text-on-surface placeholder:text-outline focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                    placeholder="ime@primer.com"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="password"
                    className="block text-xs font-bold uppercase tracking-[0.24em] text-on-surface-variant"
                  >
                    Lozinka
                  </label>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    className="w-full rounded-full bg-surface-container-highest px-6 py-4 text-on-surface placeholder:text-outline focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                    placeholder="Unesite lozinku"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full rounded-full bg-primary px-6 py-4 text-base font-bold text-white shadow-lg shadow-primary/20 transition hover:bg-on-primary-fixed-variant"
                >
                  Prijavi me
                </button>
              </form>

              <div className="mt-8 rounded-[1.5rem] bg-surface-container px-5 py-4 text-sm leading-6 text-on-surface-variant">
                Samo dashboard je zaštićen u ovoj verziji. Početna stranica i
                forma za poručivanje ostaju javne.
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
