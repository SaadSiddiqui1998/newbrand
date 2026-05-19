import React from 'react';
import { Metadata } from 'next';
import HomeFourMain from '@/pages/homes/home-4';

export const metadata: Metadata = {
  title: "Liko - Home Four Page",
  robots: {
    index: false,
    follow: false,
  },
};

const HomePageFour = () => {
  return (
    <HomeFourMain />
  );
};

export default HomePageFour;
