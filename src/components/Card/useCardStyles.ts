import { useTheme } from '@/theme/ThemeContext';
import { CardStyles } from '@/theme/types';

const useCardStyles = (): CardStyles => {
    const { loadedStyles } = useTheme();
    return loadedStyles.card || { container: '', header: '', body: '', footer: '' };
};

export default useCardStyles;
