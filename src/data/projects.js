// Home "Work" cards. Copy is verbatim from Figma 02 Work (130:36).
// Order also drives "Next case →" in the overlay.
export const CASE_ORDER = ['still-me', 'dear-diary', 'lumina', 'fonfon', 'orbia']

// Only these cases are finished in Figma; the rest open a "not available yet" note.
export const AVAILABLE = ['still-me', 'dear-diary']

export const FEATURED = {
  slug: 'still-me',
  eyebrow: ['✦ Solo project · made 100% by me', 'Social impact'],
  title: 'Still me. A story game about living with essential tremor',
  summary:
    'An iPad story game in SwiftUI, dedicated to my grandma Maridee. Mini-games like doing eyeliner, painting nails and reading aloud in class let you feel the tremor, and the story shows how one girl simply treated me like a person.',
  impact: 'Concept, UX, UI, illustration and the SwiftUI code, all made solo.',
  tags: ['Personal story', 'Swift Student Challenge Winner'],
  cover: {
    src: '/images/covers/still-me-featured.webp',
    alt: 'Still me on iPad: a dedication to grandma Maridee beside an illustration of gigi and her grandmother at graduation',
  },
  badge: 'Swift Student Challenge winner',
  prototype: null, // pending link
}

export const GRID = [
  {
    slug: 'dear-diary',
    title: 'Dear Diary • A calm guide to a first period',
    summary:
      'An interactive iPad diary where Lia explains menarche in plain language, made for autistic girls. Research, UX, UI, illustration and iOS code, all by me.',
    tags: ['iPad app', 'Inclusive design', '2026'],
    art: 'dear-diary',
  },
  {
    slug: 'lumina',
    title: 'Lumina • Safety, explained for kids',
    summary: 'An iOS app about child safety, made with Isadora Guerra and Rodrigo Sandler (iOS devs).',
    tags: ['iOS app', 'Kids', 'Campus Mobile Winner', '2026'],
    cover: {
      src: '/images/covers/lumina.webp',
      alt: 'Lumina cover: two puzzle pieces with line-drawn faces fitting together',
      fit: { width: '100%', height: '74.22%', top: '12.89%', left: 0 },
      tint: true,
    },
    border: 'var(--dd-blue)',
  },
  {
    slug: 'fonfon',
    title: 'Fonfon • Phonics that feel like play',
    summary: 'An iPad app that helps kids learn phonemes, designed with Antônio, iOS dev.',
    tags: ['iPad app', 'Kids', '2026'],
    cover: {
      src: '/images/covers/fonfon.webp',
      alt: 'Fonfon cover: the blue FonFon mascot on an island under the "FonFon — Descubra o mundo dos sons" logo',
    },
    border: 'var(--dd-blue)',
    cursor: { label: 'you', color: 'blue', x: 298, y: 266 },
  },
  {
    slug: 'orbia',
    title: 'Orbia • Six degrees, one tap away',
    summary:
      'An app built on the six degrees of separation theory. Create your card and avatar, bring two phones close to swap cards and see how many steps away you are from someone.',
    tags: ['iOS app', 'Social', '2025'],
    cover: {
      src: '/images/covers/orbia.webp',
      alt: 'Orbia logo surrounded by coloured circles',
      fit: { width: '124.03%', height: '99.93%', top: '-0.06%', left: '-12.01%' },
    },
    border: 'var(--blue)',
  },
]
