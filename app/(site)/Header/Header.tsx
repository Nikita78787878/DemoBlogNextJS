import styles from "./Header.module.css";
import {JSX} from "react";


import GitIcon from './GitIcon.svg'


export const Header = (): JSX.Element => {
    return (
        <header className={styles.header}>

            <div className={styles.logo}>
                <div>.my_blog</div>

            </div>

            <div className={styles.center}></div>

            <div className={styles.github}>
                <GitIcon/>
            </div>

        </header>
    );
};