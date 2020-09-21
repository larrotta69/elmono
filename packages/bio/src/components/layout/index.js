import React from "react";
import PropTypes from "prop-types";

import Footer from "../footer";
import "../global.css";

const Layout = ({ children }) => {
  return (
    <>
      <main></main>
      <Footer />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
