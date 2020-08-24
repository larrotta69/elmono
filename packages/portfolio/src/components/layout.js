import React from "react";
import PropTypes from "prop-types";

import "./global.css";

const Layout = ({ children }) => {
  return (
    <>
      <header>title</header>
      <main>{children}</main>
      <footer>footer</footer>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
