import { motion } from 'framer-motion';
import FeedbackItem from './FeedbackItem';
import { useContext } from 'react';
import FeedbackContext from '../context/FeedbackContext';
const FeedbackList = () => {

  const {feedback} = useContext(FeedbackContext);

  if (!feedback || feedback.length == 0) {
    return <p>No Feedback Yet</p>;
  }

  return (
    // <AnimatePresence>
    <div>
      {feedback.map((item) => (
        <motion.div
          key={item.id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <FeedbackItem key={item.id} item={item}/>
        </motion.div>
      ))}
    </div>
    // </AnimatePresence>
  );
};

export default FeedbackList;
