import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MCC Audit Platform",
  description: "Mobile-first MCC and panel audit platform for Panel Technique"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="min-h-screen bg-panel">
          <main className="mx-auto flex min-h-screen w-full max-w-5xl flex-col px-4 py-5 sm:px-6 lg:px-8">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
