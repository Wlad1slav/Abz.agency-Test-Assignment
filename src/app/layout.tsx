import type { Metadata } from "next";
import Header from "@/components/Header/Header";
import '@/stylesheet/app.css';
import '@/stylesheet/app.variables.css';
import '@/stylesheet/home.scss';
import {Providers} from "@/redux/Provider";

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
      <body>
        <div className="content">
          <Header />
          <Providers>
            {children}
          </Providers>
        </div>
      </body>
    </html>
  );
}
