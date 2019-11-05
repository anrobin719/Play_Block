import React from "react";
import Link from "next/link";
import styled from "styled-components";

import Navigation from "../components/common/Navigation/Navigation";

const header: React.FunctionComponent = () => {
  return (
    <Header>
      <nav>
        <Navigation nav />
      </nav>
      <Link href="/">
        <h1>Play Block</h1>
      </Link>
      <nav>
        <Navigation />
      </nav>
    </Header>
  );
};

const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.1);
  width: 100%;
  height: 4rem;
  background: #576574;
  display: flex;
  justify-content: space-between;
  h1 {
    font-size: 1.4rem;
    line-height: 4rem;
    cursor: pointer;
  }
`;

export default header;
