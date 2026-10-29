import { useState } from 'react'
import { LAYERS } from '../data/about'
import styles from './LayersPanel.module.css'

/** Figma Layers panel — experience as layers. Groups expand/collapse;
 *  clicking a layer "selects" it (blue row), like in Figma. */
export default function LayersPanel() {
  const [open, setOpen] = useState(() => Object.fromEntries(LAYERS.map((g) => [g.id, g.open])))
  const [selected, setSelected] = useState('academy')

  return (
    <aside className={styles.panel} aria-label="Experience, as Figma layers">
      <div className={styles.tabs}>
        <h3 className={`${styles.tab} ${styles.tabTitle}`}>Layers</h3>
      </div>

      <div>
        <p className={styles.root}>
          <span aria-hidden="true">▾</span>
          <span className={styles.name}>about-me</span>
        </p>
        <ul className={styles.tree}>
          {LAYERS.map((group) => {
            const isOpen = open[group.id]
            return (
              <li key={group.id}>
                <button
                  type="button"
                  className={`${styles.row} ${styles.group}`}
                  aria-expanded={isOpen}
                  aria-controls={`layer-${group.id}`}
                  onClick={() => setOpen((o) => ({ ...o, [group.id]: !o[group.id] }))}
                >
                  <span className={styles.caret} aria-hidden="true">
                    ▸
                  </span>
                  <span className={styles.text}>
                    <span className={styles.name}>{group.name}</span>
                    {group.meta && <span className={styles.meta}>{group.meta}</span>}
                  </span>
                </button>
                <ul id={`layer-${group.id}`} className={styles.children} hidden={!isOpen}>
                  {group.children.map((item) => {
                    const content = (
                      <>
                        <span className={styles.icon} aria-hidden="true">
                          {item.icon}
                        </span>
                        <span className={styles.text}>
                          <span className={styles.name}>{item.name}</span>
                          {item.meta && <span className={styles.meta}>{item.meta}</span>}
                        </span>
                      </>
                    )
                    return (
                      <li key={item.id}>
                        {item.href ? (
                          <a href={item.href} className={`${styles.row} ${styles.item}`}>
                            {content}
                          </a>
                        ) : (
                          <button
                            type="button"
                            className={`${styles.row} ${styles.item}`}
                            aria-pressed={selected === item.id}
                            data-pending={item.pending || undefined}
                            onClick={() => setSelected(item.id)}
                          >
                            {content}
                          </button>
                        )}
                      </li>
                    )
                  })}
                </ul>
              </li>
            )
          })}
        </ul>
      </div>
    </aside>
  )
}
