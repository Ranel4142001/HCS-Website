/**
 * Turns a phone number as typed into Monday's phone value: digits in international form and the country
 * whose flag Monday shows. Covers the formats visitors actually use; anything else keeps its digits and,
 * when the country can't be told, gets no flag rather than a wrong one.
 */

// International calling codes → ISO country. Longer codes first, so "+971" wins over "+97".
const CALLING_CODES: [string, string][] = (
  [
    ['1', 'US'], ['7', 'RU'], ['20', 'EG'], ['27', 'ZA'], ['30', 'GR'], ['31', 'NL'], ['32', 'BE'], ['33', 'FR'],
    ['34', 'ES'], ['36', 'HU'], ['39', 'IT'], ['40', 'RO'], ['41', 'CH'], ['43', 'AT'], ['44', 'GB'], ['45', 'DK'],
    ['46', 'SE'], ['47', 'NO'], ['48', 'PL'], ['49', 'DE'], ['51', 'PE'], ['52', 'MX'], ['54', 'AR'], ['55', 'BR'],
    ['56', 'CL'], ['57', 'CO'], ['60', 'MY'], ['61', 'AU'], ['62', 'ID'], ['63', 'PH'], ['64', 'NZ'], ['65', 'SG'],
    ['66', 'TH'], ['81', 'JP'], ['82', 'KR'], ['84', 'VN'], ['86', 'CN'], ['90', 'TR'], ['91', 'IN'], ['92', 'PK'],
    ['234', 'NG'], ['254', 'KE'], ['351', 'PT'], ['353', 'IE'], ['852', 'HK'], ['886', 'TW'], ['880', 'BD'],
    ['965', 'KW'], ['966', 'SA'], ['971', 'AE'], ['972', 'IL'], ['974', 'QA'],
  ] as [string, string][]
).sort((a, b) => b[0].length - a[0].length);

export interface MondayPhone {
  phone: string;
  countryShortName?: string;
}

export function mondayPhone(raw: string): MondayPhone {
  const trimmed = raw.trim();
  const digits = trimmed.replace(/\D/g, '');

  // Written internationally: "+63 930…" or "0063 930…"
  const intl = trimmed.startsWith('+') ? digits : digits.startsWith('00') ? digits.slice(2) : null;
  if (intl) {
    const match = CALLING_CODES.find(([code]) => intl.startsWith(code));
    return match ? { phone: `+${intl}`, countryShortName: match[1] } : { phone: `+${intl}` };
  }

  // Philippine mobile written locally: 09XX XXX XXXX
  if (/^09\d{9}$/.test(digits)) return { phone: `+63${digits.slice(1)}`, countryShortName: 'PH' };
  // US / Canada: 10 digits, or 11 starting with 1
  if (digits.length === 10) return { phone: `+1${digits}`, countryShortName: 'US' };
  if (digits.length === 11 && digits.startsWith('1')) return { phone: `+${digits}`, countryShortName: 'US' };

  return { phone: digits };
}
