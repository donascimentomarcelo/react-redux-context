import React from "react";

import { Container } from "./styles";

export function MainContainer({ children }) {
  return <Container mobile>{children}</Container>;
}
