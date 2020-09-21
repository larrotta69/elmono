import React from "react";
import PropTypes from "prop-types";

import { Header, Footer, Hero } from "@elmono/ui";

import "@elmono/ui/dist/index.css";
import "./global.css";

const Layout = ({ children }) => {
  return (
    <>
      <Header imgUrl="https://larrotta69.github.io/app/img/tigre_50.png" />
      <main>
        <Hero text="Hola" title="I’m Daniel, a software engineer" />
        {children}
      </main>
      <Footer imgUrl="https://larrotta69.github.io/app/img/pantera-small.png" />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
