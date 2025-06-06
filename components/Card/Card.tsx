// components/Card/Card.tsx
'use client';
import { CardProps } from './Card.props';
import styles from './Card.module.css';
import cn from 'classnames';
import { Htag } from '../Htag/Htag';
import { P } from '../P/P';
import { Tag } from '../Tag/Tag';
import { Like } from '../Like/Like';
import { Open_Sans } from 'next/font/google';
import {JSX} from "react";

import MiniIcon from './mini.svg';
import Arrow from './arrow.svg';

const openSans = Open_Sans({
    subsets: ['cyrillic', 'latin'],
    weight: ['400', '500', '600'],
});



export const Card = ({
                         category,
                         point,
                         date,
                         title,
                         description,
                         readTime,
                         onReadClick,
                         likeCount = 0,
                         isLiked = false,
                     }: CardProps): JSX.Element => {
    return (
        <div className={styles.card}>

            <div className={styles.topIcon}>
                <MiniIcon className={styles.topIcon} />
            </div>

            {/* 2. Тело карточки */}
            <div className={styles.cardBody}>
                <div className={styles.row}>
                    <div className={styles.leftGroup}>
                        <Tag color="--black-с30">{category}</Tag>
                        <Tag color="--black-с20">{point}</Tag>
                        <Tag color="--black-с20">{date}</Tag>
                    </div>

                    {/* Отдельный блок для Like справа */}
                    <div className={styles.rightGroup}>
                        <Like count={likeCount} isActive={isLiked} />
                    </div>
                </div>

                {/* Заголовок */}
                <Htag tag="h1" >
                    {title}
                </Htag>

                {/* Описание */}
                <P size="s">
                    {description}
                </P>

                {/* Нижняя строка: время чтения, кнопка «Читать» и «лайк» */}
                <div className={styles.row}>
                    <div className={styles.leftGroup}>
                        <Tag color="--black-с20">
                            {readTime}
                        </Tag>
                    </div>

                    <div className={styles.rightGroup}>
                        <span
                            className={cn(styles.readLink, openSans.className)}
                            onClick={onReadClick}
                        >
                            Читать
                            <span className={styles.readArrow}><Arrow/></span>
                        </span>
                        </div>

                    </div>
                </div>
            </div>

    );
};