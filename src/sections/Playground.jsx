import { useRef, useState } from 'react'
import FrameLabel from '../components/FrameLabel'
import ScribbleUnderline from '../components/ScribbleUnderline'
import HandSlot from '../components/HandSlot'
import Cursor from '../components/Cursor'
import { DraggableSticker, Sticker } from '../components/Sticker'
import styles from './Playground.module.css'

// Board is 1200×680 in Figma (130:134); positions are kept as % of it.
const pct = (x, y) => ({ left: `${(x / 1200) * 100}%`, top: `${(y / 680) * 100}%` })

// cx/cy = centre of each rotated slot, a = side of the (unrotated) square
const SLOTS = [
  { label: 'illustration #1 (big, your favourite)', cx: 829.9, cy: 269.4, a: 280, r: 4 },
  { label: 'illustration #2', cx: 1099.2, cy: 179.7, a: 162, r: -6 },
  { label: 'character / mascot', cx: 230.9, cy: 427.9, a: 220, r: -6 },
  { label: 'sticker: food 🍔 (gigibite?)', cx: 492.3, cy: 466, a: 170, r: 8 },
  { label: 'doodle / pattern', cx: 1067.3, cy: 482.1, a: 170, r: 5 },
]

const START = [
  { name: 'heart', x: 633, y: 473, r: -12 },
  { name: 'star', x: 884, y: 509, r: 6 },
  { name: 'sparkle', x: 1120, y: 50, r: 0 },
  { name: 'flower', x: 370, y: 300, r: 0 },
]

const TOOLS = [
  { id: 'select', glyph: '↖', label: 'Move' },
  { id: 'hand', glyph: '✋', label: 'Grab stickers' },
  { id: 'pencil', glyph: '✏️', label: 'Pencil — draw on the board' },
  { id: 'stamp', glyph: '✦', label: 'Stamp — click to drop a sticker' },
]
const STAMPS = ['heart', 'star', 'sparkle', 'flower']
const rand = (min, max) => min + Math.random() * (max - min)

export default function Playground() {
  const boardRef = useRef(null)
  const [tool, setTool] = useState('hand')
  const [stickers, setStickers] = useState(START)
  const [round, setRound] = useState(0)
  const [strokes, setStrokes] = useState([])
  const [stamps, setStamps] = useState([])
  const drawing = useRef(null)

  const shuffle = () => {
    setStickers((list) =>
      list.map((s) => ({ ...s, x: rand(40, 1110), y: rand(250, 560), r: rand(-25, 25) })),
    )
    setStrokes([])
    setStamps([])
    setRound((n) => n + 1)
  }

  const point = (e) => {
    const b = boardRef.current.getBoundingClientRect()
    return [((e.clientX - b.left) / b.width) * 1200, ((e.clientY - b.top) / b.height) * 680]
  }

  const onBoardDown = (e) => {
    if (e.target.closest('button')) return
    if (tool === 'pencil') {
      e.currentTarget.setPointerCapture(e.pointerId)
      drawing.current = [point(e)]
      setStrokes((s) => [...s.slice(-40), drawing.current])
    } else if (tool === 'stamp') {
      const [x, y] = point(e)
      setStamps((s) => [
        ...s.slice(-30),
        { id: crypto.randomUUID?.() ?? Math.random(), name: STAMPS[s.length % 4], x, y, r: rand(-20, 20) },
      ])
    }
  }
  const onBoardMove = (e) => {
    if (!drawing.current) return
    drawing.current = [...drawing.current, point(e)]
    const current = drawing.current
    setStrokes((s) => [...s.slice(0, -1), current])
  }
  const onBoardUp = () => {
    drawing.current = null
  }

  return (
    <section id="playground" className={styles.playground} aria-labelledby="playground-title">
      <div
        ref={boardRef}
        className={styles.board}
        data-tool={tool}
        onPointerDown={onBoardDown}
        onPointerMove={onBoardMove}
        onPointerUp={onBoardUp}
        onPointerCancel={onBoardUp}
      >
        <div className={styles.intro}>
          <FrameLabel name="03 / playground" />
          <h2 id="playground-title" className={styles.title}>
            I also draw things
          </h2>
          <ScribbleUnderline width={400} height={30} className={styles.scribble} />
          <p className={styles.desc}>Grab a sticker and drag it around — everything on this board was drawn by me. ✋</p>
        </div>

        <ul className={styles.slots}>
          {SLOTS.map((s) => (
            <li
              key={s.label}
              className={styles.slotItem}
              style={{ ...pct(s.cx, s.cy), '--a': `${(s.a / 1200) * 100}cqw` }}
            >
              <HandSlot label={s.label} rotate={s.r} className={styles.slot} />
            </li>
          ))}
        </ul>

        <svg className={styles.ink} viewBox="0 0 1200 680" preserveAspectRatio="none" aria-hidden="true">
          {strokes.map((pts, i) => (
            <polyline key={i} points={pts.map((p) => p.join(',')).join(' ')} />
          ))}
        </svg>

        {stamps.map((s) => (
          <Sticker key={s.id} name={s.name} rotate={s.r} className={styles.stamp} style={pct(s.x - 30, s.y - 30)} />
        ))}

        <div className={styles.stickers} data-draggable={tool === 'hand' || tool === 'select' || undefined}>
          {stickers.map((s) => (
            <DraggableSticker
              key={`${s.name}-${round}`}
              name={s.name}
              rotate={s.r}
              scale={s.name === 'sparkle' || s.name === 'flower' ? 1 : 1.1}
              bounds={boardRef}
              className={styles.sticker}
              style={pct(s.x, s.y)}
            />
          ))}
        </div>

        <Cursor label="drag me!" color="pink" float className={styles.cursor} />

        <div className={styles.toolbar} role="toolbar" aria-label="Playground tools">
          {TOOLS.map((t) => (
            <button
              key={t.id}
              type="button"
              className={styles.tool}
              aria-pressed={tool === t.id}
              aria-label={t.label}
              title={t.label}
              onClick={() => setTool(t.id)}
            >
              <span aria-hidden="true">{t.glyph}</span>
            </button>
          ))}
          <button type="button" className={styles.tool} onClick={shuffle}>
            <span aria-hidden="true">⟳</span> Shuffle
          </button>
        </div>
      </div>
    </section>
  )
}
