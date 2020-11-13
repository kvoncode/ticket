import React from "react";
import styled from "styled-components";

import { useSelector, useDispatch } from "react-redux";
import {
  ordinaryAdded,
  ordinarySubtracted,
  goldenAdded,
  goldenSubtracted,
  selectOrdinary,
  selectGolden,
} from "./ticketSlice";

import { TicketsStatus } from "./TicketsStatus";

const StyledTicketPage = styled.div`
  background-color: #461b1b;
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TicketPage = () => {
  const dispatch = useDispatch();

  return (
    <StyledTicketPage>
      <TicketsStatus></TicketsStatus>
    </StyledTicketPage>
  );
};
