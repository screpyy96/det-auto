import React, { useEffect } from 'react';
import Carousele from '../components/carousel/carousel';

const Despre = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  
  return <div> 
    <Carousele />
  </div>;
};

export default Despre;
