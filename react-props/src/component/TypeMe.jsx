import { useState } from 'react';
import React from 'react';


function TypeMe() {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);

  return (
    <div className="type">
      <input type="text" onFocus={handleFocus} onBlur={handleBlur} />
      {!isFocused && <p style={{color: 'red'}}>Please type in here!</p>}
    </div>
  );
}

export default TypeMe;