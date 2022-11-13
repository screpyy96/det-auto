import React from 'react';
import { Cards } from '../components/card/card';
import Carousele from '../components/carousel/carousel';
import { HeroText } from '../components/hero-text/hero-text';

const Home = () => {
  return (
    <div>
      <Carousele />
      <HeroText />
      <Cards />
    </div>
  );
};

export default Home;
