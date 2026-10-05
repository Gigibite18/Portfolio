import Section from './Section'
import SectionHeader from '../SectionHeader'
import styles from './Problem.module.css'

/** Problem: dark band, centred statement + insight cards.
 *  Cards with `n` use the numbered layout (big number + footnote). */
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
            <li key={c.tag} className={styles.card} data-tone={c.tone} data-numbered={c.n ? true : undefined}>
              {c.glow && <span className={styles.glow} data-tone={c.glow} aria-hidden="true" />}
              <p className={styles.tag}>{c.tag}</p>
              <h3 className={styles.cardTitle}>{c.title}</h3>
              {c.n && (
                <p className={styles.num} data-accent={c.numAccent || undefined} aria-hidden="true">
                  {c.n}
                </p>
              )}
              {c.body && <p className={styles.cardBody}>{c.body}</p>}
              {c.foot && <p className={styles.foot}>{c.foot}</p>}
            </li>
          ))}
        </ul>
        {data.footnote && <p className={styles.footnote}>{data.footnote}</p>}
      </div>
    </Section>
  )
}
