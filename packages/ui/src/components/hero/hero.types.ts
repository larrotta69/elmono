import PropTypes from "prop-types";

export interface HeroProps {
  text: string;
}

export const propTypes = {
  text: PropTypes.string.isRequired
};
