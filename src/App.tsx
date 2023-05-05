import React from "react";
import styled from "styled-components/macro";

import Header from "./components/Header";
import ShoeIndex from "./components/ShoeIndex";
import ThemeProvider from "./components/ThemeProvider";

const App = () => {
  const [sortId, setSortId] = React.useState("newest");

  return (
    <ThemeProvider>
      <Header />
      <Main>
        <ShoeIndex sortId={sortId} setSortId={setSortId} />
      </Main>
    </ThemeProvider>
  );
};

const Main = styled.main`
  padding: 64px 32px;

  ${(p) => p.theme.queries.tabletAndDown} {
    padding: 48px 32px;
  }

  ${(p) => p.theme.queries.phoneAndDown} {
    padding: 48px 16px;
  }
`;

export default App;
