import type { Metadata } from "next";
import "@/sass/main.scss";
import SmoothScroll from "@/library/lenis/SmoothScroll";

import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
// import Component from "@/components/component/Component";

export const metadata: Metadata = {
  title: "Nilanshu Garhewal",
  description: "",
  icons: "/images/logo.png",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <SmoothScroll>
          <Navbar />
          {children}
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
