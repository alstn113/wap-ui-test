import React, { ButtonHTMLAttributes } from 'react';
import * as S from './Button.styles';

export interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

function Button({ children }: Props) {
  return <S.StyledButton>{children}</S.StyledButton>;
}

export default Button;
