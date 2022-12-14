import "../styles/globals.scss";
import Head from "next/head";
// import Footer from "../components/Footer/Footer";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Kitchendotcom</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
      {/* <Footer /> */}
    </>
  );
}

export default MyApp;
