import { Link } from 'react-router-dom';
import { FaQuestion } from 'react-icons/fa';
const AboutIcon = () => {
  return (
    <div className="about-link">
      <Link
        to={{
          pathname: '/about',
          search: '?sort',
          hash: '#test',
        }}
      >
        <FaQuestion size={30} />
      </Link>
    </div>
  );
};

export default AboutIcon;
