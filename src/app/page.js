import SurveyBenefits from '@/components/HomePageComponents/SurveyBenefits';
import WhatPeopleSay from '@/components/HomePageComponents/WhatPeopleSay';
import React from 'react';

const HomePage = () => {
  return (
    <div>
      <h1>This is home page</h1>
      <SurveyBenefits></SurveyBenefits>
      <WhatPeopleSay></WhatPeopleSay>
    </div>
  );
};

export default HomePage;