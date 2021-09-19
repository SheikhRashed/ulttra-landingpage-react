import React from 'react';
import InfoSection from '../../components/infoSection/infoSection';
import { homeObjOne, homeObjTwo } from './Data';

const Home = () => {
  return (
    <>
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjTwo} />
    </>
  );
};

export default Home;
