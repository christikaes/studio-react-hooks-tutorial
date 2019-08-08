import React from 'react';
import './TextFieldEditor.css';

export function TextFieldEditor({
  id,
  text,
  isBold,
  isUnderlined,
  isItalic,
  onEdit,
  onDelete
}) {
  return (
    <div className="textfield-editor" style={{ order: id }}>
      <input
        className="text-input"
        value={text}
        onChange={event => {
          const newValue = event.target.value;
          onEdit(id, {
            id,
            text: newValue,
            isBold,
            isUnderlined,
            isItalic
          });
        }}
      />
      <div className="tools">
        <label>
          <input
            type="checkbox"
            hidden
            checked={isBold}
            onChange={() => {
              onEdit(id, {
                id,
                text,
                isBold: !isBold,
                isUnderlined,
                isItalic
              });
            }}
          />
          <div className="toggle-button bold">B</div>
        </label>
        <label>
          <input
            type="checkbox"
            hidden
            checked={isItalic}
            onChange={() => {
              onEdit(id, {
                id,
                text,
                isBold,
                isItalic: !isItalic,
                isUnderlined
              });
            }}
          />
          <div className="toggle-button italicize">I</div>
        </label>
        <label>
          <input
            type="checkbox"
            hidden
            checked={isUnderlined}
            onChange={() => {
              onEdit(id, {
                id,
                text,
                isBold,
                isItalic,
                isUnderlined: !isUnderlined
              });
            }}
          />
          <div className="toggle-button underline">U</div>
        </label>
        <label>
          <input
            type="button"
            hidden
            onClick={() => {
              onDelete(id);
            }}
          />
          <div className="toggle-button delete">delete</div>
        </label>
      </div>
    </div>
  );
}
