import styles from './Toggle.module.css'

/** Toggle (Figma: Toggle) — a real switch; flips with a small spring. */
export default function Toggle({ checked, onChange, labelledBy, label }) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      aria-labelledby={labelledBy}
      aria-label={labelledBy ? undefined : label}
      className={styles.toggle}
      onClick={() => onChange(!checked)}
    >
      <span className={styles.knob} aria-hidden="true" />
    </button>
  )
}
