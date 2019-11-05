import React from "react";

import NavigationItem from "./NavigationItem";

interface Props {
  nav?: boolean;
}

const navigation: React.FunctionComponent<Props> = ({ nav }) => {
  let navItems = (
    <ul>
      <NavigationItem link="/login">Log in</NavigationItem>
      <NavigationItem link="/signup">Sign up</NavigationItem>
    </ul>
  );
  if (nav) {
    navItems = (
      <ul>
        <NavigationItem link="/learn">Learn Code</NavigationItem>
        <NavigationItem link="/course">Course</NavigationItem>
        <NavigationItem link="/job">Job</NavigationItem>
      </ul>
    );
  }

  return <>{navItems}</>;
};

export default navigation;
