import React from "react";
import styled from "styled-components";

import { Status } from "./Status";
import { Controls } from "./Controls";

const sTicketsPage = styled.div`
  background-color: ${props => props.theme.primary};
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TicketsPage = () => {
  return (
    <sTicketsPage>
      <Controls></Controls>
      <Status></Status>
    </sTicketsPage>
  );
};
