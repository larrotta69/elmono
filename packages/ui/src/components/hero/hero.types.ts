import PropTypes from "prop-types";

export interface HeroProps {
  text: string;
  title: string;
}

export const propTypes = {
  text: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};
