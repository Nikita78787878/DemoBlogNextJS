import {ButtonProps} from "@/components/Button/Button.props";
import {JSX} from "react";
import styles from './Button.module.css'
import cn from "classnames";


export const Button = ({children, className, ...props}: ButtonProps):JSX.Element => {
    return (
        <button
        className={cn(styles.button, className)} {...props}>
            {children}
        </button>
    )

}