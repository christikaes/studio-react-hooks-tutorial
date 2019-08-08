import React, { useState } from 'react';
import './App.css';
import { TextPanel } from './components/TextPanel';
import { Canvas } from './components/Canvas';

function App() {
  const initialTextFields = [
    {
      id: '1',
      text: 'Hello World!',
      isBold: true,
      isItalic: true,
      isUnderlined: true
    },
    {
      id: '2',
      text: 'Welcome to react hooks!',
      isBold: true,
      isItalic: false,
      isUnderlined: false
    },
    {
      id: '3',
      text: 'Get ready to get HOOOOKED!',
      isBold: false,
      isItalic: false,
      isUnderlined: true
    }
  ];

  const [textFields, setTextFields] = useState(initialTextFields);

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
