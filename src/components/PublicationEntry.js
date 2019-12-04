import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Box,
  CardActions,
  Button,
  Grid
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

export default function PublicationEntry({ entry }) {
  const [raised, setRaised] = React.useState(false);

  return (
    <Card
      onMouseOver={() => setRaised(true)}
      onMouseOut={() => setRaised(false)}
      raised={raised}
    >
      <CardContent>
        <Typography gutterBottom variant="subtitle1" component="h2">
          <Box fontWeight="fontWeightMedium">{entry.node.title}</Box>
        </Typography>
        <Typography gutterBottom variant="subtitle2">
          {entry.node.author.map((author, index) => (
            <Box
              color={
                author === "Yijun Xiao" ? "text.primary" : "text.secondary"
              }
              display="inline"
              key={index}
            >
              {author}
              {index === entry.node.author.length - 1 ? "" : ", "}
            </Box>
          ))}
        </Typography>
        <Grid container justify="space-between">
          <Grid item>
            <Typography variant="overline">{entry.node.venue}</Typography>
          </Grid>
          <Grid item>
            <Button
              size="small"
              color="secondary"
              href={entry.node.link}
              target="_blank"
            >
              Paper
            </Button>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}
