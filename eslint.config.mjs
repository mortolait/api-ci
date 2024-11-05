import globals from "globals";
import tsEslintParser from "@typescript-eslint/parser";

/** @type {import('eslint').Linter.Config} */
export default {
  files: ["**/*.{js,mjs,cjs,ts}"],
  languageOptions: {
    parser: tsEslintParser,
    sourceType: "module",
    globals: globals.node,
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
  ],
  plugins: [
    "@typescript-eslint"
  ],
  rules: {
    "no-console": "warn",
    "semi": ["error", "always"],
    "quotes": ["error", "single"]
  }
};
