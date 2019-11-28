import React from "react";
import { makeStyles } from "@material-ui/styles";
import { Avatar, Box, Grid, Typography } from "@material-ui/core";

import profile from "./avatar.jpg";
import IconList from "./IconList";

const useStyles = makeStyles(theme => ({
  avatar: {
    width: 120,
    height: 120,
    boxShadow: "0 0 2px rgba(0, 0, 0, 0.3)",
    marginBottom: theme.spacing(3)
  },
  profile: {
    textAlign: "center",
    padding: theme.spacing(3)
  }
}));

export default function Profile() {
  const classes = useStyles();
  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      justify="center"
      className={classes.profile}
    >
      <Grid item>
        <Avatar alt="Yijun Xiao" src={profile} className={classes.avatar} />
      </Grid>
      <Grid item>
        <Typography gutterBottom variant="h5">
          <Box>Hi. I'm</Box>
          <Box fontWeight="fontWeightBold">Yijun Xiao</Box>
        </Typography>
      </Grid>
      <Grid item>
        <IconList />
      </Grid>
    </Grid>
  );
}
