import React, { Component } from "react";
import { NextPage } from "next";
import styled from "styled-components";

import Layout from "../hoc/Layouts";
import Button from "../components/ui/Button";

interface Props {
  appName?: string;
}

const indexPage: NextPage<Props> = ({ appName }) => {
  return (
    <>
      <Layout>
        <h1>Play with Solidity!</h1>
        <h1>{appName}</h1>
        <p>Learn solidity and make awesome smart contract.</p>
        <Button to="/learn" theme="primary">
          Go to Learn Solidity
        </Button>
      </Layout>
    </>
  );
};

indexPage.getInitialProps = async () => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ appName: "Play Block" });
    }, 1000);
  });
  return promise;
};

export default indexPage;
