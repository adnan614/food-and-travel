import { Grid } from "@mui/material";
import React from "react";

const Header = () => {
  return (
    <Grid container>
      <Grid item md={2}>
        <h2>Blog logo</h2>
      </Grid>
      <Grid item md={6}>
        <h2>Blog logo</h2>
      </Grid>
      <Grid item md={4}>
        <p>Menu right</p>
      </Grid>
    </Grid>
  );
};

export default Header;
