import { red } from "@material-ui/core/colors";
import { createMuiTheme } from "@material-ui/core/styles";

// A custom theme for this app
const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#fbc02d"
    },
    secondary: {
      main: "#1565c0"
    },
    error: {
      main: red.A400
    },
    background: {
      default: "#fff"
    },
    twitter: {
      main: "#1da1f2",
      light: "#7dc9f7"
    },
    github: {
      main: "#24292e",
      light: "#677684"
    },
    scholar: {
      main: "#4285f4",
      light: "#a2c3fa"
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
