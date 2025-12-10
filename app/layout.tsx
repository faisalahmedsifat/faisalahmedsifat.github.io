import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Faisal Ahmed Sifat — AI/ML & Full-Stack Engineer",
  description: "Remote AI/ML Engineer & Full-Stack Developer shipping LLM, CV and SaaS systems in production.",
  openGraph: {
    title: "Faisal Ahmed Sifat — AI Engineer",
    images: ["/og.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Faisal Ahmed Sifat — AI Engineer",
    description: "Remote AI/ML Engineer & Full-Stack Developer shipping LLM, CV and SaaS systems in production.",
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
