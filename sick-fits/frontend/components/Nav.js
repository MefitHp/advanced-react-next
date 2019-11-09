import React from "react";
import Link from "next/link";
import NavStyles from "./styles/NavStyles";
const Nav = () => {
  return (
    <NavStyles>
      <Link href="/sell">Sell</Link>
      <Link href="/">Home</Link>
    </NavStyles>
  );
};

export default Nav;
