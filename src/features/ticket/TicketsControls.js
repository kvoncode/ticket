import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";

import {
  ordinaryAdded,
  ordinarySubtracted,
  goldenAdded,
  goldenSubtracted,
} from "./ticketSlice";

const StyledTicketImg = styled.img`
  width: 15rem;
`;

const StyledButton = styled.button`
  background-color: rgba(51, 170, 51, 0);
  border: 0;
  font-size: 2rem;
  font-family: "Rozha One", serif;
  color: white;
`;

const Ordinary = () => {
  const dispatch = useDispatch();

  return (
    <>
      <StyledTicketImg
        src="ticket.svg"
        alt="Ordinary Tickets"
      ></StyledTicketImg>
      <StyledButton
        onClick={() => {
          dispatch(ordinaryAdded());
        }}
      >
        {"+"}
      </StyledButton>
      <StyledButton
        onClick={() => {
          dispatch(ordinarySubtracted());
        }}
      >
        {"-"}
      </StyledButton>
    </>
  );
};

const Golden = () => {
  const dispatch = useDispatch();

  return (
    <>
      <StyledTicketImg src="gticket.svg" alt="Golden Tickets"></StyledTicketImg>
      <StyledButton
        onClick={() => {
          dispatch(goldenAdded());
        }}
      >
        {"+"}
      </StyledButton>
      <StyledButton
        onClick={() => {
          dispatch(goldenSubtracted());
        }}
      >
        {"-"}
      </StyledButton>
    </>
  );
};

export const TicketsControls = () => {
  return (
    <div>
      <Ordinary></Ordinary>
      <Golden></Golden>
    </div>
  );
};
