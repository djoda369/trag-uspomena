import type { Config } from "tailwindcss";

/**
 * Tailwind v4: dizajn tokeni su u `app/globals.css` (@theme).
 * Ovde su samo putanje i opcije koje još uvek idu kroz config.
 */
export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "media",
} satisfies Config;
