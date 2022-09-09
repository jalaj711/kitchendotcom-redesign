import "../styles/globals.scss";
import Head from "next/head";
import Footer from "../components/Footer/Footer";
import NavBar from "../components/NavBar/NavBar";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Kitchendotcom</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <NavBar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
