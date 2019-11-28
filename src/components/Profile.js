import React from "react";
import { makeStyles } from "@material-ui/styles";
import { Avatar, Grid, Typography } from "@material-ui/core";

import profile from "./avatar.jpg";
import IconList from "./IconList";

const useStyles = makeStyles(theme => ({
  avatar: {
    width: 150,
    height: 150,
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
        <Typography gutterBottom variant="h5">Yijun Xiao (肖逸君)</Typography>
        <Typography gutterBottom variant="subtitle2">
          Ph.D. Student in Computer Science <br />
          UC Santa Barbara
        </Typography>
      </Grid>
      <Grid item>
        <IconList />
      </Grid>
    </Grid>
  );
}
