import React from 'react';
import { TextFieldEditor } from './TextFieldEditor';
import './TextPanel.css';

export function TextPanel({
  textFields,
  onEditTextField,
  onDeleteTextField,
  onAddTextField
}) {
  return (
    <div className="textPanel">
      <button onClick={onAddTextField} className="add-textfield-btn">
        Add Text
      </button>

      {textFields.map(textField => (
        <TextFieldEditor
          key={textField.id}
          id={textField.id}
          text={textField.text}
          isBold={textField.isBold}
          isItalic={textField.isItalic}
          isUnderlined={textField.isUnderlined}
          onEdit={onEditTextField}
          onDelete={onDeleteTextField}
        />
      ))}
    </div>
  );
}
