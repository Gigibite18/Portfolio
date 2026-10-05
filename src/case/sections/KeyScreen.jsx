import Section from './Section'
import SectionHeader from '../SectionHeader'
import MediaSlot from '../../components/MediaSlot'
import styles from './KeyScreen.module.css'

// px on the 1088×620 Figma canvas → container units (1cqw = 10.88px)
const u = (px) => `${(px / 10.88).toFixed(3)}cqw`

/** Key screen on a Figma-like canvas: selection, cursor and comments. */
export default function KeyScreen({ data }) {
  const s = data.selection
  const f = data.frame
  const c = data.cursor
  return (
    <Section id={data.id} className={styles.key} labelledBy={`${data.id}-title`}>
      <SectionHeader eyebrow={data.eyebrow} n={data.n} title={data.title} titleId={`${data.id}-title`} />
      <figure className={styles.canvas}>
        <div className={styles.stage}>
          <p className={styles.caption} style={{ left: u(f.x), top: u(f.y - (f.device ? 29 : 20)) }}>
            {data.caption}
          </p>
          <div
            className={styles.frame}
            data-device={f.device || undefined}
            style={{ left: u(f.x), top: u(f.y), width: u(f.w), height: u(f.h) }}
          >
            {data.screen.src ? (
              <img src={data.screen.src} alt={data.screen.alt} loading="lazy" />
            ) : (
              <MediaSlot label={data.screen.placeholder} className={styles.slot} />
            )}
          </div>

          {s && (
            <span
              className={styles.selection}
              style={{ left: u(s.x), top: u(s.y), width: u(s.w), height: u(s.h) }}
              aria-hidden="true"
            >
              <i data-pos="tl" />
              <i data-pos="tr" />
              <i data-pos="bl" />
              <i data-pos="br" />
              {s.tag && <span className={styles.sizeTag}>{s.tag}</span>}
            </span>
          )}
          {c && (
            <span className={styles.cursor} style={{ left: u(c.x), top: u(c.y) }} aria-hidden="true">
              <svg width="21" height="29" viewBox="0 0 21 29">
                <path d="M.75 1.6V23.6L6.75 17.6L10.75 27.6L14.75 25.6L10.75 16.6H18.75L.75 1.6Z" />
              </svg>
              <span>{c.label}</span>
            </span>
          )}

          <ol className={styles.comments}>
            {data.comments.map((m) => (
              <li key={m.n}>
                <span
                  className={styles.pin}
                  data-tone={data.pinTone}
                  style={{ left: u(m.pin.x), top: u(m.pin.y) }}
                  aria-hidden="true"
                >
                  {m.n}
                </span>
                <div className={styles.comment} style={{ left: u(m.x), top: u(m.y) }}>
                  <p className={styles.commentTitle}>
                    <span className="visually-hidden">Comment {m.n}: </span>
                    {m.title}
                  </p>
                  <p className={styles.commentText}>{m.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </figure>
    </Section>
  )
}
