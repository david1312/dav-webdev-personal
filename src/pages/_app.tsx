import type { AppProps } from "next/app";
import Header from "@/components/Header/Header";
import { useState } from "react";
import Loader from "@/components/Loader/Loader";
import GlobalStyles from "@/styles/GlobalStyle";

const MyApp = ({ Component, pageProps }: AppProps) => {
  const [loading, setLoading] = useState<boolean>(true);

  return (
    <>
      <GlobalStyles />
      {loading ? (
        <Loader finishLoading={() => setLoading(false)} />
      ) : (
        <>
          <Header />
          <Component {...pageProps} />
        </>
      )}
    </>
  );
};

export default MyApp;
