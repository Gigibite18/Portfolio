import MediaSlot from '../../components/MediaSlot'
import styles from './CaseHero.module.css'

// px on the 1168px Figma band → container units
const u = (px) => `${(px / 11.68).toFixed(3)}cqw`

/** Cover: giant word + scribbles + meta row over a gradient glow. */
export default function CaseHero({ data }) {
  const { word, logo, curl, rays, sticker, note, screen, art } = data
  // optional per-case device box (Figma px, rotation in CSS degrees)
  const dev = data.device ?? { x: 312.5, y: 322 }
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

        {logo ? (
          // the app's own wordmark stands in for the giant word
          <h1 className={styles.logo} style={{ left: u(logo.x), top: u(logo.y), width: u(logo.w) }}>
            <img src={logo.src} alt={word.text} />
          </h1>
        ) : (
          <h1
            className={styles.word}
            data-font={word.font}
            style={{ left: u(word.x), top: u(word.y), fontSize: u(word.size) }}
          >
            {word.text}
          </h1>
        )}

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

        <div
          className={styles.device}
          style={{
            left: u(dev.x),
            top: u(dev.y),
            width: u(520),
            height: u(380),
            '--dev-r': dev.r != null ? `${dev.r}deg` : undefined,
          }}
        >
          {screen.src ? (
            <img src={screen.src} alt={screen.alt} style={{ inset: u(16) }} data-fit={screen.fit} />
          ) : (
            <MediaSlot label={screen.placeholder} className={styles.slot} style={{ inset: u(16) }} />
          )}
        </div>

        {art && (
          <img
            className={styles.art}
            src={art.src}
            alt={art.alt}
            style={{ left: u(art.x), top: u(art.y), width: u(art.w) }}
          />
        )}

        {sticker && (
          <span
            className={styles.sticker}
            style={{ left: u(sticker.x), top: u(sticker.y), '--r': sticker.r != null ? `${sticker.r}deg` : undefined }}
          >
            {sticker.text}
          </span>
        )}
        <p
          className={styles.note}
          style={{
            left: u(note.x),
            top: u(note.y),
            background: note.tone ? `var(--t-${note.tone})` : undefined,
            '--r': note.r != null ? `${note.r}deg` : undefined,
          }}
        >
          {note.lines.map((l, i) => (
            <span key={i}>{l}</span>
          ))}
        </p>

        {/* cases redone in Figma dropped the pills + scroll hint */}
        {data.pills && (
          <>
            <ul className={styles.pills}>
              {data.pills.map((p, i) => (
                <li key={i}>{p}</li>
              ))}
            </ul>
            <p className={styles.scroll} aria-hidden="true">
              SCROLL ↓
            </p>
          </>
        )}
      </div>
    </section>
  )
}
