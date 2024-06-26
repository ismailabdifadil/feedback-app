import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import FeedbackList from './components/FeedbackList';
import FeedbackStats from './components/FeedbackStats';
import FeedbackForm from './components/FeedbackForm';
import AboutPage from './pages/AboutPage';
import AboutIcon from './components/AboutIcon';
import { FeedbackProvider } from './context/FeedbackContext';
import Spinner from './components/shared/Spinner';

const App = () => {
  return (
    <FeedbackProvider>
      <Router>
        <Header />
        {/* <Spinner/> */}
        <div className="container">
          <Routes>
            <Route
              // exact
              path="/"
              element={
                <>
                  <FeedbackForm />
                  <FeedbackStats />
                  <FeedbackList />
                  <AboutIcon />
                </>
              }
            ></Route>
            <Route path="/about" element={<AboutPage />} />
          </Routes>
        </div>
      </Router>
    </FeedbackProvider>
  );
};

export default App;
