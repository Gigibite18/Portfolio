import Tag from '../components/Tag'
import Button from '../components/Button'
import Polaroid from '../components/Polaroid'
import { Sticker } from '../components/Sticker'
import LayersPanel from './LayersPanel'
import { BIO, HOBBIES, TOOLBOX } from '../data/about'
import { LINKS } from '../data/links'
import { useReveal } from '../hooks/useReveal'
import styles from './About.module.css'

function Hobby({ hobby }) {
  const [ref, reveal] = useReveal()
  return (
    <li className={styles.hobby} ref={ref} data-reveal={reveal}>
      <div className={styles.photos}>
        <Polaroid {...hobby.front} size="s" rotate={8.31} className={styles.front} />
        <Polaroid {...hobby.back} size="s" rotate={-4} className={styles.back} />
        {hobby.halo && (
          <img className={styles.halo} src="/art/crayon/sticker-aureola.webp" alt="" width="56" height="39" />
        )}
      </div>
      <div className={styles.hobbyText}>
        <h4 className={styles.hobbyTitle}>{hobby.title}</h4>
        <p className={styles.hobbyBody}>{hobby.text}</p>
      </div>
    </li>
  )
}

export default function About() {
  return (
    <section id="about" className={styles.about} aria-labelledby="about-title">
      <div className={styles.top}>
        <div className={styles.layers}>
          <LayersPanel />
        </div>

        <div className={styles.bio}>
          <div className={styles.titleRow}>
            <h2 id="about-title" className={styles.title}>
              Hi, I&apos;m gigi
            </h2>
            <Sticker name="heart" className={styles.heart} />
          </div>

          <div className={styles.bioRow}>
            <div className={styles.copy}>
              <p className={styles.lead}>{BIO.lead}</p>
              {BIO.body.map((p) => (
                <p key={p} className={styles.body}>
                  {p}
                </p>
              ))}
            </div>
            <div className={styles.portrait}>
              <Polaroid
                src="/art/gigi-tag.jpg"
                alt="Photo of gigi: dark red hair with bangs, smiling softly"
                caption="meee"
                frame="pink"
                size="l"
                rotate={-4}
                crop={{ width: '193.24%', height: '100%', left: '-55.23%', top: 0 }}
              />
              <img
                className={styles.avatar}
                src="/art/gigi-avatar-about.svg"
                alt="Illustrated self-portrait of gigi"
                width="170"
                height="176"
              />
            </div>
          </div>

          <div className={styles.toolbox}>
            <h3 className={styles.small}>Toolbox</h3>
            <ul className={styles.tags}>
              {TOOLBOX.design.map((t) => (
                <li key={t}>
                  <Tag>{t}</Tag>
                </li>
              ))}
              {TOOLBOX.more.map((t) => (
                <li key={t}>
                  <Tag>{t}</Tag>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className={styles.offscreen} id="off-screen">
        <h3 className="visually-hidden">Off-screen</h3>
        <ul className={styles.hobbies}>
          {HOBBIES.map((h) => (
            <Hobby key={h.title} hobby={h} />
          ))}
        </ul>
        <div className={styles.cta}>
          <Button
            href={LINKS.cv ?? undefined}
            download={LINKS.cv ? true : undefined}
            aria-disabled={!LINKS.cv || undefined}
            title={LINKS.cv ? undefined : 'CV coming soon'}
          >
            Download CV ↓
          </Button>
        </div>
      </div>
    </section>
  )
}
