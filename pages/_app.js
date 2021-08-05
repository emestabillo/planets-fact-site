import Layout from "../components/Layout";
import Head from "next/head";
import { AnimatePresence } from "framer-motion";
import GlobalStyle from "../shared/Globalstyles";

function MyApp({ Component, pageProps, router }) {
  return (
    <>
      <Head>
        <title>Planets Fact Site</title>
        <meta name="description" content="facts about planets" />
        <link
          href="https://fonts.googleapis.com/css2?family=Antonio:wght@500&family=Spartan:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <GlobalStyle />
      <Layout>
        <AnimatePresence exitBeforeEnter>
          <Component {...pageProps} key={router.route} />
        </AnimatePresence>
      </Layout>
    </>
  );
}

export default MyApp;
