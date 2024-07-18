import React from 'react';

import useCardStyles from "./useCardStyles";

type CardProps = {
    header: React.ReactNode;
    body: React.ReactNode;
    footer: React.ReactNode;
};

// Card component that applies styles based on the current theme
const Card = ({header, body, footer}: CardProps) => {
    const styles = useCardStyles();

    return (
        <div className={styles.container}>
            <div className={styles.header}>{header}</div>
            <div className={styles.body}>{body}</div>
            <div className={styles.footer}>{footer}</div>
        </div>
    );
};

export default Card;
