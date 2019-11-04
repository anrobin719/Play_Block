import React from "react";

const course = props => (
  <div>
    <h3>{props.title}</h3>
    <p>{props.sub}</p>
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
