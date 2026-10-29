export interface ActionLink {
  text: string;
  href: string;
}

export interface ChatMessage {
  id: string;
  sender: 'ai' | 'user';
  text: string;
  time: string;
  actionLink?: ActionLink;
}

export interface QuickAnswer {
  reply: string;
  actionLink: ActionLink;
}

export interface AnswerRule {
  /** Lowercase words or phrases; the answer is used when any appears at the start of a word in the question. */
  keywords: string[];
  answer: QuickAnswer;
}
