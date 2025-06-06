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
    // Локальный стейт, если хотим управлять внутри компонента
    const [isLiked, setIsLiked] = useState(initialActive);
    const [count, setCount] = useState(initialCount);

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        // Если пришёл проп onClick из props, сперва его вызовем
        if (props.onClick) {
            props.onClick(e);
        }

        // Затем переключаем локальную активность / количество
        setIsLiked(prev => !prev);
        setCount(prev => (isLiked ? prev - 1 : prev + 1));
    };

    return (
        <button
            // Передаём все стандартные пропсы кнопки (напр. disabled, aria-label, title)
            // кроме onClick — мы его переопределили своей функцией handleClick
            {...props}
            onClick={handleClick}
            type="button"
            className={cn(styles.like, className)}
            aria-pressed={isLiked}
        >
            {/* Сначала число, потом иконка */}
            <span className={cn(styles.count, { [styles.countActive]: isLiked })}>
        {count}
      </span>
            <ArrowIcon className={cn(styles.icon, { [styles.iconActive]: isLiked })} />
        </button>
    );
};