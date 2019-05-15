import React from "react";
import { Root, Routes } from "react-static";
import { Router } from "@reach/router";
import { Spinner } from "evergreen-ui";

import Container from "./Container";
import TopMenu from "./TopMenu";
import Footer from "./Footer";
import ScrollUp from "./ScrollUp";

const LoadingState = () => (
  <Container>
    <Spinner />
  </Container>
);

const App = () => (
  <React.Suspense fallback={<LoadingState />}>
    <Root>
      <div className="App">
        <TopMenu />
        <Router>
          <ScrollUp path="/">
            <Routes default />
          </ScrollUp>
        </Router>
        <Footer />
      </div>
    </Root>
  </React.Suspense>
);

export default App;
