export interface LegalSection {
  /** Anchor so other pages can link straight to the section, e.g. /privacy#baa. */
  id: string;
  heading: string;
  paragraphs?: string[];
  list?: string[];
  /** Paragraphs shown after the list. */
  after?: string[];
}

export interface LegalDoc {
  path: '/privacy' | '/terms';
  title: string;
  /** Search result and social preview description. */
  description: string;
  lead: string;
  /** Date of the last change, YYYY-MM-DD. Update it whenever the text changes. */
  updated: string;
  sections: LegalSection[];
}
