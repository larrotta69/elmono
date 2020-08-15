import React from "react";
import PropTypes from "prop-types";

import "../styles/globals.css";
import "@elmono/ui/dist/index.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
    </>
  );
}

MyApp.propTypes = {
  Component: PropTypes.func,
  pageProps: PropTypes.shape({})
};

export default MyApp;
