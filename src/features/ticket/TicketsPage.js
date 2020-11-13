import React from "react";
import styled from "styled-components";

import { TicketsStatus } from "./TicketsStatus";
import { TicketsControls } from "./TicketsControls";

const StyledTicketsPage = styled.div`
  background-color: #461b1b;
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TicketsPage = () => {
  return (
    <StyledTicketsPage>
      <TicketsControls></TicketsControls>
      <TicketsStatus></TicketsStatus>
    </StyledTicketsPage>
  );
};
