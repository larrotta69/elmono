import PropTypes from "prop-types";

export interface HeaderProps {
  text: string;
  imgUrl: string;
  imgAlt?: string;
}

export const propTypes = {
  text: PropTypes.string,
  imgUrl: PropTypes.string.isRequired,
  imgAlt: PropTypes.string
};

export const defaultProps = {
  text: ""
};
