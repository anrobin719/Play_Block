import React from "react";
import Route from "next/router";

interface Props {
  to: string;
  theme?: string;
}

const button: React.FunctionComponent<Props> = ({ children, to, theme }) => {
  return (
    <button onClick={to && (() => Route.push(`${to}`))}>
      {children}
      <style jsx>{`
        button {
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 0.5rem 1.2rem;
          color: ${theme === "outline" ? "#1dd1a1" : "white"};
          font-size: 1rem;
          border: ${theme === "outline" ? "1px solid #1dd1a1" : "none"};
          border-radius: 0.2rem;
          box-sizing: border-box;
          outline: none;
          cursor: pointer;
          transition: all 0.1s ease-in-out;
          background: ${theme === "primary" ? "#1dd1a1" : "transparent"};
        }
      `}</style>
    </button>
  );
};

export default button;
