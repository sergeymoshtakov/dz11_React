import React, { useState } from 'react';

function TextRedactor() {
  const [isBold, setIsBold] = useState(false);
  const [isItalic, setIsItalic] = useState(false);
  const [isUnderline, setIsUnderline] = useState(false);
  const [isUpperCase, setIsUpperCase] = useState(false);
  const [fontFamily, setFontFamily] = useState('Arial');
  const [fontSize, setFontSize] = useState(16);
  const [fontColor, setFontColor] = useState('#000000');

  const toggleBold = () => setIsBold(!isBold);
  const toggleItalic = () => setIsItalic(!isItalic);
  const toggleUnderline = () => setIsUnderline(!isUnderline);
  const toggleUpperCase = () => setIsUpperCase(!isUpperCase);

  const handleFontChange = (e) => setFontFamily(e.target.value);
  const handleFontSizeChange = (e) => setFontSize(parseInt(e.target.value));
  const handleFontColorChange = (e) => setFontColor(e.target.value);

  return (
    <div className='container'>
      <h1>Welcome to my TextRedactor!</h1>
      <div>
        <button onClick={toggleBold}>B</button>
        <button onClick={toggleItalic}>I</button>
        <button onClick={toggleUnderline}>U</button>
        <button onClick={toggleUpperCase}>Tt</button>
        <select value={fontFamily} onChange={handleFontChange}>
          <option value="Arial">Arial</option>
          <option value="Verdana">Verdana</option>
          <option value="Helvetica">Helvetica</option>
          <option value="Georgia">Georgia</option>
          <option value="Times New Roman">Times New Roman</option>
        </select>
        <input type="number" value={fontSize} onChange={handleFontSizeChange} />
        <input type="color" value={fontColor} onChange={handleFontColorChange} />
      </div>
      <textarea
        style={{
          fontWeight: isBold ? 'bold' : 'normal',
          fontStyle: isItalic ? 'italic' : 'normal',
          textDecoration: isUnderline ? 'underline' : 'none',
          textTransform: isUpperCase ? 'uppercase' : 'none',
          fontFamily: fontFamily,
          fontSize: fontSize + 'px',
          color: fontColor
        }}
      />
    </div>
  );
}

export default TextRedactor;
