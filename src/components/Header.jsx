import PropTypes from 'prop-types';
const Header = ({
  text = 'Feedback App',
  bgColor = 'rgba(0,0,0,0.4)',
  textColor = '#ff6a95',
}) => {
  const headerStyles = {
    backgroundColor: bgColor,
    color: textColor,
  };
  return (
    <>
      <header style={headerStyles}>
        <div className="container">
          <h2>{text}</h2>
        </div>
      </header>
    </>
  );
};

// Header.defaultProps = {
//   text: 'Feedback UI',
// };
Header.propTypes = {
  text: PropTypes.string,
  textColor: PropTypes.string,
  bgColor: PropTypes.string,
};

export default Header;
