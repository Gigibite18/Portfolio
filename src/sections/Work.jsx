import { Link, useLocation } from 'react-router-dom'
import FrameLabel from '../components/FrameLabel'
import Tag from '../components/Tag'
import Button from '../components/Button'
import Cursor from '../components/Cursor'
import ScribbleUnderline from '../components/ScribbleUnderline'
import DearDiaryCover from './DearDiaryCover'
import { FEATURED, GRID } from '../data/projects'
import { LINKS } from '../data/links'
import { useReveal } from '../hooks/useReveal'
import styles from './Work.module.css'

const isYear = (t) => /^\d{4}$/.test(t)

function Tags({ items }) {
  return (
    <ul className={styles.tags} aria-label="Tags">
      {items.map((t) => (
        <li key={t}>
          <Tag tone={isYear(t) ? 'year' : undefined}>{t}</Tag>
        </li>
      ))}
    </ul>
  )
}

/** Opens the case overlay on top of the home (background location). */
function useCaseLink(slug) {
  const location = useLocation()
  return { to: `/work/${slug}`, state: { background: location } }
}

function Selection() {
  return (
    <span className={styles.selection} aria-hidden="true">
      <i data-pos="tl" />
      <i data-pos="tr" />
      <i data-pos="bl" />
      <i data-pos="br" />
    </span>
  )
}

function Featured() {
  const link = useCaseLink(FEATURED.slug)
  const [ref, reveal] = useReveal()
  return (
    <article className={styles.featured} data-frame-host ref={ref} data-reveal={reveal}>
      <FrameLabel name={FEATURED.frameLabel} selected />
      <div className={styles.featuredCard}>
        <div className={styles.featuredCover}>
          <DearDiaryCover />
        </div>
        <div className={styles.featuredInfo}>
          <div className={styles.eyebrow}>
            <Tag variant="eyebrow" tone="accent">
              {FEATURED.eyebrow[0]}
            </Tag>
            <Tag variant="eyebrow">{FEATURED.eyebrow[1]}</Tag>
          </div>
          <h3 className={styles.featuredTitle}>{FEATURED.title}</h3>
          <p className={styles.featuredSummary}>{FEATURED.summary}</p>
          <p className={styles.featuredImpact}>{FEATURED.impact}</p>
          <Tags items={FEATURED.tags} />
          <div className={styles.ctas}>
            <Button to={link.to} state={link.state} className={styles.stretched}>
              Read the case study →
            </Button>
            <Button
              variant="secondary"
              href={FEATURED.prototype ?? undefined}
              aria-disabled={!FEATURED.prototype || undefined}
              title={FEATURED.prototype ? undefined : 'Prototype link coming soon'}
              className={styles.above}
              target={FEATURED.prototype ? '_blank' : undefined}
              rel="noreferrer"
            >
              See the prototype
            </Button>
          </div>
        </div>
      </div>
    </article>
  )
}

function CaseCard({ item }) {
  const link = useCaseLink(item.slug)
  const [ref, reveal] = useReveal()
  const { cover } = item
  return (
    <article className={styles.card} data-frame-host ref={ref} data-reveal={reveal}>
      <FrameLabel name={item.frameLabel} />
      <div className={styles.cover} style={{ '--border': item.border }}>
        <div className={styles.coverClip}>
          <img
            src={cover.src}
            alt={cover.alt}
            loading="lazy"
            className={cover.fit ? styles.coverFit : styles.coverFill}
            style={cover.fit}
          />
          {cover.tint && <span className={styles.tint} />}
        </div>
        {item.badge && (
          <span className={styles.badge}>
            <img src="/art/star-badge.svg" alt="" width="14" height="14" />
            {item.badge}
          </span>
        )}
        {item.swiftLogo && <img className={styles.swiftLogo} src="/art/swift-logo.webp" alt="" width="84" height="84" />}
        {item.cursor && (
          <Cursor
            label={item.cursor.label}
            color={item.cursor.color}
            className={styles.coverCursor}
            style={{ left: `${(item.cursor.x / 580) * 100}%`, top: `${(item.cursor.y / 400) * 100}%` }}
          />
        )}
        <Selection />
      </div>
      <div className={styles.info}>
        <h3 className={styles.cardTitle}>
          <Link to={link.to} state={link.state} className={styles.stretched}>
            {item.title}
          </Link>
        </h3>
        <p className={styles.cardSummary}>{item.summary}</p>
        <Tags items={item.tags} />
      </div>
    </article>
  )
}

export default function Work() {
  return (
    <section id="work" className={styles.work} aria-labelledby="work-title">
      <div className={styles.header}>
        <div className={styles.titleBlock}>
          <FrameLabel name="02 / selected-work" />
          <h2 id="work-title" className={styles.title}>
            Things I&apos;ve designed
          </h2>
          <ScribbleUnderline width={440} height={30} />
        </div>
        <p className={styles.hint}>Click a frame to open the case study &nbsp;→</p>
      </div>

      <Featured />

      <div className={styles.grid}>
        {GRID.map((item) => (
          <CaseCard key={item.slug} item={item} />
        ))}
      </div>

      <div className={styles.more}>
        <Button
          variant="secondary"
          href={LINKS.behance ?? undefined}
          aria-disabled={!LINKS.behance || undefined}
          title={LINKS.behance ? undefined : 'Behance link coming soon'}
          target="_blank"
          rel="noreferrer"
        >
          More work on Behance ↗
        </Button>
      </div>
    </section>
  )
}
