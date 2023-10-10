import React from 'react'
import banner1 from '../assets/images/a09cdb30-b948-49b1-9e11-9a35cd87a52a.jpg'
import banner2 from '../assets/images/b4f7c0cd-29c9-471f-83f6-0c1753277d2c.jpg'
const Banner = () => {
  return (
    <div>
    <div
    style={{
    backgroundImage:`url(${banner2})`,
    width:"100%", height:"750px",
    backgrounPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    marginBottom:"50px"
    }}>
        <div className='bannertext'>
        <h1>
            Namaste! 
            <h1>We create solutions, literally.</h1>
        </h1>
        <button className='bannerbutton'>Check out our services</button>
        </div>
        

    </div>
    </div>
  )
}

export default Banner