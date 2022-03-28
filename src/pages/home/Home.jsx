import React, { Suspense } from "react";
import Hero from '../../components/hero';
import Navbar from './../../components/navbar/Navbar';
import Footer from './../../components/footer/Footer';
import Services from '../../components/services';
import Application from '../../components/application';
import Payment from '../../components/payment';
import Mobile from '../../components/mobile';
import Desktop from './../../components/desktop/Desktop';
import Testimonials from '../../components/testimonials';
import Loader from '../../components/loader'
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";


const Home = () => {

   const { t, i18n } = useTranslation();
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title> {t('page.title')} </title>
        <meta name="description" content={t('page.description')} />
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
}

export default Home