import React from "react";
import { NextPage } from "next";

import Layout from "../hoc/Layouts";
import Button from "../components/ui/Button";

interface Props {
  appName: string;
}

const login: NextPage<Props> = props => {
  return (
    <Layout>
      <h1>The Auth Index Page - {props.appName}</h1>
      <Button to="/">Log in</Button>
      <Button to="/signup">Sign up</Button>
    </Layout>
  );
};

// authIndexPage.getInitialProps = context => {
//   const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve({ appName: "Play Block (Auth)" });
//     }, 1000);
//   });
//   return promise;
// };

export default login;
