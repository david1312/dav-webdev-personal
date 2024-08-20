import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Header from "@/components/Header/Header";
import { useEffect, useState } from "react";
import Loader from "@/components/Loader/Loader";

const MyApp = ({ Component, pageProps }: AppProps) => {
  const [loading, setLoading] = useState<boolean>(true);

  return (
    <>
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
