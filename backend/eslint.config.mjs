import js from "@eslint/js";
import globals from "globals";

export default [
  js.configs.recommended,
  {
    files: ["**/*.js"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "commonjs", // Node uses require/module.exports
      globals: globals.node // enables require, module, process, __dirname, console
    },
    rules: {
      "no-unused-vars": "warn"
    }
  }
];
