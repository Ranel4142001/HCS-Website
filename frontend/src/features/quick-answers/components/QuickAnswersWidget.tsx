'use client';

import React, { useState, useRef, useEffect } from 'react';
import Icon from '@/shared/components/ui/Icon';
import type { ChatMessage } from '../types';
import { INITIAL_MESSAGES, PRESET_QUERIES, findAnswer } from '../content/answers';
import './QuickAnswersWidget.css';

let messageCount = 0;

/** A chat message stamped with the current time. */
function createMessage(sender: ChatMessage['sender'], text: string, actionLink?: ChatMessage['actionLink']): ChatMessage {
  messageCount += 1;
  return {
    id: `${sender}-${messageCount}`,
    sender,
    text,
    time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    actionLink,
  };
}

export const QuickAnswersWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>(INITIAL_MESSAGES);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen, messages, isTyping]);

  const handleSend = (textToSend?: string) => {
    const text = (textToSend || input).trim();
    if (!text) return;

    setMessages((prev) => [...prev, createMessage('user', text)]);
    if (!textToSend) setInput('');
    setIsTyping(true);

    setTimeout(() => {
      const { reply, actionLink } = findAnswer(text);
      setIsTyping(false);
      setMessages((prev) => [...prev, createMessage('ai', reply, actionLink)]);
    }, 600);
  };

  return (
    <div className="ai-advisor-container">
      {/* Floating Toggle Button */}
      <button
        type="button"
        className={`ai-advisor-launcher ${isOpen ? 'is-open' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Open credentialing quick answers"
        title="Credentialing quick answers"
      >
        <span className="ai-launcher-pulse" />
        <Icon name={isOpen ? 'x' : 'sparkle'} />
        <span className="ai-launcher-text">Quick answers</span>
      </button>

      {/* Expandable Chat Dialog */}
      {isOpen && (
        <div className="ai-advisor-dialog" role="dialog" aria-label="Credentialing quick answers">
          {/* Header */}
          <div className="ai-dialog-header">
            <div className="ai-header-brand">
              <span className="ai-badge-dot" />
              <div>
                <strong>Credentialing Quick Answers</strong>
                <span>Quick answers to common questions</span>
              </div>
            </div>
            <button
              type="button"
              className="ai-dialog-close"
              onClick={() => setIsOpen(false)}
              aria-label="Close assistant"
            >
              <Icon name="x" />
            </button>
          </div>

          {/* Quick Preset Buttons */}
          <div className="ai-presets-scroll">
            {PRESET_QUERIES.map((preset, idx) => (
              <button
                key={idx}
                type="button"
                className="ai-preset-chip"
                onClick={() => handleSend(preset.query)}
              >
                {preset.label}
              </button>
            ))}
          </div>

          {/* Message Stream */}
          <div className="ai-messages-body">
            {messages.map((msg) => (
              <div key={msg.id} className={`ai-msg-row ${msg.sender}`}>
                <div className="ai-msg-bubble">
                  <p>{msg.text}</p>
                  {msg.actionLink && (
                    <a
                      href={msg.actionLink.href}
                      className="ai-action-link"
                      onClick={() => setIsOpen(false)}
                    >
                      {msg.actionLink.text}
                    </a>
                  )}
                  <span className="ai-msg-time">{msg.time}</span>
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="ai-msg-row ai">
                <div className="ai-msg-bubble ai-typing">
                  <span className="typing-dot" />
                  <span className="typing-dot" />
                  <span className="typing-dot" />
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Bar */}
          <form
            className="ai-dialog-input-bar"
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
          >
            <input
              ref={inputRef}
              type="text"
              className="ai-input-field"
              placeholder="Ask anything about credentialing..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button
              type="submit"
              className="ai-send-btn"
              aria-label="Send query"
              disabled={!input.trim()}
            >
              <Icon name="arrow" />
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default QuickAnswersWidget;
