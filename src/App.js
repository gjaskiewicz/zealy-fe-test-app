import React, { useState } from 'react';
import Reaction from './components/reaction';
import './App.css';

var nextId = 1;

function App() {
  const [markers, setMarkers] = useState([]);

  const addCommentToMarker =  (id, text) => {
    let newMarkers = markers.map(m => m.id !== id ? m : {...m, comments: [...m.comments, { 
      text,
      addedOn: new Date() 
    }]});
    setMarkers(newMarkers);
  };

  const handleMouseClick = (event) => {
    let newMarkers = [...markers, {
      id: (nextId++),
      x: event.clientX - 15, 
      y: event.clientY - 15,
      comments: [ ]
    }];
    setMarkers(newMarkers);
  };

  return (
    <div className="App" onClick={handleMouseClick}>
      {
        markers.map(m => <Reaction 
          key={m.id}
          id={m.id}
          x={m.x} 
          y={m.y} 
          comments={m.comments} 
          onAddComment={addCommentToMarker}/>)
      }
    </div>
  );
}

export default App;
