# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the Oxlint configuration

If you are developing a production application, we recommend enabling type-aware lint rules by installing `oxlint-tsgolint` and editing `.oxlintrc.json`:

```json
{
  "$schema": "./node_modules/oxlint/configuration_schema.json",
  "plugins": ["react", "typescript", "oxc"],
  "options": {
    "typeAware": true
  },
  "rules": {
    "react/rules-of-hooks": "error",
    "react/only-export-components": ["warn", { "allowConstantExport": true }]
  }
}
```

See the [Oxlint rules documentation](https://oxc.rs/docs/guide/usage/linter/rules) for the full list of rules and categories.


1. JSX is a syntax that lets us write Html like code inside Javascript. It makes react ui code easier to write and understand.

2. Props are data passed from a parent to a child component. State is data managed inside a component that can change over time.

3. useState is used to create an update component data . In my project. I used it to store the selected technologies in selectedStack

4. useEfect runs code after the component renders. It can be used to fetch JSON data when the page loads

5. The key helps react identify each item in a list. It helps React updata the list corectly when something changes

6. Conditional rendering means showing something based on a condition. For exmple to show the emply stack massage selectedStack.length === 0

7. The parent sends data to the child using props.  The child can send information back by calling a function passed form the a parent as a prop.