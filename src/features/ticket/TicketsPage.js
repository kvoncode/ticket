import React from "react";

import { Controls } from "./Controls";
import styled from "styled-components";

const STicketsPage = styled.div`
  width: 100vw;
`;

export const TicketsPage = () => {
  return (
    <STicketsPage>
      <Controls></Controls>
    </STicketsPage>
  );
};
