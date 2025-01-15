import { Inter } from "next/font/google";
import "./globals.css";

const interFont = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata = {
  title: "Darshan's Portfolio",
  description: "Personal portfolio showcasing my work.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${interFont.variable} antialiased`}>{children}</body>
    </html>
  );
}
