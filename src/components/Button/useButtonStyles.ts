import {useTheme} from '@/theme/ThemeContext';
import {ButtonStyles} from '@/theme/types';

const useButtonStyles = (): ButtonStyles => {
    const {loadedStyles} = useTheme();
    return loadedStyles.button || {primary: '', secondary: ''};
};

export default useButtonStyles;