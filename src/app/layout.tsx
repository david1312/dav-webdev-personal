"use client";

import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import SideLeft from "@/components/Side/SideLeft";
import SideRight from "@/components/Side/SideRight";
import GlobalStyles from "@/styles/GlobalStyle";
import Loader from "@/components/Loader/Loader";
import MetaHead from "@/components/MetaHead/MetaHead";
import { IsMobileProvider } from "@/context/IsMobileContext";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { useState, useEffect, ReactNode } from "react";

type RootLayoutProps = {
  children: ReactNode;
};
export default function RootLayout({ children }: RootLayoutProps) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading delay or add any real loading logic here
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <html lang="en">
      <head>
        {/* MetaHead component can now go here or be moved to app/head.js */}
        <MetaHead />
      </head>
      <body>
        <IsMobileProvider>
          <GlobalStyles />
          {loading ? (
            <Loader finishLoading={() => setLoading(false)} />
          ) : (
            <>
              <Header />
              <SideLeft />
              <SideRight />
              {children}
              <Footer />
            </>
          )}
        </IsMobileProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
