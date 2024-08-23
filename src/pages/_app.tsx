import type { AppProps } from "next/app";
import Header from "@/components/Header/Header";
import { useState } from "react";
import Loader from "@/components/Loader/Loader";
import GlobalStyles from "@/styles/GlobalStyle";
import Head from "next/head";
import { defaultMetadata, email } from "@/utils/contants";
import Side from "@/components/Side/Side";
import { useIsMobile } from "@/hooks/useIsMobile";
import Footer from "@/components/Footer/Footer";

const MyApp = ({ Component, pageProps }: AppProps) => {
  const [loading, setLoading] = useState<boolean>(true);
  const isMobile = useIsMobile();

  return (
    <>
      <Head>
        <title>{defaultMetadata.title}</title>
        <meta name="description" content={defaultMetadata.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <GlobalStyles />
      {loading ? (
        <Loader finishLoading={() => setLoading(false)} />
      ) : (
        <>
          <Header />
          <Side position="right" isMobile={isMobile}>
            <a href={`mailto:${email}`}>{email}</a>
          </Side>
          <Component {...pageProps} />
          <Footer />
        </>
      )}
    </>
  );
};

export default MyApp;
