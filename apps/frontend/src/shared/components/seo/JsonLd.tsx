/**
 * Renders structured data (schema.org JSON-LD) for search engines.
 * "<" is escaped so content can never close the script tag early.
 */
export function JsonLd({ data }: { data: object | object[] }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, '\\u003c') }}
    />
  );
}

export default JsonLd;
