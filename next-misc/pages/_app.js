import Head from "next/head";
import Footer from "../components/Footer";
import Headers from "../components/Headers";
import "../styles/globals.css";
import "../styles/layout.css";

function MyApp({ Component, pageProps }) {
  if (Component.getLayout) {
    return Component.getLayout(<Component {...pageProps} />);
  }

  return (
    <>
      <Head>
        <title>Codevolution</title>
        <meta name="description" content="Awesome Youtube channel" />
      </Head>
      <Headers />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
