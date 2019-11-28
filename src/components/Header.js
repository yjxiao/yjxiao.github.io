import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Container, Tab, Tabs } from "@material-ui/core";

import Link from "./Link";

function a11yProps(index) {
  return {
    id: `nav-tab-${index}`,
    "aria-controls": `nav-tabpanel-${index}`
  };
}

function LinkTab(props) {
  return <Tab component={Link} {...props} />;
}

const useStyles = makeStyles(theme => ({
  appbar: {
    backgroundColor: theme.palette.common.white,
    boxShadow: "0 0 0"
  },
  tab: {
    "&:hover": {
      color: theme.palette.grey.A700
    },
  }
}));

export default function Header() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          tabs {
            name
            link
          }
        }
      }
    }
  `);

  return (
    <Container maxWidth="md">
      <AppBar position="static" className={classes.appbar}>
        <Tabs
          centered
          indicatorColor="primary"
          value={value}
          onChange={handleChange}
        >
          {site.siteMetadata.tabs.map((tab, index) => (
            <LinkTab
              key={index}
              label={tab.name}
              to={tab.link}
              className={classes.tab}
              {...a11yProps(index)}
            />
          ))}
        </Tabs>
      </AppBar>
    </Container>
  );
}
