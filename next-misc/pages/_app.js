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
      <Headers />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
