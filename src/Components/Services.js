import React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import dyk from '../assets/images/icons8-did-you-know-64.png'
import beaker from '../assets/images/pexels-karolina-grabowska-8539752.jpg'

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  display:"flex",
  flexDirection:"column",
  alignItems:"left",
  justifyContent:"left",
  color: theme.palette.text.secondary,
}));

const Services = () => {
  return (
    <div>
      <Grid container className="servicesgridcontainer">
        <Grid item xs={5} className="griditem">
          <div className="dykdiv">
                <img src={dyk} className="small-icon"></img>
            <p className="dykp">
            Nitrates, along with nitrites, are chemical compounds that occur naturally in the environment. Food manufacturers also add them as preservatives to products like hot dogs, salami, deli meats, and pickled foods. 
            </p>
            <hr style={{width:"100%"}}></hr>
            <p className="dykp">
            In addition, they’re found in crop fertilizers, meaning the chemicals leach into the crops and nearby water supplies.


            </p>
            </div>
        </Grid>
        <Grid item xs={5} className="griditem">
          <Item>
            <img src={beaker}>
                
            </img>
          </Item>
        </Grid>
      </Grid>
    </div>
  );
};

export default Services;
