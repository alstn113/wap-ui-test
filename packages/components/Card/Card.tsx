import * as S from './Card.styles';
import React from 'react';

export interface Props {
  children: React.ReactNode;
}

export const Card = ({ children }: Props) => {
  return <S.StyledCard>{children}</S.StyledCard>;
};
