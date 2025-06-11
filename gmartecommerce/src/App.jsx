import React from 'react';
import Landingpage from './Landingpagefiles/Landingpage';
import TrendingProducts from './Trendingpagefiles/Trendingpage';
import DealsSection from './DealPage/DealsSection';
import ServiceReview from './Servicefiles/ServiceReview';
import Footer from './Footerfile/Footer';

function App() {
  return (
    <div>
      <Landingpage/>
      <TrendingProducts/>
      <DealsSection/>
      <ServiceReview/>
      <Footer/>
    </div>
  );
}

export default App;
