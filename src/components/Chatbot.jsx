import React, { useState, useRef, useEffect } from 'react';
import { askGemini } from '../utils/gemini';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'bot', text: 'Hi! I\'m Luxara\'s AI assistant. How can I help you today?' }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  const handleSend = async () => {
    const trimmed = input.trim().slice(0, 500);
    if (!trimmed || loading) return;

    setMessages(prev => [...prev, { role: 'user', text: trimmed }]);
    setInput('');
    setLoading(true);

    const reply = await askGemini(
      `You are a helpful assistant for Luxara, a luxury jewelry e-commerce store. Answer concisely. User question: ${trimmed}`
    );

    setMessages(prev => [...prev, { role: 'bot', text: reply }]);
    setLoading(false);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="fixed bottom-24 left-6 z-50 flex flex-col items-start gap-2">
      {isOpen && (
        <div className="w-80 bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-gray-200">
          <div className="flex items-center justify-between px-4 py-3" style={{ backgroundColor: '#1a1a2e' }}>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
                <svg viewBox="0 0 24 24" fill="#1a1a2e" width="18" height="18">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z"/>
                </svg>
              </div>
              <span className="text-white font-semibold text-sm">Luxara AI Assistant</span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white opacity-70 hover:opacity-100 transition-opacity"
              aria-label="Close chat"
            >
              ✕
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-3 space-y-2" style={{ maxHeight: '320px', minHeight: '200px' }}>
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div
                  className={`px-3 py-2 rounded-2xl text-sm max-w-[85%] leading-relaxed ${
                    msg.role === 'user'
                      ? 'text-white rounded-br-sm'
                      : 'bg-gray-100 text-gray-800 rounded-bl-sm'
                  }`}
                  style={msg.role === 'user' ? { backgroundColor: '#1a1a2e' } : {}}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div className="bg-gray-100 text-gray-500 px-3 py-2 rounded-2xl rounded-bl-sm text-sm">
                  Thinking...
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <div className="flex items-center gap-2 p-3 border-t border-gray-100">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Ask me anything..."
              className="flex-1 text-sm border border-gray-200 rounded-full px-3 py-2 outline-none focus:border-gray-400 transition-colors"
              disabled={loading}
            />
            <button
              onClick={handleSend}
              disabled={loading || !input.trim()}
              className="w-9 h-9 rounded-full flex items-center justify-center transition-opacity disabled:opacity-40"
              style={{ backgroundColor: '#1a1a2e' }}
              aria-label="Send message"
            >
              <svg viewBox="0 0 24 24" fill="white" width="16" height="16">
                <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
              </svg>
            </button>
          </div>
        </div>
      )}

      <button
        onClick={() => setIsOpen(prev => !prev)}
        className="w-14 h-14 rounded-full shadow-xl flex items-center justify-center hover:scale-110 transition-transform duration-300 active:scale-95"
        style={{ backgroundColor: '#1a1a2e' }}
        aria-label="Open AI chat"
      >
        {isOpen ? (
          <svg viewBox="0 0 24 24" fill="white" width="22" height="22">
            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
          </svg>
        ) : (
          <svg viewBox="0 0 24 24" fill="white" width="24" height="24">
            <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"/>
          </svg>
        )}
        <span className="absolute w-14 h-14 rounded-full animate-ping opacity-10" style={{ backgroundColor: '#1a1a2e' }} aria-hidden="true" />
      </button>
    </div>
  );
};

export default Chatbot;
