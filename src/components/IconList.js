import React from "react";

import {
  List,
  ListItem,
  Avatar,
  Link
} from "@material-ui/core";
import EmailIcon from "@material-ui/icons/Email";
import GitHubIcon from "@material-ui/icons/GitHub";
import SchoolIcon from "@material-ui/icons/School";
import TwitterIcon from "@material-ui/icons/Twitter";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(theme => ({
  contacts: {
    display: "flex",
    flexDirection: "row"
  },
  item: {
    padding: theme.spacing(1, 1)
  },
  emailIcon: {
    backgroundColor: theme.palette.primary.light,
    "&:hover": {
      backgroundColor: theme.palette.primary.main
    }
  },
  twitterIcon: {
    backgroundColor: theme.palette.twitter.light,
    "&:hover": {
      backgroundColor: theme.palette.twitter.main
    }
  },
  githubIcon: {
    backgroundColor: theme.palette.github.light,
    "&:hover": {
      backgroundColor: theme.palette.github.main
    }
  },
  schoolIcon: {
    backgroundColor: theme.palette.scholar.light,
    "&:hover": {
      backgroundColor: theme.palette.scholar.main
    }
  }
}));

export default function IconList() {
  const classes = useStyles();
  const contacts = [
    {
      text: "Email",
      icon: <EmailIcon />,
      url: "mailto:yijunxiao@cs.ucsb.edu",
      className: classes.emailIcon
    },
    {
      text: "Twitter",
      icon: <TwitterIcon />,
      url: "https://twitter.com/ryjxiao",
      className: classes.twitterIcon
    },
    {
      text: "GitHub",
      icon: <GitHubIcon />,
      url: "https://github.com/yjxiao",
      className: classes.githubIcon
    },
    {
      text: "Google Scholar",
      icon: <SchoolIcon />,
      url: "https://scholar.google.com/citations?user=pPYKiRQAAAAJ&hl=en",
      className: classes.schoolIcon
    }
  ];

  return (
    <List className={classes.contacts}>
      {contacts.map((contact, key) => (
        <ListItem key={key} className={classes.item}>
          <Link href={contact.url} target="_blank">
            <Avatar className={contact.className}>
              {contact.icon}
            </Avatar>
          </Link>
        </ListItem>
      ))}
    </List>
  );
}
