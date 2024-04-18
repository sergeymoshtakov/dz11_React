import React, { useState } from 'react';

function TextRedactor() {
  const [text, setText] = useState('');
  const [isBold, setIsBold] = useState(false);
  const [isItalic, setIsItalic] = useState(false);
  const [isUnderline, setIsUnderline] = useState(false);
  const [isUpperCase, setIsUpperCase] = useState(false);

  const toggleBold = () => setIsBold(!isBold);
  const toggleItalic = () => setIsItalic(!isItalic);
  const toggleUnderline = () => setIsUnderline(!isUnderline);
  const toggleUpperCase = () => setIsUpperCase(!isUpperCase);

  return (
    <div className='container'>
      <h1>Welcome to my TextRedactor!</h1>
      <div>
        <button onClick={toggleBold}>B</button>
        <button onClick={toggleItalic}>I</button>
        <button onClick={toggleUnderline}>U</button>
        <button onClick={toggleUpperCase}>Tt</button>
      </div>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        style={{
          fontWeight: isBold ? 'bold' : 'normal',
          fontStyle: isItalic ? 'italic' : 'normal',
          textDecoration: isUnderline ? 'underline' : 'none',
          textTransform: isUpperCase ? 'uppercase' : 'none'
        }}
      />
    </div>
  );
}

export default TextRedactor;