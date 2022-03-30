import React, { Suspense, useEffect } from "react";
import Hero from "../../components/hero";
import Navbar from "./../../components/navbar/Navbar";
import Footer from "./../../components/footer/Footer";
import Services from "../../components/services";
import Application from "../../components/application";
import Payment from "../../components/payment";
import Mobile from "../../components/mobile";
import Desktop from "./../../components/desktop/Desktop";
import Testimonials from "../../components/testimonials";
import Loader from "../../components/loader";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";
import ReactGA from 'react-ga';

const Home = () => {
  const { t, i18n } = useTranslation();
  useEffect(() => {
    ReactGA.initialize('UA-224290464-1');
    ReactGA.pageview(window.location.pathname + window.location.search);
   }, []);
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title> {t("page.title")} </title>
        <meta name="description" content={t("page.description")} />
        <meta
          name="google-site-verification"
          content="WLfZm5Vqo3e-r2BJEVs0PPIeBfFrw5_XDFpIwaea3eQ"
        />

        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=UA-224290464-1"
        ></script>

      </Helmet>
      <Suspense fallback={<Loader />}>
        <Navbar />
        <Hero />
        <Services />
        <Application />
        <Payment />
        <Mobile />
        <Desktop />
        <Testimonials />
        <Footer />
      </Suspense>
    </>
  );
};

export default Home;
