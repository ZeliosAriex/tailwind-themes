import React from 'react';
import useButtonStyles from './useButtonStyles';

type ButtonProps = {
    type?: 'primary' | 'secondary';
    children: React.ReactNode;
};

// Button component that applies styles based on the current theme
const Button = ({ type = 'primary', children }: ButtonProps) => {
    const styles = useButtonStyles();

    return <button className={styles[type]}>{children}</button>;
};

export default Button;
