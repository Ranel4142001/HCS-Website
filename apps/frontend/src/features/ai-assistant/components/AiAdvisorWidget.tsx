'use client';

import React, { useState, useRef, useEffect } from 'react';
import Icon from '@/shared/components/ui/Icon';

interface ChatMessage {
  id: string;
  sender: 'ai' | 'user';
  text: string;
  time: string;
  actionLink?: { text: string; href: string };
}

const INITIAL_MESSAGES: ChatMessage[] = [
  {
    id: 'm1',
    sender: 'ai',
    text: 'Hello! I am your AI Credentialing Assistant. How can I help streamline your credentialing, CVO, or payer enrollment today?',
    time: 'Just now',
  },
];

const PRESET_QUERIES = [
  { label: '📋 Required Documents', query: 'What documents do I need to start credentialing?' },
  { label: '⚡ CVO Turnaround Time', query: 'How fast can HealthCredSTAT verify a provider?' },
  { label: '🔍 Credentialing vs Enrollment', query: 'What is the difference between credentialing and enrollment?' },
  { label: '🛡️ Continuous Monitoring', query: 'How does continuous sanctions monitoring work?' },
];

export const AiAdvisorWidget: React.FC = () => {
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

    const userMsg: ChatMessage = {
      id: `u-${Date.now()}`,
      sender: 'user',
      text,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInput('');
    setIsTyping(true);

    setTimeout(() => {
      let reply = '';
      let actionLink: { text: string; href: string } | undefined;
      const lower = text.toLowerCase();

      if (lower.includes('document') || lower.includes('requirement') || lower.includes('need')) {
        reply = 'For provider credentialing, you typically need: State Medical License, DEA Certificate, Malpractice Insurance COI, Board Certification, Graduation Diplomas, updated CV (explaining gaps >30d), and CAQH profile.';
        actionLink = { text: 'Start Credentialing Intake →', href: '#contact' };
      } else if (lower.includes('turnaround') || lower.includes('how fast') || lower.includes('time') || lower.includes('duration')) {
        reply = 'HealthCredSTAT delivers primary source verification (PSV) files in 1–2 business days (compared to the 90-day manual industry average). In-network payer enrollment typically completes in 14–30 days.';
        actionLink = { text: 'Calculate Your Turnaround →', href: '#estimator' };
      } else if (lower.includes('enrollment') || lower.includes('difference') || lower.includes('vs')) {
        reply = 'Credentialing verifies a clinician’s clinical qualifications and primary sources. Payer Enrollment contracts that clinician with specific health plans (Medicare, Medicaid, BCBS, Aetna, etc.) so they can bill in-network.';
        actionLink = { text: 'Explore Agent Workflows →', href: '#workflows' };
      } else if (lower.includes('monitor') || lower.includes('sanction') || lower.includes('oig') || lower.includes('npdb')) {
        reply = 'Our continuous monitoring runs 24/7 automated queries across OIG-LEIE, SAM.gov, NPDB continuous query, Medicare Opt-Out, and 50 state licensing boards with instant compliance alerts.';
        actionLink = { text: 'View Monitoring Dashboard →', href: '#rtv' };
      } else if (lower.includes('status') || lower.includes('track') || lower.includes('npi')) {
        reply = 'You can track real-time application milestones using our live tracker with your NPI or Application ID.';
        actionLink = { text: 'Track Application Status →', href: '#tracker' };
      } else {
        reply = `Thank you for asking about "${text}". Our AI operations engine and credentialing specialists manage the entire lifecycle from PSV to payer enrollment. Would you like a personalized walk-through?`;
        actionLink = { text: 'Speak With A Specialist →', href: '#contact' };
      }

      const aiMsg: ChatMessage = {
        id: `ai-${Date.now()}`,
        sender: 'ai',
        text: reply,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        actionLink,
      };

      setIsTyping(false);
      setMessages((prev) => [...prev, aiMsg]);
    }, 600);
  };

  return (
    <div className="ai-advisor-container">
      {/* Floating Toggle Button */}
      <button
        type="button"
        className={`ai-advisor-launcher ${isOpen ? 'is-open' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Open AI Credentialing Assistant"
        title="AI Credentialing Assistant"
      >
        <span className="ai-launcher-pulse" />
        <Icon name={isOpen ? 'x' : 'sparkle'} />
        <span className="ai-launcher-text">AI Assistant</span>
      </button>

      {/* Expandable Chat Dialog */}
      {isOpen && (
        <div className="ai-advisor-dialog" role="dialog" aria-label="AI Credentialing Assistant">
          {/* Header */}
          <div className="ai-dialog-header">
            <div className="ai-header-brand">
              <span className="ai-badge-dot" />
              <div>
                <strong>Credentialing AI Advisor</strong>
                <span>Instant automated answers &amp; guidance</span>
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
              placeholder="Ask anything about credentialing or enrollment..."
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

export default AiAdvisorWidget;
