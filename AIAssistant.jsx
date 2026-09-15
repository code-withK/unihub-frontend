import React, { useState } from 'react';
import { Send, Sparkles } from 'lucide-react';

export default function AIAssistant({ aiResponses }) {
  const [messages, setMessages] = useState([
    { sender: 'ai', text: "Hi Alex! Ask me any questions regarding your campus schedule or deadlines." }
  ]);
  const [inputQuery, setInputQuery] = useState('');

  const sampleQueries = [
    "What deadlines do I have this week?",
    "What events are happening tomorrow?",
    "Show me scholarships.",
    "What should I focus on today?"
  ];

  const handleSend = (text) => {
    const query = text || inputQuery;
    if (!query.trim()) return;

    const newMsgs = [...messages, { sender: 'user', text: query }];
    setMessages(newMsgs);
    if (!text) setInputQuery('');

    setTimeout(() => {
      const response = aiResponses[query] || "I don't have exact info on that, but check the Announcements tab!";
      setMessages((prev) => [...prev, { sender: 'ai', text: response }]);
    }, 400);
  };

  return (
    <div className="page-container">
      <div className="page-header">
        <h1>AI Campus Assistant</h1>
        <p>Get instant answers regarding your schedule and tasks.</p>
      </div>

      <div className="card" style={{ height: '60vh', display: 'flex', flexDirection: 'column', padding: 0, overflow: 'hidden' }}>
        <div style={{ flex: 1, padding: '16px', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {messages.map((m, idx) => (
            <div key={idx} style={{
              alignSelf: m.sender === 'user' ? 'flex-end' : 'flex-start',
              backgroundColor: m.sender === 'user' ? 'var(--accent-primary)' : 'var(--accent-soft)',
              color: m.sender === 'user' ? 'white' : 'var(--text-primary)',
              padding: '10px 14px', borderRadius: '12px', maxWidth: '85%', fontSize: '0.85rem', lineHeight: 1.4,
              wordBreak: 'break-word'
            }}>
              {m.sender === 'ai' && <div style={{ fontWeight: 600, fontSize: '0.7rem', marginBottom: '3px', color: 'var(--accent-primary)', display: 'flex', gap: '3px' }}><Sparkles size={11} /> CampusAI</div>}
              {m.text}
            </div>
          ))}
        </div>

        <div style={{ display: 'flex', gap: '6px', padding: '8px 12px', backgroundColor: 'var(--bg-main)', borderTop: '1px solid var(--border-color)', overflowX: 'auto', scrollbarWidth: 'none' }}>
          {sampleQueries.map((q, i) => (
            <button key={i} onClick={() => handleSend(q)} style={{ background: 'white', border: '1px solid var(--border-color)', padding: '5px 10px', borderRadius: '16px', fontSize: '0.75rem', cursor: 'pointer', whiteSpace: 'nowrap', flexShrink: 0 }}>
              {q}
            </button>
          ))}
        </div>

        <div style={{ display: 'flex', gap: '8px', padding: '12px', borderTop: '1px solid var(--border-color)' }}>
          <input
            type="text"
            placeholder="Ask AI..."
            value={inputQuery}
            onChange={(e) => setInputQuery(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            style={{ flex: 1, padding: '8px 12px', border: '1px solid var(--border-color)', borderRadius: '8px', outline: 'none', fontSize: '0.85rem' }}
          />
          <button className="btn-primary" onClick={() => handleSend()}><Send size={15} /></button>
        </div>
      </div>
    </div>
  );
}