import { useLayoutEffect, useRef, useState } from 'react'
import Tag from '../components/Tag'
import Button from '../components/Button'
import Cursor from '../components/Cursor'
import { DraggableSticker, Sticker } from '../components/Sticker'
import ProfileCard from './ProfileCard'
import styles from './Hero.module.css'

// extra stickers that pop in when "Illustration" is switched on
const BURST = [
  { name: 'heart', x: 2, y: 56, r: -12 },
  { name: 'sparkle', x: 44, y: 4, r: 8 },
  { name: 'flower', x: 60, y: 74, r: 14 },
  { name: 'star', x: 57, y: 30, r: -6 },
  { name: 'sparkle', x: 94, y: 90, r: -14 },
  { name: 'heart', x: 62, y: 91, r: 10 },
  { name: 'flower', x: 3, y: 90, r: -8 },
  { name: 'star', x: 95, y: 42, r: 12 },
]

/** Live "W × H" badge, like Figma's selection size readout. */
function useBoxSize(ref) {
  const [size, setSize] = useState('454 × 112')
  useLayoutEffect(() => {
    const el = ref.current
    if (!el || !('ResizeObserver' in window)) return
    const ro = new ResizeObserver(([entry]) => {
      const b = entry.borderBoxSize?.[0]
      const w = Math.round(b ? b.inlineSize : entry.contentRect.width)
      const h = Math.round(b ? b.blockSize : entry.contentRect.height)
      setSize(`${w} × ${h}`)
    })
    ro.observe(el)
    return () => ro.disconnect()
  }, [ref])
  return size
}

export default function Hero() {
  const heroRef = useRef(null)
  const boxRef = useRef(null)
  const size = useBoxSize(boxRef)
  const [illustration, setIllustration] = useState(false)
  const [burstKey, setBurstKey] = useState(0)

  const toggleIllustration = (on) => {
    setIllustration(on)
    if (on) setBurstKey((k) => k + 1)
  }

  return (
    <header id="top" className={styles.hero} ref={heroRef} data-illustration={illustration || undefined}>
      <a className="skip-link" href="#work">
        Skip to work
      </a>

      <div className={styles.topbar}>
        <a href="#top" className={styles.logo} aria-label="Giovana Hossein Rebello — back to top">
          <img src="/art/gigi-tag.jpg" alt="" width="64" height="64" />
          <span>Giovana Hossein Rebello</span>
        </a>
        <Tag variant="status" className={styles.status}>
          Open to work
        </Tag>
      </div>

      <div className={styles.grid}>
        <div className={styles.intro}>
          <div className={styles.titleWrap}>
            <h1 className={styles.title}>
              <span className={styles.line}>
                <span className={styles.selected}>
                  Product
                  <span className={styles.selection} ref={boxRef} aria-hidden="true">
                    <i className={styles.handle} data-pos="tl" />
                    <i className={styles.handle} data-pos="tr" />
                    <i className={styles.handle} data-pos="bl" />
                    <i className={styles.handle} data-pos="br" />
                    <span className={styles.badge}>{size}</span>
                    <Cursor label="gigi" color="purple" className={styles.gigiCursor} float />
                  </span>
                </span>
              </span>
              <span className={styles.line}>designer</span>
              <span className={`${styles.line} ${styles.line3}`}>
                who <span className={styles.draws}>draws.</span>
              </span>
            </h1>
            <img
              className={styles.avatar}
              src="/art/gigi-avatar-hero.svg"
              alt="Illustrated self-portrait of gigi with long wavy hair and white glasses"
              width="147"
              height="155"
            />
            <DraggableSticker name="star" rotate={-4} scale={1.14} bounds={heroRef} className={styles.star} />
            <DraggableSticker name="sparkle" bounds={heroRef} className={styles.sparkle} />
          </div>

          <p className={styles.bio}>
            I&apos;m Giovana. A UX/UI designer with 3 years turning messy problems into clear, friendly products, from
            research to pixel-perfect handoff. Lately I&apos;ve been drawing a lot, too.
          </p>

          <div className={styles.ctas}>
            <Button href="#work">See my work ↓</Button>
            <Button href="#contact" variant="secondary">
              Say hi 👋
            </Button>
            <Cursor label="you 👀" color="blue" className={styles.youCursor} float />
          </div>
        </div>

        <div className={styles.side}>
          <ProfileCard illustration={illustration} onIllustration={toggleIllustration} />
          <div className={styles.redline} aria-hidden="true">
            <span className={styles.redlineBar} />
            <span className={styles.redlineText}>24px</span>
          </div>
          <DraggableSticker name="heart" rotate={-12} scale={1.07} bounds={heroRef} className={styles.heart} />
          <DraggableSticker name="flower" rotate={14} scale={1.13} bounds={heroRef} className={styles.flower} />
        </div>
      </div>

      {illustration && (
        <div className={styles.burst} key={burstKey} aria-hidden="true">
          {BURST.map((b, i) => (
            <Sticker
              key={i}
              name={b.name}
              rotate={b.r}
              className={styles.burstItem}
              style={{ left: `${b.x}%`, top: `${b.y}%`, animationDelay: `${i * 60}ms` }}
            />
          ))}
        </div>
      )}

      <p className={styles.scroll} aria-hidden="true">
        scroll ↓
      </p>
    </header>
  )
}
