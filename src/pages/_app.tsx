import "@/styles/globals.css";
import {ThemeProvider} from "@/theme/ThemeContext";
import App, {AppContext, AppProps} from "next/app";
import {preloadStylesForTheme} from "@/theme/themeLoader";
import {THEMES} from "@/theme/constants";
import {LoadedStyles, Theme} from "@/theme/types";
import {Open_Sans} from "next/font/google";

const openSans = Open_Sans({
    subsets: ["latin"],
    variable: '--font-open-sans'
})

interface MyAppProps extends AppProps {
    initialTheme: Theme;
    initialStyles: LoadedStyles;
}

function MyApp({Component, pageProps, initialTheme, initialStyles}: MyAppProps) {
    return (
        <main className={`${openSans.className} font-sans`}>
            <ThemeProvider initialTheme={initialTheme} initialStyles={initialStyles}>
                <Component {...pageProps} />
            </ThemeProvider>
        </main>
    );
}

// Preload styles in the server and pass them as initial props
MyApp.getInitialProps = async (appContext: AppContext) => {
    const initialProps = await App.getInitialProps(appContext);
    const initialTheme = THEMES.corporate; // Set the initial theme here
    const initialStyles = await preloadStylesForTheme(initialTheme);

    return {...initialProps, initialTheme, initialStyles};
};

export default MyApp;