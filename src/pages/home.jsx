import React, {useEffect} from 'react';
import { Cards } from '../components/card/card';
import Carousele from '../components/carousel/carousel';
import { HeroText } from '../components/hero-text/hero-text';
import { SubComponents } from '../components/subcomponents/subComponents';




const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div>
      <Carousele />
      <HeroText />
      <Cards />
      <SubComponents/>
    </div>
  );
};

export default Home;
