import React from "react";
import { useSelector } from "react-redux";

import styled from "styled-components";
import { selectOrdinary, selectGolden } from "./ticketSlice";

const SStatus = styled.div`
  position: fixed;
  bottom: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const STicketImg = styled.img`
  width: 5rem;
`;

const STicketStatus = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.primary};
  padding: 0.1rem;
`;

const SNumber = styled.div`
  color: ${(props) => props.theme.tertiary};
  padding-right: 1rem;
  padding-left: 0.8rem;
  font-family: "Rozha One", serif;
  font-size: 1rem;
`;

export const Status = () => {
  const ordinary = useSelector(selectOrdinary);
  const golden = useSelector(selectGolden);
  return (
    <SStatus>
      <STicketStatus>
        <STicketImg
          src="ticket.svg"
          alt="Ordinary Tickets"
        ></STicketImg>
        <SNumber>{ordinary}</SNumber>
      </STicketStatus>

      <STicketStatus>
        <STicketImg
          src="gticket.svg"
          alt="Golden Tickets"
        ></STicketImg>
        <SNumber>{golden}</SNumber>
      </STicketStatus>
    </SStatus>
  );
};
