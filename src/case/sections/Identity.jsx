import { useState } from 'react'
import Section from './Section'
import SectionHeader from '../SectionHeader'
import styles from './Identity.module.css'

/** Identity: type specimen + "Aa" selection + numbered palette with ramp.
 *  Click a swatch to copy its hex. */
export default function Identity({ data }) {
  const f = data.font
  const [copied, setCopied] = useState(null)

  const copy = async (hex) => {
    try {
      await navigator.clipboard.writeText(`#${hex}`)
      setCopied(hex)
      window.setTimeout(() => setCopied((c) => (c === hex ? null : c)), 1400)
    } catch {
      /* clipboard blocked — nothing to do */
    }
  }

  return (
    <Section id={data.id} className={styles.identity} labelledBy={`${data.id}-title`}>
      <SectionHeader eyebrow={data.eyebrow} n={data.n} title={data.title} titleId={`${data.id}-title`} />
      <div className={styles.typeRow}>
        <div className={styles.specimen} style={{ '--spec-font': f.family }}>
          <div className={styles.specHead}>
            <p className={styles.specName}>{f.name}</p>
            <p className={styles.specSource}>{f.source}</p>
          </div>
          <p className={styles.specSample}>{f.sample}</p>
          <hr className={styles.rule} />
          <ul className={styles.scale}>
            {f.scale.map(([n, label, size, px]) => (
              <li key={n}>
                <span className={styles.scaleMeta}>
                  {n}&nbsp;&nbsp;&nbsp;{label}
                </span>
                <span className={styles.scaleSize} style={{ fontSize: `${px}px` }}>
                  {size}
                </span>
              </li>
            ))}
          </ul>
          <p className={styles.specNote}>{f.note}</p>
        </div>

        <div className={styles.aa} style={{ '--spec-font': f.family }} aria-hidden="true">
          <span className={styles.aaGlyph}>
            Aa
            <span className={styles.aaSel}>
              <i data-pos="tl" />
              <i data-pos="tr" />
              <i data-pos="bl" />
              <i data-pos="br" />
              <span className={styles.aaTag}>{f.tag}</span>
            </span>
          </span>
        </div>
      </div>

      <ul className={styles.palette} aria-label="Colour palette">
        {data.palette.map((c, i) => (
          <li key={c.name} className={styles.swatch} data-tone={c.tone} data-ramp={c.ramp || undefined} data-on-dark={c.onDark || undefined}>
            <button type="button" className={styles.swatchBtn} onClick={() => copy(c.hex)} aria-label={`${c.name}, hex ${c.hex}. Copy`}>
              <span className={styles.swatchName}>{c.name}</span>
              {c.ramp && (
                <span className={styles.ramp} aria-hidden="true">
                  {[100, 65, 40, 20].map((p) => (
                    <span key={p} style={{ '--p': `${p}%` }}>
                      {c.name} {p}%
                    </span>
                  ))}
                </span>
              )}
              <span className={styles.hex} aria-live="polite">
                {copied === c.hex ? 'copied ✓' : `HEX  ${c.hex}`}
              </span>
              <span className={styles.idx} aria-hidden="true">
                {String(i + 1).padStart(2, '0')}
              </span>
            </button>
          </li>
        ))}
      </ul>
    </Section>
  )
}
