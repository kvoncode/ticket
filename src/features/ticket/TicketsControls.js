import React from "react";
import styled from "styled-components";

const StyledTicketImg = styled.img`
  width: 15rem;
`;

const StyledButton = styled.button`
  color: red;
`;

const Ordinary = () => {
  return (
    <>
      <StyledTicketImg
        src="ticket.svg"
        alt="Ordinary Tickets"
      ></StyledTicketImg>
      <StyledButton>{"+"}</StyledButton>
      <StyledButton>{"-"}</StyledButton>
    </>
  );
};

const Golden = () => {
  return (
    <>
      <StyledTicketImg src="gticket.svg" alt="Golden Tickets"></StyledTicketImg>
      <StyledButton>{"+"}</StyledButton>
      <StyledButton>{"-"}</StyledButton>
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
