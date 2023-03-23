import { useState } from 'react';
import React from 'react';

function TypeMe() {
  const [isFocused, setIsFocused] = useState(false);

  const handleClick = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);

  return (
    <div>
      <input type="text" onClick={handleClick} onBlur={handleBlur} />
      {!isFocused && <p style={{color: 'red'}}>Please type in here!</p>}
    </div>
  );
}

export default TypeMe;