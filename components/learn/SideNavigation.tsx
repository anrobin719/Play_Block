import React from "react";
import styled from "styled-components";

const sideNavigation: React.FunctionComponent = () => {
  return (
    <>
      <SideNav>
        <p>side bar</p>
      </SideNav>
    </>
  );
};

const SideNav = styled.aside`
  background: #465463;
  height: 100vw;
  width: 20rem;
  position: fixed;
  top: 0;
  left: 0;
  flex: 0 0 auto;
`;

export default sideNavigation;
