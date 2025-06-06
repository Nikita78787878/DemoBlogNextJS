import {ButtonHTMLAttributes, DetailedHTMLProps} from 'react';

export interface LikeProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>{
    count?: number;
    isActive?: boolean;
}