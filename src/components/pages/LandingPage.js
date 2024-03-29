import AboutUs from 'components/components/AboutUs';
import BurgerMenu from 'components/components/BurgerMenu';
import Contacts from 'components/components/Contacts';
import Footer from 'components/components/Footer';
import Header from 'components/components/Header';
import Hero from 'components/components/Hero';
import Reviews from 'components/components/Reviews';
import React, { useState, useEffect } from 'react';

import { Link as ScrollLink } from 'react-scroll';

const LandingPage = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [burgerMenuOpen, setBurgerMenuOpen] = useState(false);

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
  }, [burgerMenuOpen]);

  const toggleBurgerMenu = () => {
    setBurgerMenuOpen(!burgerMenuOpen);
  };

  return (
    <div>
      <Header isScrolled={isScrolled} toggleBurgerMenu={toggleBurgerMenu} />
      <ScrollLink to="Hero" smooth={true} duration={500}></ScrollLink>
      <Hero />
      <ScrollLink to="AboutUs" smooth={true} duration={500}></ScrollLink>
      <AboutUs />
      <ScrollLink to="Reviews" smooth={true} duration={500}></ScrollLink>
      <Reviews />
      <ScrollLink to="Contacts" smooth={true} duration={500}></ScrollLink>
      <Contacts />
      <Footer />

      {burgerMenuOpen && <BurgerMenu toggleBurgerMenu={toggleBurgerMenu} />}
    </div>
  );
};

export default LandingPage;