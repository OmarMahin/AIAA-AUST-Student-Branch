import React from 'react'
import AboutUs from '../component/AboutUs'
import Banner from '../component/Banner'
import LatestActivites from '../component/LatestActivites'

const Home = () => {
  return (
    <div>
        <Banner></Banner>
        <AboutUs></AboutUs>
        <LatestActivites></LatestActivites>
    </div>
  )
}

export default Home