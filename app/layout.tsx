import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "VPN Circumvention Advisor – Bypass VPN Blocks Anywhere",
  description: "Personalized, up-to-date guides to bypass government VPN blocks based on your country and ISP.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="f3e765f1-2a50-440e-bf65-6af6b4c4907e"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
