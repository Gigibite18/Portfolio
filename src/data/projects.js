// Home "Work" cards. Copy is verbatim from Figma 02 Work (130:36).
// Order also drives "Next case →" in the overlay.
export const CASE_ORDER = ['dear-diary', 'still-me', 'orbia', 'fonfon', 'lumina']

export const FEATURED = {
  slug: 'dear-diary',
  frameLabel: 'Featured case · Dear Diary  —  1200 × 542',
  eyebrow: ['✦ Solo project · made 100% by me', 'Social impact'],
  title: 'Dear Diary. A calm, clear guide to a first period, made for autistic girls',
  summary:
    'An interactive iPad diary where Lia tells, chapter by chapter, how her first period went. Mini-games and an "Ask Lia" notebook explain menarche in plain language, at each girl\'s own pace and without surprises.',
  impact: 'Research, UX, UI, illustration and the iOS code, all in two weeks.',
  tags: ['iPad app', 'Inclusive design', '2026'],
  prototype: null, // pending link
}

export const GRID = [
  {
    slug: 'fonfon',
    frameLabel: 'Case 01 · FonFon',
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
    slug: 'lumina',
    frameLabel: 'Case 02 · Lumina',
    title: 'Lumina • Safety, explained for kids',
    summary: 'An iOS app about child safety, made with Isadora Guerra and Rodrigo Sandler (iOS devs).',
    tags: ['iOS app', 'Kids', '2026'],
    cover: {
      src: '/images/covers/lumina.webp',
      alt: 'Lumina cover: two puzzle pieces with line-drawn faces fitting together',
      fit: { width: '100%', height: '74.22%', top: '12.89%', left: 0 },
      tint: true,
    },
    border: 'var(--dd-blue)',
  },
  {
    slug: 'still-me',
    frameLabel: 'Case 03 · Still me',
    title: 'Still me • Living with essential tremor',
    summary:
      'An app that shows how essential tremor works, born from my own childhood: many people treated me with disdain, and one girl simply treated me like a person.',
    tags: ['Swift', 'Personal story', '2026'],
    cover: {
      src: '/images/covers/still-me.webp',
      alt: 'Still me cover: a dedication to grandma Maridee beside a portrait of gigi and her grandmother',
      fit: { width: '108.11%', height: '119.87%', top: '-9.83%', left: '-3.98%' },
    },
    border: 'var(--dd-yellow)',
    badge: 'Swift Student Challenge winner',
    swiftLogo: true,
  },
  {
    slug: 'orbia',
    frameLabel: 'Case 04 · Orbia',
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
