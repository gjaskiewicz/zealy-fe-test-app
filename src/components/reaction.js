import React, { useState, useEffect } from 'react';
import Comments from './comments';
import './reaction.css';



const Reaction = ({ id, x, y, comments, onAddComment }) => {
  // Your component logic goes here

  const componentStyle = {
    position: 'absolute',
    left: x + 'px',
    top: y + 'px'
  };

  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  
  return (
    <div className={`Reaction ${isVisible ? 'visible' : ''}`} style={componentStyle}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}>
      { comments.length }
      <Comments id={id} comments={comments} isVisible={isHovered} onAddComment={onAddComment}/>
    </div>
  );
};

export default Reaction;