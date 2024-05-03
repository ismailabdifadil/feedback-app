import PropTypes from 'prop-types';
const Card = ({ children, reverse = false }) => {
  return <div className={`card ${reverse && 'reverse'}`}>{children}</div>;
};

Card.propTypes = {
  children: PropTypes.node.isRequired,
  reverse: PropTypes.string,
};

export default Card;
