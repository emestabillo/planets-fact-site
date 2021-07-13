import Layout from "../components/Layout";
import { AnimateSharedLayout } from "framer-motion";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Layout>
        <AnimateSharedLayout>
          <Component {...pageProps} />
        </AnimateSharedLayout>
      </Layout>
    </>
  );
}

export default MyApp;
