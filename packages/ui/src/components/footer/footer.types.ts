import PropTypes from "prop-types";

export interface FooterProps {
  imgUrl: string;
  imgAlt?: string;
}

export const propTypes = {
  imgUrl: PropTypes.string.isRequired,
  imgAlt: PropTypes.string
};
