import { COMPONENTS, THEMES } from "@/theme/constants";

// Types for Button styles
export type ButtonStyles = {
    primary: string;
    secondary: string;
};

// Types for Card styles
export type CardStyles = {
    container: string;
    header: string;
    body: string;
    footer: string;
};

// Types for theme styles configuration
export type ThemeStyles = {
    [COMPONENTS.button]: () => Promise<ButtonStyles>;
    [COMPONENTS.card]: () => Promise<CardStyles>;
};

// Type for the theme configuration object
export type ThemeConfig = {
    [key in Theme]: ThemeStyles;
};

export type LoadedStyles = Partial<Record<Component, any>>;

export type Theme = typeof THEMES[keyof typeof THEMES];
export type Component = typeof COMPONENTS[keyof typeof COMPONENTS];

type ComponentStyleMap = {
    [COMPONENTS.button]: ButtonStyles;
    [COMPONENTS.card]: CardStyles;
};

export type ComponentStyle = ComponentStyleMap[keyof ComponentStyleMap];
