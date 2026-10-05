import Section from './Section'
import SectionHeader from '../SectionHeader'
import TwoTone from '../TwoTone'
import MediaSlot from '../../components/MediaSlot'
import styles from './About.module.css'

/** About: two-tone lead sentence + numbers panel with the character. */
export default function About({ data }) {
  return (
    <Section id={data.id} className={styles.about} labelledBy={`${data.id}-title`}>
      <SectionHeader eyebrow={data.eyebrow} n={data.n} className={styles.head} />
      <div className={styles.grid}>
        <div className={styles.copy}>
          <h2 id={`${data.id}-title`} className={styles.lead}>
            <TwoTone parts={Array.isArray(data.lead) ? data.lead : [data.lead]} />
          </h2>
          <p className={styles.body}>{data.body}</p>
          <ul className={styles.pills}>
            {data.pills.map((p, i) => (
              <li key={i}>{p}</li>
            ))}
          </ul>
          {data.role && (
            <p className={styles.role}>
              <span className={styles.roleTag}>MY ROLE</span>
              {data.role}
            </p>
          )}
          {data.byline && <p className={styles.byline}>{data.byline}</p>}
        </div>

        <div className={styles.panel} data-align={data.statsAlign}>
          {data.panelLabel && <p className={styles.panelLabel}>{data.panelLabel}</p>}
          <dl className={styles.stats}>
            {data.stats.map(([n, label]) => (
              <div key={label}>
                <dt>{n}</dt>
                <dd>{label}</dd>
              </div>
            ))}
          </dl>
          {data.artPlaceholder && <MediaSlot label={data.artPlaceholder} round className={styles.artSlot} />}
          {data.art && (
            <span className={styles.art} role="img" aria-label={data.art.alt}>
              <img src={data.art.src} alt="" style={data.art.crop} loading="lazy" />
            </span>
          )}
        </div>
      </div>
    </Section>
  )
}
