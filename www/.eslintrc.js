module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "./www/tsconfig.json",
    sourceType: "module"
  },
  plugins: ["@typescript-eslint", "react-hooks"],
  extends: [
    "plugin:react/recommended",
    "prettier",
    "prettier/@typescript-eslint"
  ]
};
