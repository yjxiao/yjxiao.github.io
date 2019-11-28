import React from "react";
import Typography from "@material-ui/core/Typography";
import { Container, Grid } from "@material-ui/core";

import Profile from "../components/Profile";
import MDXLayout from "../components/MDXLayout";
import About from "../data/about";

export default function Index() {
  return (
    <Container maxWidth="md">
      <Grid container justify="space-around">
        <Grid item xs={10} md={4}>
          <Profile />
        </Grid>
        <Grid item xs={10} md={6}>
          <Typography gutterBottom component="h1" variant="h4">
            About me
          </Typography>
          <MDXLayout>
            <About />
          </MDXLayout>
        </Grid>
      </Grid>
    </Container>
  );
}
