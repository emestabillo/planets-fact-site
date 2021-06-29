import Layout from "../components/Layout";
import Navbar from "../components/Navbar/Navbar";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
