import { useState } from 'react'
import FrameLabel from '../components/FrameLabel'
import Cursor from '../components/Cursor'
import { EMAIL, LINKS } from '../data/links'
import styles from './Contact.module.css'

const SOCIAL = [
  { key: 'linkedin', label: 'LinkedIn ↗' },
  { key: 'behance', label: 'Behance ↗' },
  { key: 'instagram', label: 'Instagram ↗' },
]

/** Figma comment composer → opens the visitor's mail app with the
 *  message pre-filled (mailto, no third-party service). */
export default function Contact() {
  const [msg, setMsg] = useState('')
  const [sent, setSent] = useState(false)

  const submit = (e) => {
    e.preventDefault()
    const text = msg.trim()
    if (!text) return
    const subject = 'Hi gigi! (from your portfolio)'
    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(text)}`
    setSent(true)
  }

  return (
    <footer id="contact" className={styles.contact} aria-labelledby="contact-title">
      <FrameLabel name="05 / say-hi" />
      <h2 id="contact-title" className={styles.headline}>
        <span>Let&apos;s make something</span>
        <span className={styles.line2}>
          <span className={styles.nice}>nice</span> together.
        </span>
      </h2>

      <form className={styles.composerWrap} onSubmit={submit}>
        <div className={styles.composer}>
          <span className={styles.avatar} aria-hidden="true">
            g
          </span>
          <label htmlFor="comment" className="visually-hidden">
            Your message to gigi
          </label>
          <textarea
            id="comment"
            className={styles.input}
            rows={1}
            placeholder="Leave a comment… it lands straight in my inbox"
            value={msg}
            onChange={(e) => {
              setMsg(e.target.value)
              setSent(false)
            }}
            onKeyDown={(e) => {
              if (e.key === 'Enter' && !e.shiftKey) submit(e)
            }}
          />
          <button type="submit" className={styles.send} aria-label="Send comment by email" disabled={!msg.trim()}>
            ↑
          </button>
        </div>
        <Cursor
          label={sent ? 'opening your mail app…' : msg ? 'gigi is reading…' : 'gigi is typing…'}
          color="purple"
          className={styles.cursor}
        />
        <p className={styles.status} role="status">
          {sent ? `Your mail app should open with the message. If it didn’t, write to ${EMAIL}.` : ''}
        </p>
      </form>

      <ul className={styles.links}>
        {SOCIAL.map((s) => (
          <li key={s.key}>
            {LINKS[s.key] ? (
              <a className={styles.pill} href={LINKS[s.key]} target="_blank" rel="noreferrer">
                {s.label}
              </a>
            ) : (
              <span className={styles.pill} data-pending title="Link coming soon">
                {s.label}
              </span>
            )}
          </li>
        ))}
        <li>
          <a className={styles.pill} href={`mailto:${EMAIL}`}>
            {EMAIL}
          </a>
        </li>
      </ul>

      <div className={styles.footer}>
        <p>© 2026 Giovana Hossein Rebello — designed in Figma, with ♥ from Brazil</p>
        <a href="#top" className={styles.top}>
          Back to top ↑
        </a>
      </div>
    </footer>
  )
}
