import { motion } from 'framer-motion';
import FeedbackItem from './FeedbackItem';
import { useContext } from 'react';
import FeedbackContext from '../context/FeedbackContext';
import Spinner from './shared/Spinner';
const FeedbackList = () => {
  const { feedback, isLoading } = useContext(FeedbackContext);

  if (!isLoading && (!feedback || feedback.length === 0)) {
    return <p>No Feedback Yet</p>;
  }
  return isLoading ? (
    <Spinner/>
  ) : (
    <div>
      {feedback.map((item) => (
        <motion.div
          key={item.id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <FeedbackItem key={item.id} item={item} />
        </motion.div>
      ))}
    </div>
  );
};

export default FeedbackList;
