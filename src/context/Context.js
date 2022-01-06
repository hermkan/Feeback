import React, { useState, createContext } from 'react';
import { v4 as uuidv4 } from 'uuid';

import FeedbackData from '../data/feedbackdata';

const FeedbackContext = createContext();
export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedBack] = useState([
    {
      id: 1,
      text: 'this item is from the context',
      rating: 10,
    },
  ]);

  const [feedbackEdit, setfeedbackEdit] = useState({
    item: {},
    edit: true,
  });

  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    setFeedBack([newFeedback, ...feedback]);
  };
  const editFeedback = (item) => {
    setfeedbackEdit({
      item,
      edit: true,
    });
  };
  const deleteFeedback = (id) => {
    if (window.confirm('Are you sure you want to delete?')) {
      const newFeedback = feedback.filter((item) => item.id !== id);
      return setFeedBack(newFeedback);
    }
  };

  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        addFeedback,
        deleteFeedback,
        editFeedback,
        feedbackEdit,
      }}>
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
