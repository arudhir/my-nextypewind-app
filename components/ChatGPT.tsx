import { useState } from 'react';

interface Props {
  onSubmit: (message: string) => void;
}

const ChatGPT: React.FC<Props> = ({ onSubmit }) => {
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(message);
    setMessage('');
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center justify-center mt-4">
      <input
        type="text"
        placeholder="Type your message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="border border-gray-300 rounded-l px-4 py-2 w-full"
      />
      <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded-r">
        Send
      </button>
    </form>
  );
};

export default ChatGPT;

