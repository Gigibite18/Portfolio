import { useEffect, useState } from 'react'
import styles from './SectionNav.module.css'

/** "Jump to" tabs — smooth-scroll inside the overlay; the active tab
 *  follows the section in view. */
export default function SectionNav({ items, scrollerRef }) {
  const [active, setActive] = useState(items[0]?.id)

  useEffect(() => {
    const root = scrollerRef.current
    if (!root || !('IntersectionObserver' in window)) return
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { root, rootMargin: '-35% 0px -60% 0px' },
    )
    items.forEach((i) => {
      const el = root.querySelector(`#${CSS.escape(i.id)}`)
      if (el) io.observe(el)
    })
    return () => io.disconnect()
  }, [items, scrollerRef])

  const jump = (id) => {
    const el = scrollerRef.current?.querySelector(`#${CSS.escape(id)}`)
    if (!el) return
    el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    el.focus({ preventScroll: true })
  }

  return (
    <nav className={styles.nav} aria-label="Jump to section">
      <span className={styles.label} aria-hidden="true">
        JUMP TO
      </span>
      <ul className={styles.list}>
        {items.map((i) => (
          <li key={i.id}>
            <button
              type="button"
              className={styles.tab}
              aria-current={active === i.id ? 'true' : undefined}
              onClick={() => jump(i.id)}
            >
              {i.nav}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  )
}
