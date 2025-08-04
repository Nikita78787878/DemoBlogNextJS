import {HtagProps} from "./Htag.props";
import styles from "./Htag.module.css";
import {JSX} from "react";

import { Open_Sans } from 'next/font/google';

const openSans = Open_Sans({
    subsets: ['cyrillic', 'latin'],
});

export const Htag = ({ tag, children }: HtagProps): JSX.Element => {
    switch (tag) {
        case 'h1':
            return (
                <h1 className={`${styles.h1} ${openSans.className}`}>
                    {children}
                </h1>
            );
        case 'h1Post':
            return (
                <h1 className={`${styles.h1Post} ${openSans.className}`}>
                    {children}
                </h1>
            );
        case 'h2Post':
            return (
                <h1 className={`${styles.h2Post} ${openSans.className}`}>
                    {children}
                </h1>
            );
        default:
            return <></>;
    }
}