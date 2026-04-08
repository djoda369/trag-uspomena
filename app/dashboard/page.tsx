import type { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";

export const metadata: Metadata = {
  title: "Dashboard | Trag uspomena",
  description: "Privatni korisnički dashboard povezan sa Supabase autentikacijom.",
};

function readStringClaim(value: unknown, fallback: string) {
  return typeof value === "string" && value.length > 0 ? value : fallback;
}

export default async function DashboardPage() {
  const supabase = await createClient();
  const { data } = await supabase.auth.getClaims();
  const claims = data?.claims;

  if (!claims) {
    redirect("/login?next=/dashboard");
  }

  const email = readStringClaim(claims.email, "Email nije dostupan");
  const userId = readStringClaim(claims.sub, "Nepoznat korisnik");
  const role = readStringClaim(claims.role, "authenticated");
  const audience = readStringClaim(claims.aud, "authenticated");

  return (
    <main className="min-h-screen bg-surface px-6 py-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-8">
        <header className="overflow-hidden rounded-[2rem] bg-surface-container-lowest shadow-card">
          <div className="flex flex-col gap-6 px-8 py-8 md:flex-row md:items-center md:justify-between md:px-10">
            <div className="space-y-3">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-secondary">
                Privatni prostor
              </p>
              <div>
                <h1 className="text-3xl font-bold text-on-surface md:text-4xl">
                  Dashboard je aktivan.
                </h1>
                <p className="mt-2 max-w-2xl text-on-surface-variant leading-7">
                  Supabase autentikacija je povezana sa aplikacijom i sesija se
                  proverava na serveru pre renderovanja ove stranice.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              <Link
                href="/"
                className="inline-flex items-center justify-center rounded-full bg-surface-container px-5 py-3 text-sm font-semibold text-on-surface transition hover:bg-surface-container-high"
              >
                Početna stranica
              </Link>
              <Link
                href="/order"
                className="inline-flex items-center justify-center rounded-full bg-secondary-container px-5 py-3 text-sm font-semibold text-on-secondary-container transition hover:brightness-95"
              >
                Otvori poručivanje
              </Link>
              <form action="/auth/signout" method="post">
                <button
                  type="submit"
                  className="inline-flex items-center justify-center rounded-full bg-primary px-5 py-3 text-sm font-semibold text-white transition hover:bg-on-primary-fixed-variant"
                >
                  Odjavi se
                </button>
              </form>
            </div>
          </div>
        </header>

        <section className="grid gap-6 md:grid-cols-[1.15fr_0.85fr]">
          <div className="rounded-[2rem] bg-surface-container-lowest p-8 shadow-soft">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-secondary">
              Aktivna sesija
            </p>
            <h2 className="mt-3 text-2xl font-bold text-on-surface">
              Prijavljeni ste kao {email}
            </h2>
            <p className="mt-3 max-w-2xl text-on-surface-variant leading-7">
              Ovo je početna verzija korisničkog dashboard-a. Sledeći koraci
              mogu da dodaju privatne podatke, porudžbine, upload tokove i druge
              funkcije koje zahtevaju prijavu.
            </p>

            <dl className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-[1.5rem] bg-surface-container p-5">
                <dt className="text-xs font-bold uppercase tracking-[0.24em] text-on-surface-variant">
                  Email
                </dt>
                <dd className="mt-3 break-all text-base font-semibold text-on-surface">
                  {email}
                </dd>
              </div>
              <div className="rounded-[1.5rem] bg-surface-container p-5">
                <dt className="text-xs font-bold uppercase tracking-[0.24em] text-on-surface-variant">
                  User ID
                </dt>
                <dd className="mt-3 break-all font-mono text-sm text-on-surface">
                  {userId}
                </dd>
              </div>
              <div className="rounded-[1.5rem] bg-surface-container p-5">
                <dt className="text-xs font-bold uppercase tracking-[0.24em] text-on-surface-variant">
                  Role
                </dt>
                <dd className="mt-3 text-base font-semibold text-on-surface">
                  {role}
                </dd>
              </div>
              <div className="rounded-[1.5rem] bg-surface-container p-5">
                <dt className="text-xs font-bold uppercase tracking-[0.24em] text-on-surface-variant">
                  Audience
                </dt>
                <dd className="mt-3 text-base font-semibold text-on-surface">
                  {audience}
                </dd>
              </div>
            </dl>
          </div>

          <aside className="rounded-[2rem] bg-primary px-8 py-8 text-white shadow-soft">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-white/76">
              Sledeće spremno
            </p>
            <h2 className="mt-3 text-2xl font-bold">
              Osnova za privatne funkcionalnosti je postavljena.
            </h2>
            <ul className="mt-6 space-y-4 text-sm leading-6 text-white/84">
              <li className="flex gap-3">
                <span
                  className="material-symbols-outlined rounded-full bg-white/10 p-2 text-base"
                  aria-hidden
                >
                  check
                </span>
                Zaštićena ruta proverava korisnika na serveru pre prikaza sadržaja.
              </li>
              <li className="flex gap-3">
                <span
                  className="material-symbols-outlined rounded-full bg-white/10 p-2 text-base"
                  aria-hidden
                >
                  check
                </span>
                Prijava i odjava koriste Supabase cookie-based sesiju.
              </li>
              <li className="flex gap-3">
                <span
                  className="material-symbols-outlined rounded-full bg-white/10 p-2 text-base"
                  aria-hidden
                >
                  check
                </span>
                Aplikacija je spremna da dobije stvarni privatni sadržaj bez
                menjanja auth osnove.
              </li>
            </ul>
          </aside>
        </section>
      </div>
    </main>
  );
}
