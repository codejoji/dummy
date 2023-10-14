import React from "react";
import Grid from "@mui/material/Grid";
import indiamap from "../assets/images/Screenshot 2023-10-10 at 11.32.02 PM.png";

import coal from '../assets/images/icons8-coal-60.png'
import ganesh from '../assets/images/icons8-diwali-64.png'
import corn from '../assets/images/icons8-corn-60.png'
import crystal from '../assets/images/icons8-crystal-60.png'


const Location = () => {
  return (
    <div className="Locationdiv">
      <Grid container>
        <Grid item xs={6}>
          <img src={indiamap} className="Locaionimg"></img>
        </Grid>
        <Grid item xs={12} sm={12} lg={6} md={12} className='displayinc'>
                <Grid container scpacing={2}>
                    <Grid item xs={12} sm={12} lg={6} md={6} style={{padding:"20px"}}>
                        <div className='displayinc'>
                        <img src={coal} style={{padding:"10px",width:"70px",height:"70px"}}></img>
                        <h2 >Dhanbad, Jharkhand</h2>
                        </div>
                        <p className='heading2'>
                        We are passionate about melding nature and technology into a tight knit
                        to increase green spaces and restoring ecological balance, 
                        through our IT- enabled platform.
                        </p>
                    </Grid>
                    <Grid item xs={12} sm={12} lg={6} md={6} style={{padding:"20px"}}>
                    <div className='displayinc'>
                        <img src={ganesh} style={{padding:"10px",width:"80px",height:"80px"}}></img>
                        <h2>Nagpur, Maharashtra</h2>
                    </div>
                    <p className='heading2'>
                        Annual trips give us the opportunity to reunite face to face with our 
                        team members, working from different parts of the country to brainstorm 
                        on new challenges and organizational opportunities.
                    </p>
                    </Grid>
                    <Grid item xs={12} sm={12} lg={6} md={6} style={{padding:"20px"}}>
                    <div className='displayinc'>
                        <img src={corn} style={{padding:"10px",width:"70px",height:"70px"}}></img>
                        <h2>Singrauli, Madhya Pradesh</h2>
                    </div>
                    <p className='heading2'>
                        Each assignment at SankalpTaru is a learning curve for its team 
                        members to break through their grassroot dilemmas and imaginative 
                        road blocks.
                    </p>
                    </Grid>
                    <Grid item xs={12} sm={12} lg={6} md={6} style={{padding:"20px"}}>
                    <div className='displayinc'>
                        <img src={crystal} style={{padding:"10px",width:"70px",height:"70px"}}></img>
                        <h2>Akaltara, Chattisgarh</h2>
                    </div>
                    <p className='heading2'>
                        The collaborative culture at SankalpTaru allows its team members 
                        to learn from each other and encourages problem solving through 
                        the exchange of productive feedbacks.
                    </p>
                    </Grid>
                </Grid>
                
            </Grid>
      </Grid>
    </div>
  );
};

export default Location;
