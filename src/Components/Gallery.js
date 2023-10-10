import React from 'react'
import Header from './ReusableComponents/Header'
import Footer from './ReusableComponents/Footer'
import img1 from '../assets/images/a09cdb30-b948-49b1-9e11-9a35cd87a52a.jpg'
import img2 from '../assets/images/b4f7c0cd-29c9-471f-83f6-0c1753277d2c.jpg'
import Grid from '@mui/material/Grid';


const Gallery = () => {
  return (
    <div>
        <Header/>
        <Grid container spacing={2}>
            <Grid item xs={3} className='gallerygrid'>
            <img className='galleryimg' src={img1}></img>
            </Grid>
            <Grid item xs={3} className='gallerygrid'>
            <img className='galleryimg'src={img2}></img>
            </Grid>
            <Grid item xs={3} className='gallerygrid'>
            <img className='galleryimg'src={img2}></img>
            </Grid>
            <Grid item xs={3} className='gallerygrid'>
            <img className='galleryimg'src={img1}></img>
            </Grid>
        </Grid>


        <Grid container spacing={2}>
            <Grid item xs={3} className='gallerygrid'>
            <img className='galleryimg' src={img1}></img>
            </Grid>
            <Grid item xs={3} className='gallerygrid'>
            <img className='galleryimg'src={img2}></img>
            </Grid>
            <Grid item xs={3} className='gallerygrid'>
            <img className='galleryimg'src={img2}></img>
            </Grid>
            <Grid item xs={3} className='gallerygrid'>
            <img className='galleryimg'src={img1}></img>
            </Grid>
        </Grid>

        
        <Grid container spacing={2}>
            <Grid item xs={3} className='gallerygrid'>
            <img className='galleryimg' src={img1}></img>
            </Grid>
            <Grid item xs={3} className='gallerygrid'>
            <img className='galleryimg'src={img2}></img>
            </Grid>
            <Grid item xs={3} className='gallerygrid'>
            <img className='galleryimg'src={img2}></img>
            </Grid>
            <Grid item xs={3} className='gallerygrid'>
            <img className='galleryimg'src={img1}></img>
            </Grid>
        </Grid>
        <Footer/>
    </div>
  )
}

export default Gallery