import { red } from "@material-ui/core/colors";
import { createMuiTheme } from "@material-ui/core/styles";

// A custom theme for this app
const theme = createMuiTheme({
  palette: {
    blue: {
      darker3: "#4540b1",
      darker2: "#4b61d2",
      darker1: "#4d73e5",
      main: "#5086fa",
      lighter1: "#5095ff",
      lighter2: "#5ca5ff",
      lighter3: "#73b5ff"
    },
    secondary: {
      main: "#19857b"
    },
    grey: {
      darker1: "#3c3c3c",
      main: "#606060",
      lighter1: "#606060",
      lighter2: "#818181",
      lighter3: "#979797",
      lighter4: "#c2c2c2",
      lighter5: "#dedede",
      lighter6: "#f0f0f0",
      lighter7: "#f5f5f5",
      lighter8: "#fafafa"
    },
    primary: {
      darker2: "#ed883b",
      darker1: "#f6ae48",
      main: "#fac450",
      lighter1: "#fedb58",
      lighter2: "#fae657",
      lighter3: "#fceb6d",
      lighter4: "#fef086",
      lighter5: "#fff5a8"
    },
    error: {
      main: red.A400
    },
    background: {
      default: "#fff"
    },
    twitter: {
      main: "#1da1f2",
      lighter: "#7dc9f7"
    },
    github: {
      main: "#24292e",
      lighter: "#677684"
    },
    scholar: {
      main: "#4285f4",
      lighter: "#a2c3fa"
    }
  },
  typography: {
    fontFamily: [
      "Roboto",
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"'
    ].join(",")
  }
});

theme.typography.body1 = {
  fontSize: "16px",
  lineHeight: 1.75,
  [theme.breakpoints.down("sm")]: {
    fontSize: "16px"
  }
};

export default theme;
