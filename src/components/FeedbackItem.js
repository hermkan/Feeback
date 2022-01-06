import React, { useState, useContext } from 'react';
import { FaTimes, FaEdit } from 'react-icons/fa';
import FeedbackContext from '../context/Context';
import Card from '../shared/Card';

const FeedbackItem = ({ item }) => {
  const { deleteFeedback, editFeedback } = useContext(FeedbackContext);
  return (
    <Card>
      <div className='num-display'>{item.rating}</div>
      <button className='close'>
        <FaTimes color='purple' onClick={() => deleteFeedback(item.id)} />
      </button>
      <button className='edit' onClick={() => editFeedback(item)}>
        <FaEdit color='purple' />
      </button>
      <div className='text-display'>{item.text}</div>
    </Card>
  );
};

export default FeedbackItem;
