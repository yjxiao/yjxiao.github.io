import React from "react";
import { MDXProvider } from "@mdx-js/react";
import { Typography } from "@material-ui/core";

export default function MDXLayout({ children }) {
  return (
    <MDXProvider
      components={{
        p: props => <Typography gutterBottom variant="body1" {...props}/>,
      }}
    >
      {children}
    </MDXProvider>
  );
}
