/** Renders title segments: 'text' in t/ink, ['text', 'soft'] in t/ink-soft,
 *  ['text', 'hand'] in the case's own type (t/font-hand); 'soft hand' combines both. */
export default function TwoTone({ parts }) {
  return parts.map((p, i) =>
    Array.isArray(p) ? (
      <span key={i} data-tone={p[1]}>
        {p[0]}
      </span>
    ) : (
      <span key={i}>{p}</span>
    ),
  )
}
