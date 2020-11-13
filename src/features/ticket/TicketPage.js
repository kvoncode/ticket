import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  ordinaryAdded,
  ordinarySubtracted,
  goldenAdded,
  goldenSubtracted,
  selectOrdinary,
  selectGolden,
} from "./ticketSlice";

export const TicketPage = () => {
  const ordinary = useSelector(selectOrdinary);
  const golden = useSelector(selectGolden);
  const dispatch = useDispatch();

  return (
    <div>
      Ordinary Tickets: {ordinary}
      Golden Tickets: {golden}
    </div>
  );
};
