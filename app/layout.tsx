import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "epedev",
  description: "Offensive security. Web app testing, recon, decoy infrastructure.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
