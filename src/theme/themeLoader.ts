import {Component, ComponentStyle, LoadedStyles, Theme, ThemeConfig} from "./types";
import {COMPONENTS, THEMES} from "./constants";

const themeStyles: ThemeConfig = {
    [THEMES.base]: {
        [COMPONENTS.button]: () => import("../components/Button/themes/buttonBaseStyles").then((mod) => mod.buttonBaseStyles),
        [COMPONENTS.card]: () => import("../components/Card/themes/cardBaseStyles").then((mod) => mod.cardBaseStyles),
    },
    [THEMES.corporate]: {
        [COMPONENTS.button]: () => import("../components/Button/themes/buttonCorporateStyles").then((mod) => mod.buttonCorporateStyles),
        [COMPONENTS.card]: () => import("../components/Card/themes/cardCorporateStyles").then((mod) => mod.cardCorporateStyles),
    },
};

export const getComponentStyles = async (theme: Theme, component: Component): Promise<ComponentStyle> => {
    const stylesLoader = themeStyles[theme]?.[component];
    if (stylesLoader) {
        return await stylesLoader();
    }
    return {} as ComponentStyle;
};

export const preloadStylesForTheme = async (theme: Theme): Promise<LoadedStyles> => {
    const styles: LoadedStyles = {};
    for (const component of Object.keys(COMPONENTS) as Array<Component>) {
        styles[component] = await getComponentStyles(theme, component);
    }
    return styles;
};
