import type { AppProps } from "next/app";
import Header from "@/components/Header/Header";
import { useState } from "react";
import Loader from "@/components/Loader/Loader";
import GlobalStyles from "@/styles/GlobalStyle";
import Footer from "@/components/Footer/Footer";
import { IsMobileProvider } from "@/context/IsMobileContext";
import MetaHead from "@/components/MetaHead/MetaHead";
import SideRight from "@/components/Side/SideRight";
import SideLeft from "@/components/Side/SideLeft";

const MyApp = ({ Component, pageProps }: AppProps) => {
  const [loading, setLoading] = useState<boolean>(true);

  return (
    <IsMobileProvider>
      <MetaHead />
      <GlobalStyles />
      {loading ? (
        <Loader finishLoading={() => setLoading(false)} />
      ) : (
        <>
          <Header />
          <SideLeft />
          <SideRight />
          <Component {...pageProps} />
          <Footer />
        </>
      )}
    </IsMobileProvider>
  );
};

export default MyApp;
