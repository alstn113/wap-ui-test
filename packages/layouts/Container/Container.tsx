import React from 'react';
import * as S from './Container.styles';

export interface Props {
  children: React.ReactNode;
}

export const Container = ({ children }: Props) => {
  return <S.StyledContainer>{children}</S.StyledContainer>;
};
