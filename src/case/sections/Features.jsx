import { useState } from 'react'
import Section from './Section'
import SectionHeader from '../SectionHeader'
import MediaSlot from '../../components/MediaSlot'
import styles from './Features.module.css'

// px on the 620×440 visual half of a Figma feature band → %
const px = (x, y) => ({ left: `${(x / 620) * 100}%`, top: `${(y / 440) * 100}%` })

function Tags({ tags }) {
  return (
    <ul className={styles.tags} aria-label="Topics">
      {tags.map((t) => (
        <li key={t.label} className={styles.tag} data-tone={t.tone} style={{ ...px(t.x, t.y), '--r': `${t.r}deg` }}>
          {t.label}
          <span className={styles.x} aria-hidden="true">
            ×
          </span>
        </li>
      ))}
    </ul>
  )
}

function DeviceVisual({ block }) {
  return (
    <>
      <div className={styles.device}>
        {block.screen.src ? (
          <img src={block.screen.src} alt={block.screen.alt} loading="lazy" />
        ) : (
          <MediaSlot label={block.screen.placeholder} className={styles.slot} />
        )}
      </div>
      {block.tags && <Tags tags={block.tags} />}
    </>
  )
}

function ChatVisual({ block }) {
  const c = block.chat
  return (
    <>
      <div className={styles.chat}>
        <p className={styles.chatEyebrow}>{c.eyebrow}</p>
        <p className={styles.chatTitle}>
          {c.title.map((l, i) => (
            <span key={i}>{l}</span>
          ))}
        </p>
        <p className={styles.bubbleMe}>{c.me}</p>
        <p className={styles.bubbleThem}>{c.them}</p>
        <p className={styles.input}>
          {c.input}
          <span className={styles.inputDot} aria-hidden="true" />
        </p>
      </div>
      {block.tags && <Tags tags={block.tags} />}
    </>
  )
}

function ToggleVisual({ block }) {
  const t = block.toggle
  const [on, setOn] = useState(true)
  return (
    <div className={styles.toggleWrap} data-on={on || undefined}>
      <div className={styles.toggleCard}>
        <span id={`${block.id}-toggle`}>{t.label}</span>
        <button
          type="button"
          role="switch"
          aria-checked={on}
          aria-labelledby={`${block.id}-toggle`}
          className={styles.bigSwitch}
          onClick={() => setOn((v) => !v)}
        >
          <span aria-hidden="true" />
        </button>
      </div>
      <ul className={styles.chips}>
        {t.items.map((it) => (
          <li
            key={it.label}
            className={styles.chip}
            style={{ left: `${((it.x - 488) / 600) * 100}%`, top: `${(it.y / 440) * 100}%`, '--r': `${it.r}deg` }}
          >
            <span aria-hidden="true">○</span>
            <s>{it.label}</s>
          </li>
        ))}
      </ul>
      {t.note && <p className={styles.handNote}>{t.note}</p>}
    </div>
  )
}

const VISUALS = { device: DeviceVisual, chat: ChatVisual, toggle: ToggleVisual }

/** Features: exploded UI blocks (device / chat card / toggle) + built-in tiles. */
export default function Features({ data }) {
  return (
    <Section id={data.id} className={styles.features} labelledBy={`${data.id}-title-0`}>
      <SectionHeader eyebrow={data.eyebrow} n={data.n} />
      {data.blocks.map((b, i) => {
        const Visual = VISUALS[b.kind]
        return (
          <div key={b.title} className={styles.band} data-tone={b.tone} data-flip={b.flip || undefined}>
            <div className={styles.visual}>
              <Visual block={{ ...b, id: `${data.id}-${i}` }} />
            </div>
            <div className={styles.copy}>
              <p className={styles.label}>{b.label}</p>
              <h2 id={`${data.id}-title-${i}`} className={styles.title}>
                {b.title}
              </h2>
              <p className={styles.body}>{b.body}</p>
            </div>
          </div>
        )
      })}

      {data.builtIn?.length > 0 && (
        <>
          <h3 className={styles.builtInLabel}>{data.builtInLabel}</h3>
          <ul className={styles.tiles}>
            {data.builtIn.map((b) => (
              <li key={b.title.join(' ')} className={styles.tile} data-tone={b.tone}>
                <p className={styles.tileTitle}>
                  {b.title.map((l, i) => (
                    <span key={i}>{l}</span>
                  ))}
                </p>
                <p className={styles.tileBody}>{b.body}</p>
              </li>
            ))}
          </ul>
        </>
      )}
    </Section>
  )
}
