import React, { useState } from 'react';
import axios from 'axios';

const Chatbot = () => {
  const [message, setMessage] = useState('');
  const [response, setResponse] = useState('');

  const sendMessage = async () => {
    try {
      const res = await axios.post('http://localhost:8000/api/v1/users/generate', { domain: message });
      setResponse(res.data);
    } catch (error) {
      console.error('Error communicating with AI service:', error.message);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button onClick={sendMessage}>Send</button>
      <div>
        <p>Response: {response}</p>
      </div>
    </div>
  );
};

export default Chatbot;
