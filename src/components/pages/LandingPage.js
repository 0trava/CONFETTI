import AboutUs from 'components/components/AboutUs';
import BurgerMenu from 'components/components/BurgerMenu';
import Contacts from 'components/components/Contacts';
import Footer from 'components/components/Footer';
import Header from 'components/components/Header';
import Hero from 'components/components/Hero';
import Reviews from 'components/components/Reviews';
import React, { useState, useEffect } from 'react';


const LandingPage = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 200) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <Header isScrolled={isScrolled} />
      <BurgerMenu />
      <Hero />
      <AboutUs />
      <Reviews />
      <Contacts />
      <Footer />
    </div>
  );
};

export default LandingPage;