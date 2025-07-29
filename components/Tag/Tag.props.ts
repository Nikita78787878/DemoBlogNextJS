import {DetailedHTMLProps, HTMLAttributes, ReactNode} from "react";


export interface TagProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    color: '--black-с20' | '--black-с30' | '--blue';
    children: ReactNode
}