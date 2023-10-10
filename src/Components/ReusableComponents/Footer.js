import React from 'react'
import Grid from '@mui/material/Grid';
import location from '../../assets/images/icons8-location-24.png'
import phone from '../../assets/images/icons8-phone-30.png'
import mail from '../../assets/images/icons8-mail-24.png'
import tele from '../../assets/images//icons8-telephone-64.png'

const Footer = () => {
  return (
    <div className='footercontainer'>
      <Grid container spacing={3} className='gridcontainer'>

      <Grid item xs={3} className='companygrid'>
          <h4>ABOUT COMPANY</h4>
          <p className='companyp'>
            Our clients range from paint industries,  to large organisations and some small local businesses who are striving to expand.
          </p>
          <p className='companyp'>
          To see a detailed list of our works and the progress please see our project page.
          </p>
          
        </Grid> 


        <Grid item xs={3} className='companygrid'>
          <h4>COMPANY</h4>
          <Grid container spaing={2}>
            <Grid item xs={6}>
              <p className='companyp1'>Home</p>
              <p className='companyp1'>Company News</p>
              <p className='companyp1'>Products</p>
              <p className='companyp1'>Careers</p>
            </Grid>
            <Grid item xs={6}>
            <p className='companyp1'>Who are we</p>
            <p className='companyp1'>Contact Us</p>
            </Grid>
          </Grid>
        </Grid> 

        <Grid item xs={3} className='companygrid'>
          <h4>OFFICE</h4>
          <div className='officedeets'>
            <img className='officedeetsimg'src={location}></img>
            <p>103 Luvkush Apartment Shri Ram Vatika Dhaiya, Dhanbad Jharkhand 826004</p>
          </div>
          <div className='officedeets'>
            <img className='officedeetsimg'src={phone}></img>
            <p>+91 9431121431</p>
          </div>
          <div className='officedeets'>
            <img className='officedeetsimg'src={mail}></img>
            <p>rahulgoel542@gmail.com</p>
          </div>
          <div className='officedeets'>
            <img className='officedeetsimg'src={tele}></img>
            <p>+91 9431121431</p>
          </div>
          
          
        </Grid> 

        <Grid item xs={3} className='companygrid'>
          <h4>BUSINESS HOURS</h4>
          <p className='companyp1'>
          Our support available to help you 24 hours a day, seven days a week.
          </p>
          <Grid container spaing={1}>
            <Grid item xs={6}>
              <p style={{fontSize:"13px",color:"rgb(188, 189, 190)"}}>Monday to Friday:</p>
              <hr className='linefooter'></hr>
              <p style={{fontSize:"13px",color:"rgb(188, 189, 190)"}}>Saturday:</p>
              <hr className='linefooter'></hr>
              <p style={{fontSize:"13px",color:"rgb(188, 189, 190)"}}>Sunday:</p>
            </Grid>
            <Grid item xs={6}>
              <p style={{textAlign:"right",fontSize:"13px",color:"rgb(188, 189, 190)"}}>9am to 5 pm</p>
              <hr></hr>
              <p style={{textAlign:"right",fontSize:"13px",color:"rgb(188, 189, 190)"}}>10am to 2pm</p>
              <hr></hr>
              <p style={{textAlign:"right",fontSize:"13px",color:"rgb(188, 189, 190)"}}>closed</p>
            </Grid>
          </Grid>
        </Grid> 


      </Grid>

    </div>
  )
}

export default Footer