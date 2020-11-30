import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";

import {
  ordinaryAdded,
  ordinarySubtracted,
  goldenAdded,
  goldenSubtracted,
} from "./ticketSlice";

const STicketImg = styled.img`
  width: 15rem;
`;

const SButton = styled.button`
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

const CollectSpend = (props) => {
  const { collect, spend } = props;
  return (
    <>
      <SButton onClick={collect}>{"+"}</SButton>
      <SButton onClick={spend}>{"-"}</SButton>
    </>
  );
};

const Ordinary = () => {
  const dispatch = useDispatch();

  const cashRegisterSound = new Audio("/cash.mp3");

  const collectOrdinary = () => {
    cashRegisterSound.pause();
    cashRegisterSound.currentTime = 0;
    cashRegisterSound.play();
    dispatch(ordinaryAdded());
  };

  const spendOrdinary = () => {
    dispatch(ordinarySubtracted());
  };

  return (
    <>
      <STicketImg src="ticket.svg" alt="Ordinary Tickets"></STicketImg>
      <CollectSpend
        collect={collectOrdinary}
        spend={spendOrdinary}
      ></CollectSpend>
    </>
  );
};

const Golden = () => {
  const dispatch = useDispatch();

  const collectGolden = () => {
    dispatch(goldenAdded());
  };

  const spendGolden = () => {
    dispatch(goldenSubtracted());
  };

  return (
    <>
      <STicketImg src="gticket.svg" alt="Golden Tickets"></STicketImg>
      <CollectSpend collect={collectGolden} spend={spendGolden}></CollectSpend>
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
