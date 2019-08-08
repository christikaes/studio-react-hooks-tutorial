import React from 'react';
import './App.css';
import { TextPanel } from './components/TextPanel';
import { Canvas } from './components/Canvas';

function App() {
  const textFields = [
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

  function onEditTextField(id, newTextField) {
    console.log(
      `Edit TextField ID: ${id}, value: ${JSON.stringify(newTextField)}`
    );
  }

  function onDeleteTextField(id) {
    console.log(`Delete Textfield ID: ${id}`);
  }

  function onAddTextField() {
    const defaultTextField = {
      id: new Date().getUTCMilliseconds(),
      text: 'Enter your Text here',
      isBold: false,
      isItalic: false,
      isUnderlined: false
    };
    console.log(`Add TextField: ${JSON.stringify(defaultTextField)}`);
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
