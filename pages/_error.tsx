import React from "react";
import { NextPage } from "next";

import Link from "next/link";

const errorPage: NextPage = () => (
  <div>
    <h1>Oops, something went wrong.</h1>
    <p>
      Try{" "}
      <Link href="/">
        <a>going back</a>
      </Link>
      .
    </p>
  </div>
);

export default errorPage;
