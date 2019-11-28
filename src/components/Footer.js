import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/styles";
import { Container } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  footer: {
    padding: theme.spacing(3, 2),
    marginTop: "auto"
  }
}));

export default function Footer() {
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
        }
      }
    }
  `);
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Container maxWidth="md">
        <Typography variant="body2" color="textSecondary" align="center">
          {"Copyright © "}
          {site.siteMetadata.author} {new Date().getFullYear()}
          {"."}
        </Typography>
      </Container>
    </footer>
  );
}
