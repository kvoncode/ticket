import React from "react";
import logo from "./logo.svg";
import { TicketPage } from "./features/ticket/TicketPage";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TicketPage />
      </header>
    </div>
  );
}

export default App;
