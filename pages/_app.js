import Layout from "../components/Layout";
import { AnimatePresence } from "framer-motion";
import GlobalStyle from "../shared/Globalstyles";

function MyApp({ Component, pageProps, router }) {
  return (
    <>
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
