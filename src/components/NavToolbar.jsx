import { useEffect, useState } from 'react'
import styles from './NavToolbar.module.css'

const ITEMS = [
  { id: 'work', label: 'Work' },
  { id: 'playground', label: 'Playground' },
  { id: 'about', label: 'About' },
  { id: 'contact', label: 'Contact' },
]

/** Floating Figma-toolbar nav (Figma: nav / toolbar + Nav Item).
 *  Hover swaps Inter → hand-written purple; active follows the scroll. */
export default function NavToolbar() {
  const [active, setActive] = useState('work')

  useEffect(() => {
    const sections = ITEMS.map((i) => document.getElementById(i.id)).filter(Boolean)
    if (!sections.length || !('IntersectionObserver' in window)) return
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id)
        })
      },
      { rootMargin: '-45% 0px -50% 0px' },
    )
    sections.forEach((s) => io.observe(s))
    return () => io.disconnect()
  }, [])

  return (
    <nav className={styles.toolbar} aria-label="Main">
      <ul className={styles.list}>
        {ITEMS.map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              className={styles.item}
              aria-current={active === item.id ? 'location' : undefined}
              data-label={item.label}
            >
              <span className={styles.text}>{item.label}</span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
