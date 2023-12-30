import React from 'react';
import './commentItem.css';

const formatDate = (date) => {
    return date.toLocaleString('en-US', {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        hour12: true,
      });
};

const CommentItem = ({ comment, timeAdded }) => {
    return <div className='CommentItem'>
        <span className='CommentText'>{comment.text}</span>
        <span className='CommentAddedOn'>-- {formatDate(comment.addedOn)}</span>
    </div>
};

export default CommentItem;

