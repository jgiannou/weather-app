
# React + TypeScript + Vite

This project is a minimal setup to get React working with Vite, TypeScript, and HMR (Hot Module Replacement). It also includes basic ESLint rules to maintain code quality and consistency.

## Table of Contents

- [Getting Started](#getting-started)
- [Available Scripts](#available-scripts)
- [Expanding the ESLint Configuration](#expanding-the-eslint-configuration)
- [Plugins](#plugins)
- [License](#license)

## Getting Started

### Prerequisites

Make sure you have the following tools installed:

- **Node.js** (version 16.x or higher recommended): [Download from here](https://nodejs.org/)
- **Yarn** (optional but recommended): [Install from here](https://yarnpkg.com/getting-started/install)

### Installation

1. Clone this repository or download the source code:
   
   ```bash
   git clone https://github.com/jgiannou/weather-app
   ```

2. Navigate into the project directory:

   ```bash
   cd weather-app
   ```

3. Install dependencies using Yarn (or npm if you prefer):

   ```bash
   yarn install
   ```

   OR

   ```bash
   npm install
   ```

### Running the Application

After installing the dependencies, you can run the development server:

```bash
yarn dev
```

OR

```bash
npm run dev
```

This will start the app on \`http://localhost:5173\` (or another available port), where it will be hot-reloaded as you make changes.

### Building the Application

To create a production build of the application, run the following command:

```bash
yarn build
```

OR

```bash
npm run build
```

This will generate the production-ready code in the \`dist\` folder.

### Previewing the Production Build

After building, you can locally preview the production build to ensure everything works correctly:

```bash
yarn preview
```

OR

```bash
npm run preview
```

## Available Scripts

- **`yarn dev`** / **`npm run dev`**: Runs the app in development mode.
- **`yarn build`** / **`npm run build`**: Builds the app for production.
- **`yarn preview`** / **`npm run preview`**: Previews the production build locally.
- **`yarn lint`** / **`npm run lint`**: Runs ESLint to check the code for issues.

## Expanding the ESLint Configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` with `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally, add `...tseslint.configs.stylisticTypeChecked` for stricter stylistic linting.
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```

## Plugins

This project uses the following Vite plugins:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react): A plugin that enables React Fast Refresh with Babel.
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc): A plugin that enables React Fast Refresh with SWC.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
