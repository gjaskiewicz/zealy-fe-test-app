import React, { useState } from 'react';
import './comments.css'
import CommentItem from './commentItem';

const SUPPORTED_EMOJI = [
    '😄', '😍', '❤️'
 ];

const Comments = ({ id, isVisible, comments, onAddComment }) => {
    const [textValue, setTextValue] = useState('');

    const handleEmojiButtonClick = (ev, emo) => {
        onAddComment(id, emo);
        ev.stopPropagation();
    };

    const handleInputClick = (e) => {
        e.stopPropagation();
      };
    
    const handleInputChange = (e) => {
        setTextValue(e.target.value);
    };

    const handleAddComment = (e) => {
        onAddComment(id, textValue);
        setTextValue('');
        e.stopPropagation();
    };

    const handleInputKeyPress = (e) => {
        if (e.key === 'Enter') {
            onAddComment(id, textValue);
            setTextValue('');
            e.stopPropagation();
        }
      };

    return (
    <div 
        style={{ position: 'absolute', top: 0, left: '100%', background: 'white', padding: '10px', border: '1px solid black', width: '500px' }}
        className={`Comments ${isVisible ? 'visible' : ''}`}
    >
        <ul className='commentElements'>
            {comments.map(cm => (<CommentItem comment={cm}/>))}
            <li>
                <input
                    placeholder='Add your comment'
                    className='inputComment'
                    type="text" 
                    style={{ marginTop: '30px' }}
                    onClick={handleInputClick} 
                    onChange={handleInputChange} 
                    onKeyPress={handleInputKeyPress}
                    value={textValue}/>
            <button className='controlButton' onClick={handleAddComment}>+</button>
            </li>
            <li>
                {
                    SUPPORTED_EMOJI.map(e => (
                        <button className='controlButton' onClick={ev => handleEmojiButtonClick(ev, e)}>{e}</button>
                    ))
                }
            </li>
        </ul>
    </div>);
};

export default Comments;