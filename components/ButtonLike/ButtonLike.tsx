// components/ButtonLike/ButtonLike.tsx
'use client';

import {ButtonLikeProps} from "./ButtonLike.props";
import {JSX, useState} from "react";
import Like from "./shape.svg"
import Rectangle from "./Rectangle.svg"
import cn from "classnames";
import styles from "./ButtonLike.module.css"

export const ButtonLike = ({isActive = false, ...props}: ButtonLikeProps): JSX.Element => {
    const [active, setActive] = useState<boolean>(isActive);


    return (
        <button
            onClick={() => setActive(v => !v)}
            className={cn(styles.button, { [styles.active]: active })}
            {...props}
        >
            <div className={styles.svgWrapper}>
                <Rectangle className={styles.bg} />
                <Like      className={styles.like} />
            </div>
        </button>
    );
};