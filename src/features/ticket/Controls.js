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
  width: 12rem;
`;

const SButton = styled.button`
  margin: 0.5rem;
  background-color: rgba(51, 170, 51, 0);
  border: 2px solid ${(props) => props.theme.secondary};
  border-radius: 1rem;
  font-size: 1.5rem;
  font-family: "Rozha One", serif;
  color: ${(props) => props.theme.tertiary};

  &:hover {
    cursor: pointer;
  }

  &:focus {
    outline: 0;
  }
`;

const SContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 1rem;
`;

const SControls = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SCollectSpend = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const cashRegisterSound = new Audio("/cash.mp3");

const soundEffect = () => {
  cashRegisterSound.pause();
  cashRegisterSound.currentTime = 0;
  cashRegisterSound.play();
};

const CollectSpend = (props) => {
  const { collect, spend } = props;

  const collectSFX = () => {
    soundEffect();
    collect();
  };

  const spendSFX = () => {
    soundEffect();
    spend();
  };

  return (
    <SCollectSpend>
      <SButton onClick={collectSFX}>{"COLLECT"}</SButton>
      <SButton onClick={spendSFX}>{"SPEND"}</SButton>
    </SCollectSpend>
  );
};

const Ordinary = () => {
  const dispatch = useDispatch();

  const collectOrdinary = () => {
    dispatch(ordinaryAdded());
  };

  const spendOrdinary = () => {
    dispatch(ordinarySubtracted());
  };

  return (
    <SContainer>
      <STicketImg src="ticket.svg" alt="Ordinary Tickets"></STicketImg>
      <CollectSpend
        collect={collectOrdinary}
        spend={spendOrdinary}
      ></CollectSpend>
    </SContainer>
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
    <SContainer>
      <STicketImg src="gticket.svg" alt="Golden Tickets"></STicketImg>
      <CollectSpend collect={collectGolden} spend={spendGolden}></CollectSpend>
    </SContainer>
  );
};

export const Controls = () => {
  return (
    <SControls>
      <Ordinary></Ordinary>
      <Golden></Golden>
    </SControls>
  );
};
