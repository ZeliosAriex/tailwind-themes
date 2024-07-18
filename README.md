
# Tailwind Themes

## Description

**Tailwind Themes** is a dynamic theme management system for Next.js applications using Tailwind CSS, enabling real-time theme switching and modular, maintainable component styling.

## Features

- **Modularity**: Well-organized structure that facilitates extension and maintenance.
- **Dynamic Style Loading**: Uses `import()` to load styles based on the selected theme dynamically.
- **Context API for Theme Management**: Utilizes React Context to manage the theme state, allowing easy access to the current theme and loaded styles across the application.
- **TypeScript Integration**: Clear type definitions ensure styles are applied correctly and reduce the risk of errors.
- **Tailwind CSS Integration**: Leverages Tailwind CSS utilities for highly customizable and consistent components.

## Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/yourusername/tailwind-themes.git
    cd tailwind-themes
    ```

2. Install dependencies:
    ```sh
    npm install
    ```

3. Run the development server:
    ```sh
    npm run dev
    ```

## Usage

### ThemeProvider

Wrap your Next.js application with the `ThemeProvider` and set the initial theme and styles:

```tsx
import { ThemeProvider } from "@/theme/ThemeContext";
import { preloadStylesForTheme } from "@/theme/themeLoader";
import { THEMES } from "@/theme/constants";

const MyApp = ({ Component, pageProps, initialTheme, initialStyles }) => (
    <ThemeProvider initialTheme={initialTheme} initialStyles={initialStyles}>
        <Component {...pageProps} />
    </ThemeProvider>
);

MyApp.getInitialProps = async (appContext) => {
    const initialTheme = THEMES.corporate; // Set the initial theme here
    const initialStyles = await preloadStylesForTheme(initialTheme);

    return { initialTheme, initialStyles };
};

export default MyApp;
```

### ThemeSwitcher Component

Use the `ThemeSwitcher` component to allow users to switch between themes:

```tsx
import { useTheme } from "@/theme/ThemeContext";
import { THEMES } from "@/theme/constants";

const linkButtonClasses = "bg-none border-none text-blue-500 underline cursor-pointer p-0 m-2";

const ThemeSwitcher = () => {
    const { setTheme } = useTheme();

    return (
        <div>
            <button className={linkButtonClasses} onClick={() => setTheme(THEMES.base)}>Base Theme</button>
            <button className={linkButtonClasses} onClick={() => setTheme(THEMES.corporate)}>Corporate Theme</button>
        </div>
    );
};

export default ThemeSwitcher;
```

### Styling Components

Define component styles for each theme and load them dynamically:

#### Button Component

```tsx
import React from 'react';
import useButtonStyles from './useButtonStyles';

const Button = ({ type, children }) => {
    const styles = useButtonStyles();
    return <button className={styles[type]}>{children}</button>;
};

export default Button;
```

#### Button Styles

Create base and corporate styles for the button component:

- **buttonBaseStyles.ts**
  ```ts
  export const buttonBaseStyles = {
      primary: 'bg-blue-500 text-white p-2 rounded',
      secondary: 'bg-gray-500 text-white p-2 rounded',
  };
  ```

- **buttonCorporateStyles.ts**
  ```ts
  export const buttonCorporateStyles = {
      primary: 'bg-green-500 text-white p-2 rounded',
      secondary: 'bg-red-500 text-white p-2 rounded',
  };
  ```

## Contributing

1. Fork the repository.
2. Create your feature branch (`git checkout -b feature/your-feature`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/your-feature`).
5. Open a pull request.