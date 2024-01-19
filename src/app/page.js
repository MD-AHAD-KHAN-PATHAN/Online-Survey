
import Banner from '@/components/Banner';
import SurveyBenefits from '@/components/HomePageComponents/SurveyBenefits';
import WhatPeopleSay from '@/components/HomePageComponents/WhatPeopleSay';
import Navbar from '@/components/Navbar';
import React from 'react';

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <SurveyBenefits></SurveyBenefits>
      <WhatPeopleSay></WhatPeopleSay>
    </div>
  );
};

export default HomePage;