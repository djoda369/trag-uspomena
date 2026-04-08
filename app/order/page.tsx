import OrderPageClient from "@/app/order/OrderPageClient";
import { normalizePaket } from "@/app/order/paket";

type OrderPageProps = {
  searchParams: Promise<{ paket?: string | string[] }>;
};

export default async function OrderPage({ searchParams }: OrderPageProps) {
  const { paket } = await searchParams;

  return <OrderPageClient initialPaket={normalizePaket(paket)} />;
}
