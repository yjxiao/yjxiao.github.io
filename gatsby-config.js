module.exports = {
  plugins: [
    "gatsby-plugin-layout",
    {
      resolve: "gatsby-plugin-material-ui",
      // If you want to use styled components you should change the injection order.
      options: {
        // stylesProvider: {
        //   injectFirst: true,
        // },
      }
    },
    // If you want to use styled components you should add the plugin here.
    // 'gatsby-plugin-styled-components',
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-mdx",
    "gatsby-transformer-json",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "data",
        path: `${__dirname}/src/data/`
      }
    }
  ],
  siteMetadata: {
    author: "Yijun Xiao",
    title: "Yijun Xiao",
    tabs: [
      {
        name: "About",
        link: "/"
      },
      {
        name: "Publications",
        link: "/publications"
      },
      {
        name: "Teaching",
        link: "/teaching"
      }
    ]
  }
};
