import React from "react";
import styled from "styled-components";

import Layout from "../../hoc/Layouts";
import SideNavigation from "../../components/learn/SideNavigation";

const LearnWrapper: React.FunctionComponent = ({ children }) => {
  return (
    <Layout>
      <Wrapper>
        <SideNavigation />
        <Main>{children}</Main>
      </Wrapper>
    </Layout>
  );
};

const Wrapper = styled.div`
  display: flex;
`;
const Main = styled.main`
  flex: 1;
`;

export default LearnWrapper;
