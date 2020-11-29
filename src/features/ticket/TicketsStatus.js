import React from "react";
import { useSelector } from "react-redux";

import styled from "styled-components";
import { selectOrdinary, selectGolden } from "./ticketSlice";

const StyledTicketsStatus = styled.div`
  position: fixed;
  bottom: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledTicketImg = styled.img`
  width: 5rem;
`;

const StyledTicketStatus = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.primary};
  padding: 0.1rem;
`;

const StyledTicketNumber = styled.div`
  color: ${(props) => props.theme.tertiary};
  padding-right: 1rem;
  padding-left: 0.8rem;
  font-family: "Rozha One", serif;
  font-size: 1rem;
`;

export const TicketsStatus = () => {
  const ordinary = useSelector(selectOrdinary);
  const golden = useSelector(selectGolden);
  return (
    <StyledTicketsStatus>
      <StyledTicketStatus>
        <StyledTicketImg
          src="ticket.svg"
          alt="Ordinary Tickets"
        ></StyledTicketImg>
        <StyledTicketNumber>{ordinary}</StyledTicketNumber>
      </StyledTicketStatus>

      <StyledTicketStatus>
        <StyledTicketImg
          src="gticket.svg"
          alt="Golden Tickets"
        ></StyledTicketImg>
        <StyledTicketNumber>{golden}</StyledTicketNumber>
      </StyledTicketStatus>
    </StyledTicketsStatus>
  );
};
