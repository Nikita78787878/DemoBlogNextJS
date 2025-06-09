import {ButtonHTMLAttributes, DetailedHTMLProps} from 'react';

export interface ButtonLikeProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>{
    isActive?: boolean;
}