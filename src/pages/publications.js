import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";

import PublicationEntry from "../components/PublicationEntry";

export default function Publications() {
  const data = useStaticQuery(graphql`
    query {
      allPublicationsJson {
        edges {
          node {
            author
            link
            title
            venue
          }
        }
      }
    }
  `);

  return (
    <Container maxWidth="sm">
      <Grid container direction="column" justify="center" spacing={2}>
        {data.allPublicationsJson.edges.map((node, index) => (
          <Grid item key={index}>
            <PublicationEntry entry={node} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
