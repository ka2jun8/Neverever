module.exports = {
  root: true,
  extends: ["plugin:vue/essential", "plugin:prettier/recommended"],
  plugins: ["vue"],
  rules: {
    "prettier/prettier": [
      "error",
      {
        semi: true,
        trailingComma: "es5",
      },
    ],
  },
};
