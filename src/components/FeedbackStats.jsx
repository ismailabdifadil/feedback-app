import { useContext } from 'react';
import FeedbackContext from '../context/FeedbackContext';

const FeedbackStats = () => {
  const { feedback } = useContext(FeedbackContext);

  let avg = (
    feedback.reduce((acc, currItem) => {
      return acc + currItem.rating;
    }, 0) / feedback.length
  )
    .toFixed(1)
    .replace(/[.,]0$/, '');

  //  setRating(avg)

  return (
    <div className="feedback-stats">
      <div>{feedback.length} Reviews</div>
      <div>Rating {isNaN(avg) ? (avg = 0) : avg}</div>
    </div>
  );
};

export default FeedbackStats;
