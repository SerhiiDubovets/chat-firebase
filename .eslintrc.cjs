module.exports = {
  root: true,
  env: { browser: true, es2022: true, node: true },

  parser: "@typescript-eslint/parser",

  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/typescript",
    "plugin:boundaries/recommended",
    "eslint-config-prettier",
  ],

  plugins: [
    "@typescript-eslint",
    "react",
    "react-hooks",
    "react-refresh",
    "import",
    "boundaries",
  ],

  settings: {
    react: { version: "detect" },

    // FSD слои
    "boundaries/elements": [
      { type: "app", pattern: "@app/*" },
      { type: "pages", pattern: "@pages/*" },
      { type: "widgets", pattern: "@widgets/*" },
      { type: "features", pattern: "@features/*" },
      { type: "entities", pattern: "@entities/*" },
      { type: "shared", pattern: "@shared/*" },
    ],
  },

  rules: {
    // ======================
    // Общие
    // ======================
    "react/prop-types": "off",
    "import/no-unresolved": "off",
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": ["warn"],
    "import/no-named-as-default": "off",

    // ======================
    // IMPORT ORDER (Production)
    // ======================
    "import/order": [
      "warn",
      {
        groups: [
          "builtin",
          "external",
          "internal",
          "parent",
          "sibling",
          "index",
          "type",
        ],

        pathGroups: [
          // React всегда первым
          {
            pattern: "react",
            group: "external",
            position: "before",
          },

          // FSD порядок слоёв
          { pattern: "@app/**", group: "internal", position: "after" },
          { pattern: "@pages/**", group: "internal", position: "after" },
          { pattern: "@widgets/**", group: "internal", position: "after" },
          { pattern: "@features/**", group: "internal", position: "after" },
          { pattern: "@entities/**", group: "internal", position: "after" },
          { pattern: "@shared/**", group: "internal", position: "after" },
        ],

        pathGroupsExcludedImportTypes: ["react"],
        "newlines-between": "always",

        alphabetize: {
          order: "asc",
          caseInsensitive: true,
        },
      },
    ],

    // ======================
    // FSD ARCHITECTURE RULE
    // ======================
    "boundaries/element-types": [
      "error",
      {
        default: "allow",
        rules: [
          {
            from: "app",
            allow: ["pages", "widgets", "features", "entities", "shared"],
          },
          {
            from: "pages",
            allow: ["widgets", "features", "entities", "shared"],
          },
          { from: "widgets", allow: ["features", "entities", "shared"] },
          { from: "features", allow: ["entities", "shared"] },
          { from: "entities", allow: ["shared"] },
          { from: "shared", allow: ["shared"] },
        ],
      },
    ],

    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
  },
};
