import React from "react";

import { ContainerInput, Input } from "./styles";

export function CustomInput({ ...rest }) {
  return (
    <ContainerInput>
      <Input {...rest} />
    </ContainerInput>
  );
}
