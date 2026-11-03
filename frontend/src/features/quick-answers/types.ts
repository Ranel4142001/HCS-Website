export interface ActionLink {
  text: string;
  href: string;
}

/** Opens the in-chat "talk to a specialist" form instead of navigating. */
export interface HandoffAction {
  text: string;
  handoff: true;
}

export type ChatAction = ActionLink | HandoffAction;

/** A topic offered as a button; clicking it asks `question`. */
export interface Suggestion {
  label: string;
  question: string;
}

export interface ChatMessage {
  id: string;
  sender: 'ai' | 'user';
  text: string;
  time: string;
  action?: ChatAction;
  suggestions?: Suggestion[];
  /** Shown before the suggestion buttons, e.g. "Related:"; omitted when the reply itself asks "Did you mean…?". */
  suggestionsLabel?: string;
}

export interface QuickAnswer {
  reply: string;
  action: ChatAction;
}

export interface KnowledgeEntry {
  id: string;
  /** Short button label, e.g. for "Did you mean…?" suggestions. */
  label: string;
  /** The question this entry answers, asked when its suggestion button is clicked. */
  question: string;
  /**
   * Lowercase words or phrases. Single words also match longer words that start with them ('verif' matches
   * "verification") and close misspellings; phrases must appear as written.
   */
  keywords: string[];
  /** Groups of keywords; the entry only applies when every group has at least one match. */
  requires?: string[][];
  answer: QuickAnswer;
}
