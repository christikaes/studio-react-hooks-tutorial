import React from 'react';
import './Canvas.css';

export function Canvas({ textFields }) {
  return (
    <div className="canvas">
      {textFields.map(textField => (
        <div
          key={textField.id}
          style={{ order: textField.id }}
          className={`textfield 
              ${textField.isBold ? 'isBold' : ''}  
              ${textField.isUnderlined ? 'isUnderlined' : ''}
              ${textField.isItalic ? 'isItalic' : ''}`}
        >
          {textField.text}
        </div>
      ))}
    </div>
  );
}
