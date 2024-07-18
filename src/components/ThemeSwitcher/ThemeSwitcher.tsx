import { useTheme } from "@/theme/ThemeContext";
import { THEMES } from "@/theme/constants";

// Define the classes in a variable
const linkButtonClasses = "bg-none border-none text-blue-500 underline cursor-pointer p-0 m-2";

// Component to switch between themes dynamically
const ThemeSwitcher = () => {
    const { setTheme } = useTheme();

    return (
        <div>
            <button
                onClick={() => setTheme(THEMES.base)}
                className={linkButtonClasses}
            >
                Base Theme
            </button>
            <button
                onClick={() => setTheme(THEMES.corporate)}
                className={linkButtonClasses}
            >
                Corporate Theme
            </button>
        </div>
    );
};

export default ThemeSwitcher;
