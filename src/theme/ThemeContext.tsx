import {createContext, useContext, useState, ReactNode, useEffect} from "react";
import {Theme, LoadedStyles} from "./types";
import {preloadStylesForTheme} from "./themeLoader";

type ThemeContextType = {
    theme: Theme;
    setTheme: (theme: Theme) => void;
    loadedStyles: LoadedStyles;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({
                                  children,
                                  initialTheme,
                                  initialStyles,
                              }: {
    children: ReactNode;
    initialTheme: Theme;
    initialStyles: LoadedStyles;
}) => {
    const [theme, setTheme] = useState<Theme>(initialTheme);
    const [loadedStyles, setLoadedStyles] = useState<LoadedStyles>(initialStyles);

    useEffect(() => {
        const loadStyles = async () => {
            const newStyles = await preloadStylesForTheme(theme);
            setLoadedStyles(newStyles);
        };

        loadStyles();
    }, [theme]);

    return (
        <ThemeContext.Provider value={{theme, setTheme, loadedStyles}}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error("useTheme must be used within a ThemeProvider");
    }
    return context;
};
