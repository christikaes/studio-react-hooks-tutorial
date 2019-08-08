import React, { useState, useEffect } from 'react';
import './App.css';
import { TextPanel } from './components/TextPanel';
import { Canvas } from './components/Canvas';

function App() {
  const initialTextFields = () => {
    return JSON.parse(window.localStorage.getItem('studio-text')) || [];
  };
  const [textFields, setTextFields] = useState(initialTextFields);

  useEffect(() => {
    window.localStorage.setItem('studio-text', JSON.stringify(textFields));
  }, [textFields]);

  function onEditTextField(id, newTextField) {
    const newTextFields = [
      ...textFields.filter(textField => textField.id !== id),
      newTextField
    ];
    setTextFields(newTextFields);
  }

  function onDeleteTextField(id) {
    const newTextFields = textFields.filter(textField => textField.id !== id);
    setTextFields(newTextFields);
  }

  function onAddTextField() {
    const defaultTextField = {
      id: new Date().getUTCMilliseconds(),
      text: 'Enter your Text here',
      isBold: false,
      isItalic: false,
      isUnderlined: false
    };
    const newTextFields = [...textFields, defaultTextField];
    setTextFields(newTextFields);
  }

  return (
    <div className="App">
      <header className="App-header">React Hooks Studio</header>
      <main>
        <TextPanel
          textFields={textFields}
          onEditTextField={onEditTextField}
          onDeleteTextField={onDeleteTextField}
          onAddTextField={onAddTextField}
        />
        <Canvas textFields={textFields} />
      </main>
    </div>
  );
}

export default App;
