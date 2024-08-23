import type { AppProps } from "next/app";
import Header from "@/components/Header/Header";
import { useState } from "react";
import Loader from "@/components/Loader/Loader";
import GlobalStyles from "@/styles/GlobalStyle";
import Head from "next/head";
import { defaultMetadata, email } from "@/utils/contants";
import Side from "@/components/Side/Side";
import Footer from "@/components/Footer/Footer";
import { IsMobileProvider } from "@/context/IsMobileContext";
import MetaHead from "@/components/MetaHead/MetaHead";

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
          <Side position="right">
            <a href={`mailto:${email}`}>{email}</a>
          </Side>
          <Component {...pageProps} />
          <Footer />
        </>
      )}
    </IsMobileProvider>
  );
};

export default MyApp;
