/* eslint-disable @typescript-eslint/no-require-imports */
/* eslint-disable @typescript-eslint/no-var-requires */
const path = require("path");

const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");
/* eslint-enable @typescript-eslint/no-require-imports */
/* eslint-enable @typescript-eslint/no-var-requires */

// https://www.docz.site/documentation/project-configuration
export default {
  base: "/rbx",
  // unfortnately, "too-many-modules"
  // https://github.com/codesandbox/codesandboxer/blob/af013874f5a2f7bb6325c9608597883a8f5061ef/packages/codesandboxer-fs/src/assembleFiles.js#L120
  codeSandbox: false,
  description:
    "The Comprehensive Bulma UI Framework for React. This is a lightweight, yet robust, React framework that enables rapid, beautiful web development.",
  files: "**/[^_]*(.docs)?*.mdx",
  htmlContext: {
    favicon: "/rbx/public/favicon.ico",
  },
  indexHtml: "src/__docs__/index.html",
  modifyBundlerConfig: config => {
    // eslint-disable-next-line no-param-reassign
    config.resolve.alias.src = path.join(__dirname, "./src");
    // eslint-disable-next-line no-param-reassign
    config.resolve.plugins = [
      new TsconfigPathsPlugin({ configFile: "./tsconfig.json" }),
    ];

    config.entry.app.push("src/index.sass");
    config.module.rules.push({
      test: /\.s[ac]ss$/,
      use: ["style-loader", "css-loader", "sass-loader"],
    });

    return config;
  },
  // we manually create them rather than relying on React-Docgen
  propsParser: false,
  public: "src/__docs__/public",
  themeConfig: {
    colors: {
      /* eslint-disable sort-keys */
      white: "#FFFFFF",
      grayExtraLight: "#dbdbdb",
      grayLight: "#b5b5b5",
      gray: "#7a7a7a",
      grayDark: "#4a4a4a",
      grayExtraDark: "#363636",
      dark: "#242424",
      negative: "#121212",
      blue: "#3273dc",
      skyBlue: "#209cee",
      primary: "#3273dc",
      codeColor: "#ff3860",
      codeBg: "#f5f5f5",
      sidebarBg: "#f5f5f5",
      text: "#4a4a4a",
      link: "#3273dc",
      /* eslint-enable sort-keys */
    },
    logo: {
      src: "/rbx/public/logo-wide.svg",
      width: "150px",
    },
    styles: {
      code: {
        fontFamily: "monospace",
        padding: "0.25em 0.5em",
      },
    },
  },
  title: "rbx",
  typescript: true,
};
