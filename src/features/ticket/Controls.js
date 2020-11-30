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
  color: ${(props) => props.theme.tertiary};
`;

const StyledSpendButton = styled.button`
  background-color: rgba(51, 170, 51, 0);
  border: 0;
  font-size: 2rem;
  font-family: "Rozha One", serif;
  color: ${(props) => props.theme.secondary};
`;

const Ordinary = () => {
  const dispatch = useDispatch();

  let cashRegisterSound = new Audio("/cash.mp3");

  const handleClick = () => {
    cashRegisterSound.pause();
    cashRegisterSound.currentTime = 0;
    cashRegisterSound.play();
    dispatch(ordinaryAdded());
  };

  return (
    <>
      <StyledTicketImg
        src="ticket.svg"
        alt="Ordinary Tickets"
      ></StyledTicketImg>
      <StyledButton onClick={handleClick}>{"+"}</StyledButton>
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

export const Controls = () => {
  return (
    <div>
      <Ordinary></Ordinary>
      <Golden></Golden>
    </div>
  );
};
