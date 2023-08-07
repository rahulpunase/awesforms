import React from 'react';
import dynamic from 'next/dynamic';

const MobileComponent = dynamic(() => import('../home/Mobile'), { ssr: false });
const DesktopComponent = dynamic(() => import('../home/Desktop'), {
  ssr: false,
});

const Home = () => {
  return <DesktopComponent />;
};

export default Home;
