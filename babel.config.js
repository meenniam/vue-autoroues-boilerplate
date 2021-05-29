module.exports = {
  presets: ["@vue/cli-plugin-babel/preset"],
  plugins: [
    [
      "module-resolver",
      {
        root: ["./src"],
        extensions: [".js", ".vue"],
        alias: {
          // test: "./test",
          // underscore: "lodash"
        }
      }
    ]
  ]
};
