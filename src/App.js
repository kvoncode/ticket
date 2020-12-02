import React from "react";
import { TicketsPage } from "./features/ticket/TicketsPage";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import styled from "styled-components";
import { Status } from "./features/ticket/Status";

const SPageTemplate = styled.div`
  background-color: ${(props) => props.theme.primary};
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
`;

const SNavbar = styled.nav`
  position: fixed;
  min-width: 19rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function App() {
  return (
    <Router>
      <SPageTemplate>
        <SNavbar>
          <ul>
            <li>
              <Link to="/tasks">Tasks</Link>
            </li>
            <li>
              <Link to="/stats">Stats</Link>
            </li>
            <li>
              <Link to="/manual">Manual</Link>
            </li>
          </ul>
        </SNavbar>

        <Switch>
          <Route path="/manual">
            <TicketsPage />
          </Route>
          <Route path="/tasks"></Route>
          <Route path="/stats"></Route>
          <Route path="/">
            <Redirect to="/manual"></Redirect>
          </Route>
        </Switch>
        <Status></Status>
      </SPageTemplate>
    </Router>
  );
}

export default App;
