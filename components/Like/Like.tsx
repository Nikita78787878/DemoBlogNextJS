// components/Like/Like.tsx
'use client';
import {JSX, useState} from 'react';
import { LikeProps } from './Like.props';
import styles from './Like.module.css';
import cn from 'classnames';
import ArrowIcon from './like.svg'

export const Like = ({
                         count: initialCount = 0,
                         isActive: initialActive = false,
                         className,
                         ...props
                     }: LikeProps): JSX.Element => {

    const [isLiked, setIsLiked] = useState(initialActive);
    const [count, setCount] = useState(initialCount);

    return (
        <button
            onClick={() =>
                (setIsLiked(prev => !prev),
                setCount(prev => (isLiked ? prev - 1 : prev + 1)))}

            className={cn(styles.like, className)}
            {...props}
        >
            <span className={cn(styles.count)}>
        {count}
      </span>
            <ArrowIcon className={cn(styles.icon, { [styles.Active]: isLiked })} />
        </button>
    );
};