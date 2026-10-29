'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Icon from '@/shared/components/ui/Icon';
import type { ChatMessage } from '../types';
import { INITIAL_MESSAGES, PRESET_QUERIES, findAnswer } from '../content/answers';
import './QuickAnswersWidget.css';

const REPLY_DELAY_MS = 600;
const MAX_QUESTION_LENGTH = 300;

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
  const messagesRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const launcherRef = useRef<HTMLButtonElement>(null);
  const replyTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Keep the newest message in view
  useEffect(() => {
    const list = messagesRef.current;
    if (isOpen && list) list.scrollTop = list.scrollHeight;
  }, [isOpen, messages, isTyping]);

  // Focus the input once when the panel opens; Escape closes it
  useEffect(() => {
    if (!isOpen) return;
    inputRef.current?.focus();
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
    };
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [isOpen]);

  useEffect(() => () => {
    if (replyTimer.current) clearTimeout(replyTimer.current);
  }, []);

  function close() {
    setIsOpen(false);
    launcherRef.current?.focus();
  }

  const handleSend = (textToSend?: string) => {
    const text = (textToSend ?? input).trim().slice(0, MAX_QUESTION_LENGTH);
    if (!text || isTyping) return;

    setMessages((prev) => [...prev, createMessage('user', text)]);
    setInput('');
    setIsTyping(true);

    replyTimer.current = setTimeout(() => {
      const { reply, actionLink } = findAnswer(text);
      setIsTyping(false);
      setMessages((prev) => [...prev, createMessage('ai', reply, actionLink)]);
    }, REPLY_DELAY_MS);
  };

  return (
    <div className="ai-advisor-container">
      <button
        ref={launcherRef}
        type="button"
        className={`ai-advisor-launcher ${isOpen ? 'is-open' : ''}`}
        onClick={() => (isOpen ? close() : setIsOpen(true))}
        aria-expanded={isOpen}
        aria-controls="quick-answers-dialog"
        aria-label={isOpen ? 'Close credentialing quick answers' : 'Open credentialing quick answers'}
      >
        <span className="ai-launcher-pulse" aria-hidden="true" />
        <Icon name={isOpen ? 'x' : 'sparkle'} />
        <span className="ai-launcher-text">Quick answers</span>
      </button>

      {isOpen && (
        <div id="quick-answers-dialog" className="ai-advisor-dialog" role="dialog" aria-labelledby="quick-answers-title">
          <div className="ai-dialog-header">
            <div className="ai-header-brand">
              <span className="ai-header-icon" aria-hidden="true"><Icon name="sparkle" /></span>
              <div className="ai-header-text">
                <strong id="quick-answers-title">Credentialing quick answers</strong>
                <span>Instant answers to common questions</span>
              </div>
            </div>
            <button type="button" className="ai-dialog-close" onClick={close} aria-label="Close quick answers">
              <Icon name="x" />
            </button>
          </div>

          <div className="ai-messages-body" ref={messagesRef} aria-live="polite">
            {messages.map((msg) => (
              <div key={msg.id} className={`ai-msg-row ${msg.sender}`}>
                <div className="ai-msg-bubble">
                  <p>{msg.text}</p>
                  {msg.actionLink && (
                    <Link href={msg.actionLink.href} className="ai-action-link" onClick={() => setIsOpen(false)}>
                      {msg.actionLink.text}
                    </Link>
                  )}
                  <span className="ai-msg-time">{msg.time}</span>
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="ai-msg-row ai">
                <div className="ai-msg-bubble ai-typing" aria-label="Writing an answer">
                  <span className="typing-dot" />
                  <span className="typing-dot" />
                  <span className="typing-dot" />
                </div>
              </div>
            )}
          </div>

          <div className="ai-presets" role="group" aria-label="Common topics">
            {PRESET_QUERIES.map((preset) => (
              <button
                key={preset.label}
                type="button"
                className="ai-preset-chip"
                onClick={() => handleSend(preset.query)}
                disabled={isTyping}
              >
                {preset.label}
              </button>
            ))}
          </div>

          <form
            className="ai-dialog-input-bar"
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
          >
            <label htmlFor="quick-answers-input" className="sr-only">Your credentialing question</label>
            <input
              id="quick-answers-input"
              ref={inputRef}
              type="text"
              className="ai-input-field"
              placeholder="Ask about credentialing…"
              value={input}
              maxLength={MAX_QUESTION_LENGTH}
              autoComplete="off"
              onChange={(e) => setInput(e.target.value)}
            />
            <button type="submit" className="ai-send-btn" aria-label="Send question" disabled={!input.trim() || isTyping}>
              <Icon name="arrow" />
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default QuickAnswersWidget;
