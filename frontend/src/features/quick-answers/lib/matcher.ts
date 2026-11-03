import type { KnowledgeEntry } from '../types';

/**
 * Finds the best answer for a free-text question without AI: every entry is scored by how many of its
 * keywords appear in the question, allowing word variants (prefixes), synonyms and small typos.
 */

/** Words that say little about the topic. They are dropped before single-word matching. */
const STOPWORDS = new Set(
  'a an the is are was be do does did i im me my we our us you your it its to for of in on at by and or if can could would should will what whats how which who when where why there this that these those have has with about any some get got need want please tell know'.split(' '),
);

/** Everyday wording mapped onto the words the answers use. */
const SYNONYMS: Record<string, string> = {
  price: 'cost', prices: 'cost', pricing: 'cost', priced: 'cost', fee: 'cost', fees: 'cost', rate: 'cost', rates: 'cost',
  expensive: 'cost', cheap: 'cost', budget: 'cost', pay: 'cost', paying: 'cost', payment: 'cost', dollars: 'cost',
  paperwork: 'document', docs: 'document', forms: 'document', papers: 'document', requirements: 'document', needed: 'document',
  turnaround: 'time', timeline: 'time', timeframe: 'time', quickly: 'time', faster: 'time', speed: 'time', wait: 'time',
  renewal: 'renew', renewing: 'renew', expiring: 'expir', expired: 'expir', expiration: 'expir',
  insurer: 'insurance', insurers: 'insurance', payer: 'insurance', payers: 'insurance', payor: 'insurance', payors: 'insurance',
  medicare: 'insurance', medicaid: 'insurance',
  secure: 'secur', security: 'secur', private: 'privacy',
  person: 'specialist', human: 'specialist', agent: 'specialist', representative: 'specialist', rep: 'specialist',
  hi: 'hello', hey: 'hello', thanks: 'thank', thx: 'thank',
};

export interface Ranked {
  entry: KnowledgeEntry;
  score: number;
  /** True when at least one keyword matched exactly or by prefix (not only through a typo). */
  confident: boolean;
}

function normalize(text: string): string {
  return text.toLowerCase().replace(/[’']/g, "'").replace(/[^a-z0-9.' ]+/g, ' ').replace(/\s+/g, ' ').trim();
}

/** Question words, with each synonym's target word added alongside the original. */
function tokens(text: string): string[] {
  const words = normalize(text)
    .split(' ')
    .map((w) => w.replace(/^'+|'+$/g, '').replace(/'s$/, ''))
    .filter((w) => w && !STOPWORDS.has(w));
  return words.flatMap((w) => (SYNONYMS[w] ? [w, SYNONYMS[w]] : [w]));
}

/** Edit distance (insert, delete, substitute, swap neighbours), stopping early once it passes `max`. */
function editDistance(a: string, b: string, max: number): number {
  if (Math.abs(a.length - b.length) > max) return max + 1;
  const rows: number[][] = Array.from({ length: a.length + 1 }, (_, i) => [i, ...Array(b.length).fill(0)]);
  for (let j = 1; j <= b.length; j++) rows[0][j] = j;
  for (let i = 1; i <= a.length; i++) {
    let rowMin = Infinity;
    for (let j = 1; j <= b.length; j++) {
      const cost = a[i - 1] === b[j - 1] ? 0 : 1;
      let d = Math.min(rows[i - 1][j] + 1, rows[i][j - 1] + 1, rows[i - 1][j - 1] + cost);
      if (i > 1 && j > 1 && a[i - 1] === b[j - 2] && a[i - 2] === b[j - 1]) d = Math.min(d, rows[i - 2][j - 2] + 1);
      rows[i][j] = d;
      rowMin = Math.min(rowMin, d);
    }
    if (rowMin > max) return max + 1;
  }
  return rows[a.length][b.length];
}

/** 1 for an exact or prefix match, 0.6 for a close misspelling, 0 otherwise. */
function wordMatch(keyword: string, word: string): number {
  if (word === keyword || (keyword.length >= 3 && word.startsWith(keyword))) return 1;
  if (keyword.length < 5 || word.length < 4) return 0;
  const tolerance = keyword.length >= 8 ? 2 : 1;
  // Compare with the whole word and with its start, so typos in longer forms ("verificaton") still count.
  const head = word.slice(0, keyword.length);
  return Math.min(editDistance(keyword, word, tolerance), editDistance(keyword, head, tolerance)) <= tolerance ? 0.6 : 0;
}

/** Every entry with a positive score, best first. */
export function rankEntries(question: string, entries: KnowledgeEntry[]): Ranked[] {
  const text = ` ${normalize(question)} `;
  const words = tokens(question);
  // How strongly one keyword matches: phrases ("how much", "take over") are matched as written and score highest.
  const keywordScore = (keyword: string): number =>
    keyword.includes(' ') ? (text.includes(` ${keyword}`) ? 3 : 0) : 2 * Math.max(0, ...words.map((w) => wordMatch(keyword, w)));
  const ranked: Ranked[] = [];

  for (const entry of entries) {
    if (entry.requires?.some((group) => !group.some((k) => keywordScore(k) > 0))) continue;
    let score = 0;
    let confident = false;
    for (const keyword of entry.keywords) {
      const s = keywordScore(keyword);
      score += s;
      // A full-strength match (exact, prefix or phrase) rather than one found only through a typo
      if (s >= 2) confident = true;
    }
    if (score > 0) ranked.push({ entry, score, confident });
  }
  // Ties keep the knowledge base order, which lists specific topics before broad ones.
  return ranked.sort((a, b) => b.score - a.score);
}
