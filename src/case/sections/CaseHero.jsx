import MediaSlot from '../../components/MediaSlot'
import styles from './CaseHero.module.css'

// px on the 1168px Figma band → container units
const u = (px) => `${(px / 11.68).toFixed(3)}cqw`

/** Cover: giant word + scribbles + meta row over a gradient glow. */
export default function CaseHero({ data }) {
  const { word, curl, rays, sticker, note, screen } = data
  return (
    <section className={styles.hero} aria-label="Cover">
      <div className={styles.band} data-band={data.band}>
        <span className={styles.glow} data-tone="c1" style={{ left: u(-140), top: u(-160), width: u(560) }} />
        <span className={styles.glow} data-tone="c5" style={{ left: u(760), top: u(-140), width: u(440) }} />
        <span className={styles.glow} data-tone="c4" style={{ left: u(260), top: u(420), width: u(520) }} />
        <span className={styles.glow} data-tone="c2" style={{ left: u(820), top: u(380), width: u(460) }} />

        <dl className={styles.meta}>
          {data.meta.map(([k, v]) => (
            <div key={k}>
              <dt>{k}</dt>
              <dd>{v}</dd>
            </div>
          ))}
        </dl>

        <h1 className={styles.word} style={{ left: u(word.x), top: u(word.y), fontSize: u(word.size) }}>
          {word.text}
        </h1>

        {curl && (
          <svg
            className={styles.curl}
            style={{
              left: u(curl.x),
              top: u(curl.y),
              width: u(94),
              rotate: `${curl.r ?? 0}deg`,
              scale: curl.flip ? '1 -1' : undefined,
            }}
            viewBox="0 0 94 34"
            aria-hidden="true"
          >
            <path d="M2 27C22-3 42-3 42 17C42 37 22 37 32 17C42-3 72-3 92 17" />
          </svg>
        )}
        {rays && (
          <svg
            className={styles.rays}
            style={{ left: u(rays.x), top: u(rays.y), width: u(56), rotate: `${rays.r ?? 0}deg` }}
            viewBox="0 0 56 48"
            aria-hidden="true"
          >
            <path d="M2 22L16 2M24 28L42 14M32 46L54 42" />
          </svg>
        )}

        <div className={styles.device} style={{ left: u(312.5), top: u(322), width: u(520), height: u(380) }}>
          {screen.src ? (
            <img src={screen.src} alt={screen.alt} style={{ inset: u(16) }} />
          ) : (
            <MediaSlot label={screen.placeholder} className={styles.slot} style={{ inset: u(16) }} />
          )}
        </div>

        <span className={styles.sticker} style={{ left: u(sticker.x), top: u(sticker.y) }}>
          {sticker.text}
        </span>
        <p className={styles.note} style={{ left: u(note.x), top: u(note.y) }}>
          {note.lines.map((l) => (
            <span key={l}>{l}</span>
          ))}
        </p>

        <ul className={styles.pills}>
          {data.pills.map((p) => (
            <li key={p}>{p}</li>
          ))}
        </ul>
        <p className={styles.scroll} aria-hidden="true">
          SCROLL ↓
        </p>
      </div>
    </section>
  )
}
