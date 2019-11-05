import React from "react";

import Header from "../components/Header";

const layouts: React.FunctionComponent = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <style jsx global>
        {`
          html,
          body {
            margin: 0;
            padding: 0;
          }
          body {
            background: #222f3e;
            color: white;
            font-family: san-serif;
            font-weight: 300;
            padding-top: 4rem;
          }
          * {
            padding: 0;
            margin: 0;
            box-sizing: border-box;
          }
          h1,
          h2,
          h3,
          h4,
          h5,
          h6 {
            font-size: 1rem;
            font-weight: 300;
          }
        `}
      </style>
    </>
  );
};

export default layouts;
