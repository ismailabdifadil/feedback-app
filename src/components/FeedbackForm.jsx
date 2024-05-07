import { useContext, useEffect, useState } from 'react';
import Card from './shared/Card';
import Button from './shared/Button';
import RatingSelect from './RatingSelect';
import FeedbackContext from '../context/FeedbackContext';

const FeedbackForm = () => {
  const { addFeedback, feedbackEdit, updateFeedback } =
    useContext(FeedbackContext);
  const [rating, setRating] = useState();
  const [text, setText] = useState('');
  const [btnIsDisabled, setBtnIsDisabled] = useState(true);
  const [message, setMessage] = useState('');

  const handleTextChanged = (e) => {
    if (text === '') {
      setMessage(null);
      setBtnIsDisabled(true);
    } else if (text.trim().length <= 10 && text !== '') {
      setMessage('characters must be 10');
      setBtnIsDisabled(true);
    } else {
      setMessage(null);
      setBtnIsDisabled(false);
    }

    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim().length > 10) {
      const newFeedback = {
        text,
        rating,
      };
      if (feedbackEdit.edit) {
        updateFeedback(feedbackEdit.item.id, newFeedback);
      } else {
        addFeedback(newFeedback);
      }
      setText('');
    }
  };

  useEffect(() => {
    if (feedbackEdit.edit) {
      setBtnIsDisabled(false);
      setText(feedbackEdit.item.text);
      setRating(feedbackEdit.item.rating);
    }
  }, [feedbackEdit]);

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>How would you rate my first React App?</h2>
        <RatingSelect select={(rating) => setRating(rating)} />
        <div className="input-group">
          <input
            type="text"
            placeholder="Write a review"
            onChange={handleTextChanged}
            value={text}
          />
          <Button type="submit" version="primary" isDisabled={btnIsDisabled}>
            Send
          </Button>
        </div>
        <div className="message">{message}</div>
      </form>
    </Card>
  );
};

export default FeedbackForm;
