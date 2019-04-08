module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "./api/tsconfig.json"
  },
  plugins: ["@typescript-eslint"],
  extends: [
    "plugin:@typescript-eslint/recommended",
    "prettier",
    "prettier/@typescript-eslint"
  ]
};
