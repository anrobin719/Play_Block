import React from "react";
import Link from "next/link";
import styled from "styled-components";

interface Props {
  link?: string;
}

const navigationItem: React.FunctionComponent<Props> = ({ link, children }) => {
  return (
    <List>
      <Link href={link}>
        <a>{children}</a>
      </Link>
    </List>
  );
};

const List = styled.li`
  list-style: none;
  float: left;
  margin: 0 1rem;
  height: 4rem;
  a {
    color: white;
    text-decoration: none;
    display: inline-block;
    height: 100%;
    line-height: 4rem;
  }
`;
export default navigationItem;
