import React, { useState } from 'react';

const TextToSpeech = () => {
  const [text, setText] = useState('');
  const synth = window.speechSynthesis;

  const handleInputChange = (e) => {
    setText(e.target.value);
  };

  const handleSpeak = () => {
    const utterance = new SpeechSynthesisUtterance(text);
    synth.speak(utterance);
  };

  return (
    <div>
      <textarea
        placeholder="Enter text to speak..."
        value={text}
        onChange={handleInputChange}
      /><br/>
      <button onClick={handleSpeak}>Speak</button>
    </div>
  );
};

export default TextToSpeech;
