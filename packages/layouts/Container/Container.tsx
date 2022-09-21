import React from "react";
import * as S from "./Container.styles";

interface Props {
  children: React.ReactNode;
}

function Container({ children }: Props) {
  return <S.StyledContainer>{children}</S.StyledContainer>;
}

export default Container;
