import React from 'react';
import "../../css/home.css";
import HomeBanner from "../inner-component/home/HomeBanner";
import HomeFront from '../inner-component/home/HomeFront';
import TrendingProducts from '../inner-component/home/TrendingProducts';
const Home = () => {
    return (
       <>
       
       <HomeBanner/>
       <HomeFront/>
       <TrendingProducts/>
      
       </>
    )
}

export default Home
