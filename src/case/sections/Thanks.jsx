import Section from './Section'
import SectionHeader from '../SectionHeader'
import MediaSlot from '../../components/MediaSlot'
import styles from './Thanks.module.css'

/** Thanks: dark band with a woven stripe and two polaroids. */
export default function Thanks({ data, onBack, onNext }) {
  return (
    <Section id={data.id} className={styles.thanks} labelledBy={`${data.id}-title`}>
      <div className={styles.band}>
        <span
          className={styles.weave}
          aria-hidden="true"
          style={{
            '--w-base': `var(--t-${data.weave?.base ?? 'ink'})`,
            '--w-v': `var(--t-${data.weave?.v ?? 'ink'})`,
            '--w-h': `var(--t-${data.weave?.h ?? 'line'})`,
          }}
        />
        <div className={styles.copy}>
          <SectionHeader eyebrow={data.eyebrow} onDark />
          <h2 id={`${data.id}-title`} className={styles.title}>
            {data.title.map((l) => (
              <span key={l}>{l}</span>
            ))}
          </h2>
          <p className={styles.body}>{data.body}</p>
          <div className={styles.ctas}>
            <button type="button" className={styles.back} onClick={onBack}>
              ← Back to work
            </button>
            <button type="button" className={styles.next} onClick={onNext}>
              Next case →
            </button>
          </div>
        </div>
        <div className={styles.photos}>
          {data.polaroids.map((p, i) => (
            <figure key={p.caption} className={styles.polaroid} style={{ '--r': `${p.rotate}deg` }} data-i={i}>
              <span className={styles.photo}>
                {p.src ? (
                  <img src={p.src} alt={p.alt} loading="lazy" style={p.crop} />
                ) : (
                  <MediaSlot label={p.placeholder} className={styles.photoSlot} />
                )}
              </span>
              <figcaption>{p.caption}</figcaption>
            </figure>
          ))}
        </div>
        {data.credits && (
          <dl className={styles.credits}>
            {data.credits.map(([k, v]) => (
              <div key={k}>
                <dt>{k}</dt>
                <dd>{v}</dd>
              </div>
            ))}
          </dl>
        )}
      </div>
    </Section>
  )
}
