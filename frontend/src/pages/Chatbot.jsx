import React, { useState } from 'react';
import axios from 'axios';
import './Chatbot.css'; 

const Chatbot = () => {
  const [message, setMessage] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    setLoading(true); // Set loading state to true when sending message
    try {
      const res = await axios.post('http://localhost:8000/api/v1/users/generate', { domain: message });
      setResponse(res.data.generatedContent.parts[0].text); 
    } catch (error) {
      console.error('Error communicating with AI service:', error.message);
      setResponse('Failed to get response. Please try again.'); 
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="chatbot-container">
      <div className="chatbot-header">
        <h2>Chatbot</h2>
      </div>
      <div className="chatbot-content">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type your message..."
        />
        <br></br>
        <button onClick={sendMessage} disabled={loading}>
          {loading ? 'Sending...' : 'Send'}
        </button>
      </div>
      <div className="chatbot-response">
        {loading && <div className="loading-animation">Loading...</div>}
        {!loading && response && (
          <div className="response-content">
            <h3>Response:</h3>
            <ul>
              <li>{response}</li>
            </ul>
          </div>
        )}
        {!loading && !response && <p>No response yet.</p>}
      </div>
    </div>
  );
};

export default Chatbot;
