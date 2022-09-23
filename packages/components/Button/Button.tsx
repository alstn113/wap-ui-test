import { NormalColorType } from '../../theme/types';
import { ButtonHTMLAttributes } from 'react';
import * as S from './Button.styles';
import React from 'react';

export interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: 'sm' | 'md' | 'lg' | 'auto';
  children: React.ReactNode;
  color?: NormalColorType;
  shadow?: boolean;
}

export const Button = ({
  size = 'md',
  color = 'primary',
  children,
  shadow = false,
  ...options
}: Props) => {
  return (
    <S.StyledButton size={size} color={color} shadow={shadow} {...options}>
      {children}
    </S.StyledButton>
  );
};
