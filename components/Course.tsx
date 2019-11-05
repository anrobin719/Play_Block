import React from "react";

interface Props {
  title: string;
  sub: string;
}

const course: React.FunctionComponent<Props> = ({ title, sub }) => (
  <div>
    <h3>{title}</h3>
    <p>{sub}</p>
    <style jsx>{`
      div {
        border: 1px solid #eee;
        box-shadow: 0 2p 3px #ccc;
        padding: 20px;
        text-align: center;
      }
    `}</style>
  </div>
);

export default course;
