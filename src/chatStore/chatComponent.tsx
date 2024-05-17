import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from './store';
import { addMessage } from './slices/chatSlice';


const ChatComponent: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const userId = useSelector((state: RootState) => state.chat.id);
  const conversation = useSelector((state: RootState) => state.chat.messages);

  const [input, setInput] = useState('');

  const handleSend = async () => {
    const question = input;
    const answer = "This is a chat response"
    dispatch(addMessage({ question, answer }));
    setInput('');
  };

  return (
    <div>
      <div>
        {conversation.map((msg, index) => (
          <div key={index}>
            <p><strong>Q:</strong> {msg.question}</p>
            <p><strong>A:</strong> {msg.answer}</p>
          </div>
        ))}
      </div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={handleSend}>Send</button>
    </div>
  );
};

export default ChatComponent;
