import React from "react";
import PropTypes from "prop-types";

import { Header, Hero } from "@elmono/ui";

import "@elmono/ui/dist/index.css";
import "./global.css";

const Layout = ({ children }) => {
  return (
    <>
      <Header
        text="Daniel Larrotta"
        imgUrl="https://larrotta69.github.io/app/img/tigre_50.png"
      />
      <Hero text="Heroo" />
      <main>{children}</main>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
