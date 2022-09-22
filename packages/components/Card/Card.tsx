import * as S from './Card.styles';
import React from 'react';

export interface Props {
  children: React.ReactNode;
}

const Card = ({ children }: Props) => {
  return <S.StyledCard>{children}</S.StyledCard>;
};

export default Card;
