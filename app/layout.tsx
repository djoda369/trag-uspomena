import type { Metadata } from "next";
import { Inter, Poppins, Geist } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Trag uspomena | Personalizovane bojanke iz vaših uspomena",
  description:
    "Pošaljite vaše fotografije i dobijte personalizovanu bojanku za 30-60 minuta uz besplatan pregled pre poručivanja.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="sr"
      className={cn("h-full", "antialiased", inter.variable, poppins.variable, "font-sans", geist.variable)}
    >
      <body className="bg-surface text-on-surface selection:bg-primary-container selection:text-on-primary-container">
        {children}
      </body>
    </html>
  );
}
