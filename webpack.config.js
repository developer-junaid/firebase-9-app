// Look at src/index.js
// and look at the imports there
// and bundle all of the code into a single bundle file

const path = require("path");

module.exports = {
  mode: "development", // can do production
  entry: "./src/index.js", // look here initially
  output: {
    path: path.resolve(__dirname, "dist"), // where to put all the files // absolute path
    filename: "bundle.js", // name of the bundle file
  },
  watch: true, // when we run webpack it will bundle up whenever change occurs
};
