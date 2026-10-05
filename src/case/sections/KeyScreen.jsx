import Section from './Section'
import SectionHeader from '../SectionHeader'
import styles from './KeyScreen.module.css'

// px on the 1088×620 Figma canvas → container units (1cqw = 10.88px)
const u = (px) => `${(px / 10.88).toFixed(3)}cqw`

/** Key screen on a Figma-like canvas: selection, cursor and comments. */
export default function KeyScreen({ data }) {
  const s = data.selection
  return (
    <Section id={data.id} className={styles.key} labelledBy={`${data.id}-title`}>
      <SectionHeader eyebrow={data.eyebrow} n={data.n} title={data.title} titleId={`${data.id}-title`} />
      <figure className={styles.canvas}>
        <div className={styles.stage}>
          <p className={styles.caption} style={{ left: u(212), top: u(65) }}>
            {data.caption}
          </p>
          <div className={styles.device} style={{ left: u(212), top: u(94), width: u(626), height: u(458) }}>
            <img src={data.screen.src} alt={data.screen.alt} loading="lazy" style={{ inset: u(16) }} />
          </div>

          {s && (
            <span className={styles.selection} style={{ left: u(s.x), top: u(s.y), width: u(s.w), height: u(s.h) }} aria-hidden="true">
              <i data-pos="tl" />
              <i data-pos="tr" />
              <i data-pos="bl" />
              <i data-pos="br" />
            </span>
          )}
          {s && data.cursor && (
            <span className={styles.cursor} style={{ left: u(s.x + s.w), top: u(s.y + s.h - 4) }} aria-hidden="true">
              <svg width="21" height="29" viewBox="0 0 21 29">
                <path d="M.75 1.6V23.6L6.75 17.6L10.75 27.6L14.75 25.6L10.75 16.6H18.75L.75 1.6Z" />
              </svg>
              <span>{data.cursor}</span>
            </span>
          )}

          <ol className={styles.comments}>
            {data.comments.map((c) => (
              <li key={c.n}>
                <span className={styles.pin} style={{ left: u(c.pin.x), top: u(c.pin.y) }} aria-hidden="true">
                  {c.n}
                </span>
                <div className={styles.comment} style={{ left: u(c.x), top: u(c.y) }}>
                  <p className={styles.commentTitle}>
                    <span className="visually-hidden">Comment {c.n}: </span>
                    {c.title}
                  </p>
                  <p className={styles.commentText}>{c.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </figure>
    </Section>
  )
}
