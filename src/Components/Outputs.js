import React from "react";
import Grid from "@mui/material/Grid";
import cn from "../assets/images/cn.jpeg";

const Outputs = () => {
  return (
    <div>
      <h1>Key Outputs</h1>
      <Grid container className="displayinc">
        <Grid item xs={2} className="outputitem">
          <img src={cn} className="outputimg"></img>
          <p className="outputp">Calcium Nitrate</p>
        </Grid>
        <Grid item xs={2} className="outputitem">
          <img src={cn} className="outputimg"></img>
          <p className="outputp">Calcium Nitrate</p>
        </Grid>
        <Grid item xs={2} className="outputitem">
          <img src={cn} className="outputimg"></img>
          <p className="outputp">Calcium Nitrate</p>
        </Grid>
        <Grid item xs={2} className="outputitem">
          <img src={cn} className="outputimg"></img>
          <p className="outputp">Calcium Nitrate</p>
        </Grid>
        <Grid item xs={2} className="outputitem">
          <img src={cn} className="outputimg"></img>
          <p className="outputp">Calcium Nitrate</p>
        </Grid>
      </Grid>
    </div>
  );
};

export default Outputs;
