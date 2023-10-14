import React from 'react'
import Header from './ReusableComponents/Header'
import Footer from './ReusableComponents/Footer'
import Banner from './Banner'
import Services from './Services'
import Location from './Location'
import Outputs from './Outputs'

const LandingPage = () => {
  return (
    <div>
        <Header/>
        <Banner/>
        <Services/>
        <Location />
        <Outputs/>
        <Footer/>
    </div>
  )
}

export default LandingPage