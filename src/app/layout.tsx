import type { Metadata } from "next";
import '@/stylesheet/app.css';
import '@/stylesheet/app.variables.css';

export const metadata: Metadata = {
  title: "Abz.agency Test Assigment",
  description: "Test assigment for the agency Abz, which was performed by Vladyslav Fokin.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
