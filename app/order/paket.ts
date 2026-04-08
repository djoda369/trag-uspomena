export type Paket = "digital" | "stamp12" | "stamp16";

export function normalizePaket(
  value: string | string[] | null | undefined,
): Paket | null {
  const paket = Array.isArray(value) ? value[0] : value;

  if (!paket) return null;
  if (paket === "digital" || paket === "stamp12" || paket === "stamp16") {
    return paket;
  }

  return null;
}
