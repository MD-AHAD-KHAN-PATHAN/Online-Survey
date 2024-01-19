
import Banner from '@/components/Banner';
import Navbar from '@/components/Navbar';
import React from 'react';

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <h1>This is home page</h1>
      <SurveyBenefits></SurveyBenefits>
      <WhatPeopleSay></WhatPeopleSay>
    </div>
  );
};

export default HomePage;