import React, { ButtonHTMLAttributes } from 'react';
export interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
}
declare function Button({ children }: Props): JSX.Element;
export default Button;
