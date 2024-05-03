import Card from '../components/shared/Card';
import { Link } from 'react-router-dom';
const AboutPage = () => {
  return (
    <Card>
      <div className="about">
        <h1>About this Project</h1>
        <p>This is React App to leave a feedback for a product or services</p>
        <p>Version: 1.0.0</p>
        <p>
          <Link to="/">Back To Home</Link>
        </p>
      </div>
      <p>Developed By Ismail Abdifadil Isack</p>
    </Card>
  );
};

export default AboutPage;
