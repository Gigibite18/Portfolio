import Section from './Section'
import SectionHeader from '../SectionHeader'
import styles from './Problem.module.css'

/** Problem: dark band, centred statement + insight cards. */
export default function Problem({ data }) {
  return (
    <Section id={data.id} className={styles.problem} labelledBy={`${data.id}-title`}>
      <div className={styles.band}>
        <SectionHeader eyebrow={data.eyebrow} n={data.n} onDark />
        <h2 id={`${data.id}-title`} className={styles.title}>
          {data.title}
        </h2>
        <p className={styles.body}>{data.body}</p>
        <ul className={styles.cards}>
          {data.insights.map((c) => (
            <li key={c.tag} className={styles.card} data-tone={c.tone}>
              {c.glow && <span className={styles.glow} data-tone={c.glow} aria-hidden="true" />}
              <p className={styles.tag}>{c.tag}</p>
              <h3 className={styles.cardTitle}>{c.title}</h3>
              <p className={styles.cardBody}>{c.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  )
}
