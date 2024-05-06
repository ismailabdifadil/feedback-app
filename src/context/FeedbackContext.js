import { createContext, useEffect, useState } from 'react';

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [feedback, setFeedback] = useState([]);
  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  });

  useEffect(() => {
    fetchFeedback();
  }, []);

  // Fetch feedback

  // const endPoint = 'http://localhost:5000/feedback';
  // const fetchFeedback = async () => {
  //   const response = await fetch(endPoint);
  //   const data = await response.json();
  //   setFeedback(data);
  //   setIsLoading(false);
  // };

  const endPoint = 'https://feedback-api-1.onrender.com/feedback';
  const fetchFeedback = async () => {
    const response = await fetch(endPoint);
    const data = await response.json();
    setFeedback(data);
    setIsLoading(false);
  };

  // const addFeedback = async (newFeedback) => {
  //   const response = await fetch(endPoint, {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify(newFeedback),
  //   });
  //   const data = await response.json();
  //   setFeedback([data, ...feedback]);
  // };

  const addFeedback = async (newFeedback) => {
    const response = await fetch(endPoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newFeedback),
    });
    const data = await response.json();
    setFeedback([data, ...feedback]);
  };

  // Adding the data withous json server
  // const addFeedback = (newFeedback) => {
  //   newFeedback.id = uuidv4();
  //   setFeedback([newFeedback, ...feedback]);
  // };

  const deleteFeedback = async (id) => {
    if (window.confirm('Are you sure you want to delete this feedback? ')) {
      await fetch(`${endPoint}/${id}`, { method: 'DELETE' });
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };

  const editFeedback = (item) => {
    setFeedbackEdit({
      item,
      edit: true,
    });
  };

  const updateFeedback = async (id, updatedItem) => {
    const response = await fetch(`${endPoint}/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedItem),
    });
    const data = await response.json();
    setFeedback(
      feedback.map((item) => (item.id === id ? { ...item, ...data } : item))
    );
  };

  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        feedbackEdit,
        isLoading,
        deleteFeedback,
        addFeedback,
        editFeedback,
        updateFeedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
