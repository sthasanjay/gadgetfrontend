import React from 'react';
import "../../css/home.css";
import HomeBanner from "../inner-component/home/HomeBanner";
import HomeFront from '../inner-component/home/HomeFront';
import TrendingProducts from '../inner-component/home/TrendingProducts';
import Footer from '../Footer';
import Banner from '../Banner';
const Home = () => {
    return (
       <>
       
       <HomeBanner/>
       <HomeFront/>
       <Banner/>
       <TrendingProducts/>
       <Footer/>
      
       </>
    )
}

export default Home
