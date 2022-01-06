import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useContext } from 'react';
import FeedbackItem from './FeedbackItem';
import FeedbackContext from '../context/Context';

const FeedbackList = ({ handleDelete }) => {
  // const [feedback, setFeedBack] = useState(FeedbackData);

  const { feedback } = useContext(FeedbackContext);
  // console.log(feedbackP);

  // if (!feedback || feedback.length === 0) {
  //   return 'no feeback';
  // }

  return (
    <div className='feedback-list'>
      <AnimatePresence>
        {feedback.map((f) => {
          return (
            <motion.div
              key={f.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}>
              <FeedbackItem key={f.id} item={f} />
            </motion.div>
          );
        })}
      </AnimatePresence>
    </div>
  );
};

export default FeedbackList;
