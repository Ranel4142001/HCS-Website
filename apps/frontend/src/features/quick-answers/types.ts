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
  /** The answer is used when the question contains any of these words (case-insensitive). */
  keywords: string[];
  answer: QuickAnswer;
}
