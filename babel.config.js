module.exports = function(api) {
  api.cache(true);
  return {
    "presets": ["@babel/preset-env", "@babel/preset-typescript", "@babel/preset-react", "module:metro-react-native-babel-preset"],
    "plugins": [
      ["@babel/plugin-transform-class-properties", { "loose": true }],
      ["@babel/plugin-transform-private-methods", { "loose": true }],
      ["@babel/plugin-transform-private-property-in-object", { "loose": true }],
      [
        "module-resolver",
        {
          "root": ["./src"],
          "alias": {
            "react-native": "react-native-web",
          },
        },
      ],
    ]
  };
};
